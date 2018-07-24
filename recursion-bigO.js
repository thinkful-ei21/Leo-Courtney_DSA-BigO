// COUNTING SHEEP_____________________________________

function countSheep(num){
    //stopping condition of base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    }
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        console.log(`${num}: Another sheep jump over the fence`);
        countSheep(num-1);
    }
}

// console.log(countSheep(10));

// Notation:
// O(n)

// Why:
// If you increase the number of inputs, it proportionally
// increases the number of outputs.



// ARRAY DOUBLER_______________________________________

function double_all(arr) {
    if (!arr.length) {
        return [];
    }
    return [arr[0] * 2, ...double_all(arr.slice(1))];
}

// console.log(double_all([1,2,3,4,5,6]));

// Notation:
// O(n)

// Why:
// If you increase the number of inputs, it proportionally
// increases the number of outputs.



// REVERSE STRING_____________________________________

function reverseString(str) {
    if (str.length < 2) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}

// Notation:
// O(n)

// Why:
// If you increase the number of inputs, it proportionally
// increases the number of outputs.


// TRIANGULAR NUMBER___________________________________

function triangle(n) {
    if (n < 2)
        return n;
    return n + triangle(n - 1);
}

// Notation:
// O(n)

// Why:
// If you increase the number of inputs, it proportionally
// increases the number of outputs.


// STRING SPLITTER______________________________________

function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1)
        return [str];
		//you don't have to return an array, you can return a string as an array of
		//character
		//return str;
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
	//all these are valid syntax
	//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
	//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

// Notation:
// O(n)

// Why:
// If you increase the number of inputs, it proportionally
// increases the number of outputs.


// BINARY REPRESENTATION_______________________________

function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2); //save the reminder in binary
		//divide the number by 2 and send that to the function again
		//carry the reminder to the next recursion call
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return ''; //base case - at some point the divisions will lead to 0
    }
}

// Notation:
// O(log n)

// Why:
// The runtime increases as the data inputted increases
// but not proportionally. It increases at a very small
// rate.


// ****FACTORIAL_________________________________________

function factorial(n) {
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

// Notation:
// O(n)

// Why:
// If you increase the number of inputs, it proportionally
// increases the number of outputs.


// FIBONACCI____________________________________________

function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Notation:
// O(n^2)

// Why:
// As the data grows, there's an exponential increase
// in runtime.


// ANAGRAMS____________________________________________

function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1);
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
function printAnagram(word){
    //console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}

// Notation:
// O(n!)

// Why:
// For every additional letter inputted, the possible
// number of solutions increases by a factorial.


// ANIMAL HIERARCHY___________________________________

const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

// ==============================

function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;
}

// Notation:
// TBD

// Why:
// The big O of this algorithm really depends on the
// data passed in.


// ORGANIZATION CHART_________________________________

let organization = {
	"Zuckerberg": {
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
        "Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
            "Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}

// Notation:
// TBD

// Why:
// The big O of this algorithm really depends on the
// data passed in.
