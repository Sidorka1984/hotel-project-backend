const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const userSchema = Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
      },
    token: {
        type: String,
        default: null,
    },
    balance: {
        type: Number,
        default: 0,
      }
}, { versionKey: false, timestamps: true });

userSchema.methods.setPassword = function (password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
const updatebalanceJoiSchema = Joi.object({
    balance: Joi.number().required()
  })

userSchema.methods.createToken = function () {
    const payload = {
        _id: this._id
    };
    return jwt.sign(payload, SECRET_KEY)
}


const joiSchema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().min(6).required()
});
const userJoiSchemaLogin = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required()
  })

const User = model("user", userSchema);

module.exports = {
    User,
    joiSchema,
    userJoiSchemaLogin,
    updatebalanceJoiSchema
}

