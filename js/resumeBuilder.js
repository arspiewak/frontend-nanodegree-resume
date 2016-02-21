/* resumeBuilder.js 	Alan Spiewak 	Part of Front-End Project 2, Interactive Resume
 *
 * Code sections appear in this file in the order they were assigned within the "Basic
 * Javascript" course (unless dependencies require otherwise).
 *
 */
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
var i;		/* general purpose index */
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

/*
 * Truth in advertising for the "Work Experience" section header. My real resume's
 * a lot longer than this.
 */
$("h2:first").append(" (Selected)");

/*
 * Populate the work section. Replaced for-in loop with for() per style sheet. Here
 * and elsewhere, we build a single string for each unit because of append()'s
 * automagic management of end tags. If two strings are meant to share tag bookends,
 * append() "helps" us by supplying an end tag after the first one. Rather than second-
 * guessing tag locations inside the format strings, we just lump 'em all in together.
 */
function displayWork() {
	for (i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		str = HTMLworkEmployer.replace("%data%",work.jobs[i].employer) +
			HTMLworkTitle.replace("%data%",work.jobs[i].title) +
			HTMLworkDates.replace("%data%",work.jobs[i].dates) +
			HTMLworkLocation.replace("%data%",work.jobs[i].location) +
			HTMLworkDescription.replace("%data%",work.jobs[i].description);
		$(".work-entry:last").append(str);
	}
}
displayWork();

/*
 * Function used by #button's click event to modify the value of #name
 * Note differences from class solution: (1) No argument passed from helper.js.
 * (2) The last nameParts element is capitalized, not the second. Some of us use
 * more than two names. This doesn't handle 'Jr.' etc. (3) Join() is used to
 * reconstruct the name.
 */
function inName() {
	var str = $("#name")[0].innerText;
	var nameParts = str.split(" ");
	var lastPart = nameParts.length - 1;
	// Initial cap for first name
	nameParts[0] = str.slice(0,1).toUpperCase() +
		nameParts[0].slice(1).toLowerCase();
	// All caps for last name
	nameParts[lastPart] = nameParts[lastPart].toUpperCase();
	return nameParts.join(" ");
}

// Add a button at the bottom of the header to exercise a capitalization assignment
$("#header").append(internationalizeButton);

/* Display of the projects section is managed through properties of the project object,
 * including the functions that follow.
 */
project.display = function() {
	var projLen = this.projects.length;
	var addDisplay = function(s) { $("#projects").append(s); }
	var thisProj = {};

	for (i = 0; i < projLen; i++) {
		addDisplay(HTMLprojectStart);
		thisProj = this.projects[i];
		$(".project-entry:last").append (
			HTMLprojectTitle.replace("%data%", thisProj.title) +
			HTMLprojectDates.replace("%data%", thisProj.dates) +
			HTMLprojectDescription.replace("%data%", thisProj.description) +
			HTMLprojectImage.replace("%data%", thisProj.image)
		);
	}

	return true;
}

// Don't forget to call the function!
project.display();
