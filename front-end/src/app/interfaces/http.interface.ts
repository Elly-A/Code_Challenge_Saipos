
export interface HttpInterfaceWithRedux<T> {
  getAll(): void;
  get(id: string): void;
  add(t: T): void;
  update(t: T): void;
  remove(id: string): void;
}
