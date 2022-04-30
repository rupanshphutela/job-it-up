import Mongoose = require("mongoose");

interface IWorkExpModel extends Mongoose.Document {
    jobSeekerId: number,
    companyName: string,
    role: string,
    fromDate: string,
    toDate: string,
}
export {IWorkExpModel};