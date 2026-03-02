import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { DocsLayoutClient } from './docs-layout.client';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <DocsLayoutClient tree={source.getPageTree()} options={baseOptions()}>
          {children}
        </DocsLayoutClient>
      </body>
    </html>
  );
}
