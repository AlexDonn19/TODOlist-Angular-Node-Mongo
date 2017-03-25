var lardiApp = angular.module("lardiApp", ['ui.bootstrap'])
.controller("lardiCtrl", ['httpFactory', function (httpFactory) {
    console.log('lardi works');

    httpFactory.httpGetCards();

}]);


