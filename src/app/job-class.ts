export interface JobClass {
    title: string;
    skills:string[];
    domain: string;
    jobId: string;
    jobPosterId: string;
    location: string;
    description: string;
    salary: string;
    applyDeadline:string;
	startDate:Date;
	endDate:string;
	experienceNeeded:string;
    hasApplicants:String
}