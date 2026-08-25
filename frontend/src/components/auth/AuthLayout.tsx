import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import FinSightLogo from "../common/FinSightLogo";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  badge?: string;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  badge = "FinSight SA Portal",
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/70 text-slate-900 font-sans flex flex-col justify-between selection:bg-teal-100 selection:text-teal-900">
      {/* Top Bar */}
      <header className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center transition hover:opacity-90">
          <FinSightLogo size="md" />
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 hover:text-teal-700 transition backdrop-blur-xs"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Centered Auth Card Layout */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Main Form Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xl shadow-slate-200/50">
            {/* Header */}
            <div className="text-center mb-6">
              <span className="inline-block rounded-full bg-teal-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-teal-800 border border-teal-200/60 mb-2.5">
                {badge}
              </span>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                {title}
              </h1>

              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Form Children */}
            {children}
          </div>

          {/* Security & Trust Footer */}
          <div className="mt-6 flex flex-col items-center gap-2 text-center text-xs text-slate-500">
            <div className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                256-Bit SSL Encryption
              </span>
              <span>•</span>
              <span>POPIA Compliant</span>
              <span>•</span>
              <span>JSE Market Data</span>
            </div>

            <p className="text-[11px] text-slate-400">
              FinSight SA — South African AI Financial Market Intelligence
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Spacer */}
      <footer className="py-3" />
    </div>
  );
}
