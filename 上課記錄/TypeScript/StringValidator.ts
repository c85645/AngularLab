interface StringValidator {
    isAcceptable(s: string): boolean;
}

var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;

class LetterOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return numberRegexp.test(s);
    }
}

var strings = ['Hello', '98052', '101'];
var validators: { [s: string]: StringValidator; } = {};
validators['ZIP Code'] = new ZipCodeValidator();
validators['Letters only'] = new LetterOnlyValidator();

strings.forEach(s => {
    for (let name in validators) {
        console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? 'matches' : 'does not match') + name);
    }
})
