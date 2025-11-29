import mongoose from "mongoose";

const CollaborationSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    author: [String],
    tags: [String],
    members: [String]
})

export const Collaboration = mongoose.model("Collaboration", CollaborationSchema);
