import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/verify-otp");
    }, 500);
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your verified email address to receive a secure recovery code."
      badge="Account Recovery"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
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
              id="email"
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

        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 flex w-full items-center justify-center rounded-xl bg-teal-700 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-teal-800 active:scale-[0.99] disabled:opacity-70 gap-2"
        >
          {isLoading ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Sending code...</span>
            </>
          ) : (
            "Send Verification Code"
          )}
        </button>
      </form>

      <div className="mt-6 border-t border-slate-100 pt-5 text-center text-xs text-slate-600">
        Remember your password?{" "}
        <Link
          to="/login"
          className="font-bold text-teal-700 hover:text-teal-800 hover:underline transition"
        >
          Return to Login
        </Link>
      </div>
    </AuthLayout>
  );
}
