// soal 1
const n1: number = 9;
let multi: number = 0;

for (let i = 1; i <= n1 ; i++) {
    multi = n1 * i;
    console.log(`${n1} x ${i} = ${multi}`);
};

// soal 2
let w1: string = "level";
let numberOfsamechar: number = 0;

for (let i = 0; i < w1.length; i++) {
    if (w1[i] == w1[(w1.length-1)-i] ) {
        numberOfsamechar++;
    }
}

console.log(numberOfsamechar == w1.length ? `${w1} is polindrome` : `${w1} is not polindrome`);

// soal 3
const km1: number = 100000; // in cm
let m1: number = 100000; // cm 

const convert: number = m1/km1;
console.log(`${m1} cm = ${convert} km`);

// soal 4
const harga = 1000;

// solution 1
console.log(`Rp ${harga},00`);

// Solution 2
let idr = new Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR',
});

console.log(`${idr.format(harga)}`);

// soal 5
let search: string = "al";
let searchIndex: number = 0;
let w2: string = "Hallo";

let chars = [];

// turn word provided into a chars array
for (let i = 0; i < w2.length; i++) {
    chars.push(w2[i]);
}

// find same chars from search in chars array and remove it
for (let i = 0; i < w2.length; i++) {
    if (search[searchIndex] == w2[i]) {
        searchIndex++;
        chars.splice(i,1);
    }
}

// a variable to store chars left
let charsLeft: string = ""; 

// turn left chars in array into a string
for (let i = 0; i < chars.length; i++) {
    charsLeft += chars[i];
}

console.log(charsLeft);

//soal 6
const w3: string = "hello world";

// split words and store it in an array
const words = w3.split(" ");

let result: string = "";

// capitalize every word in array
words.forEach(e => {
    let capital: string = " " + e[0].toUpperCase();
    let restChar: string = e.slice(1);
    result += capital += restChar;
});

console.log(result.trim());

// soal 7
const w4: string = "The QuiCK BrOwN Fox";

let chars2 = "";

for (let i = 0; i < w4.length; i++) {
    if (w4[i] == w4[i].toUpperCase()) {
        let lower: string = w4[i].toLowerCase();
        chars2 += lower;
    } else if (w4[i] == w4[i].toLowerCase()) {
        let upper: string = w4[i].toUpperCase();
        chars2 += upper;
    }
}

console.log(chars2);

// soal 7
let num1: number = 42;
let num2: number = 54;

console.log(num1 > num2 ? num1 : num2)

// soal 8
let number1: number = 42;
let number2: number = 27;
let number3: number = 18;

if (number1 < number2 && number1 < number3) {
    if (number2 < number3) {
        console.log(`${number1}, ${number2}, ${number3}`);
    } else {
        console.log(`${number1}, ${number3}, ${number2}`);
    };
} else if (number2 < number1 && number2 < number3) {
    if (number1 < number3) {
        console.log(`${number2}, ${number1}, ${number3}`);
    } else {
        console.log(`${number2}, ${number3}, ${number1}`);
    };
} else if (number3 < number1 && number3 < number2) {
    if (number2 < number1) {
        console.log(`${number3}, ${number2}, ${number1}`);
    } else {
        console.log(`${number3}, ${number1}, ${number2}`);
    };
};

// soal 9
const input = "Hello";

if (typeof input == "string") {
    console.log(1);
} else if (typeof input == "number") {
    console.log(2);
} else {
    console.log(3);
}

// soal 10
const sentence: string = "An apple a day keep the doctor away";

let charTochange: string = "a";

let change = [];
let result2 = "";

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == charTochange || sentence[i] == charTochange.toUpperCase()) {
        change.push("*");
    } else {
        change.push(sentence[i]);
    }
}

for (let i = 0; i < change.length; i++) {
    result2 += change[i];    
}
console.log(result2);

