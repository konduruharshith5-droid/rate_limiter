import jwt from "jsonwebtoken";

const genToken = async (Userid) => {
    try {
        let token = await jwt.sign({Userid}, "lksdflkjdsfofkjdkoskdllkj", {expiresIn: '7d'});
        return token
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "token generation error"})
    }
}

export default genToken;