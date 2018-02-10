function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Adams");
console.log(result1);
console.log(result2);
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Jeff"; }
    return firstName + " " + lastName;
}
console.log(buildName2("Bob"));
console.log(buildName2("Bob", "Mark"));
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = "Chang"; }
    return firstName + " " + lastName;
}
console.log(buildName3("Hello", "Me"));
console.log(buildName3(undefined, "Me"));
