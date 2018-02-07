abstract class Department{
	constructor(public name: string){}

	printName() : void {
		console.log("Department name: " + this.name);
	}

	abstract printMeeting(): void;
}

class AccountingDepartment extends Department{
	constructor(){
		super("Accounting and auditing");
	}

	printMeeting() : void {
		console.log("The Accounting Department neets each Monday")
	}
}