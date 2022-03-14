const mongoose = require("mongoose");
const bcript = require("bcryptjs");
const jwt = require("jsonwebtoken");

const usertschema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }
    ]
});

usertschema.methods.genretAuthToken = async function (next) {
    try {

        const token = await jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token
    } catch (err) {
        res.ststus(404).json("on valid data ")

    }
}

usertschema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            this.password = await bcript.hash(this.password, 10)
        }
        next()
    } catch (err) {
        res.ststus(404).json("data sis incoorect")
    }
})

const userdata = mongoose.model("userdata", usertschema)

module.exports = userdata