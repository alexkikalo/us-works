import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "US Works — Visual Manufacturing Jobs",
  description: "Real shop-floor jobs with location photos. Elevator pitch reels for candidates. More than a piece of paper.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-bold text-xl tracking-tight text-brand-700">
              US Works
            </a>
            <nav className="flex gap-6 text-sm font-medium">
              <a href="/" className="hover:text-brand-600">Jobs</a>
              <a href="/post" className="hover:text-brand-600">Post a Job</a>
              <a href="/pitches" className="hover:text-brand-600">Candidate Pitches</a>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="border-t bg-white py-8 text-center text-sm text-slate-500">
          US Works — Authentic manufacturing jobs. More than a piece of paper.
        </footer>
      </body>
    </html>
  );
}
