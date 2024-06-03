const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String, required: true
    }, email: {
        type: String, required: true
    }, age: {
        type: Number, required: false
    }, username: {
        type: String, required: true
    }, password: {
        type: String, required: true
    }
    }, { timestamp: true })

module.export = mongoose.model('User', userSchema)