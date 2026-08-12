import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot your password?"
      subtitle="Enter your email address and we'll send you a verification code."
    >
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@company.co.za"
            autoComplete="email"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-black px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Send Verification Code
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
