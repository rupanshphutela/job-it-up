import Mongoose = require("mongoose");

interface IEducationModel extends Mongoose.Document {
    jobSeekerId: number;
    education: [
        {
            educationId: number
            universityName: string;
            degree: string;
            fromDate: string;
            todate: string;
        }
    ]
   
}
export {IEducationModel};