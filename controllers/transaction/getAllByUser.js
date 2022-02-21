const { sendSuccessRes } = require('../../helpers')
const { Transaction } = require('../../models')

const getAllByUser = async (req, res) => {
  const { _id } = res.locals.user
  const transactions = await Transaction.find(
    { owner: _id },
    '_id type price room_number room owner date',
  )
  sendSuccessRes(res, { transactions })
}

module.exports = getAllByUser