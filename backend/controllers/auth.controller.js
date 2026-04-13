import User from "../model/User.model.js";
import bcrypt from "bcrypt";
import genToken from "../config/token.js";

export const createUser = async (req, res) => {
    try {
        let {name, email, password} = req.body;

        let exist_name = await User.findOne({email});

        if (exist_name){
            return res.status(400).json({message: "User exist already"})
        }

        let hashedPassword = await bcrypt.hash(password, 10)

        let user = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        let token = await genToken(user._id)

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "Lax", 
            maxAge: 7*24*60*60*1000,
            secure: false
        })

        return res.status(200).json({message:"SignUp Sucessfull"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: `signup error ${error}`})
    }
} 

export const signIn = async (req, res) => {
    try {
        let {email, password} = req.body;

        let user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message: "User Not Found"})
        }

        let comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword) {
            return res.status(400).json({message: "Password Mismatch try again"})
        }

        let token = await genToken(user._id)

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "Lax",
            maxAge: 7*24*60*60*1000,
            secure: false
        })

        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({message: "signIn error"})
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(201).json({message: "logout Sucessfull"})
    } catch (error) {
        return res.status(400).json({message: "logout error"})
    }
}