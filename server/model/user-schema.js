import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true,
        trim: true,
        min:5,
        max:12
    } ,
    email :{
        type:String,
        required : true,
        trim: true,
        min:5,
        max:25,
        lowercase:true,
        unique: true
    },
    phone : {
        type:String,
        required : true,
        trim: true,
        min:10,
        max:10,
        unique : true,
        index: true
    },
    password :{
        type:String,
        required : true,
        trim: true,
        min:5,
        max:15
    }
})

const User = mongoose.model('user',userSchema);

export default User;