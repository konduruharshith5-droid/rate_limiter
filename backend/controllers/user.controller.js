import User from "../model/User.model.js"

export const getData = async (req, res) => {
    try {
        let userId = req.userId

        let user = await User.find({_id: userId}).select("-password")

        if (!user) {
            return res.status(400).json({message: "user Does not exist"})
        }

        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({message: `get Data error ${error}`})
    }
}