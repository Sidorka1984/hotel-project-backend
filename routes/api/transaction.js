const express = require('express');
const router = express.Router();

const { controllerWrapper, validation, authenticate } = require('../../middlewares');
const {transaction: ctrl} = require('../../controllers');
const { transactionJoiSchema } = require('../../models/transaction');

router.get('/', authenticate, controllerWrapper(ctrl.getAllByUser));

router.post('/', authenticate, validation(transactionJoiSchema), controllerWrapper(ctrl.addTransaction));

module.exports = router;
