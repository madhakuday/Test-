// const express = require("express")
// const router = express.Router();
// const bcrypt = require("bcryptjs")

// const auth = require("../middleware/auth")

// const usermodel = require("../model/model")

// router.post("/register", async (req, res) => {
//     try {
//         const { name, email, password } = req.body
//         // exist or not
//         const userexist = await usermodel.findOne({ email: email })

//         if (userexist) {
//             res.status(404).json({ err: "user alrady exist " })
//         }

//         const newuserdata = new usermodel({
//             name, email, password
//         });

//         if (!newuserdata) {
//             res.status(404).json({ err: "all field required" })
//         }
//         await newuserdata.save();
//         const token = await newuserdata.genretAuthToken()

//         res.status(200).json("data save")

//     } catch (err) {
//         res.status(400).json({ err: err.message })
//     }
// });


// router.post("/login", async (req, res) => {
//     try {

//         // const { email, password } = req.body;
//         const email = req.body.email
//         const password = req.body.password

//         if (!email || !password) {
//             res.status(404).json({ err: "email and password not match" })
//         }

//         const useremail = await usermodel.findOne({ email: email });
//         const isMatch = await bcrypt.compare(password, useremail.password)


//         if (isMatch) {
//             const token = await useremail.genretAuthToken()

//             res.cookie("loginuser", token)
//             res.status(200).json({ success: "Logd in" })
//         } else {
//             res.status(404).json({ "err": "err is in match" })

//         }

//     } catch (err) {
//         res.status(404).json("err in login")
//     }
// });

// router.get("/about", auth, (req, res) => {
//     res.send(req.user)
// });

// router.get("/logout", auth, (req, res) => {
//     res.clearCookie("loginuser")
//     res.status(200).send("user logd out")
// });

// module.exports = router
const express = require("express")
const router = express.Router();
const bcrypt = require("bcryptjs")


const auth = require("../middleware/auth")




//model
const usermodel = require("../model/model")



router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body
        // exist or not
        const userexist = await usermodel.findOne({ email: email })

        if (userexist) {
            res.status(404).json({ err: "user alrady exist " })
        }


        const newuserdata = new usermodel({
            name, email, password
        });

        if (!newuserdata) {
            res.status(404).json({ err: "all field required" })
        }
        await newuserdata.save();
        const token = await newuserdata.genretAuthToken()

        res.status(200).json("data save")

    } catch (err) {
        res.status(400).json({ err: err.message })
    }
});

router.post("/login", async (req, res) => {
    try {

        // const { email, password } = req.body;
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            res.status(404).json({ err: "email and password not match" })
        }

        const useremail = await usermodel.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, useremail.password)


        if (isMatch) {
            const token = await useremail.genretAuthToken()

            res.cookie("loginuser", token)
            res.status(200).json({ success: "Logd in" })
        } else {
            res.status(404).json({ "err": "err is in match" })

        }

    } catch (err) {
        res.status(404).json("err in login")
    }
});


router.get("/about", auth, (req, res) => {
    res.send(req.user)
});

router.get("/logout", auth, (req, res) => {
    res.clearCookie("loginuser", { path: '/' })
    res.status(200).send("user logd out")
});


module.exports = router

