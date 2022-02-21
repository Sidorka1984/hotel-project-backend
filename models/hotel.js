const { Schema, model } = require("mongoose");
const Joi = require("joi");

const Room = require('./room');

// create hotel Schema and model
const HotelSchema = Schema({
    name: {
        type: String,
        required: [true, 'Hotel name is required']
    },
    rooms: [{type: Schema.Types.ObjectId, ref: Room}]
});
const joiHotelSchema = Joi.object({
    name: Joi.string().required(),
    rooms:Joi.number().required().positive('Только положительное число'),
});
const Hotel = model('Hotel', HotelSchema);

module.exports = Hotel;