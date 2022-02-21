// const { Schema, model } = require("mongoose");
// const Joi = require("joi");
// const { boolean } = require("joi");
// 
// const RoomSchema = Schema({
    // number: {
        // type: Number,
        // required: true
    // },
    // typeOfRoom: {
        // type: String,
        // required: true
    // },
    // available: {
        // type: boolean,
    // }
// });
// 
// const joiRoomSchema = Joi.object({
    // hotel: Joi.string().required(),
    // type: Joi.string().required(),
    // price: Joi.number().required().positive('Только положительное число'),
    // number:Joi.number().required().positive('Только положительное число'),
// });
// 
// const Room = model('Room', RoomSchema);
// 
// module.exports = {
    // joiRoomSchema,
    // RoomSchema,
    // Room
// }