const { Schema, model } = require("mongoose");
const Joi = require("joi");

// create room Schema and model
const RoomSchema = Schema({
    hotel: {
        type: String
    },
    number: {
        type: String,
        required: [true, 'Room number is required']
    },
    type: {
        type: String,
        required: [true, 'Please specify room type']
    },
    price: {
        type: Number,
        required: [true, 'Please specify price per night']
    },
});

const joiRoomSchema = Joi.object({
    hotel: Joi.string().required(),
    type: Joi.string().required(),
    price: Joi.number().required().positive('Только положительное число'),
    number:Joi.number().required().positive('Только положительное число'),
});

const Room = model('Room', RoomSchema);

module.exports = {
    joiRoomSchema,
    RoomSchema
}