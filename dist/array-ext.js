"use strict";
Array.prototype.divideBy = function (size) {
    var _this = this;
    if (size > 0) {
        var newArray_1 = [];
        Array.from(Array(this.length).keys()).forEach(function (index) {
            if (index % size === 0) {
                newArray_1.push([]);
            }
            newArray_1[newArray_1.length - 1].push(_this[index]);
        });
        return newArray_1;
    }
    else {
        return this;
    }
};
Array.prototype.flatten = function () {
    return this.reduce(function (a, b) { return a.concat(Array.isArray(b) ? b.flatten() : b); }, []);
};
Array.prototype.uniq = function () {
    return this.filter(function (value, index, self) { return value && self.indexOf(value) === index; });
};
Array.prototype.uniqBy = function (prop) {
    var _this = this;
    var values = this.map(function (o) { return o[prop]; });
    return values.uniq().map(function (v) { return _this.find(function (o) { return o[prop] === v; }); });
};
//# sourceMappingURL=array-ext.js.map