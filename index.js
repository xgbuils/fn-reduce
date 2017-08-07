module.exports = function (f, acc, arr) {
    const length = arr.length
    for (let i = 0; i < length; ++i) {
        acc = f(acc, arr[i])
    }
    return acc
}
