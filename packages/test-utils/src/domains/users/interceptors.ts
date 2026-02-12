import nock from "nock";
import type { User } from "@alpha/state";
import { usersResponse } from "./fixtures";

const USERS_BASE_URL = "https://jsonplaceholder.typicode.com";
const USERS_PATH = "/users";

export function mockGetUsers(overrides?: User[]): nock.Scope {
  return nock(USERS_BASE_URL)
    .get(USERS_PATH)
    .reply(200, overrides ?? usersResponse);
}

export function mockGetUsersError(
  statusCode: number = 500,
  body: Record<string, unknown> = { message: "Internal Server Error" },
): nock.Scope {
  return nock(USERS_BASE_URL)
    .get(USERS_PATH)
    .reply(statusCode, body);
}
