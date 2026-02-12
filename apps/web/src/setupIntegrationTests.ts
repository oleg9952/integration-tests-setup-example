import "@testing-library/jest-dom/vitest";
import { enableMocking, cleanupMocking, disableMocking } from "@alpha/test-utils";

beforeAll(() => {
  enableMocking();
});

afterEach(() => {
  cleanupMocking();
});

afterAll(() => {
  disableMocking();
});
