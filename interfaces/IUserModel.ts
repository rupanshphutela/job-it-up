import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
   
    userName: string;
   
}
export {IUserModel};