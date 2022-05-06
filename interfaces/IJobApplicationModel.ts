import Mongoose = require("mongoose");

interface IJobApplicationModel extends Mongoose.Document {
      jobId : string;
      jobSeekerId: string;
	  applicationId: string;
	  expectedSalary: string;
      resume:string;
	  workAuthorization:string;
	  status: string;
}
export {IJobApplicationModel};


