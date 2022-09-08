

const User = require('../model/userschema')
const AuthenticateUser = async (req, res, next) => {
    try {
        const userNaame = User.inputs;
        const arrLength = userNaame.length;

        const rootUsername = await User.findOne({ name: userNaame[arrLength - 1].username });

        if (!rootUsername) {
            throw new Error("User Not found");
        }
        console.log(rootUsername);
        req.rootUsername = rootUsername;
        req.userID = rootUsername._id;

        next();
    } catch (err) {
        res.status(401).send('Unauthorized:NO token Provided')
        console.log(err);
    }


}

module.exports = AuthenticateUser; 