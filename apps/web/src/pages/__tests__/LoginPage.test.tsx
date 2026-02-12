import { screen, waitFor } from "@testing-library/react";
import {
  renderWithProviders,
  mockLoginSuccess,
  mockLoginFailure,
  loginSuccessResponse,
} from "@alpha/test-utils";
import { LoginPage } from "../LoginPage";

describe("LoginPage", () => {
  it("shows the welcome card after a successful login", async () => {
    const scope = mockLoginSuccess();

    const { user } = renderWithProviders(<LoginPage />);

    await user.click(screen.getByRole("button", { name: "Sign In" }));

    await waitFor(() => {
      expect(
        screen.getByText(
          `Welcome, ${loginSuccessResponse.firstName} ${loginSuccessResponse.lastName}!`,
        ),
      ).toBeInTheDocument();
    });

    expect(
      screen.getByText(`@${loginSuccessResponse.username}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(loginSuccessResponse.email),
    ).toBeInTheDocument();

    scope.done();
  });

  it("displays a backend error message on login failure", async () => {
    const scope = mockLoginFailure(400, { message: "Invalid credentials" });

    const { user } = renderWithProviders(<LoginPage />);

    await user.click(screen.getByRole("button", { name: "Sign In" }));

    await waitFor(() => {
      expect(screen.getByText("Invalid credentials")).toBeInTheDocument();
    });

    scope.done();
  });
});
