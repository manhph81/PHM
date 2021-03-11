import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: {type : String, require:true},
    email: {type : String, require:true},
    password: {type : String, require:true},
    role: {type : String, require:true},
    id: {type : String, require:true},
})

var User = mongoose.model('User', postSchema);

export default User;