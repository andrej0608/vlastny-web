/**
 * Minimal in-memory rate limit for the contact endpoint.
 *
 * Deliberately simple: a fixed window per IP address, kept in a `Map` in the
 * running server process. No external store, no new dependency.
 *
 * Honest limitation: on serverless platforms (Vercel included) each instance
 * has its own memory, and an idle instance can be recycled between requests.
 * This does not guarantee a hard cap under distributed or sustained abuse -
 * it raises the bar for casual and scripted spam without adding
 * infrastructure, which is the right amount of defence for a low-traffic
 * contact form. If real abuse shows up, move this to a shared store (e.g.
 * Vercel KV or Upstash) using the same interface.
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

/** Bounds memory use if the map is ever hit hard; oldest entries drop first. */
const MAX_TRACKED_KEYS = 5000;

export interface RateLimitResult {
  allowed: boolean;
  /** Seconds until the caller may try again. Only meaningful when blocked. */
  retryAfterSeconds: number;
}

export function checkRateLimit(
  key: string,
  {
    limit,
    windowMs,
    now = Date.now(),
  }: { limit: number; windowMs: number; now?: number }
): RateLimitResult {
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    if (buckets.size >= MAX_TRACKED_KEYS) {
      const oldestKey = buckets.keys().next().value;
      if (oldestKey !== undefined) buckets.delete(oldestKey);
    }
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

/**
 * Best-effort client IP from the headers a proxy (Vercel's included) sets.
 * Falls back to a constant so requests with no such header still share one
 * bucket rather than bypassing the limit entirely.
 */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();

  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  return 'unknown';
}
