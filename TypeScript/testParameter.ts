function buildName(firstName : string, lastName ?: string) {
	if (lastName){
		return firstName + " " + lastName;
	} else {
		return firstName;
	}
}

let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");

console.log(result1);
console.log(result2);

function buildName2(firstName : string, lastName = "Jeff") {
	return firstName + " " + lastName;
}

console.log(buildName2("Bob"));
console.log(buildName2("Bob", "Mark"));


function buildName3(firstName = "Chang", lastName : string){
	return firstName + " " + lastName;
}

console.log(buildName3("Hello", "Me"));
console.log(buildName3(undefined, "Me"));
