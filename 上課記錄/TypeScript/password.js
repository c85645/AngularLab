var passcode = 'passcode222';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (fullName) {
            if (passcode && passcode == 'passcode') {
                this._fullName = fullName;
            }
            else {
                console.log('Error: Unauthorized update of employee.');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = 'Jeff_Chang';
if (employee.fullName) {
    console.log(employee.fullName);
}
