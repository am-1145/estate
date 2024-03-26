const User = require('../models/user.model')
const erroraHandler = require('../utils/error')

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) return next(erroraHandler(404, 'User not found!'))

    const { password: pass, ...rest } = user._doc
    res.status(200).json(rest)
  } catch (error) {
    next(error)
  }
}

module.exports = getUser
