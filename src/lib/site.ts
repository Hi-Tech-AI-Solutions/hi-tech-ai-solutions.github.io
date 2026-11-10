// Single source of truth for contact details, so every lead path uses the same number and address.

export const CONTACT = {
  email: 'hitech.nft@gmail.com',
  /** E.164 form, used for tel: links */
  phone: '+919974803770',
  /** How the number is shown on the page */
  phoneDisplay: '+91 99748 03770',
  /** wa.me wants the number without the plus sign */
  whatsapp: '919974803770',
} as const;

export const telUrl = `tel:${CONTACT.phone}`;

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function mailtoUrl(subject?: string, body?: string): string {
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT.email}${params.length ? `?${params.join('&')}` : ''}`;
}
