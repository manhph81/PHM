import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name:String,
    owner: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostProduct = mongoose.model('PostProduct', postSchema);

export default PostProduct;