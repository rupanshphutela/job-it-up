import Mongoose = require("mongoose");

interface IApplicationsModel extends Mongoose.Document {
    jobSeekerId: number;
    applications: [ {
        jobId: number,
	  applicationId: number,
	  expectedSalary: string,
      resume:string,
	  workAuthorization:string,
	  status: string
    }];
}
export {IApplicationsModel};