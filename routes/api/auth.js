const express = require('express');
const router = express.Router();

const { joiSchema, updatebalanceJoiSchema } = require("../../models/user");
const { controllerWrapper, validation, authenticate } = require('../../middlewares');
const { auth: ctrl } = require("../../controllers");


module.exports = router;

router.post("/users/signup", validation(joiSchema), controllerWrapper(ctrl.signup));
router.post('/', validation(updatebalanceJoiSchema), controllerWrapper(ctrl.userBalanceUpdate));

router.post("/users/login", validation(joiSchema), controllerWrapper(ctrl.login));

router.get("/users/logout", authenticate, controllerWrapper(ctrl.logout));

module.exports = router;