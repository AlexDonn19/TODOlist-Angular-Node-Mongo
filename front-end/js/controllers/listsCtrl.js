angular.module('lardiApp').controller('listsCtrl', ['listFactory', function (listFactory) {

    this.lists = listFactory.getLists();

}]);