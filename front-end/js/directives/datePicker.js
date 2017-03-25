angular.module('lardiApp').directive('datePicker', ['$filter', function ($filter) {
    return {
        templateUrl: './templates/datepicker.html',
        scope: {
            newdata: "=newdata"
        },
        link: function ($scope, element, attrs) {

            $scope.today = function() {
                $scope.newdata.date = Date.now();
            };

            $scope.clear = function() {
                $scope.newdata.date = null;
            };

            $scope.open1 = function() {
                $scope.popup1.opened = true;
            };

            $scope.popup1 = {
                opened: false
            };
        }
    }
}]);