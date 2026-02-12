import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { WelcomeCard } from "../components/WelcomeCard";
import {
  type LoginResponse,
  getErrorMessage,
  useLoginMutation,
} from "@alpha/state";

export const LoginPage: React.FC = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const [authenticatedUser, setAuthenticatedUser] =
    useState<LoginResponse | null>(null);

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await login({ username, password }).unwrap();
      setAuthenticatedUser(response);
    } catch (e) {
      console.error("Login failed:", e);
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
      {authenticatedUser ? (
        <WelcomeCard
          firstName={authenticatedUser.firstName}
          lastName={authenticatedUser.lastName}
          username={authenticatedUser.username}
          email={authenticatedUser.email}
          image={authenticatedUser.image}
          onLogout={() => setAuthenticatedUser(null)}
        />
      ) : (
        <LoginForm
          onSubmit={handleLogin}
          backendError={getErrorMessage(error)}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
