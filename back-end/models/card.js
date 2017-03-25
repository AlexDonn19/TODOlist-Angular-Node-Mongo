var mongoose = require('../libs/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    date: {
        // type: Date,
        // default: Date.now
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    description: {
        type: String,
        // unique: false,   // это условие требует обязательное создание индесков со стороны mongodb
        required: true
    },
    list_id: {
        type: Number,
        required: true
    }
});


exports.Card = mongoose.model('Card', schema);   // в этот момент mongoose автоматически создаст индексы
