import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [resent, setResent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    setErrorMsg("");
    // Only accept numeric digit
    const digit = value.replace(/[^0-9]/g, "").slice(-1);

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Auto-focus next input if digit entered
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // Move to previous box if current is empty
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 6);
    if (!pastedData) return;

    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pastedData[i] || "";
    }
    setOtp(newOtp);

    // Focus on the last filled box or next empty box
    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const fullCode = otp.join("");
  const isComplete = fullCode.length === 6;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) {
      setErrorMsg("Please enter all 6 digits of your verification code.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/reset-password");
    }, 600);
  };

  return (
    <AuthLayout
      title="Enter Verification Code"
      subtitle="We've sent a 6-digit one-time code to your email."
      badge="Two-Factor Security"
    >
      {/* Email Display Pill */}
      <div className="mb-6 flex items-center justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
          <span className="h-2 w-2 rounded-full bg-teal-600" />
          <span>maphalagl@gmail.com</span>
        </span>
      </div>

      {errorMsg && (
        <div className="mb-4 rounded-xl bg-rose-50 p-3 text-xs font-semibold text-rose-700 border border-rose-200 text-center">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 6 Individual Digit Boxes */}
        <div>
          <label className="mb-3 block text-center text-xs font-bold uppercase tracking-wider text-slate-800">
            6-Digit Security Code
          </label>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                autoFocus={index === 0}
                className={`h-12 w-11 sm:h-14 sm:w-13 rounded-xl border text-center font-mono text-xl sm:text-2xl font-black transition-all outline-none shadow-2xs ${
                  digit
                    ? "border-teal-700 bg-teal-50/40 text-teal-950 font-bold"
                    : "border-slate-300 bg-white text-slate-900"
                } focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10`}
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !isComplete}
          className="flex w-full items-center justify-center rounded-xl bg-teal-700 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-teal-800 active:scale-[0.99] disabled:opacity-50 gap-2 cursor-pointer"
        >
          {isLoading ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Verifying code...</span>
            </>
          ) : (
            "Verify Code"
          )}
        </button>
      </form>

      {/* Resend Code Section */}
      <div className="mt-5 text-center">
        <button
          type="button"
          onClick={() => setResent(true)}
          className="text-xs font-semibold text-teal-700 hover:text-teal-800 transition cursor-pointer"
        >
          {resent ? "✓ Verification code resent to your inbox!" : "Didn't receive code? Resend"}
        </button>
      </div>

      {/* Back Link */}
      <div className="mt-6 border-t border-slate-100 pt-5 text-center text-xs text-slate-600">
        Entered the wrong email?{" "}
        <Link
          to="/forgot-password"
          className="font-bold text-teal-700 hover:text-teal-800 hover:underline transition"
        >
          Go Back
        </Link>
      </div>
    </AuthLayout>
  );
}
