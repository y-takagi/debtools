"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function json(key) {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                if (this instanceof Model) {
                    const value = this['changes'].hasOwnProperty(key) ? this['changes'][key] : this['response'][key];
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
class Model {
    constructor(response = {}) {
        this.changes = {};
        this.response = response;
    }
    get isChanged() {
        return Object.keys(this.changes).length > 0;
    }
    clear() {
        this.changes = {};
    }
    save() {
        this.response = Object.assign(this.response, this.changes);
        this.clear();
    }
}
exports.Model = Model;
