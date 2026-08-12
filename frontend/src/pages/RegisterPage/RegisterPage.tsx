import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start exploring AI-powered market intelligence."
    >
      <form className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Full Name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="registerEmail"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Email Address
          </label>

          <input
            id="registerEmail"
            name="email"
            type="email"
            placeholder="name@company.co.za"
            autoComplete="email"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="registerPassword"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Password
          </label>

          <input
            id="registerPassword"
            name="password"
            type="password"
            placeholder="Create a password"
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
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            autoComplete="new-password"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Terms */}
        <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-600">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />

          <span>
            I agree to the{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>

        {/* Register */}
        <button
          type="submit"
          className="w-full rounded-lg bg-black px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.99]"
        >
          Create Account
        </button>
      </form>

      {/* Login */}
      <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Secure Login
        </Link>
      </div>
    </AuthLayout>
  );
}
