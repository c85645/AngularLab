var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
var LetterOnlyValidator = /** @class */ (function () {
    function LetterOnlyValidator() {
    }
    LetterOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LetterOnlyValidator;
}());
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
var strings = ['Hello', '98052', '101'];
var validators = {};
validators['ZIP Code'] = new ZipCodeValidator();
validators['Letters only'] = new LetterOnlyValidator();
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log('"' + s + '"' + (validators[name_1].isAcceptable(s) ? 'matches' : 'does not match') + name_1);
    }
});
