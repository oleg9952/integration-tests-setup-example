import React from "react";
import { LoginForm } from "../components/LoginForm";
import { getErrorMessage, useLoginMutation } from "@alpha/state";

export const LoginPage: React.FC = () => {
  // Here you would use your login mutation hook
  // Example:
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (username: string, password: string) => {
    console.log("Login attempt:", { username, password });

    // Call your mutation here
    try {
      const response = await login({ username, password }).unwrap();
      // Handle successful login (redirect, etc.)
      console.log("success", response);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <LoginForm
        onSubmit={handleLogin}
        backendError={getErrorMessage(error)}
        isLoading={isLoading}
      />
    </div>
  );
};
