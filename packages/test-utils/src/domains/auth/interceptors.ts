import nock from "nock";
import type { LoginResponse, LoginErrorResponse } from "@alpha/state";
import { loginSuccessResponse, loginErrorResponse } from "./fixtures";

const AUTH_BASE_URL = "https://dummyjson.com";
const LOGIN_PATH = "/auth/login";

export function mockLoginSuccess(
  overrides?: Partial<LoginResponse>,
): nock.Scope {
  return nock(AUTH_BASE_URL)
    .post(LOGIN_PATH)
    .reply(200, { ...loginSuccessResponse, ...overrides });
}

export function mockLoginFailure(
  statusCode: number = 400,
  overrides?: Partial<LoginErrorResponse>,
): nock.Scope {
  return nock(AUTH_BASE_URL)
    .post(LOGIN_PATH)
    .reply(statusCode, { ...loginErrorResponse, ...overrides });
}
