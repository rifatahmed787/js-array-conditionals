//for single condition


var iphonePrice = 90000;
var myBudged = 50000;
if (iphonePrice < myBudged) {
    console.log('I can buy iphone');
}
else {
    console.log('I will buy vivo');
}


//for multiple condition all condition must be truth

var youGraduated = true;
var yourSalary = 50000;
var gotMarried = false;

if (youGraduated == true && yourSalary > 40000 && gotMarried !== false) {
    console.log('You can get marry!!');
}
else {
    console.log('You can not get marry');
}


// multiple condition min one condition must be truth

var youGraduated = true;
var yourSalary = 50000;
var gotMarried = false;

if (youGraduated == false || yourSalary > 40000 || gotMarried !== false) {
    console.log('You can get marry!!');
}
else {
    console.log('You can not get marry');
}


// multiconditon min two condition must be true


var youGraduated = true;
var yourSalary = 50000;
var gotMarried = false;

if ((youGraduated == false || yourSalary > 40000) && gotMarried == false) {
    console.log('You can get marry!!');
}
else {
    console.log('You can not get marry');
}


