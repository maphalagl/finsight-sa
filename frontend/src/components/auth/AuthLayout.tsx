import type { ReactNode } from "react";
import authImage from "../../assets/finsight-auth.png";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fcf8fa] text-black">
      {/* Top navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5">
        <span className="text-xl font-bold">FinSight SA</span>

        <button
          type="button"
          className="text-sm text-gray-700 transition hover:text-black"
        >
          Support
        </button>
      </header>

      <main className="flex min-h-screen">
        {/* Left illustration */}
        <section className="hidden w-1/2 items-center justify-center bg-[#f0edef] lg:flex">
          <div className="w-full max-w-xl px-10 text-center">
            <img
              src={authImage}
              alt="FinSight SA security illustration"
              className="mx-auto max-h-162.5 w-full object-contain"
            />

            <h2 className="mt-6 text-3xl font-bold">Institutional Security</h2>

            <p className="mx-auto mt-3 max-w-lg text-gray-600">
              Secure access to your South African investment intelligence
              platform.
            </p>
          </div>
        </section>

        {/* Right content */}
        <section className="flex w-full items-center justify-center px-6 py-24 lg:w-1/2">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">{title}</h1>

              <p className="mt-2 text-gray-600">{subtitle}</p>
            </div>

            {children}

            <p className="mt-10 text-center text-xs text-gray-500">
              FinSight SA — Portfolio Project
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
