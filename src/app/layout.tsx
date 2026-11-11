import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeToggleProvider } from '@/context/ThemeContext';
import { MOTION_INIT_SCRIPT } from '@/lib/motion';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const SITE_URL = 'https://hi-tech-ai-solutions.github.io';
// Title and description say who the site is for, in the words of the hero. The previous
// versions ("Intelligent Systems & Product Ecosystem") never mentioned colleges or universities,
// and the 198-character description was cut off in search results.
const SITE_TITLE = 'AI campus software for colleges & universities | Hi-Tech AI Solutions';
const SITE_DESCRIPTION =
  'AI platforms for colleges and universities: admissions, exams, attendance, ID cards and a student helpdesk on one connected system. Based in Surat, Gujarat.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Hi-Tech AI Solutions',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Hi-Tech AI Solutions',
    'Hi-Tech AI Solutions & Services',
    'JyotOS',
    'ScholarCard AI',
    'jyotAssist AI',
    'StaffBridge',
    'EventOS',
    'AI Solutions Surat',
    'Katargam Surat',
    'Academic Technology India',
    'Enterprise Automation Surat',
    'Intelligent Systems',
    'Digital Transformation',
  ],
  authors: [{ name: 'Hi-Tech AI Solutions & Services', url: SITE_URL }],
  creator: 'Hi-Tech AI Solutions & Services',
  publisher: 'Hi-Tech AI Solutions & Services',
  // Resolved against each page's own path, so every page declares itself as canonical.
  alternates: {
    canonical: './',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // The files now are what these entries say they are. Before, all four icon files were the
  // same 1024 x 1024 JPEG (519 KB) under .ico and .png names, and two of them were downloaded
  // on every first visit.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Hi-Tech AI Solutions & Services',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        secureUrl: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Hi-Tech AI Solutions & Services — Intelligent Systems & Product Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Surat, Katargam, Gujarat',
    'geo.position': '21.2291;72.8428',
    'ICBM': '21.2291, 72.8428',
    'msvalidate.01': '90C0C41F2E4878AABD06C515771EF01B',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0F19',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

// Generative Engine Optimization (GEO) & LocalBusiness Knowledge Graph
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Hi-Tech AI Solutions & Services',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: 'hitech.nft@gmail.com',
      telephone: '+919974803770',
      description:
        'For over 20 years, Hi-Tech has been a trusted name in technology education and consulting. Now, as Hi-Tech AI Solutions & Services, we are driving the future of digital transformation, engineering AI-based solutions, intelligent automation, and institutional operating platforms.',
      sameAs: ['https://github.com/Hi-Tech-AI-Solutions'],
      knowsAbout: [
        'Artificial Intelligence',
        'Large Language Models (LLMs)',
        'Multi-Agent Systems',
        'Campus Operating Systems',
        'Academic Technology',
        'Intelligent Workflow Automation',
        'Digital Transformation',
        'Institutional Credentialing',
      ],
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Surat',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Gujarat',
        },
        {
          '@type': 'Country',
          name: 'India',
        },
        {
          '@type': 'Place',
          name: 'Global',
        },
      ],
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'Hi-Tech AI Solutions & Services',
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      email: 'hitech.nft@gmail.com',
      telephone: '+919974803770',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Bhavani Complex, nr. Gajera Circle, opp. SAIBABA PETROL PUMP, Mahavir Nagar Society, Katargam',
        addressLocality: 'Surat',
        addressRegion: 'Gujarat',
        postalCode: '395004',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 21.2291,
        longitude: 72.8428,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '1',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#jyotos`,
      name: 'JyotOS Platform',
      applicationCategory: 'EducationalApplication, BusinessApplication',
      operatingSystem: 'Cloud, Web, Progressive Web App',
      creator: { '@id': `${SITE_URL}/#organization` },
      description:
        'Comprehensive intelligent campus and institutional operating system integrating academic workflows, faculty governance, and student lifecycles.',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#scholarcard-ai`,
      name: 'ScholarCard AI',
      applicationCategory: 'SecurityApplication, EducationalApplication',
      operatingSystem: 'Cloud, Web, Mobile',
      creator: { '@id': `${SITE_URL}/#organization` },
      description:
        'Next-generation student identity verification, digital credentialing, and academic intelligence platform.',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#jyotassist-ai`,
      name: 'jyotAssist AI',
      applicationCategory: 'AI Conversational Agent',
      operatingSystem: 'Cloud, Web',
      creator: { '@id': `${SITE_URL}/#organization` },
      description:
        'Autonomous AI assistant delivering contextual campus guidance, workflow assistance, and conversational intelligence.',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#staffbridge`,
      name: 'StaffBridge',
      applicationCategory: 'HumanResourcesApplication',
      operatingSystem: 'Cloud, Web',
      creator: { '@id': `${SITE_URL}/#organization` },
      description:
        'Staff administration, institutional attendance governance, and human capital coordination engine.',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#eventos`,
      name: 'EventOS',
      applicationCategory: 'EventManagementApplication',
      operatingSystem: 'Cloud, Web, Mobile Scanner',
      creator: { '@id': `${SITE_URL}/#organization` },
      description:
        'End-to-end institutional event coordination, real-time participant management, and automated ticketing.',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Motion preference (on/off), applied before first paint */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_INIT_SCRIPT }} />
        {/* Icons and the Bing verification tag come from `metadata` above (they were emitted twice) */}
        {/* Generative Engine Optimization (GEO) LLMs manifest */}
        <link rel="llms-txt" href="/llms.txt" />
        {/* Structured Data for SearchGPT, ChatGPT, Perplexity & Google Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cyber-bg text-gray-100 antialiased min-h-screen flex flex-col font-sans selection:bg-cyan-500/30 selection:text-white">
        <ThemeToggleProvider>
          {/* Skip to Content for WCAG Accessibility */}
          {/* z-[60]: the fixed header is z-50 and comes later in the DOM, so at z-50 it painted over this link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-black focus:font-semibold focus:rounded-md shadow-lg"
          >
            Skip to main content
          </a>

          {/* Global Navigation Header */}
          <Navbar />

          {/* Main Content Area: a real <main> landmark. Deliberately NOT focusable: with tabIndex={-1}
              every click on page text moved focus to <main>, so the next Tab jumped to the first
              link of the page. The skip link works without it. */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </ThemeToggleProvider>
      </body>
    </html>
  );
}
