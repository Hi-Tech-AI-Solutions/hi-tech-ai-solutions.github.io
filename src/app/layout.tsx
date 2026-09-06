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

export const metadata: Metadata = {
  metadataBase: new URL('https://hi-tech-ai-solutions.github.io'),
  title: {
    default: 'Hi-Tech AI Solutions & Services — Intelligent Systems & Product Ecosystem',
    template: '%s | Hi-Tech AI Solutions',
  },
  description:
    "We don't just build software. We build intelligent solutions. Official digital headquarters and product showcase for Hi-Tech AI Solutions, JyotOS ecosystem, and enterprise AI systems.",
  keywords: [
    'Hi-Tech AI Solutions',
    'JyotOS',
    'ScholarCard AI',
    'jyotAssist AI',
    'StaffBridge',
    'EventOS',
    'AI Solutions',
    'Academic Technology',
    'Enterprise Automation',
    'Intelligent Systems',
  ],
  authors: [{ name: 'Hi-Tech AI Solutions & Services' }],
  creator: 'Hi-Tech AI Solutions & Services',
  publisher: 'Hi-Tech AI Solutions & Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Hi-Tech AI Solutions & Services — Intelligent Systems & Product Ecosystem',
    description:
      "We don't just build software. We build intelligent solutions. Explore the JyotOS platform and next-generation AI enterprise suites.",
    url: 'https://hi-tech-ai-solutions.github.io',
    siteName: 'Hi-Tech AI Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hi-Tech AI Solutions & Services',
    description: "We don't just build software. We build intelligent solutions.",
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
};

export const viewport: Viewport = {
  themeColor: '#030712',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
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
