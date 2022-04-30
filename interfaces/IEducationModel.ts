import Mongoose = require("mongoose");

interface IEducationModel extends Mongoose.Document {
    jobSeekerId: number;
    universityName: string;
    degree: string;
    fromDate: string;
    todate: string;
}
export {IEducationModel};