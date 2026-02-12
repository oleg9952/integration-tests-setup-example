import nock from "nock";

export function enableMocking(): void {
  nock.disableNetConnect();
}

export function cleanupMocking(): void {
  nock.cleanAll();
}

export function disableMocking(): void {
  nock.cleanAll();
  nock.enableNetConnect();
  nock.restore();
}
