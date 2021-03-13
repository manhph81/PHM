import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    processName:String,
    processDetail: String,
    processType: String,
    processOwner: String,
    processSelectedFile:String,
    processCreatedAt: {
        type: Date,
        default: new Date(),
    },
})

var Process = mongoose.model('process', postSchema);

export default Process;