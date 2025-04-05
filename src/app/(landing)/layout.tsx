import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StudentHub - Transform Your Study Experience | Free Study Groups Platform",
  description: "Join StudentHub, the ultimate platform for students to connect, share resources, and study together. Create or join study groups, access shared materials, and improve your academic performance.",
  keywords: "study groups, student platform, academic resources, online learning, student collaboration, study materials, education technology",
  authors: [{ name: "StudentHub Team" }],
  creator: "StudentHub",
  publisher: "StudentHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://itec.andreipau.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "StudentHub - Transform Your Study Experience",
    description: "Join StudentHub, the ultimate platform for students to connect, share resources, and study together.",
    url: 'https://itec.andreipau.me',
    siteName: 'StudentHub',
    images: [
      {
        url: '/study_group.svg',
        width: 1200,
        height: 630,
        alt: 'StudentHub Platform Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "StudentHub - Transform Your Study Experience",
    description: "Join StudentHub, the ultimate platform for students to connect, share resources, and study together.",
    images: ['/study_group.svg'],
    creator: '@StudentHub',
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
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
};

export const revalidate = 3600; 
export const dynamic = 'force-static';
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
