angular.module('lardiApp').controller('cardCtrl',['httpFactory', 'cardFactory', function (httpFactory, cardFactory) {

    this.deleteCard = function (card) {
        httpFactory.httpDeleteCard(card);
    };

    this.abortCard = function (card) {
        httpFactory.httpAbortCard(card);
    };

    this.moveCard = function (card) {
        httpFactory.httpMoveCard(card);
    };

    this.updCard = function (card) {
        httpFactory.httpUpdCard(card);
    };

}]);