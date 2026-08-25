export interface PasswordValidationResult {
  hasMinLength: boolean;
  hasUpper: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
  isValid: boolean;
  score: number;
}

export function validatePassword(password: string): PasswordValidationResult {
  const hasMinLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  const score = [hasMinLength, hasUpper, hasNumber, hasSpecial].filter(
    Boolean
  ).length;
  const isValid = score === 4;

  return {
    hasMinLength,
    hasUpper,
    hasNumber,
    hasSpecial,
    isValid,
    score,
  };
}
