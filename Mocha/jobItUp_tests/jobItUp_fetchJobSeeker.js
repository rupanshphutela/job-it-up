var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test fetch all jobs', function () {

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/app/jobseeker/1")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('API should return one Job Seeker JSON', function (){
		expect(response).to.have.status(200);
        expect(response).to.be.json;//an.object
		// expect(response.body).to.have.length(1);
		expect(response).to.have.headers;
        expect(response.body).to.not.be.a.string;
    });
    
	it('The Job Seeker JSON should have all keys/properties, expected field value lengths and expected field types', function(){

        /*Checking all fields being present */
        expect(requestResult).to.include.keys('primarySkills');
        expect(requestResult).to.include.keys('otherSkills');
        expect(requestResult).to.include.keys('_id');
        expect(requestResult).to.include.keys('userId');
        expect(requestResult).to.include.keys('jobSeekerId');
        expect(requestResult).to.include.keys('bio');
        expect(requestResult).to.include.keys('resume');
        expect(requestResult).to.include.keys('picture');
        expect(requestResult).to.include.keys('location');
        expect(requestResult).to.include.keys('fname');
        expect(requestResult).to.include.keys('lname');
        expect(requestResult).to.include.keys('contactNo');
        expect(requestResult).to.include.keys('email');
        expect(requestResult).to.include.keys('referralCode');
        expect(requestResult).to.include.keys('education');
        expect(requestResult).to.include.keys('workExperience');
        
        /*Checking Nested json fields to be present */
        expect(requestResult).to.have.nested.property('education[0].educationId');
        expect(requestResult).to.have.nested.property('education[0].universityName');
        expect(requestResult).to.have.nested.property('education[0].degree');
        expect(requestResult).to.have.nested.property('education[0].fromDate');
        expect(requestResult).to.have.nested.property('education[0].toDate');

        expect(requestResult).to.have.nested.property('workExperience[0].workExperienceId');
        expect(requestResult).to.have.nested.property('workExperience[0].companyName');
        expect(requestResult).to.have.nested.property('workExperience[0].role');
        expect(requestResult).to.have.nested.property('workExperience[0].toDate');
        expect(requestResult).to.have.nested.property('workExperience[0].toDate');

        /*Checking field value lengths of the json */
        expect(requestResult).to.have.property('primarySkills').to.have.length.above(0);
        expect(requestResult).to.have.property('otherSkills').to.have.length.above(0);
        expect(requestResult).to.have.property('_id').to.have.length.above(0);
        expect(requestResult).to.have.property('userId').to.have.length.above(0);
        expect(requestResult).to.have.property('jobSeekerId').to.have.length.above(0);
        expect(requestResult).to.have.property('bio').to.have.length.above(0);
        expect(requestResult).to.have.property('resume').to.have.length.above(0);
        expect(requestResult).to.have.property('picture').to.have.length.above(0);
        expect(requestResult).to.have.property('location').to.have.length.above(0);
        expect(requestResult).to.have.property('fname').to.have.length.above(0);
        expect(requestResult).to.have.property('lname').to.have.length.above(0);
        expect(requestResult).to.have.property('contactNo').to.have.length.above(0);
        expect(requestResult).to.have.property('email').to.have.length.above(0);
        expect(requestResult).to.have.property('referralCode').to.have.length.above(0);
        expect(requestResult).to.have.property('education').to.have.length.above(0);
        expect(requestResult).to.have.property('workExperience').to.have.length.above(0);

        /*Checking field value lengths of the nested json */
        expect(requestResult).to.have.nested.property('education[0].educationId').to.have.length.above(0);
        expect(requestResult).to.have.nested.property('education[0].universityName').to.have.length.above(0);
        expect(requestResult).to.have.nested.property('education[0].degree').to.have.length.above(0);
        expect(requestResult).to.have.nested.property('education[0].fromDate').to.have.length.above(0);
        expect(requestResult).to.have.nested.property('education[0].toDate').to.have.length.above(0);

        expect(requestResult).to.have.nested.property('workExperience[0].workExperienceId').to.have.length.above(0);
        expect(requestResult).to.have.nested.property('workExperience[0].companyName').to.have.length.above(0);
        expect(requestResult).to.have.nested.property('workExperience[0].role').to.have.length.above(0);
        expect(requestResult).to.have.nested.property('workExperience[0].toDate').to.have.length.above(0);
        expect(requestResult).to.have.nested.property('workExperience[0].toDate').to.have.length.above(0);


        /*Checking types of fields in response json */
        expect(requestResult).to.have.property('primarySkills').that.is.a('array');
        expect(requestResult).to.have.property('otherSkills').that.is.a('array');
        expect(requestResult).to.have.property('_id').that.is.a('string');
        expect(requestResult).to.have.property('userId').that.is.a('string');
        expect(requestResult).to.have.property('jobSeekerId').that.is.a('string');
        expect(requestResult).to.have.property('bio').that.is.a('string');
        expect(requestResult).to.have.property('resume').that.is.a('string');
        expect(requestResult).to.have.property('picture').that.is.a('string');
        expect(requestResult).to.have.property('location').that.is.a('string');
        expect(requestResult).to.have.property('fname').that.is.a('string');
        expect(requestResult).to.have.property('lname').that.is.a('string');
        expect(requestResult).to.have.property('contactNo').that.is.a('string');
        expect(requestResult).to.have.property('email').that.is.a('string');
        expect(requestResult).to.have.property('referralCode').that.is.a('string');
        expect(requestResult).to.have.property('education').that.is.a('array');
        expect(requestResult).to.have.property('workExperience').that.is.a('array');

        /*Checking types of nested json fields in response json */
		expect(requestResult).to.have.nested.property('education[0].educationId').that.is.a('string');
        expect(requestResult).to.have.nested.property('education[0].universityName').that.is.a('string');
        expect(requestResult).to.have.nested.property('education[0].degree').that.is.a('string');
        expect(requestResult).to.have.nested.property('education[0].fromDate').that.is.a('string');
        expect(requestResult).to.have.nested.property('education[0].toDate').that.is.a('string');

        expect(requestResult).to.have.nested.property('workExperience[0].workExperienceId').that.is.a('string');
        expect(requestResult).to.have.nested.property('workExperience[0].companyName').that.is.a('string');
        expect(requestResult).to.have.nested.property('workExperience[0].role').that.is.a('string');
        expect(requestResult).to.have.nested.property('workExperience[0].toDate').that.is.a('string');
        expect(requestResult).to.have.nested.property('workExperience[0].toDate').that.is.a('string');

	});
	
});