export enum State {
  ToDo = 1,
  Started = 1 << 1,
  Completed = 1 << 2,
  Cancelled = 1 << 3,
  Deleted = 1 << 4,
}
