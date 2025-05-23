import mongoose from "mongoose"
const { Schema } = mongoose

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true, minLength: 6 },
    email: { type: String, required: true, unique: true },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],
    profileImage: { type: String, default: "" },
    coverImage: { type: String, default: "" },
    bio: { type: String, default: "" },
    link: { type: String, default: "" },
    likedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: []
        }
    ]

}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User