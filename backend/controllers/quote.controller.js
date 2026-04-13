import Quote from "../model/quote.model.js"
import User from "../model/User.model.js"


export const createQuote = async (req, res) => {
    try {
        let { title, description } = req.body
        let userId = req.userId

        let quote = await Quote.create({
            author: userId,
            quote: title,
            description
        })

        return res.status(200).json({message: "quote uploaded to the cloud"})
    } catch (error) {
        return res.status(400).json({message: "quote create error"})
    }   
}

export const recieveQuote = async (req, res) => {
    try {
        let quotes = await Quote.find()

        return res.status(200).json(quotes)
    } catch (error) {
        return res.status(400).json({message: "recieve quote error"})
    }
}