angular.module('lardiApp').controller('cardCtrl',['httpFactory', function (httpFactory) {

    this.deleteCard = function (card) {
        httpFactory.httpDeleteCard(card);
    };

    this.abortCard = function (card) {
        httpFactory.httpAbortCard(card);
    };

    this.moveCard = function (card) {
        httpFactory.httpMoveCard(card);
    };

}]);