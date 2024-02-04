// --------- for addition ----------
function add(n, m) {
    return typeof(n+m) === 'number' ? n+m : 'give a number' ;
}

console.log(add(5, 7)); // 12
console.log(add([5], 7)); // give a number
console.log(add(5, '7')); // give a number
console.log(add([5, 7], 8)); // give a number
console.log(add(5, 'seven'), '\n'); // give a number


// --------- for multiply ----------
function multi(n, m) {
    return isNaN(n*m) ? 'give a number' : n*m;
}

console.log(multi(5, 7)); // 35
console.log(multi([5], 7)); // 35
console.log(multi(5, '7')); // 35
console.log(multi([5], '7')); // 35
console.log(multi([5, 7], 8)); // give a number
console.log(multi(5, 'seven'), '\n'); // give a number


/**
 * ----- multiply and addition method are not same for casting -----
 */