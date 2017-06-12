// Bio Information
//==========================================================================



var bio = {
    "name": "Jose Guevara",
    "role": "Store Manager",
    "message": "I am currently working as a Store Manager in the New Carrollton, MD area.  I love to over performance" +
                "in any task, and currently I am taking Nanodegree at Udacity to gain new skills as a computer " +
                "programmer.  Thanks for stopping by, and feel free to contact me if you need more information about me.",
    "contacts": {
        "mobile": "202 000 6249",
        "email": "zorritobliss.jg@gmail.com",
        "github": "https://github.com/zorritobliss",
        "location": "Rockville, MD"
    },
    "skills": [
        "HTML", "CSS", "Javascript", "Python" , "Excel", "VBA"
    ],
    "bioPic": "images/me.jpg"
};

bio.display = function(){

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(internationalizeButton);



    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
    $("#header").append(formattedWelcomeMessage);

    if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);


    //footer contact info
   // var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
  //  $("#topContacts").append(formattedTwitter);

    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#footerContacts").append(formattedGithub);

   // var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
   // $("#footerContacts").append(formattedTwitter);
    }
};
// Work History
//==========================================================================
var work = {
	"jobs": [
		{
			"employer": "Cricket Wireless",
			"title": "Store Manager",
			"location": "New Carrollton, MD",
			"datesWorked": "May 2009 - Present",
			"description": "Oversee daily operations of the store with 9 employees, correctly evaluate, coach, and "+
                           "builds employees strategic skills. Prioritizes and invests time in each employee based on tenure and skill"+
                           "level. Effectively delivers training programs, emphasizing continuous learning action. Maintains a strong"+
                           "employee succession plan. Empowers people to accept responsibility and accountability."

		},
		{
			"employer": "Simply Wireless",
			"title": "District Manager",
			"location": "District of Columbia, and Montgomery County, MD",
			"datesWorked": "September 2008 - December 2008",
			"description": "Oversee daily operations of 9 company own stores with 45+ employees generating an average" +
            "of 90 units per store monthly.  Work with managers to consistently fulfill store staffing requirements. " +
            "Aligns the right people and skills with the needs of each Kiosk.  Supports Diversity in hiring practices" +
            "and placement.  Correctly evaluate, grades, and builds managers strategic skills.  Prioritizes and invests" +
            "time in each Manager based on tenure and skill level.  Prioritizes store and district issues and addresses" +
            "them in timely and effective manner.  Identifies roots causes of problems and develops appropriate actionable" +
            "solutions.  Creates and implements effective plans and objectives that align with company strategy and " +
            "organizational priorities.  Recognizes and expects high standards in sales readiness and consistent brand " +
            "image to build positive customer perception. Coaches positive performance improvement and identifies," +
            "confronts, and corrects unacceptable activities, behaviors and performance.  Promotes the activities and " +
            "behavior that deliver a positive customer experience that exceeds expectations."
		},
		{
			"employer": "Radio Shack Corperation",
			"title": "District Manager",
			"location": "Northern Virginia",
			"datesWorked": "April 2008 - September 2008",
			"description": "Oversee daily operations of 16 company own stores with 80+ employees generating $13+ million" +
            " in annual sales.  Guide managers to establish and maintain strong in-store recruiting processes.  Cultivates " +
            "and maintains relationships and programs with various sources.  Continually seeks quality, diverse people " +
            "to strengthen the team.  Aligns the right people and skills with the needs of each store.    Coaches managers " +
            "on effectively hiring for their store.  Maintains a strong management succession plan.  Uses financial data " +
            "and report to discover opportunities and exceptions that can be acted upon.  Prioritizes store and district " +
            "issues and addresses them in timely and effective manner.  Identifies roots causes of problems and develops " +
            "appropriate actionable solutions.  Addresses internal problems within span of influence, while understanding " +
            "the external forces that are outside of it.  Plans and deploys Monthly sales Plan and other company programs." +
            "Executes and enforces company processes, procedures, and policies.  Recognizes and expects high standards in " +
            "sales readiness and consistent brand image to build positive customer perception.  Assures proper inventory " +
            "management and merchandise mix.  Works to continually close the gaps and drive all inconsistencies out of the "+
            "system."
		},
		{
			"employer": "Radio Shack Corperation",
			"title": "Senior Store Manager",
			"location": "Takoma Park, MD",
			"datesWorked": "June 1995 - April 2008",
			"description": "As a senior store manager for Radio shack I oversee daily operation of the store in all of " +
            "the following areas:  Operations Management, oversee daily operations of a store with 16+ employees " +
            "generating $3.5+ million in annual sales.   Supervision / Motivation,   create excitement and enthusiasm " +
            "among staff to increase individual productivity, average unit sales, and profit dollars.  Staff Development," +
            "oversee assistant managers in the development of their career, worked side-by-side with sales associates to " +
            "listen and observe selling techniques and one-on-one positive feedback.   Sales, utilize effective customer " +
            "service techniques to put customers at ease and gain their confidence assist customers with product information " +
            "and make sales suggestions introduce add-on merchandise to customers to increase sales volume establish rapport " +
            "with customers to generate repeat business.  Merchandising and Store Display, executes and enforces brand " +
            "image and standards, supports our advertising and promotions.  Inventory Control, manages product lifecycle " +
            "effectively conducts efficient and accurate inventories, effectively manages secured inventory."
		},
		{
			"employer": "Rodmans Discount Drug",
			"title": "Customer Service Clerk",
			"location": "Washingto, District of Columbia",
			"datesWorked": "1992 to 1995",
			"description": "Oversee daily handling of customer service desk, helped the customer with refund and " +
            "exchanges.  I also oversee all the cashier and helped them in they need to void a transaction.   I also oversee " +
            "the changing of the price on the computer system during promotion or adding new item in the inventory system."
		},
		{
			"employer": "Alfios La Vella Vista Restaurant",
			"title": "Cook, Kitchen Helper",
			"location": "Chevy Chase, MD",
			"datesWorked": "1990 to 1992",
			"description": "I helped the main chef preparing all the ingredient need to prepare a meal.  I also was " +
            "responsible preparing the salad bar every day, making the To Go orders, and any ordered pizza"
		},

	]
};




work.display = function(){

    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedJobTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
};

// Projects
//==========================================================================

var projects = {
    "projects":[{
        "title": "Make a Stylish Website",
        "datesWorked": "May 2017",
        "description" : "Used HTML and CSS  to make a stylish website on any topic.  Applying the knowledge of HTML" +
         "Document Structure to the HTML file and then create custom  CSS stylish based on personal preferences",
        "images":["images/Stylishwebsite.png"]
    },
    {
        "title": "Code Your Own Quiz",
        "datesWorked": "May 2017",
        "description" : "Used Python programming language to build your own quiz.  Used fill-in-the blank style to create" +
        "a quiz that can even be used a study tool to help you remember important vocabulary",
        "images":["images/Quiz.png"]
    },
    {
            "title": "Create a Movie Website",
            "datesWorked": "May 2017",
            "description": "Wrote code to store a list of favorite movies, including box art imagery, movie trailer, genres," +
             "realeased date, and running time of the movie.",
             "images": ["images/movie.png"]
    }

]};

projects.display = function(){
    for(project in projects.projects){

        $("#projects").append(HTMLprojectStart);

        formattedProjectTitle= HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);

        formattedProjectDates= HTMLprojectDates.replace("%data%",projects.projects[project].datesWorked);
            $(".project-entry:last").append(formattedProjectDates);

        if(projects.projects[project].images.length>0){

                for (image in projects.projects[project].images)
                formattedProjectImage= HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedProjectImage);

            }

        formattedProjectDescription= HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);


        }
};

// Education
//==========================================================================
var education = {
	"schools": [
		{
			"name": "Woodrow Wilson Senior High",
			"location": "Washington, District of Columbia",
			"degree": "General Studies",
			"majors": ["General Studies"],
			"dates": "June 1992",
			"url": "http://www.wilsonhs.org/"
		},
		{
			"name": "Montgomery College",
			"location": "Rockville, MD",
			"degree": "General Studies",
			"majors": ["General Studies"],
			"dates": "1993",
			"url": "https://www.montgomerycollege.edu/"
		}
	],

    "onlineCourses": [
        {
            "title": "Intro to Programming",
            "school": "Udacity",
            "dates": "Feb 2017",
            "url": "https://www.udacity.com/"
        },
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "dates": "Feb 2017",
            "url": "https://www.udacity.com/"
        }
    ]
};

education.display = function(){
	for (var school in education.schools){
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
                                  .append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#",
                                     education.schools[school]["url"]))
                                  .append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));

		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
	$("#education").append(HTMLonlineClasses);

    	// Display online courses
	for (var onlineCourse in education.onlineCourses){
		var num = education.schools.length + parseInt(onlineCourse);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));




    }


};



// Internationalize Name
//==========================================================================


// Capitalize all last name and ensure first letter in first name is capitalized
function inName(name){
    var name = bio.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1]= name[1].toUpperCase();
    name[0]= name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];


}





// Clicks (Analytics)
//==========================================================================

$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);});

// Call functions
//==========================================================================

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

//*jose*/

// jQuery to create the sticky navigation menu
$(document).ready(function () {
    // grab the initial top offset of the navigation on the website
    var stickyNavTop = $('.nav').offset().top;

    // our function that decides weather the navigation bar should have 'fixed' css position or not.
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop(); // current vertical position from the top the page

        //  change its position to fixed to stick to top, or
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();
    // to run it again every time you scroll up or down
    $(window).scroll(function () {
        stickyNav();
    });
});

// jQuery to create a smooth effect when we scroll down while using the menu option.
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });
});

/**
 * Skills Chart using highcharts.com graph module
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Skill Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Skill Duration  (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#C9FFE5',
            borderWidth: 2
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 10,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(200,200,200)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'HTML/CSS',
				color: 'rgba(0, 129, 0, .5)',
				data: [[2017, 4]]
			},
			{
				name: 'Javascript',
				color: 'rgba(205, 0, 0, .5)',
				data: [[2017, 1]]
			},

			{
				name: 'Python',
				color: 'rgba(0, 154, 103, .5)',
				data: [[2016, 4], [2017, 3]]
			},
			{
				name: 'Excel',
				color: 'rgba(0, 103, 52, .5)',
				data: [[2008, 6], [2009, 10], [2011, 5], [2012, 12], [2016, 8], [2017,6]]
			},
			{
				name: 'VBA',
				color: 'rgba(224, 84, 84, .5)',
				data: [[2015, 4], [2016, 8], [2017, 6]]
			}],


	});
});

