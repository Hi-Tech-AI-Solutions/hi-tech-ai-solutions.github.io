import Link from 'next/link';

// No canonical for the 404 page (it would otherwise inherit one pointing at /_not-found/).
export const metadata = { title: 'Page not found', alternates: { canonical: null } };

export default function NotFound() {
  // The root layout already provides the <main> landmark, so this is a plain section.
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="max-w-xl text-center">
        <p className="text-sm font-mono uppercase tracking-widest text-neon-cyan">Error 404</p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-semibold text-white tracking-tight">
          This page isn&apos;t part of the system.
        </h1>
        <p className="mt-5 text-gray-400 leading-relaxed">
          The link may be broken or the page may have moved. Head back to the homepage or see what
          we have built.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-cyber-primary">Back to home</Link>
          <Link href="/#ecosystem" className="btn-cyber-secondary">See the products</Link>
        </div>
      </div>
    </section>
  );
}
