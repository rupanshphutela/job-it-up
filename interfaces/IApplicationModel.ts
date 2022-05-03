import Mongoose = require("mongoose");

interface IApplicationModel extends Mongoose.Document {
      jobId : string;
      jobSeekerId: string;
	  applicationId: string;
	  expectedSalary: string;
      resume:string;
	  workAuthorization:string;
	  status: string;
}
export {IApplicationModel};


