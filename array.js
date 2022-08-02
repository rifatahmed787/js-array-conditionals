// various elements in array

var myFriendsName = ['Hanif', 'Pranto', 'Imran', 'Akash', 'Habib'];
console.log(myFriendsName);
console.log(myFriendsName.length);

// array index elements

var myNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(myNumber[0]);

console.log(myNumber[1] + myNumber[2]);
var firstSecond = myNumber[0] + myNumber[1];
console.log(firstSecond);

// Replaceing index

var myNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var number2 = myNumber[1];
console.log(number2);
myNumber[1] = 25;
console.log(myNumber);

// get position of array's element

var myNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var positionIndex = myNumber.indexOf(10);
console.log(positionIndex);
