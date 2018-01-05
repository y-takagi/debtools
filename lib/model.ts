export function json(key: string): any {
  return function (target: Object, propertyKey: string): void {
    Object.defineProperty(target, propertyKey, {
      get: function (): any {
        if (this instanceof Model) {
          const value = this['changes'].hasOwnProperty(key) ? this['changes'][key] : this['response'][key];
          return value === undefined ? null : value;
        } else {
          throw Error('Property "response" is missing.');
        }
      },
      set: function (value: any): void {
        if (this instanceof Model) {
          if (value !== this['response'][key]) {
            this['changes'][key] = value;
          } else {
            delete this['changes'][key];
          }
        } else {
          throw Error('Property "changes" is missing.');
        }
      }
    });
  };
}

export abstract class Model {
  changes: Object;
  response: Object;

  constructor(response: Object = {}) {
    this.changes = {};
    this.response = response;
  }

  get isChanged(): boolean {
    return Object.keys(this.changes).length > 0;
  }

  clear(): void {
    this.changes = {};
  }

  save(): void {
    this.response = { ...this.response, ...this.changes };
    this.clear();
  }
}
