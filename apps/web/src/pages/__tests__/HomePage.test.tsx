import { screen, waitFor } from "@testing-library/react";
import {
  renderWithProviders,
  mockGetUsers,
  mockGetUsersError,
  usersResponse,
} from "@alpha/test-utils";
import { HomePage } from "../HomePage";

describe("HomePage", () => {
  it("renders user cards after data loads", async () => {
    mockGetUsers();

    renderWithProviders(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(usersResponse[0].name)).toBeInTheDocument();
    });

    for (const user of usersResponse) {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(`@${user.username}`)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
    }
  });

  it("handles API error gracefully", async () => {
    mockGetUsersError(500);

    renderWithProviders(<HomePage />);

    await waitFor(() => {
      expect(
        screen.queryByText(usersResponse[0].name),
      ).not.toBeInTheDocument();
    });
  });
});
