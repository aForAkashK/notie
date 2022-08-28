import UserModel from "../../server/models/register.model"
import connectDb from "../../server/middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken')


const handler = async (req, res) => {
    if (req.method == "POST") {
        if (req.body.email == "" || req.body.email == null || req.body.email == undefined) {
            res.status(400).json({ Success: false, message: "Email is required" })
        } else {
            var user = await UserModel.findOne({ email: req.body.email });
            if (user) {
                if (req.body.password == "" || req.body.password == null || req.body.password == undefined) {
                    res.status(400).json({ Success: false, message: "password is required" })
                } else {
                    const bytes = CryptoJS.AES.decrypt(user.password, process.env.secret_key)
                    var decryptedPassword = bytes.toString(CryptoJS.enc.Utf8)
                    if (req.body.email == user.email && req.body.password == decryptedPassword) {
                        var payload = { subject: user._id }
                        var token = jwt.sign(payload, process.env.secret_key);
                        res.status(200).json({ Success: true, message: "Successfully Registered", token })
                    } else {
                        res.status(200).json({ Success: true, message: "Invalid Credentials" })
                    }
                }
            } else {
                res.status(404).json({ Success: false, message: "User Doesn't Exists" })
            }
        }
    }
    else {
        res.status(400).json({ Success: false, message: `${req.method} method is not allowed` })
    }
}

export default connectDb(handler);