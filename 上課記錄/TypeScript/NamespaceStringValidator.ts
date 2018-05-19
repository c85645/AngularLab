namespace ValidationExp {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;

    export class LetterOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

var strings = ['Hello', '98052', '101'];
var validators: { [s: string]: ValidationExp.StringValidator; } = {};
validators['ZIP Code'] = new ValidationExp.ZipCodeValidator();
validators['Letters only'] = new ValidationExp.LetterOnlyValidator();

strings.forEach(s => {
    for (let name in validators) {
        console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? 'matches' : 'does not match') + name);
    }
})
