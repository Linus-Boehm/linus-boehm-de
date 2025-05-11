import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata: Metadata = {
  title: "Linus Boehm",
  description: "Software Engineer based in Munich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${GeistMono.variable} ${GeistSans.variable} antialiased font-mono`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex w-full min-h-screen">
            <div className="flex min-h-screen w-full max-w-5xl mx-auto bg-gray-100 dark:bg-gray-900">
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full pt-8 px-12">
                  <Link href="/">
                    <svg
                      width="52"
                      height="62"
                      viewBox="0 0 52 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-500"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.4152 1.29266L43.5263 11.7912C48.6863 14.1352 52 19.282 52 24.9526V47.5458C52 55.5287 45.533 62 37.5556 62C35.496 62 33.4602 61.5593 31.5848 60.7073L8.47371 50.2089C3.31366 47.8648 0 42.718 0 37.0474V14.4542C0 6.47135 6.467 0 14.4444 0C16.504 0 18.5398 0.440742 20.4152 1.29266Z"
                        fill="url(#paint0_linear_295_18)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.4445 21.4215V40.0908H8.81116V9.37849L10.1458 8.86987V38.7528H26.2889V20.1441C30.4287 20.1145 33.448 20.1983 35.3468 20.3955C38.1951 20.6914 42.8545 22.4459 43.1806 27.7106C43.3691 30.753 41.85 33.2513 39.5135 34.5332C40.6311 34.7921 45.076 36.6917 44.8203 42.1856C44.6292 46.2923 42.2923 48.8713 38.0778 50.0108C35.4799 50.7132 30.0736 50.4918 23.8327 50.4918C23.4477 49.63 23.2557 49.1987 23.2567 49.1976C29.1919 49.1976 32.3701 49.1976 32.7913 49.1976C36.111 49.1976 43.3272 48.7703 43.4771 42.1856C43.596 36.9594 39.6108 35.9689 36.3999 34.7993C38.4668 33.4819 42.5833 32.2705 41.7382 26.8905C41.0333 22.4026 36.0571 21.5908 32.3678 21.4423C31.9384 21.4423 30.2973 21.4354 27.4445 21.4215Z"
                        className="fill-[var(--primary-foreground)]"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_295_18"
                          x1="4.93935"
                          y1="6.82165"
                          x2="53.7668"
                          y2="44.8246"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop className="dark:[stop-color:var(--color-white)] [stop-color:var(--color-slate-700)]" />
                          <stop
                            offset="1"
                            className="dark:[stop-color:var(--color-slate-500)] [stop-color:var(--color-slate-900)]"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Link>

                  <ModeToggle />
                </div>
                <main className="pb-8">{children}</main>
                <footer className="w-full mt-auto py-8 px-12 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      © {new Date().getFullYear()} Linus Boehm. All rights
                      reserved.
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                      <a
                        href="https://github.com/Linus-Boehm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/linus-boehm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
                      >
                        <Linkedin size={18} />
                        LinkedIn
                      </a>
                      <Link
                        href="/imprint"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                      >
                        Imprint
                      </Link>
                      <Link
                        href="/privacy"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                      >
                        Privacy
                      </Link>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
