import Mongoose = require("mongoose");

interface IJobSeekerModel extends Mongoose.Document {
    userId: number,
    jobSeekerId: number,
    bio: string,
    resume: string,
    picture: string,
    location: string,
    fname: string,
    lname: string,
    contactNo: string,
    email: string,
    referralCode: string,
    primarySkills: [string],
    otherSkills: [string]
}
export {IJobSeekerModel};