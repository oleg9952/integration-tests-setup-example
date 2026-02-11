import React from "react";

export const UserCardSkeleton: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          height: "24px",
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
          marginBottom: "8px",
          width: "70%",
          animation: "pulse 1.5s ease-in-out infinite",
        }}
      />

      <div
        style={{
          height: "18px",
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
          marginBottom: "12px",
          width: "40%",
          animation: "pulse 1.5s ease-in-out infinite",
          animationDelay: "0.1s",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div
          style={{
            height: "16px",
            backgroundColor: "#e0e0e0",
            borderRadius: "4px",
            width: "90%",
            animation: "pulse 1.5s ease-in-out infinite",
            animationDelay: "0.2s",
          }}
        />

        <div
          style={{
            height: "16px",
            backgroundColor: "#e0e0e0",
            borderRadius: "4px",
            width: "85%",
            animation: "pulse 1.5s ease-in-out infinite",
            animationDelay: "0.3s",
          }}
        />

        <div
          style={{
            height: "16px",
            backgroundColor: "#e0e0e0",
            borderRadius: "4px",
            width: "75%",
            animation: "pulse 1.5s ease-in-out infinite",
            animationDelay: "0.4s",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};
