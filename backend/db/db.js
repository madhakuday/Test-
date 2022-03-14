const mongoose = require("mongoose")
mongoose.connect(process.env.DATA_BASE, (err) => {
    if (err) {
        res.status(404).json("err in mongodb ")
    }
    console.log("db done ");
})