import mongoose from "mongoose";


const Connection = async (UserName,PassWord) => {
    const URL = `mongodb+srv://${UserName}:${PassWord}@ecommerce-web.utpupa8.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
    try{
        await mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true } );
        console.log("Database connected");
    }
    catch(error){
        console.log("Recieved the following error while accessing database",error.message);
    }
}

export default Connection;