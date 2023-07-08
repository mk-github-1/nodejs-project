export interface IGenericRepository<T> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  create(entity: T): Promise<void>;
  update(id: string, entity: T): Promise<void>;
  delete(id: string): Promise<void>;
  sort(sortLists: Record<string, number>[]): Promise<void>;
}
