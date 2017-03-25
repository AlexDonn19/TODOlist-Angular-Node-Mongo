var mongoose = require('./libs/mongoose');
mongoose.set('debug', true);
var async = require('async');

// 1. drop collection cards  - очистить существующую базу
// 2. create & save 3 cards  - создавать events
// 3. close connection       - закрывать соединение

async.series([
	open,
	dropCardsDatabase,
	requireModels,
	createCards
], function (err, results) {
	mongoose.disconnect();
    /// Makesure error outputed before process exit.
    process.stderr.write('', function () {
        process.exit(err ? 255 : 0);
    });
});

function open(callback) {
  mongoose.connection.on('open', callback);
};

function dropCardsDatabase(callback) {
  var db = mongoose.connection.db,
      collection = db.collection('cards');
  collection.remove({}, callback);
};

function requireModels(callback) {
  require('./models/card');
  async.each(Object.keys(mongoose.models), function (modelName, callback) {
  	mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
};

function createCards(callback) {

  var cards = [
  	{date: '01.03.2017', priority: 'high', description: 'Learn HTML', list_id: 1},
  	{date: '02.03.2017', priority: 'medium', description: 'Watch the webinar', list_id: 1},
  	{date: '03.03.2017', priority: 'low', description: 'Test project', list_id: 1},
    {date: '04.03.2017', priority: 'medium', description: 'Check payment', list_id: 1}
  ];

  async.each(cards, function (cardData, callback) {
  	var card = new mongoose.models.Card(cardData);
  	card.save(callback);
  }, callback);
};







