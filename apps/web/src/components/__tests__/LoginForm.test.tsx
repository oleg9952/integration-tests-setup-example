import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "../LoginForm";

describe("LoginForm", () => {
  it("renders the form with heading, inputs, and submit button", () => {
    render(<LoginForm onSubmit={vi.fn()} />);

    expect(screen.getByText("Welcome Back")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
  });

  it("calls onSubmit with username and password on valid submission", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<LoginForm onSubmit={handleSubmit} />);

    // Default values are "emilys" / "emilyspass", which are valid
    await user.click(screen.getByRole("button", { name: "Sign In" }));

    expect(handleSubmit).toHaveBeenCalledWith("emilys", "emilyspass");
  });

  it("shows validation error when username is empty", async () => {
    const user = userEvent.setup();

    render(<LoginForm onSubmit={vi.fn()} />);

    const usernameInput = screen.getByLabelText("Username");
    await user.clear(usernameInput);

    await user.click(screen.getByRole("button", { name: "Sign In" }));

    expect(screen.getByText("Username is required")).toBeInTheDocument();
  });
});
