import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Navigation } from "../components/Navigation";

function AppRoutes() {
  const element = useRoutes(routes);
  return (
    <>
      <Navigation />
      {element}
    </>
  );
}

export function RouterProvider() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
