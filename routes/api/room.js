const express = require('express');
const router = express.Router();

// const { RoomSchema, joiRoomSchema } = require("../../models/room");
const { controllerWrapper, authenticate } = require('../../middlewares');
const { room: ctrl } = require("../../controllers");


module.exports = router;

router.get("/", authenticate, controllerWrapper(ctrl.listRooms));

router.get("/:roomId", authenticate, controllerWrapper(ctrl.getRoom));

module.exports = router;