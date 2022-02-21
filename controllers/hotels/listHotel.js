const { Hotel } = require('../../models/hotel');
const { sendSuccessRes } = require('../../helpers');

const listHotel = async (req, res) => {
  const {_id} = req.user;
  const result = await Hotel.find({owner: _id}, "_id content owner");
  sendSuccessRes(res, { result }, 200)
}

module.exports = listHotel