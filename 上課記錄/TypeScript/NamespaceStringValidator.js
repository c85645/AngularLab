var Validation;
(function (Validation) {
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
    Validation.LetterOnlyValidator = LetterOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
var strings = ['Hello', '98052', '101'];
var validators = {};
validators['ZIP Code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LetterOnlyValidator();
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log('"' + s + '"' + (validators[name_1].isAcceptable(s) ? 'matches' : 'does not match') + name_1);
    }
});
