const { Room } = require('../../models/room');
const { sendSuccessRes } = require('../../helpers');

const listRooms = async (req, res) => {
  const {_id} = req.room;
  const result = await Room.find({owner: _id}, "_id content owner");
  sendSuccessRes(res, { result }, 200)
}

module.exports = listRooms;