const { NotFound  } = require("http-errors");
const { sendSuccessRes } = require('../../helpers');
const { Hotel } = require("../../models/hotel");

const getHotel = async (req, res) => {
    const {hotelId} = req.params;
    const result = await Hotel.find(hotelId, "_id content name number price foto available");
    if (!result) {
        throw new NotFound(`Hotel with id=${hotelId} not found`)
      }
      sendSuccessRes(res, { result });
}
module.exports = getHotel;
