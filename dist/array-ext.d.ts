interface Array<T> {
    divideBy(size: number): Array<any>;
    flatten(): Array<any>;
    uniq(): Array<T>;
    uniqBy(prop: string): Array<T>;
}
