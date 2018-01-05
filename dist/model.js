"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function json(key) {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                if (this instanceof Model) {
                    var value = this['changes'].hasOwnProperty(key) ? this['changes'][key] : this['response'][key];
                    return value === undefined ? null : value;
                }
                else {
                    throw Error('Property "response" is missing.');
                }
            },
            set: function (value) {
                if (this instanceof Model) {
                    if (value !== this['response'][key]) {
                        this['changes'][key] = value;
                    }
                    else {
                        delete this['changes'][key];
                    }
                }
                else {
                    throw Error('Property "changes" is missing.');
                }
            }
        });
    };
}
exports.json = json;
var Model = (function () {
    function Model(response) {
        if (response === void 0) { response = {}; }
        this.changes = {};
        this.response = response;
    }
    Object.defineProperty(Model.prototype, "isChanged", {
        get: function () {
            return Object.keys(this.changes).length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Model.prototype.clear = function () {
        this.changes = {};
    };
    Model.prototype.save = function () {
        this.response = __assign({}, this.response, this.changes);
        this.clear();
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map