"use strict";
Array.prototype.divideBy = function (size) {
    if (size > 0) {
        const newArray = [];
        Array.from(Array(this.length).keys()).forEach(index => {
            if (index % size === 0) {
                newArray.push([]);
            }
            newArray[newArray.length - 1].push(this[index]);
        });
        return newArray;
    }
    else {
        return this;
    }
};
Array.prototype.flatten = function () {
    return this.reduce((a, b) => a.concat(Array.isArray(b) ? b.flatten() : b), []);
};
Array.prototype.uniq = function () {
    return this.filter((value, index, self) => value && self.indexOf(value) === index);
};
Array.prototype.uniqBy = function (prop) {
    const values = this.map(o => o[prop]);
    return values.uniq().map(v => this.find(o => o[prop] === v));
};
