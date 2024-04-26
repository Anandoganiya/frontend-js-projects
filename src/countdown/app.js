// array methods
// map,filter,reduce,forEach, slice, find,findLast,findIndex, findLastIndex,

const number  = [1,2,3,4,5]

const res = number.find(item => item == 2)
console.log(res)

Array.prototype.myFind = function (callback) {

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) return i;
    }
}

const res2 = number.myFind(item=>item == 2)
console.log(res2)