
var bio = {
	name: "Alan R. Spiewak",
	role: "Software Developer",
	email: "spiewak@infionline.net",
	mobile: "(336) 430-0262",
	github: "arspiewak",
	location: "Greensboro, NC (USA)",
	bioPic: "https://avatars3.githubusercontent.com/u/15353005?v=3&amp;s=460",
	welcomeMsg: "Greetings and peace to all.",
	skills: ["HTML/CSS beginner", "JavaScript newbie", "Former data administrator"]
};

var work = {};
work.position = "Student developer";
work.employer = "Unemployed";
work.yearsWorked = 1;
work.city = "Greensboro, NC";

var educ = {};
educ["name"] = "University of North Carolina at Greensboro";
educ["years"] = "2009-2014";
educ["city"] = "Greensboro, NC";


var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedEmail = HTMLemail.replace("%data%", bio.email);
$("#header").append(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
$("#header").append(formattedMobile);

var formattedGithub = HTMLgithub.replace("%data%", bio.github);
$("#header").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.location);
$("#header").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStart);
var formattedSkill;
var i;

for (i = 0; i < bio.skills.length; i++) {
    formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#header").append(formattedSkill);
}

// Construct the workExperience section
$("#workExperience").append(HTMLworkStart);

var formattedWorkTitle = HTMLworkTitle.replace("%data%", work["position"]);
$("#workExperience").append(formattedWorkTitle);

// Construct the #education section
$("#education").append(HTMLschoolStart);

var formattedSchoolName = HTMLschoolName.replace("%data%", educ.name);
$("#education").append(formattedSchoolName);


/*
var formatted[] = HTML[].replace("%data%", bio.[]);
$("#header").append(formatted[]);

*/
