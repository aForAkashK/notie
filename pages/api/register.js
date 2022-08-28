import UserModel from "../../server/models/register.model"
import connectDb from "../../server/middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken')


const handler = async (req, res) => {
    if (req.method == "POST") {
        var user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            if (req.body.email == "" || req.body.email == null || req.body.email == undefined) {
                res.status(400).json({ Success: false, message: "Email is required" })
            } else if (req.body.password == "" || req.body.password == null || req.body.password == undefined) {
                res.status(400).json({ Success: false, message: "password is required" })
            } else {
                var UserData = new UserModel({
                    email: req.body.email,
                    password: CryptoJS.AES.encrypt(req.body.password, process.env.secret_key).toString()
                })
                var savedData = await UserData.save()
                var payload = { subject: savedData._id }
                var token = jwt.sign(payload, process.env.secret_key);
                res.status(200).json({ Success: true, data: UserData, message: "Successfully Registered", token })
            }
        } else {
            res.status(404).json({ Success: false, message: "User already Exists" })
        }
    }
    else {
        res.status(400).json({ Success: false, message: `${req.method} method is not allowed` })
    }
}

export default connectDb(handler);