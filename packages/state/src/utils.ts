import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError | undefined,
): string | undefined => {
  if (!error) return undefined;

  // FetchBaseQueryError (API errors like 400, 401, etc.)
  if ("status" in error) {
    const data = error.data as { message?: string };
    return data?.message || "An error occurred";
  }

  // SerializedError (network errors, timeouts, etc.)
  if ("message" in error) {
    return error.message;
  }

  return "An unknown error occurred";
};
