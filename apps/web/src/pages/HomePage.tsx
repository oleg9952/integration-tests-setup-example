import React from "react";
import { UserCard } from "../components/UserCard";
import { UserCardSkeleton } from "../components/UserSkeleton";
import { useGetUsersQuery } from "@alpha/state";

export const HomePage: React.FC = () => {
  const { data: users, isLoading } = useGetUsersQuery();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "32px",
            color: "#1a1a1a",
            textAlign: "center",
          }}
        >
          Users Directory
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {isLoading
            ? // Render skeleton cards while loading
              Array.from({ length: 6 }).map((_, index) => (
                <UserCardSkeleton key={index} />
              ))
            : // Render actual user cards when data is loaded
              users?.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
      </div>
    </div>
  );
};
