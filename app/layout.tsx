import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ProgressBar, ProgressBarProvider } from 'react-transition-progress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'NextJS + Supabase Template',
    description: 'Created By greeenboi',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ProgressBarProvider>
                    <ProgressBar className="fixed top-0 h-1 bg-sky-500 shadow-lg shadow-sky-500/20" />
                    {children}
                    <Toaster />
                </ProgressBarProvider>
            </body>
        </html>
    );
}
