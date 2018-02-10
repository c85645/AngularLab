var mainApp = angular.module('mainApp', []);
mainApp.factory('MathService', ['', function(){
    var factory = {};

    factory.multiply = function(a, b){
        return a * b;
    }

    return factory;
}])



mainApp.service('CalService', function(MathService){
    this.square = function(a){
        return MathService.multiply(a, a);
    }
});
