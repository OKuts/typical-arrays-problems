exports.min = function min(array) {
    return Array.isArray(array) && array.length > 0 ? array.sort((a, b) => a - b)[0] : 0;
}

exports.max = function max(array) {
    return Array.isArray(array) && array.length > 0 ? array.sort((a, b) => b - a)[0] : 0;
}

exports.avg = function avg(array) {
    return Array.isArray(array) && array.length > 0 ? array.reduce((sum, el) => sum + el) / array.length : 0;
}
