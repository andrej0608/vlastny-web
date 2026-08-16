'use client';

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import Link from 'next/link';
import { siteConfig, emailHref } from '@/content/site';
import { privacyPath } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import {
  FIELD_MAX_LENGTHS,
  hasErrors,
  validateContactForm,
  type ContactErrors,
} from '@/lib/contact-validation';
import styles from './ContactForm.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/** Distinguishes "no e-mail provider set up yet" from a genuine failure. */
type FailureReason = 'generic' | 'not-configured';

interface ContactFormProps {
  locale: Locale;
  dict: Dictionary;
}

export function ContactForm({ locale, dict }: ContactFormProps) {
  const t = dict.contact.form;

  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<ContactErrors>({});
  const [failureReason, setFailureReason] = useState<FailureReason>('generic');
  /** Only show errors after the first submit attempt, not while typing. */
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const renderedAt = useRef<number>(0);

  const baseId = useId();
  const fieldId = (field: string) => `${baseId}-${field}`;
  const errorId = (field: string) => `${baseId}-${field}-error`;

  // Timestamped on mount rather than at module load, so the spam timing check
  // measures how long this visitor actually had the form open.
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  // Move focus to whichever message appeared, so screen-reader and keyboard
  // users are told the outcome instead of being left at the submit button.
  useEffect(() => {
    if (status === 'error' || (submitted && hasErrors(errors))) {
      errorSummaryRef.current?.focus();
    }
  }, [status, errors, submitted]);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  function readValues(form: HTMLFormElement) {
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? '');
    return {
      name: get('name'),
      company: get('company'),
      email: get('email'),
      phone: get('phone'),
      serviceType: get('serviceType'),
      message: get('message'),
      website: get('website'),
      acknowledgement: data.get('acknowledgement') === 'on',
    };
  }

  /** Re-validate as the visitor fixes fields, but only after a failed submit. */
  function handleInput() {
    if (!submitted || !formRef.current) return;
    setErrors(validateContactForm(readValues(formRef.current), t.errors));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const values = readValues(form);

    setSubmitted(true);

    const validationErrors = validateContactForm(values, t.errors);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      setStatus('idle');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          locale,
          renderedAt: renderedAt.current,
        }),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setSubmitted(false);
        setErrors({});
        return;
      }

      const body = await response.json().catch(() => null);
      setFailureReason(
        body?.reason === 'not-configured' ? 'not-configured' : 'generic'
      );
      setStatus('error');
    } catch {
      // Network failure, offline, request blocked.
      setFailureReason('generic');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        className={styles.success}
        role="status"
        tabIndex={-1}
      >
        <h3 className={styles.feedbackHeading}>{t.success.heading}</h3>
        <p className={styles.feedbackText}>{t.success.text}</p>
      </div>
    );
  }

  const showErrorSummary = submitted && hasErrors(errors);
  const isSubmitting = status === 'submitting';

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      <h3 className={styles.formHeading}>{t.heading}</h3>
      <p className={styles.requiredNote}>{t.requiredNote}</p>

      {/* One live region covers both validation errors and send failures, so
          assistive technology announces exactly one message per attempt. */}
      <div
        ref={errorSummaryRef}
        className={styles.liveRegion}
        role="alert"
        tabIndex={-1}
      >
        {showErrorSummary && (
          <div className={styles.errorBox}>
            <p className={styles.feedbackHeading}>{t.errors.summaryHeading}</p>
            <ul className={styles.errorList}>
              {(Object.keys(errors) as Array<keyof ContactErrors>).map((field) => (
                <li key={field}>
                  <a href={`#${fieldId(field)}`}>{errors[field]}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {status === 'error' && (
          <div className={styles.errorBox}>
            <p className={styles.feedbackHeading}>{t.failure.heading}</p>
            <p className={styles.feedbackText}>
              {failureReason === 'not-configured'
                ? t.failure.notConfigured
                : t.failure.text}
              {/* Only offer the e-mail fallback when an address actually
                  exists, so nobody is sent to a dead mailbox. */}
              {emailHref && (
                <>
                  {' '}
                  {t.failure.emailFallback}{' '}
                  <a href={emailHref}>{siteConfig.contact.email}</a>
                </>
              )}
            </p>
          </div>
        )}
      </div>

      <div className={styles.row}>
        <Field
          id={fieldId('name')}
          name="name"
          label={t.name.label}
          placeholder={t.name.placeholder}
          autoComplete="name"
          maxLength={FIELD_MAX_LENGTHS.name}
          required
          requiredWord={t.required}
          error={submitted ? errors.name : undefined}
          errorId={errorId('name')}
          onInput={handleInput}
          disabled={isSubmitting}
        />

        <Field
          id={fieldId('company')}
          name="company"
          label={t.company.label}
          placeholder={t.company.placeholder}
          autoComplete="organization"
          maxLength={FIELD_MAX_LENGTHS.company}
          optionalWord={t.optional}
          onInput={handleInput}
          disabled={isSubmitting}
        />
      </div>

      <div className={styles.row}>
        <Field
          id={fieldId('email')}
          name="email"
          type="email"
          inputMode="email"
          label={t.email.label}
          placeholder={t.email.placeholder}
          autoComplete="email"
          maxLength={FIELD_MAX_LENGTHS.email}
          required
          requiredWord={t.required}
          error={submitted ? errors.email : undefined}
          errorId={errorId('email')}
          onInput={handleInput}
          disabled={isSubmitting}
        />

        <Field
          id={fieldId('phone')}
          name="phone"
          type="tel"
          inputMode="tel"
          label={t.phone.label}
          placeholder={t.phone.placeholder}
          autoComplete="tel"
          maxLength={FIELD_MAX_LENGTHS.phone}
          optionalWord={t.optional}
          onInput={handleInput}
          disabled={isSubmitting}
        />
      </div>

      {/* Optional: helps route the enquiry, but never blocks sending it. */}
      <div className={styles.field}>
        <label htmlFor={fieldId('serviceType')} className={styles.label}>
          {t.serviceType.label}
          <span className={styles.optional}> ({t.optional})</span>
        </label>
        <select
          id={fieldId('serviceType')}
          name="serviceType"
          className={[styles.input, styles.select].join(' ')}
          defaultValue=""
          disabled={isSubmitting}
        >
          <option value="">{t.serviceType.placeholder}</option>
          {t.serviceType.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor={fieldId('message')} className={styles.label}>
          {t.message.label}
          <span aria-hidden="true"> *</span>
          <span className="visually-hidden"> ({t.required})</span>
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={6}
          placeholder={t.message.placeholder}
          maxLength={FIELD_MAX_LENGTHS.message}
          className={[styles.input, styles.textarea, errors.message && submitted && styles.inputError]
            .filter(Boolean)
            .join(' ')}
          aria-invalid={submitted && Boolean(errors.message)}
          aria-describedby={
            submitted && errors.message ? errorId('message') : undefined
          }
          onInput={handleInput}
          disabled={isSubmitting}
        />
        {submitted && errors.message && (
          <p id={errorId('message')} className={styles.fieldError}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot. Hidden from sight and from assistive technology, but still
          a real field that automated submitters tend to fill in. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor={fieldId('website')}>
          Website
          <input
            id={fieldId('website')}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {/*
        Acknowledgement that the privacy notice was provided — deliberately
        NOT worded as consent to processing. Answering a business enquiry does
        not rely on consent, and asking for it here would misstate the basis.
      */}
      <div className={styles.acknowledgeField}>
        <div className={styles.checkboxRow}>
          <input
            id={fieldId('acknowledgement')}
            type="checkbox"
            name="acknowledgement"
            className={styles.checkbox}
            aria-invalid={submitted && Boolean(errors.acknowledgement)}
            aria-describedby={
              submitted && errors.acknowledgement
                ? errorId('acknowledgement')
                : undefined
            }
            onChange={handleInput}
            disabled={isSubmitting}
          />
          <label
            htmlFor={fieldId('acknowledgement')}
            className={styles.checkboxLabel}
          >
            {t.acknowledgement.before}
            <Link href={privacyPath(locale)} className={styles.privacyLink}>
              {t.acknowledgement.linkText}
            </Link>
            {t.acknowledgement.after}
            <span aria-hidden="true"> *</span>
            <span className="visually-hidden"> ({t.required})</span>
          </label>
        </div>
        {submitted && errors.acknowledgement && (
          <p id={errorId('acknowledgement')} className={styles.fieldError}>
            {errors.acknowledgement}
          </p>
        )}
      </div>

      <div className={styles.submitRow}>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? t.submitting : t.submit}
        </Button>

        <p className={styles.privacyNote}>
          {t.privacyNotice.before}
          <Link href={privacyPath(locale)} className={styles.privacyLink}>
            {t.privacyNotice.linkText}
          </Link>
          {t.privacyNotice.after}
        </p>
      </div>
    </form>
  );
}

/* -------------------------------------------------------------------------- */

interface FieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  inputMode?: 'email' | 'tel' | 'text';
  autoComplete?: string;
  maxLength?: number;
  required?: boolean;
  requiredWord?: string;
  optionalWord?: string;
  error?: string;
  errorId?: string;
  disabled?: boolean;
  onInput?: () => void;
}

/**
 * A labelled input. The label is always a real <label> tied to the input by id
 * - placeholders alone are not accessible labels.
 */
function Field({
  id,
  name,
  label,
  placeholder,
  type = 'text',
  inputMode,
  autoComplete,
  maxLength,
  required,
  requiredWord,
  optionalWord,
  error,
  errorId,
  disabled,
  onInput,
}: FieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required ? (
          <>
            <span aria-hidden="true"> *</span>
            <span className="visually-hidden"> ({requiredWord})</span>
          </>
        ) : (
          optionalWord && (
            <span className={styles.optional}> ({optionalWord})</span>
          )
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className={[styles.input, error && styles.inputError]
          .filter(Boolean)
          .join(' ')}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onInput={onInput}
        disabled={disabled}
      />
      {error && (
        <p id={errorId} className={styles.fieldError}>
          {error}
        </p>
      )}
    </div>
  );
}
