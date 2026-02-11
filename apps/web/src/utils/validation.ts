export interface ValidationError {
  field: string;
  message: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}

export const validateLoginForm = (data: LoginFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Username validation
  if (!data.username || data.username.trim() === "") {
    errors.push({
      field: "username",
      message: "Username is required",
    });
  }

  // Password validation
  if (!data.password || data.password.trim() === "") {
    errors.push({
      field: "password",
      message: "Password is required",
    });
  } else if (data.password.length < 10) {
    errors.push({
      field: "password",
      message: "Password must be at least 10 characters long",
    });
  }

  return errors;
};

export const getFieldError = (
  errors: ValidationError[],
  field: string,
): string | undefined => {
  return errors.find((error) => error.field === field)?.message;
};
