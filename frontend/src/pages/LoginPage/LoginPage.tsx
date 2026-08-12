import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Secure Login"
      subtitle="Access your portfolio and AI market insights."
    >
      <form className="space-y-6">
        {/* Email */}
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

        {/* Password */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
          </div>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Remember device */}
        <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />

          <span>Remember this device</span>
        </label>

        {/* Login */}
        <button
          type="submit"
          className="w-full rounded-lg bg-black px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.99]"
        >
          Secure Login
        </button>
      </form>

      {/* Register */}
      <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
        New to FinSight SA?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Create an account
        </Link>
      </div>
    </AuthLayout>
  );
}
