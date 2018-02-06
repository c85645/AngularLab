class Animal {
	// name: string;
	constructor(protected theName: string) {
		// this.name = theName;
	}
	move(distanceInMeters: number = 0){
		console.log(`${this.theName} moved ${distanceInMeters}m.`);
	}
}

class Snake extends Animal {
	constructor(name: string){
		super(name);
	}
	move(distanceInMeters = 5){
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}

class Horses extends Animal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 45){
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horses('Tommy the Palomino');

sam.move();
tom.move(34);