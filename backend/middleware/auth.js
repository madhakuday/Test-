const jwt = require("jsonwebtoken")
const usermodel = require("../model/model");

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.loginuser

        if (!token) {
            res.status(404).json("err in token");
        }
        const verfyuser = jwt.verify(token, process.env.SECRET_KEY);
        const user = await usermodel.findOne({ _id: verfyuser._id });

        if (!user || !verfyuser || !token) {
            res.status(404).json("err in auth");
        }

        req.token = token
        req.user = user
        req.userId = user._id
        next()
    } catch (err) {
        res.status(404)
    }
};

module.exports = auth