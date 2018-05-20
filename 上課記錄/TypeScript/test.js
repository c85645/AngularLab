var customer = 'Jeff';
function hello(customer) {
    console.log("Hello! " + customer);
}
hello(customer);
var x = 1;
var y = '2';
function add(a, b) {
    return a + b;
}
console.log(add(x, y));
// 第一種寫法
var myFunc = function (nameFunction) {
    return ('Hello ' + nameFunction() + '.');
};
console.log(myFunc(function () {
    return 'Adam';
}));
// 第二種寫法-函數調用串連起來
var myFunc2 = function (nameFunction) {
    return ('Hello ' + nameFunction() + '.');
};
var printName2 = function (nameFunction, printFunction) {
    printFunction(myFunc2(nameFunction));
};
printName2(function () { return 'Adam2'; }, console.log);
// 第三種寫法
var myFunc3 = function (nameFunction) { return ('Hello ' + nameFunction() + '.'); };
var printName = function (nameFunction, printFunction) { return printFunction(myFunc3(nameFunction)); };
printName(function () { return "Adam3"; }, console.log);
