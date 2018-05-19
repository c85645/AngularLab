var passcode = 'passcode222';

class Employee {
    private _fullName: string;

    public get fullName(): string {
        return this._fullName;
    }


    public set fullName(fullName: string) {
        if (passcode && passcode == 'passcode') {
            this._fullName = fullName;
        } else {
            console.log('Error: Unauthorized update of employee.');
        }
    }
}

var employee = new Employee();
employee.fullName = 'Jeff_Chang';
if (employee.fullName) {
    console.log(employee.fullName);
}
