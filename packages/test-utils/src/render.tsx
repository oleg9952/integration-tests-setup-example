import type { ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "@alpha/state";

interface RenderWithProvidersOptions extends Omit<RenderOptions, "wrapper"> {
  routerEntries?: string[];
  store?: ReturnType<typeof createStore>;
}

export function renderWithProviders(
  ui: ReactElement,
  options: RenderWithProvidersOptions = {},
) {
  const {
    routerEntries = ["/"],
    store = createStore(),
    ...renderOptions
  } = options;

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={routerEntries}>{children}</MemoryRouter>
      </Provider>
    );
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
    user: userEvent.setup(),
  };
}
