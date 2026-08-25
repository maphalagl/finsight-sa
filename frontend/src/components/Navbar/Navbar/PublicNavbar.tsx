import { useState } from "react";
import { Link } from "react-router-dom";
import FinSightLogo from "../../common/FinSightLogo";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
          <FinSightLogo size="md" />
        </Link>

        {/* Center Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="transition hover:text-teal-700">
            Features
          </a>
          <a href="#ai-insights" className="transition hover:text-teal-700">
            AI Intelligence
          </a>
          <a href="#how-it-works" className="transition hover:text-teal-700">
            How It Works
          </a>
          <a href="#dashboard-preview" className="transition hover:text-teal-700">
            Dashboard
          </a>
          <a href="#faq" className="transition hover:text-teal-700">
            FAQ
          </a>
        </div>

        {/* Right CTA Actions */}
        <div className="hidden items-center gap-4 sm:flex">
          <Link
            to="/login"
            className="text-sm font-medium text-slate-700 transition hover:text-teal-700"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-xs transition hover:bg-teal-800 active:scale-[0.98]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? (
            <span className="text-xl font-semibold">✕</span>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-6 py-5 md:hidden shadow-lg animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="flex flex-col space-y-3.5 text-sm font-medium text-slate-700">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-teal-700 transition"
            >
              Features
            </a>
            <a
              href="#ai-insights"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-teal-700 transition"
            >
              AI Intelligence
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-teal-700 transition"
            >
              How It Works
            </a>
            <a
              href="#dashboard-preview"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-teal-700 transition"
            >
              Dashboard
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-teal-700 transition"
            >
              FAQ
            </a>
          </div>

          <div className="mt-5 flex flex-col gap-2.5 border-t border-slate-100 pt-4">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg bg-teal-700 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-teal-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
