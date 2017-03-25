module.exports = function (app) {

    var cors = require('cors');
    var log = require('../libs/log')(module);
    var Card = require('../models/card').Card;

    // app.use(function(req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //   next();
    // });
    app.options('*', cors());

	app.get('/', require('./frontpage').get);

    app.get('/api/cards', cors(), function(req, res) {
        return Card.find(function (err, cards) {
            if (!err) {
                return res.send(cards);
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });

    app.post('/api/cards', cors(), function(req, res) {
        log.info('post: req', req.body);
        var card = new Card({
            date: req.body.date,
            priority: req.body.priority,
            description: req.body.description,
            list_id: req.body.list_id
        });

        card.save(function (err) {
            if (!err) {
                log.info("card created");
                return res.send({ status: 'OK', card:card });
            } else {
                console.log(err);
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error' });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                }
                log.error('Internal error(%d): %s',res.statusCode,err.message);
            }
        });
    });

    app.get('/api/cards/:id', cors(), function(req, res) {
        return Card.findById(req.params.id, function (err, card) {
            if(!card) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' });
            }
            if (!err) {
                return res.send({ status: 'OK', card:card });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });

    app.put('/api/cards/:id', cors(), function (req, res){
        log.info('put: req.params', req.params);
        return Card.findById(req.params.id, function (err, card) {
            if(!card) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' });
            };

            card.date = req.body.date;
            card.priority = req.body.priority;
            card.description = req.body.description;
            card.list_id = req.body.list_id;
            return card.save(function (err) {
                if (!err) {
                    log.info("card updated");
                    return res.send({ status: 'OK', card:card });
                } else {
                    if(err.name == 'ValidationError') {
                        res.statusCode = 400;
                        res.send({ error: 'Validation error' });
                    } else {
                        res.statusCode = 500;
                        res.send({ error: 'Server error' });
                    }
                    log.error('Internal error(%d): %s',res.statusCode,err.message);
                };
            });
        });
    });

    app.delete('/api/cards/:id', cors(), function (req, res){
        return Card.findById(req.params.id, function (err, card) {
            if(!card) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' });
            };
            return card.remove(function (err) {
                if (!err) {
                    log.info("card removed");
                    return res.send({ status: 'OK' });
                } else {
                    res.statusCode = 500;
                    log.error('Internal error(%d): %s',res.statusCode,err.message);
                    return res.send({ error: 'Server error' });
                };
            });
        });
    });
};



