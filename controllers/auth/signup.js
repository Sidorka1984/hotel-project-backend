const { User } = require("../../models");
const { Conflict } = require("http-errors");
const { sendSuccessRes } = require('../../helpers');

const signup = async(req, res) => {
    const { email, password, name } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        throw new Conflict("Already signup")
    }
    const newUser = new User({ email, name })
    newUser.setPassword(password);
    
    await newUser.save();
  
    sendSuccessRes(res, null, 201)
 
    // res.status(201).json({
        // status: 200,
        // message: 'Succes register',
        // data: {
            // verifyToken,
        // },
    // });
};

module.exports = signup;
