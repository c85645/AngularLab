class Animal {
	move (distanceInMeters : number = 0){
		console.log(`Animal moved ${distanceInMeters}m.`);
	}
	speak() {
		console.log("Say Something!");
	}
}

class Dog extends Animal {
	bark() {
		console.log("Woof! Woof!");
	}
	speak() {
		console.log("I'm dog!");
	}
}

class Cat extends Animal {
	speak() {
		console.log("I'm cat!");
	}
}

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// 多型
let snoopy: Animal = new Dog();
snoopy.speak(); // Dynamic Binding

let kitty: Animal = new Cat();
kitty.speak(); // VMI(Virtual Method Invocation)