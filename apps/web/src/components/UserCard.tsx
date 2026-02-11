import type { User } from "@alpha/state";
import React from "react";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h3
        style={{
          margin: "0 0 8px 0",
          fontSize: "18px",
          color: "#1a1a1a",
        }}
      >
        {user.name}
      </h3>

      <p
        style={{
          margin: "0 0 12px 0",
          fontSize: "14px",
          color: "#666",
        }}
      >
        @{user.username}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#888" }}>📧</span>
          <span style={{ fontSize: "14px", color: "#444" }}>{user.email}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#888" }}>📍</span>
          <span style={{ fontSize: "14px", color: "#444" }}>
            {user.address.city}, {user.address.street}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#888" }}>📞</span>
          <span style={{ fontSize: "14px", color: "#444" }}>{user.phone}</span>
        </div>
      </div>
    </div>
  );
};
