angular.module('lardiApp').controller('listCtrl', ['listFactory', 'cardFactory', 'httpFactory', '$uibModal', function (listFactory, cardFactory, httpFactory, $uibModal) {

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

    this.updateCard = function (card, list_id) {

        var uibModalInstance = $uibModal.open({
          templateUrl: './templates/edit-dialog.html',
          controller: 'editDialogCtrl',
          size: 'lg',
          resolve: {
            card: function () { return card; },
            list_id: function () { return list_id; }
          }
        });

        uibModalInstance.result.then(function (newdata) {
            httpFactory.httpUpdCard(newdata);
        });
    };


}]);




