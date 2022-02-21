const express = require('express');
const router = express.Router();

// const { RoomSchema, joiRoomSchema } = require("../../models/room");
const { controllerWrapper, authenticate } = require('../../middlewares');
const { hotel: ctrl } = require("../../controllers");


module.exports = router;

router.get("/", authenticate, controllerWrapper(ctrl.listHotel));

router.get("/:roomId", authenticate, controllerWrapper(ctrl.listHotel));

module.exports = router;