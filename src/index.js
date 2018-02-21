'use strict'

class Sorter {
    constructor() {
        this.storage = {};
        this._compareFunction = (left, right) => left - right;
        this.length = 0;
    }

    add(element) {
        this.storage[this.length] = element;
        this.length += 1;
    }

    at(index) {
        return this.storage[index];
    }

    toArray() {
        var arr = [];
        for (var i = 0; i < this.length; i++)
            arr[i] = this.storage[i];
        return arr;
    }

    compare(a, b) {
        if (this._compareFunction(a, b) > 0)
            return false;
        return true;
    }

    sort(indices) {
        var n = indices.length;
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - 1 - i; j++) {
                if (indices[j + 1] < indices[j]) {
                    var t = indices[j + 1];
                    indices[j + 1] = indices[j]
                    indices[j] = t;
                }
            }
        }
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - 1 - i; j++) {
                var a = this.storage[indices[j + 1]];
                var b = this.storage[indices[j]];
                if (this.compare(a, b)) {
                    this.storage[indices[j + 1]] = b;
                    this.storage[indices[j]] = a;
                }
            }
        }

    }

    setComparator(compareFunction) {
        this._compareFunction = eval(compareFunction);
    }
}

module.exports = Sorter;
