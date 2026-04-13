import mongoose from "mongoose";

let quoteSchema = new mongoose.Schema({
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

let Quote = mongoose.model("Quote", quoteSchema);

export default Quote;