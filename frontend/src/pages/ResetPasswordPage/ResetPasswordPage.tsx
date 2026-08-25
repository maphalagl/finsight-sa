import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import PasswordStandards from "../../components/common/PasswordStandards";
import { validatePassword } from "../../lib/password";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const { isValid } = validatePassword(newPassword);
    if (!isValid) {
      setErrorMsg("Please make sure your new password meets the security requirements below.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg("Passwords do not match. Please verify.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 500);
  };

  return (
    <AuthLayout
      title="Set New Password"
      subtitle="Choose a strong password to protect your FinSight SA account."
      badge="Create Credentials"
    >
      {errorMsg && (
        <div className="mb-4 rounded-xl bg-rose-50 p-3 text-xs font-semibold text-rose-700 border border-rose-200">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* New Password */}
        <div>
          <label
            htmlFor="newPassword"
            className="mb-1.5 block text-xs font-bold text-slate-800 uppercase tracking-wider"
          >
            New Password
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>

            <input
              id="newPassword"
              name="newPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your new password"
              autoComplete="new-password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 shadow-2xs"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-teal-700 transition"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Password Standards Checklist */}
          <PasswordStandards password={newPassword} />
        </div>

        {/* Confirm Password */}
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label
              htmlFor="confirmPassword"
              className="block text-xs font-bold text-slate-800 uppercase tracking-wider"
            >
              Confirm New Password
            </label>

            {confirmPassword && (
              <span className={`text-[11px] font-bold ${newPassword === confirmPassword ? "text-emerald-700" : "text-rose-600"}`}>
                {newPassword === confirmPassword ? "✓ Passwords match" : "✕ Do not match"}
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
              placeholder="Confirm your new password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 shadow-2xs"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-teal-700 transition"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
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
              <span>Updating password...</span>
            </>
          ) : (
            "Reset Password"
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
