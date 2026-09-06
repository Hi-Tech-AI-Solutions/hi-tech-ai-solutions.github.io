import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const SITE_URL = 'https://hi-tech-ai-solutions.github.io';
const SITE_TITLE = 'Hi-Tech AI Solutions & Services — Intelligent Systems & Product Ecosystem';
const SITE_DESCRIPTION =
  "We don't just build software. We build intelligent solutions. Official digital headquarters and product showcase for Hi-Tech AI Solutions, JyotOS ecosystem, ScholarCard AI, StaffBridge, and EventOS.";

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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
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
  themeColor: '#030712',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        {/* Favicon fallback tags */}
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Generative Engine Optimization (GEO) LLMs manifest */}
        <link rel="llms-txt" href="/llms.txt" />
        {/* Bing Webmaster Verification */}
        <meta name="msvalidate.01" content="90C0C41F2E4878AABD06C515771EF01B" />
        {/* Structured Data for SearchGPT, ChatGPT, Perplexity & Google Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cyber-bg text-gray-100 antialiased min-h-screen flex flex-col font-sans selection:bg-cyan-500/30 selection:text-white">
        {/* Skip to Content for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-black focus:font-semibold focus:rounded-md shadow-lg"
        >
          Skip to main content
        </a>

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <div id="main-content" className="flex-1">
          {children}
        </div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
