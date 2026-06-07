
const myMap = (array, callback) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result[result.length] = callback(array[i], i, array);
    }

    return result;
};


// 2. CUSTOM FILTER
const myFilter = (array, callback) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result[result.length] = array[i];
        }
    }

    return result;
};


// 3. CUSTOM REDUCE
const myReduce = (array, callback, initialValue) => {
    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
};


// 4. CUSTOM FLAT
const myFlat = (array, depth = 1) => {
    const result = [];

    const flatten = (arr, d) => {
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];

            if (Array.isArray(value) && d > 0) {
                flatten(value, d - 1);
            } else {
                result[result.length] = value;
            }
        }
    };

    flatten(array, depth);
    return result;
};


// ===============================
// DEBOUNCE
// ===============================
const myDebounce = (fn, delay) => {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};


// ===============================
// THROTTLE
// ===============================
const myThrottle = (fn, limit) => {
    let lastCallTime = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCallTime >= limit) {
            lastCallTime = now;
            fn.apply(this, args);
        }
    };
};


// ===============================
// TEST CASES (RUN IN CONSOLE)
// ===============================

const numbers = [1, 2, 3, 4, 5];

console.log("MAP x2:");
console.log(myMap(numbers, x => x * 2));
// [2, 4, 6, 8, 10]

console.log("FILTER even:");
console.log(myFilter(numbers, x => x % 2 === 0));
// [2, 4]

console.log("REDUCE sum:");
console.log(myReduce(numbers, (a, b) => a + b, 0));
// 15

console.log("FLAT:");
console.log(myFlat([1, [2, [3, 4]], 5], 2));
// [1, 2, 3, 4, 5]

console.log("FLAT depth 1:");
console.log(myFlat([1, [2, [3]]], 1));
// [1, 2, [3]]


// ===============================
// DEBOUNCE & THROTTLE DEMO
// (works in browser or Node with simulation)
// ===============================

const log = (msg) => console.log("Typed:", msg);

const debouncedLog = myDebounce(log, 500);
const throttledLog = myThrottle(log, 1000);

// Simulated calls
debouncedLog("A");
debouncedLog("AB");
debouncedLog("ABC"); // only this runs after 500ms

throttledLog("First");
throttledLog("Second (ignored if too fast)");

