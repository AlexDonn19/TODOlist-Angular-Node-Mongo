angular.module('lardiApp').factory('cardFactory', function () {

    var service = {},
        cards = [];

    service.setCards = function (newcards) {
        cards = newcards;
    };

    function getCardById(card_id) {
        for (var i = cards.length - 1; i >= 0; i--) {
            if (cards[i]._id == card_id) { return cards[i]; };
        };
        return null;
    };

    service.getCards = function (list) {
        var arr = [];
        for (var i = cards.length - 1; i >= 0; i--) {
            if (cards[i].list_id == list.id) { arr.push(cards[i]); };
        };
        return arr;
    };

    service.addCard = function (newdata) {
        cards.push({
            _id: newdata._id,
            date: newdata.date,
            priority: newdata.priority,
            description: newdata.description,
            list_id: 1
        });
    };

    service.deleteCard = function (card) {
        var idx = cards.indexOf(card);
        return cards.splice(idx, 1);
    };

    service.abortCard = function (abortingCard) {
        var card = getCardById(abortingCard._id);
        card.list_id = 4;
    };

    service.moveCard = function (movingCard) {
        var card = getCardById(movingCard._id);
        card.list_id = card.list_id + 1;
    };

    service.updateCard = function (updatingCard) {
        var card = getCardById(updatingCard._id),
            idx = cards.indexOf(card);
        cards[idx] = updatingCard;
    };

    return service;
});