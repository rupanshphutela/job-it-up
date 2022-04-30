import Mongoose = require("mongoose");

interface IJobModel extends Mongoose.Document {
    title: string;
   skills:string[];
    jobId: number;
    jobPosterId: number;
    location: string;
    description: string;
    salary: string;
    applyDeadline:string;
	startDate:string;
	endDate:string;
	experienceNeeded:string;
}
export {IJobModel};