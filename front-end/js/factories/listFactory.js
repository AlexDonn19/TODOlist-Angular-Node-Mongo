angular.module('lardiApp').factory('listFactory', function () {
    console.log('listFactory added');
    var service = {};

    var lists = [
        {
            id: 1,
            listName: 'DO IT',
            canmove: true,
            canabort: true,
            candelete: false,
            canupdate: true
        },
        {
            id: 2,
            listName: 'IN PROGRESS',
            canmove: true,
            canabort: true,
            candelete: false,
            canupdate: true
        },
        {
            id: 3,
            listName: 'DONE',
            canmove: false,
            canabort: false,
            candelete: true,
            canupdate: false
        },
        {
            id: 4,
            listName: 'ABORTED',
            canmove: false,
            canabort: false,
            candelete: true,
            canupdate: false
        }
    ];

    service.getLists = function () {
        return lists;
    };

    return service;
});