// problem one solving

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[2]);
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);
fruits[1] = 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);



// practice problem two solving

var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;

if (myScore > 80) {
    console.log('I got A');
}
else {
    console.log('I have no GPA');
}


//problem number three of one

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}
else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}

// problem number there of two

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('This triangle is Isosceles');
}
else {
    console.log('This triangle is not Isosceles');
}

//

