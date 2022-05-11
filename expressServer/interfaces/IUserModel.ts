import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
   
    userId: string,
    userName: string;
   
}
export {IUserModel};