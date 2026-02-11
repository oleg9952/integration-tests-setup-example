import React, { useState } from "react";
import {
  type ValidationError,
  validateLoginForm,
  getFieldError,
} from "../utils/validation";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  backendError?: string;
  isLoading?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  backendError = "",
  isLoading = false,
}) => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>(
    [],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous validation errors
    setValidationErrors([]);

    // Validate form
    const errors = validateLoginForm({ username, password });

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Call parent's submit handler
    onSubmit(username, password);
  };

  const usernameError = getFieldError(validationErrors, "username");
  const passwordError = getFieldError(validationErrors, "password");

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 16px rgba(0, 0, 0, 0.1)",
        padding: "40px",
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "8px",
          color: "#1a1a1a",
          textAlign: "center",
        }}
      >
        Welcome Back
      </h1>

      <p
        style={{
          fontSize: "14px",
          color: "#666",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        Sign in to continue
      </p>

      {/* Backend Error Message */}
      {backendError && (
        <div
          style={{
            backgroundColor: "#fee",
            border: "1px solid #fcc",
            borderRadius: "4px",
            padding: "12px",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              color: "#c33",
              fontSize: "14px",
              margin: 0,
            }}
          >
            {backendError}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="username"
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#333",
              marginBottom: "6px",
            }}
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: usernameError ? "2px solid #e74c3c" : "1px solid #ddd",
              borderRadius: "4px",
              outline: "none",
              transition: "border-color 0.2s",
              boxSizing: "border-box",
              backgroundColor: isLoading ? "#f5f5f5" : "#fff",
              cursor: isLoading ? "not-allowed" : "text",
            }}
            onFocus={(e) => {
              if (!usernameError && !isLoading) {
                e.target.style.borderColor = "#3498db";
              }
            }}
            onBlur={(e) => {
              if (!usernameError) {
                e.target.style.borderColor = "#ddd";
              }
            }}
          />
          {usernameError && (
            <p
              style={{
                color: "#e74c3c",
                fontSize: "12px",
                marginTop: "4px",
                marginBottom: 0,
              }}
            >
              {usernameError}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "24px" }}>
          <label
            htmlFor="password"
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#333",
              marginBottom: "6px",
            }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: passwordError ? "2px solid #e74c3c" : "1px solid #ddd",
              borderRadius: "4px",
              outline: "none",
              transition: "border-color 0.2s",
              boxSizing: "border-box",
              backgroundColor: isLoading ? "#f5f5f5" : "#fff",
              cursor: isLoading ? "not-allowed" : "text",
            }}
            onFocus={(e) => {
              if (!passwordError && !isLoading) {
                e.target.style.borderColor = "#3498db";
              }
            }}
            onBlur={(e) => {
              if (!passwordError) {
                e.target.style.borderColor = "#ddd";
              }
            }}
          />
          {passwordError && (
            <p
              style={{
                color: "#e74c3c",
                fontSize: "12px",
                marginTop: "4px",
                marginBottom: 0,
              }}
            >
              {passwordError}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: isLoading ? "#95a5a6" : "#3498db",
            border: "none",
            borderRadius: "4px",
            cursor: isLoading ? "not-allowed" : "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = "#2980b9";
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = "#3498db";
            }
          }}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p
        style={{
          fontSize: "12px",
          color: "#999",
          textAlign: "center",
          marginTop: "24px",
          marginBottom: 0,
        }}
      >
        Demo credentials: emilys / emilyspass
      </p>
    </div>
  );
};
