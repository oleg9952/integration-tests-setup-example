import { NavLink } from "react-router-dom";
import type { CSSProperties } from "react";

const navStyle: CSSProperties = {
  display: "flex",
  gap: "16px",
  padding: "16px 24px",
  backgroundColor: "#f8f9fa",
  borderBottom: "1px solid #dee2e6",
};

const linkStyle: CSSProperties = {
  padding: "8px 16px",
  borderRadius: "6px",
  textDecoration: "none",
  color: "#495057",
  fontWeight: 500,
  transition: "background-color 0.2s, color 0.2s",
};

const activeLinkStyle: CSSProperties = {
  ...linkStyle,
  backgroundColor: "#228be6",
  color: "#fff",
};

export function Navigation() {
  return (
    <nav style={navStyle}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        Home Page
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        Login Page
      </NavLink>
    </nav>
  );
}
