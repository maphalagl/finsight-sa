import { validatePassword } from "../../lib/password";

interface PasswordStandardsProps {
  password: string;
}

export default function PasswordStandards({ password }: PasswordStandardsProps) {
  const { hasMinLength, hasUpper, hasNumber, hasSpecial, score } = validatePassword(password);

  if (!password) return null;

  const strengthLabels = ["Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["bg-rose-500", "bg-amber-500", "bg-teal-600", "bg-emerald-600"];
  const strengthTextColor = ["text-rose-600", "text-amber-600", "text-teal-700", "text-emerald-700"][
    Math.max(0, score - 1)
  ];

  return (
    <div className="mt-2 space-y-2 text-xs">
      {/* 4 Segmented Strength Bar */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-500">Security strength</span>
          <span className={`font-semibold ${strengthTextColor}`}>
            {score > 0 ? strengthLabels[score - 1] : "Too weak"}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                score >= step ? strengthColors[score - 1] : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 4 Clean Requirements */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-1 pt-1 text-[11px]">
        <div className={`flex items-center gap-1.5 ${hasMinLength ? "text-teal-800 font-medium" : "text-slate-500"}`}>
          <span className={`text-[11px] ${hasMinLength ? "text-teal-700 font-bold" : "text-slate-400"}`}>
            {hasMinLength ? "✓" : "○"}
          </span>
          <span>8+ characters</span>
        </div>

        <div className={`flex items-center gap-1.5 ${hasUpper ? "text-teal-800 font-medium" : "text-slate-500"}`}>
          <span className={`text-[11px] ${hasUpper ? "text-teal-700 font-bold" : "text-slate-400"}`}>
            {hasUpper ? "✓" : "○"}
          </span>
          <span>Uppercase letter</span>
        </div>

        <div className={`flex items-center gap-1.5 ${hasNumber ? "text-teal-800 font-medium" : "text-slate-500"}`}>
          <span className={`text-[11px] ${hasNumber ? "text-teal-700 font-bold" : "text-slate-400"}`}>
            {hasNumber ? "✓" : "○"}
          </span>
          <span>At least 1 number</span>
        </div>

        <div className={`flex items-center gap-1.5 ${hasSpecial ? "text-teal-800 font-medium" : "text-slate-500"}`}>
          <span className={`text-[11px] ${hasSpecial ? "text-teal-700 font-bold" : "text-slate-400"}`}>
            {hasSpecial ? "✓" : "○"}
          </span>
          <span>Special symbol</span>
        </div>
      </div>
    </div>
  );
}
