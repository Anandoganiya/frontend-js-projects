const numbers = [1, 2, 3, 4, 5];

function swap(l, r,arr) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

Array.prototype.MyReverse = function() {
    let l = 0;
    let r = this.length-1; 
    while (l < r) {
        swap(l, r, this);
        l++;
        r--;
    }

    return this;
}

console.log(numbers.MyReverse())