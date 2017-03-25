var lardiApp = angular.module("lardiApp", ['ui.bootstrap'])
.controller("lardiCtrl", ['httpFactory', function (httpFactory) {

    httpFactory.httpGetCards();

}]);


