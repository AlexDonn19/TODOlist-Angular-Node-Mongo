angular.module('lardiApp').controller('listCtrl', ['cardFactory', 'httpFactory', '$uibModal', function (cardFactory, httpFactory, $uibModal) {

    this.getCards = function (list) {
        return cardFactory.getCards(list);
    };

    this.createItem = function () {

        var uibModalInstance = $uibModal.open({
          templateUrl: './templates/add-dialog.html',
          controller: 'addDialogCtrl',
          size: 'lg'
        });

        uibModalInstance.result.then(function (newdata) {
            httpFactory.httpCreateCard(newdata);
        });
    };
}]);




