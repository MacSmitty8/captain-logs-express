const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    entry: {
        type: String,
        required: true
    },
    shipIsBroken: Boolean,
    }
)

const Logs = mongoose.model('Logs', fruitSchema)

module.exports = Logs;
