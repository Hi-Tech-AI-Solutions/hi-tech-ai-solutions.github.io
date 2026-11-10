import React from 'react';
import { ExternalLink, ArrowRight, Lock } from 'lucide-react';
import { Product, getProductLink } from '@/data/products';

type Props = {
  product: Product;
  className?: string;
  /** Shorter wording for tight spaces such as the compact product cards */
  compact?: boolean;
};

const COMPACT_LABEL = { public: 'Open app', login: 'Staff sign-in', overview: 'Overview' } as const;

/**
 * The link a visitor can actually use for a product. Public apps open in a new tab,
 * staff-only systems are labelled as sign-in pages, and products without an app
 * point to their section on this site. Renders nothing when there is no usable link.
 */
export default function ProductLink({ product, className = '', compact = false }: Props) {
  const link = getProductLink(product);
  if (!link) return null;

  return (
    <a
      href={link.href}
      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      title={
        link.kind === 'login'
          ? 'A live system. Sign-in is limited to the institution’s own staff.'
          : undefined
      }
      className={className}
    >
      {link.kind === 'login' && <Lock className="w-3.5 h-3.5" aria-hidden="true" />}
      <span>{compact ? COMPACT_LABEL[link.kind] : link.label}</span>
      {link.external ? (
        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
      ) : (
        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
      )}
      {link.external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}
