import Mongoose = require("mongoose");

interface IJobPosterModel extends Mongoose.Document {
    userId: number,
    jobPosterId: number,
	contactNo: string,
	fname: string,
	lname: string,
	email: string,
	referralCode: string,
	location: string,
	companyName: string,
	picture: string,
	companyLogo: string,
	Overview: string,
	website: string,
	industry: string,
	companySize: string,
	headquarters: string,
	founded: string
}
export {IJobPosterModel};