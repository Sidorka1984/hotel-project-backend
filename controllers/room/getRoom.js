const { NotFound  } = require("http-errors");
const { sendSuccessRes } = require('../../helpers');
const { Room } = require("../../models/room");

const getRoom = async (req, res) => {
    const {roomId} = req.params;
    const result = await Room.find(roomId, "_id content name number price foto available");
    if (!result) {
        throw new NotFound(`Room with id=${roomId} not found`)
      }
      sendSuccessRes(res, { result });
}
module.exports = getRoom;
