import React from "react";

interface WelcomeCardProps {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  image: string;
  onLogout: () => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({
  firstName,
  lastName,
  username,
  email,
  image,
  onLogout,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 16px rgba(0, 0, 0, 0.1)",
        padding: "40px",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={`${firstName} ${lastName}`}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "16px",
        }}
      />

      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#1a1a1a",
          marginBottom: "4px",
        }}
      >
        Welcome, {firstName} {lastName}!
      </h1>

      <p
        style={{
          fontSize: "14px",
          color: "#666",
          margin: "0 0 4px",
        }}
      >
        @{username}
      </p>

      <p
        style={{
          fontSize: "14px",
          color: "#666",
          margin: "0 0 32px",
        }}
      >
        {email}
      </p>

      <button
        type="button"
        onClick={onLogout}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          fontWeight: "600",
          color: "#fff",
          backgroundColor: "#e74c3c",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#c0392b";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#e74c3c";
        }}
      >
        Log out
      </button>
    </div>
  );
};
