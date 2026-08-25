import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import SocialAuthButtons from "../../components/common/SocialAuthButtons";
import PasswordStandards from "../../components/common/PasswordStandards";
import { validatePassword } from "../../lib/password";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const { isValid } = validatePassword(password);
    if (!isValid) {
      setErrorMsg("Please make sure your password meets the security requirements below.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match. Please verify.");
      return;
    }

    if (!agreedToTerms) {
      setErrorMsg("Please accept the Terms of Service & Privacy Policy.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/verify-otp");
    }, 500);
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start analyzing the South African market with AI insights."
      badge="Free Registration"
    >
      {/* Top Tab Switcher */}
      <div className="grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1 mb-5 text-xs font-semibold">
        <Link
          to="/login"
          className="rounded-lg py-2 text-center text-slate-500 hover:text-slate-900 transition"
        >
          Sign In
        </Link>
        <button
          type="button"
          className="rounded-lg bg-white py-2 text-slate-900 shadow-2xs font-bold transition"
        >
          Create Account
        </button>
      </div>

      {errorMsg && (
        <div className="mb-4 rounded-xl bg-rose-50 p-3 text-xs font-semibold text-rose-700 border border-rose-200">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-1.5 block text-xs font-bold text-slate-800 uppercase tracking-wider"
          >
            Full Name
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Lutendo Maphala"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 shadow-2xs"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="registerEmail"
            className="mb-1.5 block text-xs font-bold text-slate-800 uppercase tracking-wider"
          >
            Email Address
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>

            <input
              id="registerEmail"
              name="email"
              type="email"
              placeholder="maphalagl@gmail.com"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 shadow-2xs"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="registerPassword"
            className="mb-1.5 block text-xs font-bold text-slate-800 uppercase tracking-wider"
          >
            Password
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>

            <input
              id="registerPassword"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 shadow-2xs"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-teal-700 transition cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Real-time Password Standards Checklist */}
          <PasswordStandards password={password} />
        </div>

        {/* Confirm Password */}
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label
              htmlFor="confirmPassword"
              className="block text-xs font-bold text-slate-800 uppercase tracking-wider"
            >
              Confirm Password
            </label>

            {confirmPassword && (
              <span className={`text-[11px] font-bold ${password === confirmPassword ? "text-emerald-700" : "text-rose-600"}`}>
                {password === confirmPassword ? "✓ Passwords match" : "✕ Do not match"}
              </span>
            )}
          </div>

          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 shadow-2xs"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-teal-700 transition cursor-pointer"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Terms */}
        <label className="flex cursor-pointer items-start gap-2.5 text-xs text-slate-600 select-none pt-1">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-700 accent-teal-700 cursor-pointer"
          />

          <span>
            I agree to the{" "}
            <a href="#" className="font-semibold text-teal-700 hover:underline">
              Terms of Service
            </a>{" "}
            and consent to data processing under{" "}
            <a href="#" className="font-semibold text-teal-700 hover:underline">
              POPIA Privacy Guidelines
            </a>
            .
          </span>
        </label>

        {/* Register Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 flex w-full items-center justify-center rounded-xl bg-teal-700 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-teal-800 active:scale-[0.99] disabled:opacity-70 gap-2 cursor-pointer"
        >
          {isLoading ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Creating account...</span>
            </>
          ) : (
            "Create Account"
          )}
        </button>
      </form>

      {/* Round Social Logins Under The Form */}
      <SocialAuthButtons />
    </AuthLayout>
  );
}
