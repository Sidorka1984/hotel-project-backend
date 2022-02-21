const { User } = require("../../models");
// const { sendSuccessRes } = require('../../helpers');

const userBalanceUpdate = async (req, res, next) => {
  const { balance } = req.body
  const id = res.locals.user.id
  await User.findById(_id)
  await User.findOne({ _id: id }, 'balance')
  return res.status(200).json({ status: 'succes', payload: balance })
}

module.exports = userBalanceUpdate