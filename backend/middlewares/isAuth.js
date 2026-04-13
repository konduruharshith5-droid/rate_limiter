import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies

        if (!token) {
            return res.status(401).json({message: "cookie does not exist"})
        }

        let verifyToken = jwt.verify(token, "lksdflkjdsfofkjdkoskdllkj")

        if (!verifyToken) {
            return res.status(400).json({message: "token error"})
        }

        req.userId = verifyToken.Userid 
        next()
    } catch (error) {
        return res.status(500).json({message: `isAuth Error ${error}`})
    }
}

export default isAuth;