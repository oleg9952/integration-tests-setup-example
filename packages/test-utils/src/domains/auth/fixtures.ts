import type { LoginResponse, LoginErrorResponse } from "@alpha/state";

export const loginSuccessResponse: LoginResponse = {
  accessToken: "mock-access-token-xyz",
  refreshToken: "mock-refresh-token-xyz",
  id: 1,
  username: "emilys",
  email: "emily.johnson@x.dummyjson.com",
  firstName: "Emily",
  lastName: "Johnson",
  gender: "female",
  image: "https://dummyjson.com/icon/emilys/128",
};

export const loginErrorResponse: LoginErrorResponse = {
  message: "Invalid credentials",
};
