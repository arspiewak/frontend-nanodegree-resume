// resumeBuilder.js 	Alan Spiewak 	Part of Front-End Project 2, Interactive Resume

/* Utility function inserts data into an HTML format string and appends/prepends it to an
 * element on the page. Arguments:
 *		source: string containing the data to be inserted
 *		format: HTML format string, with placeholder "%data%" where source is inserted
 *		target: identifier (string format) of the page element to receive the insertion
 *		atEnd: Boolean, if true the result is appended. Otherwise it is prepended.
 */
 function fmtAdd(source, format, target, atEnd) {
	if (atEnd) {
		$(target).append(format.replace("%data%", source));
	} else {
		$(target).prepend(format.replace("%data%", source));
	}
	return;
}

// First JSON object
var bio = {
	name: "Alan R. Spiewak",
	role: "Software Developer",
	contacts: {
		mobile: "(336) 430-0262",
		email: "spiewak@infionline.net",
		github: "arspiewak",
		twitter: null,
		location: "Greensboro, NC (USA)"
	},
	welcomeMessage: "Greetings and peace to all.",
	skills: ["HTML/CSS beginner", "JavaScript newbie", "Data administrator"],
	bioPic: "https://avatars3.githubusercontent.com/u/15353005?v=3&amp;s=460",

	// Display method
	display: function() {
		/* Tack on name and role HTML strings before the contacts flex box. Adding this text
		 * causes the header section to display. These two fields can't use fmtAdd()
		 * because prepend will add unwanted tag boundaries.
		 */
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName + formattedRole);

		// Add contacts to top of page
		fmtAdd(this.contacts.mobile, HTMLmobile, "#topContacts", true);
		fmtAdd(this.contacts.email, HTMLemail, "#topContacts", true);
		fmtAdd(this.contacts.github, HTMLgithub, "#topContacts", true);
		if (this.contacts.twitter != null) {
			fmtAdd(this.contacts.twitter, HTMLtwitter, "#topContacts", true);
		}
		fmtAdd(this.contacts.location, HTMLlocation, "#topContacts", true);

		// Add contacts to bottom of page
		fmtAdd(this.contacts.mobile, HTMLmobile, "#lets-connect", true);
		fmtAdd(this.contacts.email, HTMLemail, "#lets-connect", true);
		fmtAdd(this.contacts.github, HTMLgithub, "#lets-connect", true);
		if (this.contacts.twitter != null) {
			fmtAdd(this.contacts.twitter, HTMLtwitter, "#lets-connect", true);
		}
		fmtAdd(this.contacts.location, HTMLlocation, "#lets-connect", true);

		// Picture
		fmtAdd(this.bioPic, HTMLbioPic, "#topContacts", true);

		// Welcome message
		fmtAdd(this.welcomeMessage, HTMLwelcomeMsg, "#topContacts", true);

		// Display skills if they're there
		if (bio.skills.length > 0) {
			$("#topContacts").append(HTMLskillsStart);
			var formattedSkill;

			for (var i = 0; i < bio.skills.length; i++) {
				fmtAdd(this.skills[i], HTMLskills, "#topContacts", true);
			}
		}
		// Class assignment: a button modifies name capitalization
		$("#header").append(internationalizeButton);
	} /* display function */
}; /* bio declaration */

/*
 * Support for bio
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

// Second JSON object.
var education = {
	"schools": [
		{
			"name": "Wesleyan University",
			"location": "Middletown, CT (USA)",
			"degree": "Bachelor of Arts",
			"majors": ["Chemistry"],
			"dates": "1970-1974",
			"url": "//http://wesleyan.edu/"
		},{
			"name": "UNC Greensboro",
			"location": "Greensboro, NC (USA)",
			"degree": "Master of Education",
			"majors": ["Education, specializing in Middle Grades Science"],
			"dates": "2009-2012",
			"url": "https://soe.uncg.edu/"
		},{
			"name": "Udacity",
			"location": "Greensboro, NC (USA)",
			"degree": "Nanodegree",
			"majors": ["Front-End Web Developer", "Full-Stack Web Developer"],
			"dates": "2015-2016 (anticipated)",
			"url": "http://www.udacity.com"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/courses/ud304"
		},{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": "2016",
			"url": "https://www.udacity.com/courses/ud804"
		},{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/courses/ud893"
		},{
			"title": "Responsive Images",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/courses/ud882"
		},{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/courses/ud775"
		},{
			"title": "Literacy in the Content Area",
			"school": "UNC Greensboro",
			"date": "2010",
			"url": "http://uncg.smartcatalogiq.com/en/2015-2016/Graduate-Bulletin/Courses/TED-Teacher-Education/500/TED-535"
		}
	],
	display: function() {
		// Note we start an education-entry (in #education), then add details to that new entry
		var tmpStr;

		// Start with schools
		for (var i = 0; i < this.schools.length; i++){
			$("#education").append(HTMLschoolStart);

			// Name and degree share bookend <a> tags, so can't be added separately.
			tmpStr = HTMLschoolName.replace("%data%", this.schools[i].name) +
				HTMLschoolDegree.replace("%data%", this.schools[i].degree);
			$(".education-entry:last").append(tmpStr);

			fmtAdd(this.schools[i].dates, HTMLschoolDates, ".education-entry:last", true);
			fmtAdd(this.schools[i].location, HTMLschoolLocation, ".education-entry:last", true);
			for (var j = 0; j < this.schools[i].majors.length; j++) {
				fmtAdd(this.schools[i].majors[j], HTMLschoolMajor, ".education-entry:last", true);
			}
		}

		// Continue with online courses. This time no class per entry, just a list of HTML strings
		$("#education").append(HTMLonlineClasses);
		for (i = 0; i < this.onlineCourses.length; i++) {

			// Title and school share <a> tags
			tmpStr = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title) +
				HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
			$("#education").append(tmpStr);

			fmtAdd(this.onlineCourses[i].date, HTMLonlineDates, "#education", true);
			fmtAdd(this.onlineCourses[i].url, HTMLonlineURL, "#education", true);
		}
		return;
	}
};

// Third JSON object
var work = {
	"jobs": [
		{
			"employer": "Philo-Hill Magnet Academy",
			"title": "Middle School Science Teacher",
			"location": "Winston-Salem (Forsyth County), NC",
			"dates": "2013-2015",
			"description": "Taught sixth grade science in a high-needs school"
		},{
			"employer": "New Garden Friends School",
			"title": "Drama Director, Drama Teacher",
			"location": "Greensboro, NC",
			"dates": "2005-2011",
			"description": "Directed the Drama program at a private school"
		},{
			"employer": "Ash Grove Consulting",
			"title": "Owner/Software Engineer",
			"location": "Greensboro, NC",
			"dates": "1994-2003 (periodic)",
			"description": "Consultant in data administration and software engineering"
		},{
			"employer": "Guilford Mills",
			"title": "Technical Support/Database Analyst",
			"location": "Greensboro, NC",
			"dates": "1995-1998",
			"description": "Lead designer for data warehouse/ad hoc reporting, DB administration"
		},{
			"employer": "Softport Systems, Inc.",
			"title": "Senior Software Engineer",
			"location": "New York, NY",
			"dates": "1988-1994",
			"description": "Team leader/consultant, database design and software construction"
		},{
			"employer": "Personnelmetrics, Inc.",
			"title": "Lead Programmer/Analyst",
			"location": "New York, NY",
			"dates": "1983-1988",
			"description": "Lead designer and programmer, human resources and membership systems"
		},{
			"employer": "Performers' Databank",
			"title": "Owner/Manager",
			"location": "New York, NY",
			"dates": "1981-1983",
			"description": "Resume and mailing service for actors"
		}
	],
	/*
	 * Here and elsewhere, we build a single string for each unit because of append()'s
	 * automagic management of end tags. If two strings are meant to share tag bookends,
	 * append() "helps" us by supplying an end tag after the first one. Rather than second-
	 * guessing tag locations inside the format strings, we just lump 'em all in together.
	 */
	display: function() {
		var str;
		for (var i = 0; i < work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);
			str = HTMLworkEmployer.replace("%data%",work.jobs[i].employer) +
				HTMLworkTitle.replace("%data%",work.jobs[i].title) +
				HTMLworkDates.replace("%data%",work.jobs[i].dates) +
				HTMLworkLocation.replace("%data%",work.jobs[i].location) +
				HTMLworkDescription.replace("%data%",work.jobs[i].description);
			$(".work-entry:last").append(str);
		}

		// Truth in advertising: my real resume's a lot longer than this.
		$("h2:first").append(" (Selected)");

}
};

/* Fourth JSON object. I know we're supposed to follow the schema assignment to the letter,
 * but naming both the object and its data array the same thing - "projects" - is a very bad
 * idea. It's asking for confusion between object and array. I've made a slight adjustment: the
 * object is called "project" singular. I'm following the convention for the other objects:
 * singular object name / plural array name. And don't bust my chops saying an array is also an
 * object. I know that!
 */
var project = {
	"projects": [
		{
			"title": "About Me",
			"dates": "2015",
			"description": "Udacity 'Hello, World' HTML application",
			"images": ["http://arspiewak.github.io/Udacity-FEND-P1-Portfolio/images/forest-878029_960_720.jpg"]
		},{
			"title": "Portfolio",
			"dates": "2015-2016",
			"description": "Udacity responsive web page to display and run projects",
			"images": ["http://arspiewak.github.io/Udacity-FEND-P1-Portfolio/images/sample-hero-thumb.jpg"]
		},{
			"title": "Interactive Resume",
			"dates": "2016",
			"description": "Udacity JavaScript/JQuery exercise",
			"images": ["images/ResumeThumb.jpg"]
		}
	],
	display: function() {
		/* This function was written before fmtAdd(). I've kept it, instead of rewriting it
		 * to match, for sentimental reasons.
		 */
		var projLen = this.projects.length;
		var addDisplay = function(s) { $("#projects").append(s); };
		var thisProj = {};

		for (var i = 0; i < projLen; i++) {
			addDisplay(HTMLprojectStart);
			thisProj = this.projects[i];
			$(".project-entry:last").append (
				HTMLprojectTitle.replace("%data%", thisProj.title) +
				HTMLprojectDates.replace("%data%", thisProj.dates) +
				HTMLprojectDescription.replace("%data%", thisProj.description) +
				HTMLprojectImage.replace("%data%", thisProj.images[0]) );
		} /* for */

		return true;
	} /* display */
}; /* project */


// Don't forget to call the display methods!
bio.display();
work.display();
project.display();
education.display();

// Add the map section to the page
$("#mapDiv").append(googleMap);

