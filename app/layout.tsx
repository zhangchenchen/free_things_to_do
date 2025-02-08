import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AnalyticsProvider } from '@/components/analytics-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Free Things To Do - Discover Amazing Free Activities',
  description: 'Find the best free activities and things to do in your area. Perfect for families, students, and anyone looking for cost-free entertainment.',
  keywords: 'free activities, free things to do, free entertainment, family activities, student activities, free things to do near me',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}