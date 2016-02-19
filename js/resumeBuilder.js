
var bio = {
	name: "Alan R. Spiewak",
	role: "Software Developer",
	mobile: "(336) 430-0262",
	email: "spiewak@infionline.net",
	github: "arspiewak",
	location: "Greensboro, NC (USA)",
	bioPic: "https://avatars3.githubusercontent.com/u/15353005?v=3&amp;s=460",
	welcomeMsg: "Greetings and peace to all.",
	skills: ["HTML/CSS beginner", "JavaScript newbie", "Data administrator"]
};

var education = {
	"schools": [
		{
			"name": "Wesleyan University",
			"degree": "Bachelor of Arts",
			"dates": "1970-1974",
			"location": "Middletown, CT (USA)",
			"major": "Chemistry",
			"minor": "Theater"
		},{
			"name": "UNC Greensboro",
			"degree": "Master of Education",
			"dates": "2009-2012",
			"location": "Greensboro, NC (USA)",
			"major": "Education",
			"minor": "Middle School Science"
		},{
			"name": "Udacity",
			"degree": "Nanodegree",
			"dates": "2015-2016 (anticipated)",
			"location": null,
			"major": "Front-End Web Development",
			"minor": null
		}
	],
	"onlineCourses": [
		,
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2015",
			"URL": "https://www.udacity.com/courses/ud304"
		},{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2016",
			"URL": "https://www.udacity.com/courses/ud804"
		},{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "2015",
			"URL": "https://www.udacity.com/courses/ud893"
		},{
			"title": "Responsive Images",
			"school": "Udacity",
			"dates": "2015",
			"URL": "https://www.udacity.com/courses/ud882"
		},{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": "2015",
			"URL": "https://www.udacity.com/courses/ud775"
		},{
			"title": "Literacy in the Content Area",
			"school": "UNC Greensboro",
			"dates": "2010",
			"URL": "http://uncg.smartcatalogiq.com/en/2015-2016/Graduate-Bulletin/Courses/TED-Teacher-Education/500/TED-535"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Philo-Hill Magnet Academy",
			"title": "Middle School Science Teacher",
			"dates": "2013-2015",
			"location": "Winston-Salem (Forsyth County), NC",
			"description": "Taught sixth grade science in a high-needs school"
		},{
			"employer": "New Garden Friends School",
			"title": "Drama Director, Drama Teacher",
			"dates": "2005-2011",
			"location": "Greensboro, NC",
			"description": "Directed the Drama program at a private school"
		},{
			"employer": "Ash Grove Consulting",
			"title": "Owner/Software Engineer",
			"dates": "1994-2003 (periodic)",
			"location": "Greensboro, NC",
			"description": "Consultant in data administration and software engineering"
		},{
			"employer": "Guilford Mills",
			"title": "Technical Support/Database Analyst",
			"dates": "1995-1998",
			"location": "Greensboro, NC",
			"description": "Lead designer for data warehouse/ad hoc reporting, DB administration"
		},{
			"employer": "Softport Systems, Inc.",
			"title": "Senior Software Engineer",
			"dates": "1988-1994",
			"location": "New York, NY",
			"description": "Team leader/consultant, database design and software construction"
		},{
			"employer": "Personnelmetrics, Inc.",
			"title": "Lead Programmer/Analyst",
			"dates": "1983-1988",
			"location": "New York, NY",
			"description": "Lead designer and programmer, human resources and membership systems"
		},{
			"employer": "Performers' Databank",
			"title": "Owner/Manager",
			"dates": "1981-1983",
			"location": "New York, NY",
			"description": "Resume and mailing service for actors"
		}
	]
};

var project = {
	"projects": [
		{
			"title": "About Me",
			"dates": "2015",
			"description": "Udacity 'Hello, World' HTML application",
			"image": "http://arspiewak.github.io/Udacity-FEND-P1-Portfolio/images/forest-878029_960_720.jpg"
		},{
			"title": "Portfolio",
			"dates": "2015-2016",
			"description": "Udacity responsive web page to display and run projects",
			"image": "http://arspiewak.github.io/Udacity-FEND-P1-Portfolio/images/sample-hero-thumb.jpg"
		},{
			"title": "Interactive Resume",
			"dates": "2016",
			"description": "Udacity JavaScript/JQuery exercise",
			"image": "http://arspiewak.github.io/Udacity-FEND-P1-Portfolio/images/resume-thumbnail.jpg"
		}
	]
};

// code fragments to extend arrays

/*
		},{
			"employer": "",
			"title": "",
			"dates": "",
			"location": "",
			"description": ""

		},{
			"title": "",
			"dates": "",
			"description": "",
			"image": ""

*/

// Iterators, etc, that will be used throughout the "population" section
var i, key;		/* general purpose indexes */
var str;		/* generic string variable */


// Display name and role (displays the header section)
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

// Display skills if they're there
if (bio.skills.length > 0) {
	$("#topContacts").append(HTMLskillsStart);
	var formattedSkill;

	for (i = 0; i < bio.skills.length; i++) {
	    formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    	$("#topContacts").append(formattedSkill);
	}
}

/* Populate the work section. We use a for-in loop, contrary to the Front-End
 * style sheet (among many other sources), because it's explicitly specified
 * in the class assignment.
 */
// Truth in advertising for the section header
$("h2:first").append(" (Selected)");
for (key in work.jobs) {
	if (work.jobs.hasOwnProperty(key)) {
		$("#workExperience").append(HTMLworkStart);
		str = HTMLworkEmployer.replace("%data%",work.jobs[key].employer) +
			HTMLworkTitle.replace("%data%",work.jobs[key].title);
		$(".work-entry:last").append(str);
	}
}