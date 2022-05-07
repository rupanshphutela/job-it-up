db = db.getSiblingDB('jobItUp')
db.createCollection('jobSeeker')
jobSeekerCollection = db.getCollection("jobSeeker")
jobSeekerCollection.remove({})
jobSeekerCollection.insert(
{
	userId: "1",
    jobSeekerId: "1",
	bio: "A software engineer looking for freelance opportunities in Angular",
	resume: "http:localhost:8080/resume/seeker/jsmith.pdf",
	picture: "http:localhost:8080/images/seeker/jsmith.jpg",
	location: "Seattle, WA",
	fname: "John",
	lname: "Smith",
	contactNo: "4254420000",
	email: "john.smith@email.com",
	referralCode: "RS2804221238",
	primarySkills: [ "Node", "Angular", "Express" ],
	otherSkills: [ "React", "MongoDB", "Mongoose" ],
	education: [
		{
			educationId: "1",
			universityName: "Seattle University",
			degree:"Masters in Computer Science",
			fromDate:"08-16-2016",
			toDate:"05-06-2018"
		},
		{
			educationId: "2",
			universityName: "Seattle University",
			degree:"Bachelors in Computer Science",
			fromDate:"08-16-2012",
			toDate:"05-06-2016"
		}
	],
	workExperience: [
		{
			workExperienceId: "1",
			companyName: "Tim's Co-op.",
			role: "Software Engineer",
			fromDate: "06-27-2020",
			toDate: "04-27-2021",
		},
		{
			workExperienceId: "2",
			companyName: "Web MD",
			role: "Software Engineer",
			fromDate: "06-27-2021",
			toDate: "04-27-2022",
		}
	]
}
)
jobSeekerCollection.insert(
{
	userId: "2",
    jobSeekerId: "2",
	bio: "A seasoned dental assistant looking looking for work on MWF from June to September",
	resume: "http:localhost:8080/resume/seeker/cdecker.doc",
	picture: "http:localhost:8080/images/seeker/cdecker.jpg",
	location: "Bellevue, WA",
	fname: "Chloe",
	lname: "Decker",
	contactNo: "2792060000",
	email: "chloe.decker@email.com",
	referralCode: "RP2804228914",
	primarySkills: [ "Office Assitance", "Hygienist", "Dental Medicine" ],
	otherSkills: [ "Good Judgement", "Customer Service", "Administration" ],
	education: [
		{
			educationId: "1",
			universityName: "Columbia University",
			degree:"Doctor Of Medicine",
			fromDate:"08-16-2016",
			toDate:"05-06-2020"
		},
		{
			educationId: "2",
			universityName: "Columbia University",
			degree:"Bachelors Of Medicine",
			fromDate:"08-16-2012",
			toDate:"05-06-2026"
		}
	],
	workExperience: [
		{
			workExperienceId: "1",
			companyName: "Sunrise Pvt. Ltd.",
			role: "Dental Assistant",
			fromDate: "12-27-2019",
			toDate: "01-27-2022",
		}
	]
}
)
jobSeekerCollection.insert(
{
	userId: "3",
    jobSeekerId: "3",
	bio: "Exceptional Math Tutor with 6 years instruction experience looking for a change",
	resume: "http:localhost:8080/resume/seeker/lwalsh.pdf",
	picture: "http:localhost:8080/images/seeker/lwalsh.jpg",
	location: "Kirkland, WA",
	fname: "Lockie",
	lname: "Walsh",
	contactNo: "4257710000",
	email: "lockie.walsh@email.com",
	referralCode: "RP2804227392",
	primarySkills: [ "Algebra", "Calculus", "Probability" ],
	otherSkills: [ "Vedic Maths", "Number Theory", "Analysis" ],
	education: [
		{
			educationId: "1",
			universityName: "Indiana University",
			degree:"Bachelors in Mathematics",
			fromDate:"08-16-2016",
			toDate:"05-06-2020"
		}
	],
	workExperience: [
		{
			workExperienceId: "1",
			companyName: "Bellevue Coaching",
			role: "Math Tutor",
			fromDate: "11-29-2018",
			toDate: "07-27-2020",
		}
	]
}
)
db.createCollection('jobPoster')
jobPosterCollection = db.getCollection("jobPoster")
jobPosterCollection.remove({})
jobPosterCollection.insert(
{
	userId: "4",
    jobPosterId: "1",
	contactNo: "4258810000",
	fname: "Johnny",
	lname: "Rose",
	email: "johnny.rose@email.com",
	referralCode: "RP2804224859",
	location: "Kent, WA",
	companyName: "Morrison Dentistry",
	picture: "http:localhost:8080/images/poster/jrose.jpg",
	companyLogo: "http:localhost:8080/images/company/mdentistry.jpg",
	Overview: "We are your family dentist. /n We specialize in orthodontics",
	website: "morrisondentistry.com",
	industry: "Dental",
	companySize: "10-25",
	headquarters: "Kent, WA",
	founded: "2010"
}
)
jobPosterCollection.insert(
{
	userId: "5",
    jobPosterId: "2",
	contactNo: "9092020000",
	fname: "Walter",
	lname: "White",
	email: "walter.white@email.com",
	referralCode: "RP2804228462",
	location: "Kenmore, WA",
	companyName: "Hudson Finance Consultants",
	picture: "http:localhost:8080/images/poster/wwhite.jpg",
	companyLogo: "http:localhost:8080/images/company/hfinance.jpg",
	Overview: "We at Hudsons help manage your wealth and provide great investment deals",
	website: "hudsonfin.com",
	industry: "Finance",
	companySize: "100-150",
	headquarters: "Seattle, WA",
	founded: "2003"
}
)
jobPosterCollection.insert(
{
	userId: "6",
    jobPosterId: "3",
	contactNo: "9094710000",
	fname: "Manny",
	lname: "Singh",
	email: "manny.singh@email.com",
	referralCode: "RP2804227501",
	location: "Seattle, WA",
	companyName: "Manny Mathnasium",
	picture: "http:localhost:8080/images/poster/msingh.jpg",
	companyLogo: "http:localhost:8080/images/company/mmathnasium.jpg",
	Overview: "Manny's mathnasium specailizes in state-of-the-art mathematics techniques",
	website: "mannysmathnasium.com",
	industry: "Dental",
	companySize: "5-10",
	headquarters: "Seattle, WA",
	founded: "2017"
}
)
db.createCollection('user')
userCollection = db.getCollection("user")
userCollection.remove({})
userCollection.insert(
{
	userId: "1",
	userName: "Sam Trabor",
}
)
userCollection.insert(
{
	userId: "2",
	userName: "Jonathan Trace",
}
)
userCollection.insert(
{
	userId: "3",
	userName: "Yaline Zee",
}
)

db.createCollection('job')
jobCollection = db.getCollection("job")
jobCollection.remove({})
jobCollection.insert(
{
	  title: "Software Tester",
	  skills: ["JavaScript","Angular"],
	  domain: "Software",
	  jobId:"1",
	  jobPosterId: "1",
	  location:"Seattle, WA",
	  description:"Job Requirements:"+
	  "\n1.Assists in the distribution of all Quality Assurance practices, standards, methodologies and metrics"+
			+" \n2.Performs test executions and writes test scripts for complex integrated systems"+
			" \n3.Performs regression testing on new software releases and reports findings"+
			" \n4.Participates in the development and implementation of structured testing concepts, methodologies, and automated testing and support tools."+
	  "\nJob Qualifications:"+
	  "\n1.Proven quality assurance and project analysis experience."+
	  "\n2.Extensive JavaScript, Angular, web-services testing hands-on experience"+
	  "\n3.Experience with QA Automation tools: Protractor and Selenium."+
	  "\n4.Ability to perform white-box testing and write regression and automation scripts"+
	  "\n5.Must be able to code unit test cases and writing QA automation scripts"+
	  "\n6.Strong technical writing, presentation, training and demonstration."+
	  "\nAbout Protingent: Protingent is a niche provider of top Engineering and IT talent to Software, Electronics, Medical Device, Telecom and Aerospace companies nationwide. Protingent exists to make a positive impact and contribution to the lives of others as well as our community by providing relevant, rewarding and exciting work opportunities for our candidates",
	  
	  salary:"$23/hr",
	  applyDeadline:"05/11/2022",
	  startDate:"05/16/2022",
	  endDate:"05/30/2022",
	 experienceNeeded:"3 years"
}
)
jobCollection.insert(
{
	title: "Dental Assistant",
	skills: ["Idaho Expanded Functions certificate(s)","Oregon Dental Radiologic Proficiency certificate","Oregon EFDA"],
	domain: "Dental",
	jobId:"2",
	jobPosterId: "2",
	location:"Seattle,WA",
	description:"To learn more about how Willamette Dental Group is keeping our employees safe, please visit https://willamettedental.com/safety/"+

	"\nThe Endodontic Dental Assistant will provide the Endodontist with assistance in the delivery of dental care and service in order to achieve the best possible treatment for the patient"+
	"\n• The specialty dental assistant must be proficient with general assisting (endodontic experience preferred), utilizing various sedation options."+
	"\n• Prepare and maintain instruments, equipment and materials for all dental procedures, while ensuring patients are as relaxed and comfortable as possible."+
	"\n• Work under the supervision of an Endodontist to perform all aspects of fourhanded dentistry and dental assisting including rubber dam management within the scope outlined by his/her state’s dental practice act."+
	"\n• Expertise at obtaining thorough medical history, current medications, necessary consents and the ability to relate to the patient’s caregiver."+
	"\n• Ability to place temporary fillings and the capability to perform restorative preparation such temporary crown fabrication, placement or removal."+
	"\n• Competent with nitrous and oral sedation."+
	"\nJob Qualifications"+

	"\nOregon"+
	"\n• Oregon Dental Radiologic Proficiency certificate, required or willing to obtain."+
	"\n• Oregon EFDA (Expanded Functions Dental Assistant) certificate, required or willing to obtain."+

	"\nWashington"+
	"\n• Active Dental Assistant Registration at hire."+

	"\nIdaho"+
	"\n• Idaho Expanded Functions certificate(s), required or willing to obtain"+

	"\nAdditional Qualifications"+
	"\n• Current government mandates require full COVID vaccination status, or lawful exemption status, for all persons, including student externs, who will be working or present in an Oregon or Washington health care facility."+
	"\n• A pending federal government mandate may require other individuals to attain full COVID vaccination status, lawful exemption status or weekly COVID testing. These rules will be implemented as required by the law."+
	"\n• Quarantine may be required for persons working or present in a health care facility, experiencing signs or symptoms of COVID infection or after being exposed to someone who is COVID positive."+
	"\n• Willamette Dental follows requirements and precautions for COVID issued by OSHA, CDC and other agencies of the state and federal governments."+
	"\nWe Provide"+

	"\nCompany Overview"+
	"\n• A stable, dentist-owned private company with an eye on the future."+
	"\n• Excellent benefits, including paid time off, 401K with generous company match, and medical dental, life and disability insurances. Tuition reimbursement."+
	"\n• A culture of inclusivity and respect in line with our core values of Health, Compassion, Innovation and Integrity."+
	"\n• Supportive community outreach dollars and encouragement to volunteer."+
	"\n• Thorough employee orientation and onboarding."+

	"\nWe Are"+
	"\n• A provider and employer of choice in the Northwest for 50 years."+
"\n• Dental insurance + providers in over 50 general and specialty offices in OR, WA and ID."+
"\n• Dedicated to proactive care to facilitate the best possible outcomes."+

"\nWillamette Dental Group is an equal opportunity employer."+

"\nWe evaluate qualified candidates without regard to race, color, religion, sex, national origin, veteran status and other protected characteristics."+

"\nThis job description is not meant to be an all-inclusive list of duties and responsibilities, but constitutes a general definition of the position’s scope and function in the company.",
	salary:"$16/hr",
	applyDeadline:"05/05/2022",
	startDate:"05/09/2022",
	endDate:"05/13/2022",
   experienceNeeded:"2 years"
}
)
jobCollection.insert(
{
	title: "Maths Tutor",
	skills: ["Allgebra", "Geometry"],
	domain: "Tutor",
	jobId:"3",
	jobPosterId: "3",
	location:"Renton,WA",
	description:"Job Description"+

	"\nDo you love teaching? Are you great at math? Then become a Mathnasium Math Instructor"+
	
	"\nMathnasium, the Math Learning Center , is now hiring for our Eastgate location in Bellevue."+
	
	"\nHigh school juniors and seniors, college students or recent graduates are encouraged to apply."+
	
	"\nWe teach math in a way that makes sense to students in 1st grade through High School. Join us for the opportunity to make a REAL difference in a child’s life by passing on a love for math! We offer part-time jobs with flexible scheduling and ongoing training opportunities. Advancement and leadership opportunities are available for top performers.Current Juniors or Seniors in High School, College Students and Graduates are encouraged to apply."+
	
	"\nRequired Qualifications:"+
	"\n• Exceptional math skills through Algebra I and Geometry"+
	"\n• Excellent communication and multi-tasking skills"+
	"\n• Ability to professionally interact with students and parents"+
	"\n• Energetic and confident personality"+
	
	"\nPreferred Qualifications:"+
	"\n• Ability to teach students in upper level high school math courses"+
	"\n• Previous teaching experience or other experience working with students (a plus but not necessary)"+
	"\n• We serve our students year-round, so this is an opportunity for regular part-time work. You must be available at least 2 days out of the 5 days that we are open.",
	salary:"$20/hr",
	applyDeadline:"05/02/2022",
	startDate:"05/09/2022",
	endDate:"05/27/2022",
   experienceNeeded:"0-1 year"
}
)
db.createCollection('jobApplication')
jobApplicantsCollection = db.getCollection("jobApplication")
jobApplicantsCollection.remove({})
jobApplicantsCollection.insert(
{
	  jobId : "1",
	  jobSeekerId: "1",
	  jobApplicationId: "1",
	  expectedSalary: "25/hr",
	  resume:"http:localhost:8080/resume/seeker/jsmith.pdf",
	  workAuthorization:"Yes",
	  status: "Applied"
	 
	
}
)
jobApplicantsCollection.insert(
{
	    jobId : "2",
		jobSeekerId: "2",
		jobApplicationId: "2",		
		expectedSalary: "20/hr",
		resume:"http:localhost:8080/resume/seeker/cdecker.doc",
		workAuthorization:"yes",
		status: "Applied"

}
)
jobApplicantsCollection.insert(
{
	    jobId : "3",
		jobSeekerId: "3",
		jobApplicationId: "3",
		expectedSalary: "20/hr",
		resume:"http:localhost:8080/resume/seeker/lwalsh.pdf",
		workAuthorization:"yes",
		status: "UnderReview"
	
}
)
