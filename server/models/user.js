import mongoose from "mongoose";

const userSchema = Schema({
    name: String,
    lastName:String,
    email:String,
    password:String
});

const user = mongoose.model("User", userSchema);

export default user;