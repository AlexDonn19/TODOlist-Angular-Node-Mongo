angular.module('lardiApp')
.constant("baseUrl", "http://localhost:3000/api/cards/")
.factory('httpFactory', ['$http', 'cardFactory', 'baseUrl', function ($http, cardFactory, baseUrl) {

    var service = {};

    service.httpGetCards = function () {
        // $http.get('../data/cards.json').then(function (response) {
        $http.get(baseUrl).then(function (response) {
            console.log('httpFactory: http.get', response.data);
            cardFactory.setCards(response.data);
        }).catch(function (err) {
                console.log('httpFactory: Get Error', err);
                alert('Can`t get data');
            });
    };

    service.httpCreateCard = function (newCard) {
        $http.post(baseUrl, newCard).then(function (response) {
            cardFactory.addCard(response.data.card);
        }).catch(function (err) {
            console.log('httpFactory: Create Error', err);
            alert('Can`t create data');
        });
    };

    service.httpDeleteCard = function (card) {
        $http.delete(baseUrl+card._id).then(function (response) {
            cardFactory.deleteCard(card);
        }).catch(function (err) {
            console.log('httpFactory: Delete Error', err);
            alert('Can`t Delete data');
        });
    };

    service.httpMoveCard = function (card) {
        var moveCard = angular.copy(card);
        moveCard.list_id = moveCard.list_id + 1;
        $http.put(baseUrl+moveCard._id, moveCard).then(function (response) {
            console.log('httpFactory: moveCard response', response.data);
            cardFactory.moveCard(response.data.card);
        }).catch(function (err) {
            console.log('httpFactory: Move Error', err);
            alert('Can`t Move data');
        });
    };

    service.httpAbortCard = function (card) {
        var abortCard = angular.copy(card);
        abortCard.list_id = 4;
        $http.put(baseUrl+abortCard._id, abortCard).then(function (response) {
            console.log('httpFactory: moveCard response', response.data);
            cardFactory.abortCard(response.data.card);
        }).catch(function (response) {
            console.log('httpFactory: Abort Error', response.data);
            alert('Can`t Abort data');
        });
    };

    return service;
}]);