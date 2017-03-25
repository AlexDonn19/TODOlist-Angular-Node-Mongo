angular.module('lardiApp').controller('addDialogCtrl', ['$scope', '$uibModalInstance', '$filter', function ($scope, $uibModalInstance, $filter) {

    $scope.newdata = {
        date: new Date(),
        priority: '',
        cardDescription: ''
    };
    // до введения данных скрыть кнопку Save
    function checkFields() {
        return ($scope.newdata.cardDescription && $scope.newdata.priority) ? false : true;
    };
    $scope.invalid = checkFields();
    $scope.$watch(checkFields, function (newValue) {
        $scope.invalid = checkFields();
    });

    $scope.ok = function () {
        var censoredData = {
            date: $filter("date")($scope.newdata.date, 'dd.MM.yyyy'),
            priority: $scope.newdata.priority,
            description: $scope.newdata.cardDescription,
            list_id: 1
        };
        $uibModalInstance.close(censoredData);
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);