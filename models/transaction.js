const { Schema, model } = require("mongoose");
const Joi = require('joi');

const transactionSchema = Schema({
  type: {
    type: Boolean,
    required: true,
  },
  room: {
    type: String,
    required: true
  },
  room_number: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
  owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
}, { versionKey: false, timestamps: true });

const transactionJoiSchema = Joi.object({
  type: Joi.string().required(),
  price: Joi.number().required().positive('Только положительное число'),
  room_number:Joi.number().required().positive('Только положительное число'),
  room: Joi.string().required(),
  date: Joi.string().required()
});

const Transaction = model('transaction', transactionSchema)

module.exports = {
  transactionJoiSchema,
  Transaction
};
