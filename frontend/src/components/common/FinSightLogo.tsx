interface FinSightLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  showText?: boolean;
}

export default function FinSightLogo({
  size = "md",
  variant = "light",
  showText = true,
}: FinSightLogoProps) {
  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-11 w-11",
  }[size];

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  }[size];

  const textColor = variant === "dark" ? "text-white" : "text-slate-900";
  const accentColor = variant === "dark" ? "text-teal-400" : "text-teal-700";

  return (
    <div className="inline-flex items-center gap-2.5 select-none">
      {/* FinSight Icon */}
      <div
        className={`flex ${iconSizes} shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-800 to-teal-600 text-white shadow-sm`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M3 18L9 12L14 16L21 7" />
          <path d="M15 7H21V13" />
        </svg>
      </div>

      {showText && (
        <span className={`font-extrabold tracking-tight ${textSizes} ${textColor}`}>
          FinSight<span className={accentColor}> SA</span>
        </span>
      )}
    </div>
  );
}
