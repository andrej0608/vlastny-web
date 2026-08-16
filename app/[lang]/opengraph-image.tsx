import { ImageResponse } from 'next/og';
import { getDictionary } from '@/content/translations';
import { isLocale, locales } from '@/lib/i18n';
import { siteConfig } from '@/content/site';

/**
 * Social sharing preview, generated per language at build time.
 *
 * Rendered rather than hand-drawn so it always matches the current headline,
 * and regenerated automatically if the copy changes. Uses system fonts only,
 * so there is no font file to download or keep in the repository.
 */

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Andrej Juriga — website development & business automation';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'nl';
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#f8f8f7',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#78786f',
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 68,
              lineHeight: 1.15,
              fontWeight: 700,
              color: '#161614',
              maxWidth: 940,
            }}
          >
            {dict.meta.ogTitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 32,
            borderTop: '2px solid #e4e4e1',
            fontSize: 28,
            color: '#57574f',
          }}
        >
          <span>{dict.meta.tagline}</span>
          <span style={{ color: '#2f6db3' }}>
            {locale === 'nl' ? 'België & Nederland' : 'Belgium & the Netherlands'}
          </span>
        </div>
      </div>
    ),
    size
  );
}
