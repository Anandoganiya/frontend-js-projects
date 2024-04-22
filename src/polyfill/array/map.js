const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((item, acc) => item * acc);
console.log(sum)

Array.prototype.MyReduce = function (callback, defaultAcc = null) {
    let acc = defaultAcc == null ? this[0] : defaultAcc;
    if(typeof callback != 'function') throw new Error('not an function')
    
    for (let index = defaultAcc == null ? 1 : 0; index < this.length; index++) {
        acc = callback(this[index], acc, index, this);    
    }

    return acc;
}
console.log('custom')
console.log(numbers.MyReduce((item, acc) => item * acc))