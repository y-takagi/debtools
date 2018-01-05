interface Array<T> {
  divideBy(size: number): Array<any>;
  flatten(): Array<any>;
  uniq(): Array<T>;
  uniqBy(prop: string): Array<T>;
}

Array.prototype.divideBy = function<T>(size: number): Array<any> {
  if (size > 0) {
    const newArray: Array<any> = [];
    Array.from(Array(this.length).keys()).forEach(index => {
      if (index % size === 0) {
        newArray.push([]);
      }
      newArray[newArray.length - 1].push(this[index]);
    });
    return newArray;
  } else {
    return this;
  }
};

Array.prototype.flatten = function<T>(): Array<any> {
  return this.reduce((a, b) => a.concat(Array.isArray(b) ? b.flatten() : b), []);
};

Array.prototype.uniq = function<T>(): Array<T> {
  return this.filter((value, index, self) => value && self.indexOf(value) === index);
};

Array.prototype.uniqBy = function<T>(prop: string): Array<T> {
  const values = this.map(o => o[prop]);
  return values.uniq().map(v => this.find(o => o[prop] === v));
};
