import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "US Works — Visual Manufacturing Jobs",
  description:
    "Real shop-floor jobs with location photos. Optional pitch media when you apply. More than a piece of paper.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-bold text-xl tracking-tight text-sky-400">
              US Works
            </a>
            <nav className="flex gap-4 sm:gap-6 text-sm font-medium flex-wrap justify-end">
              <a href="/" className="text-slate-300 hover:text-sky-400 transition-colors">
                Find a Job
              </a>
              <a href="/post" className="text-slate-300 hover:text-sky-400 transition-colors">
                Post a Job
              </a>
              <a
                href="/employer/applications"
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                Applications
              </a>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-sm text-slate-500">
          US Works — Authentic manufacturing jobs. More than a piece of paper.
        </footer>
      </body>
    </html>
  );
}
