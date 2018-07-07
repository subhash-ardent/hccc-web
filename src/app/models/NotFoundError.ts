export class NotFoundError extends Error {
  constructor( ...params) {
    super(...params);
  }
  public code = 123;
}
