// multi stage condition

var money = 50;
var pen = 60;
var khata = 55;

if (money > pen) {
    console.log('I can buy a pen');
}
else if (money > khata) {
    console.log('I can buy a khata');
}
else {
    console.log('I can not buy a pen and khata');
}



// nested condition in conditional statement

var goodInMath = true;
var goodInEnglish = false;
var goodInPhysics = false;
var goodInChemistry = true;

if (goodInMath == true) {
    if (goodInChemistry == false) {
        console.log('You do not do study');
    }
    else {
        console.log('You can do study');
    }
}
else {
    console.log('You should study physics');
}