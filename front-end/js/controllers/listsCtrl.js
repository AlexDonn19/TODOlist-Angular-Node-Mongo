angular.module('lardiApp').controller('listsCtrl', function (listFactory) {

    this.lists = listFactory.getLists();

});