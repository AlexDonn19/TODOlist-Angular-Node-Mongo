angular.module('lardiApp').controller('editDialogCtrl', ['$scope', '$uibModalInstance', '$filter', 'card', 'list_id', function ($scope, $uibModalInstance, $filter, card, list_id) {

    $scope.newdata = {
        _id: card._id,
        date: card.date,
        priority: card.priority,
        description: card.description,
        list_id: card.list_id
    };
    // Менять описание можно только в DoIt
    $scope.can_chg_descr = (list_id == 1) ? true : false;
    // до введения данных скрыть кнопку Save
    function checkFields() {
        return ($scope.newdata.description && $scope.newdata.priority) ? false : true;
    };
    $scope.invalid = checkFields();
    $scope.$watch(checkFields, function (newValue) {
        $scope.invalid = checkFields();
    });

    $scope.ok = function () {
        var censoredData = {
            _id: $scope.newdata._id,
            date: $scope.newdata.date,
            priority: $scope.newdata.priority,
            description: $scope.newdata.description,
            list_id: $scope.newdata.list_id
        };
        $uibModalInstance.close(censoredData);
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);