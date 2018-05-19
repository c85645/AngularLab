class Animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	move(distanceInMeters: number = 0) {
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

class Snake extends Animal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 5) {
		console.log('Slithering...');
		super.move(distanceInMeters);
	}
}

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// 多型
let snoopy: Animal = new Dog('dog');
snoopy.speak(); // Dynamic Binding

let kitty: Animal = new Cat('cat');
kitty.speak(); // VMI(Virtual Method Invocation)

var sam = new Snake("Sammy the Python");
sam.move();
