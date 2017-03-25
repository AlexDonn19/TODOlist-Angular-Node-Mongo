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
            console.log('listFactory: newdata', newdata);
            // cardFactory.addCard(newdata);
            httpFactory.httpCreateCard(newdata);
        });
    };
}]);




