import Mongoose = require("mongoose");

interface IWorkExperienceModel extends Mongoose.Document {
    jobSeekerId: number,
    companyName: string,
    role: string,
    fromDate: string,
    toDate: string,
}
export {IWorkExperienceModel};