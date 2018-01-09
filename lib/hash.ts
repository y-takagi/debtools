export class Hash<T> {
  [id: string]: T;
}

export class HashMap<T> {
  private readonly data = new Hash<T>();

  get values(): T[] {
    return this.keys.map(key => this.data[key]);
  }

  get keys(): string[] {
    return Object.keys(this.data);
  }

  get count(): number {
    return this.keys.length;
  }

  forEach(callback: (key: string, value: T) => void): void {
    this.keys.forEach(key => callback(key, this.data[key]));
  }

  set(key: string, value: T): void {
    this.data[key] = value;
  }

  get(key: string): T | undefined {
    return this.data[key];
  }

  delete(key: string): void {
    delete this.data[key];
  }

  clear(): void {
    this.keys.forEach(key => this.delete(key));
  }
}
