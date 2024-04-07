
import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://anshgusain08:Jc2NRxaNewtdobgO@cluster0.p6nkpqw.mongodb.net/");

const user=mongoose.Schema({
    nameOfOrg:String,
    email:String,
    feed:{ type: Array, default: [] },
});

const User=mongoose.model('User',user);

export default User;
