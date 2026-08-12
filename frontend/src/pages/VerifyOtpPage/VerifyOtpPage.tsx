import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function VerifyOtpPage() {
  return (
    <AuthLayout
      title="Verify your email"
      subtitle="Enter the 6-digit verification code sent to your email address."
    >
      <form className="space-y-6">
        <div>
          <label
            htmlFor="otp"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Verification Code
          </label>

          <input
            id="otp"
            name="otp"
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="Enter 6-digit code"
            autoComplete="one-time-code"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-center text-lg tracking-[0.4em] outline-none transition placeholder:text-sm placeholder:tracking-normal placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-black px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Verify Code
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          type="button"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Resend Code
        </button>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        Entered the wrong email?{" "}
        <Link
          to="/forgot-password"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Go Back
        </Link>
      </div>
    </AuthLayout>
  );
}
