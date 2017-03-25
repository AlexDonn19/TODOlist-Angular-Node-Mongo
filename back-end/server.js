﻿var express = require('express');
var path = require('path'); // модуль для парсинга пути
var favicon = require('serve-favicon');
var log = require('./libs/log')(module);  //подключим обёртку на логером
var logger = require('morgan');
var config = require('./config');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

if (app.get('env') == 'development' ) {    // выводим все запросы со статусами в консоль
  app.use(logger('dev'));
} else {
  app.use(logger('default'));
}

app.use(bodyParser.json());  // стандартный модуль, для парсинга JSON в запросах
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride()); // поддержка put и delete

require('./routes')(app);  // модуль для простого задания обработчиков путей
app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)


app.use(function(req, res, next){
    res.status(404);
    log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});


app.listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});