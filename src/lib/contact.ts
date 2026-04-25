/**
 * Single source of truth for owner contact details + safe link builders.
 * Update phone/email here only.
 */

export const OWNER_EMAIL = "gulshairkhaqan@gmail.com";

/** Digits-only international phone number (no +, no spaces) for wa.me */
export const WHATSAPP_NUMBER = "923251174475";

/** Display-friendly version */
export const WHATSAPP_DISPLAY = "+92 325 1174475";

/** wa.me requires digits only, 7–15 chars (E.164). */
export function isValidWhatsAppNumber(n: string): boolean {
  return /^[1-9]\d{6,14}$/.test(n);
}

export function buildWhatsAppUrl(message?: string): string | null {
  if (!isValidWhatsAppNumber(WHATSAPP_NUMBER)) return null;
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(opts?: { subject?: string; body?: string }): string {
  const params: string[] = [];
  if (opts?.subject) params.push(`subject=${encodeURIComponent(opts.subject)}`);
  if (opts?.body) params.push(`body=${encodeURIComponent(opts.body)}`);
  return `mailto:${OWNER_EMAIL}${params.length ? `?${params.join("&")}` : ""}`;
}