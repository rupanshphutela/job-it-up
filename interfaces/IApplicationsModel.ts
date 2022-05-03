import Mongoose = require("mongoose");

interface IApplicationsModel extends Mongoose.Document {
      jobId : string;
      jobSeekerId: string;
	  applicationId: string;
	  expectedSalary: string;
      resume:string;
	  workAuthorization:string;
	  status: string;
}
export {IApplicationsModel};


