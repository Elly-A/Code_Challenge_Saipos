
export interface HttpInterface<T> {
  getAll(): T[];
  get(id: string): T;
  add(t: T): T;
  update(t: T): T;
  remove(id: string): T;
}
