angular.module('lardiApp').controller('cardCtrl',['httpFactory', 'cardFactory', function (httpFactory, cardFactory) {

    this.deleteCard = function (card) {
        httpFactory.httpDeleteCard(card);
        // cardFactory.deleteCard(card);
    };

    this.abortCard = function (card) {
        httpFactory.httpAbortCard(card);
        // cardFactory.abortCard(card);
    };

    this.moveCard = function (card) {
        httpFactory.httpMoveCard(card);
        // cardFactory.moveCard(card);
    };

}]);