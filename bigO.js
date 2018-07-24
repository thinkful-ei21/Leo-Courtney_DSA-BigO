// EVEN OR ODD___________________________________

function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

// Notation:
// O(1)

// Why:
// The value inputted into the function is always just
// going to one and we're just checking if that value is
// even.


// ARE YOU HERE?_____________________________________

function areYouHere(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
        const el1 = arr1[i];
        for (let j=0; j<arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// Notation:
// O(n^2)

// Why:
// The function is comparing 2 different data structures
// using a nested for loop. For each increase in the data
// structure, the runtime will have to preform that operation
// n^2 times, which gives it a polynomial relationship.


// DOUBLER_____________________________________________

function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// Notation:
// O(n)

// Why:
// For every increase in the data structure, the function
// will preform an equilvalent amount of operations. The
// runtime growth and data growth are proportional.


// NAIVE SEARCH________________________________________

function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// Notation:
// O(n)

// Why:
// Like above, the relationship between data growth and
// runtime growth is proportional. The function iterates
// through the whole array (potentially, worst case) in
// order to find the specified item.


// CREATING PAIRS_______________________________________

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

console.log(createPairs([1,2,3,4]));
//when data.length = 3, runtime is 3 (or n)
//when data.length = 6 (doubled), runtime is 2^6 (or 2^n)


// Notation:
// O(2^n) - exponential

// Why:
// For every added element in the data structure, the
// function doubles the iterations through the
// elements. For instance, if you had an array [1,2,3],
// the runtime would take 3 iterations. if you added an
// element to the array [1,2,3,4], then the runtime would
// take 6 iterations.


// COMPUTING FIBONACCIS__________________________________

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items,
    //and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// Notation:
// O(n)

// Why:
// The function is a simple for loop that only can
// execute one operation per loop, so the runtime
// will scale linearly with the data growth.


// AN EFFICIENT SEARCH___________________________________

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// Notation:
// O(logn)

// Why:
// As the data structure grows, the binary search's
// runtime will not grow that much because it's
// always searching half the data with every iteration.


// RANDOM ELEMENT_____________________________________

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Notation:
// O(1)

// Why:
// The algorithm will only ever find one element in the
// provided data structure.


// IS IT PRIME?________________________________________

function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

// Notation:
// O(n)

// Why:
// The algorithm has a linear relationship between the
// data growth and runtime growth. If the number gets
// larger, then the for loop has to iterate over more
// numbers to check if it's prime.
