import UserModel from "../../server/models/register.model"
import connectDb from "../../server/middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {
            var UserData = new UserModel({
                email: req.body[i].email,
                password: req.body[i].password
            })
        }
        await UserData.save()
        res.status(200).json({ Success: "true", data: UserData })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler);