import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'next-ssr-realistic-bench',
  description: 'Layero SSR cold-start benchmark fixture',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
