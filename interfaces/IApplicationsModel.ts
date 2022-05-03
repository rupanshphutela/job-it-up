import Mongoose = require("mongoose");

interface IApplicationsModel extends Mongoose.Document {
      jobId : number;
      jobSeekerId: number;
	  applicationId: number;
	  expectedSalary: string;
      resume:string;
	  workAuthorization:string;
	  status: string;
}
export {IApplicationsModel};


