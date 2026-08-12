import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Create a new password for your FinSight SA account."
    >
      <form className="space-y-5">
        {/* New Password */}
        <div>
          <label
            htmlFor="newPassword"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            New Password
          </label>

          <input
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="Enter your new password"
            autoComplete="new-password"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Confirm New Password
          </label>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your new password"
            autoComplete="new-password"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-black px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Reset Password
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        Remember your password?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Back to Login
        </Link>
      </div>
    </AuthLayout>
  );
}
