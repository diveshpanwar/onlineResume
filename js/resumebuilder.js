// Object for navigation
var navItems = {
  "navTitle": {
    "name": "Online Resume",
    "link": "#"
  },
  "navItems": [
  {
    "link": "#personalInfo",
    "title": "Personal Information"
  },
  {
    "link": "#education",
    "title": "Education"
  },
  {
    "link": "#workExperience",
    "title": "Work Experience"
  },
  {
    "link": "#projects",
    "title": "Projects"
  }
],
addNavBrand: function() {
  var title = navItems.navTitle.name;
  var link = navItems.navTitle.link;
  $(".navbar-header").append(navBrand.replace("%name%",title).replace("%link",link));
},
addNavItems: function() {
  navItems.navItems.forEach(function(element){
    $(".navbar-nav").append(navList.replace("%link%",element.link).replace("%title%",element.title));
  });
  $(".navbar-nav").find("li").first().toggleClass('active');
}
};

// object for bio
var bio  = {
  "name":"Divesh Panwar",
  "role": "Front End Developer",
  "biopic": "images/logo.jpg",
  "welcomeMessage": "I am Simple, Hardworking, and Innovative. I love to explore and learn new things",
  "contacts": {
    "mobile": "9882887885",
    "email": "divesh.panwar@gmail.com",
    "github": "https://diveshpanwar.github.com/",
    "linkedin": "https://linkedin.com/diveshpanwar"
  },
  "location": "Shimla, H.P, India",
  "skills": [
    {
      "skill":"JAVASCRIPT",
      "percent":"75%"
    },
    {
      "skill":"HTML",
      "percent":"90%"
    },
    {
      "skill":"CSS",
      "percent":"80%"
    },
    {
      "skill":"LARAVEL",
      "percent":"75%"
    },
    {
      "skill":"PHP",
      "percent":"75%"
    },
    {
      "skill":"C++",
      "percent":"50%"
    },
    {
      "skill":"JAVA",
      "percent":"50%"
    },
    {
      "skill":"JSP",
      "percent":"75%"
    },
    {
      "skill":"MYSQL",
      "percent":"50%"
    }
  ],

  setMainContent: function(){
    $(".main").append(headerContent);
    $("#personalInfo .row").append(headerImageTitle);
    $("#personalInfo .row .col-md-6").append(headerImage.replace("%image%",bio.biopic));
    $("#personalInfo .row").append(headerImageTitle);
    $("#personalInfo .row .col-md-6:last").append(headerTitle.replace("%title%", bio.name));
    $("#personalInfo .row .col-md-6:last").append(headerRole.replace("%role%", bio.role));
    $("#personalInfo").append(hrGradient);
  },

  display: function(){
    $("#personalInfo").append(bioContent);
    $("#personalInfo .row:last").append(tagLine.replace("%tagLine%",bio.welcomeMessage));
    //not using foreach to display contacts as I am using different styling for mobile, email, etc
    $("#personalInfo .row:last").append(bioMobile.replace("%mobile%",bio.contacts.mobile));
    $("#personalInfo .row:last").append(bioEmail.replace("%email%",bio.contacts.email));
    $("#personalInfo .row:last").append(bioLocation.replace("%location%",bio.location));
    $("#personalInfo .row:last").append(bioGitHub.replace("%github%",bio.contacts.github));
    $("#personalInfo .row:last").append(bioLinkedIn.replace("%linkedin%",bio.contacts.linkedin));
    $("#personalInfo .row:last").append(skillHeader);
    bio.skills.forEach(function(element){
      $("#personalInfo .row:last").append(skillItem.replace("%skill%",element.skill).replace("%%",element.percent));
    });
  }
};

// object for education

var education = {
  "schools": [
    {
    "name": "Shishu Shiksha Niketan",
    "majors":["Science", " SST", " IP", " Mathematics"],
    "degree": "High School",
    "location": "Totu, Shimla, Himachal Pradesh, India",
    "dates": "March, 1999 - March, 2011"
  },
  {
    "name": "Kendriya Vidyalya",
    "majors":["Physics", " Chemistry", " Computer Science", " Mathematics"],
    "degree": "Senior Secondary",
    "location": "Jutogh, Shimla, Himachal Pradesh, India",
    "dates": "April, 2011 - March, 2013"
  },
  {
    "name": "University Institute of Information Technology",
    "majors":["Programming", " Algorithm", " Databases", " AI"],
    "degree": "Graduation (B.Tech CSE)",
    "location": "Summer Hill, Shimla, Himachal Pradesh, India",
    "dates": "August, 2013 - June, 2017"
  }
],
"onlineCourses": [{
  "school": "Udacity",
  "majors":["HTML", " CSS", " JAVASCRIPT"],
  "title": "Nano Degree (Front End Web Development)",
  "dates": "19 June, 2017 - Present",
  "url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
}],

display: function(){
$(".main").append(educationContainer);
$("#education").append(educationTitle);
$("#education").append(hrGradient);

  education.schools.forEach(function(school){
    $("#education").append(schoolOnlineCourseContainer);
      $("#education .col-md-5:last").append(educationName.replace("%name%",school.name));
      $("#education .col-md-5:last").append(educationType.replace("%type%",school.degree));
      $("#education .col-md-5:last").append(educationMajors.replace("%majors%",school.majors));
      $("#education .col-md-5:last").append(educationLocation.replace("%location%",school.location));
      $("#education .col-md-5:last").append(educationYear.replace("%year%",school.dates));
    });
  education.onlineCourses.forEach(function(onlineCourse){
    $("#education").append(schoolOnlineCourseContainer);
    $("#education .col-md-5:last").append(educationName.replace("%name%",onlineCourse.school));
    $("#education .col-md-5:last").append(educationType.replace("%type%",onlineCourse.title));
    $("#education .col-md-5:last").append(educationMajors.replace("%majors%",onlineCourse.majors));
    $("#education .col-md-5:last").append(educationYear.replace("%year%",onlineCourse.dates));
    $("#education .col-md-5:last").append(educationUrl.replace("%url%",onlineCourse.url));
  });
  }
};

// object  for work experience

var work = {
  "jobs" : [
    {
      "title": "Web Master",
      "employer": "University Institute of Information Technology",
      "location": "Summer Hill, Himachal Pradesh, India",
      "dates": "March, 2015- March, 2017",
      "description": "My job description included managing the university website, and portals."
    },
    {
      "title": "Technical Head",
      "employer": "University Institute of Information Technology",
      "location": "Summer Hill, Himachal Pradesh, India",
      "dates": "March, 2016- March, 2017",
      "description": "My job description included managing and organizing technical events, providing technical support to university departments, and organizing and motivating my team."
    },
    {
      "title": "Web Developer",
      "employer": "Google",
      "location": "Mountain View, California, United States",
      "dates": "April, 2017- Present",
      "description": "My job description includes creating websites on client demands."
    },
    {
      "title": " Full Stack Web Developer",
      "employer": "Apple",
      "location": "Cupertino, California, United States",
      "dates": "April, 2017- Present",
      "description": "My job description includes managing and creating on demand websites."
    }
  ],
  display: function(){
    $("main").append(workExperienceMainContainer);
    $("#workExperience").append(workExperienceTitle);
    $("#workExperience").append(hrGradient);
    work.jobs.forEach(function(job){
        $("#workExperience").append(schoolOnlineCourseContainer);
        $("#workExperience .col-md-5:last").append(workRole.replace("%role%",job.title));
        $("#workExperience .col-md-5:last").append(workCompany.replace("%company%",job.employer));
        $("#workExperience .col-md-5:last").append(workLocation.replace("%location%",job.location));
        $("#workExperience .col-md-5:last").append(workYear.replace("%year%",job.dates));
        $("#workExperience .col-md-5:last").append(workDescription.replace("%description%",job.description));
    });
  }
};

// object for projects

var projects = {
  "projects": [
    {
      "title": "Laxmi Tutorials",
      "url": "https://laxmitutorials.com",
      "imgalt": "Laxmi Tutorials",
      "images": ["images/projects/laxmi.png"],
      "dates": "July 2016",
      "description": "This project is based on core PHP, HTML, CSS. This project belongs to an institute called Laxmi Tutorials and Training Institute."
    },
    {
      "title": "UIIT Website",
      "dates": "January 2017",
      "imgalt": "UIIT Website",
      "images": ["images/projects/uiit.png"],
      "url": "http://uiit.ac.in",
      "description": "This project is based on PHP, HTML, CSS. This project belongs to an educational institute, University Institute of Information Technology."
    },
    {
      "title": "UIIT Portal",
      "dates": "March 2017",
      "imgalt": "UIIT Portal",
      "images": ["images/projects/portal.png"],
      "url": "http://portal.uiit.ac.in",
      "description": "This project is based on Laravel Framework, HTML, CSS, and Bootstrap. This project belongs to an institute, laxmitutorials.com."
    },
    {
      "title": "RICSIT Website",
      "dates": "Feburary 2017",
      "imgalt": "RICSIT Website",
      "images": ["images/projects/ricsit.png"],
      "url": "http://ricsit.uiit.ac.in",
      "description": "This project is based on core PHP, HTML, CSS. This project is created for a conference, Recent Innovations in Computer Science and Information Technology."
    },
    {
      "title": "Portfolio",
      "dates": "June 2017",
      "imgalt": "Portfolio",
      "images": ["images/projects/portfolio.png"],
      "url": "https://diveshpanwar.github.io/portfolio/",
      "description": "This project is based on HTML, CSS, JS. This project uses optimization and responsiveness as its its primary feature."
    }
  ],

  display: function(){
    $("main").append(projectMainContainer);
    $("#projects").append(projectTitleHolder);
    $("#projects").append(hrGradient);
    projects.projects.forEach(function(project){
        $("#projects").append(projectContainer);
        $("#projects .col-md-5:last").append(projectTitle.replace("%name%", project.title));
        $("#projects .col-md-5:last").append(projectDate.replace("%date%", project.dates));
        $("#projects .col-md-5:last").append(projectDescription.replace("%description%", project.description));
        //not iterating over images array as I am using just one image
        $("#projects .col-md-5:last").append(projectImg.replace("%img%", project.images[0]).replace("%imgalt%",project.imgalt));
        $("#projects .col-md-5:last").append(projectLink.replace("%link%", project.url));
    });
  }
};


//loading webpage script
$(window).on('load',function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
	});

//everything inside this document ready function
$(function(){
  // add navigation brand
  navItems.addNavBrand();

  // add the navigation list
  navItems.addNavItems();

  //adding image, role and title
  bio.setMainContent();

  // adding bio data
  bio.display();

  // adding the education details
  education.display();

  // adding the work details
  work.display();

  // adding projects information
  projects.display();

  // To mark the navigation item active on Click
  $(".navbar-nav li").click(function() {
    $(".navbar-nav li").each(function(){
      $(this).toggleClass("active",false);
    });
    $(this).toggleClass("active",true);
  });

//theme switcher
  $("#themeSwitcher").click(function(event) {
    $("#nav").toggleClass('navbar-default');
    $("#nav").toggleClass('navbar-inverse');
  });

// internationalize
  $("#internationalize").click(function(event) {
    var oldName = $("#myName").text();
    var finalName = oldName;
     var names = oldName.split(" ");
     names[1] = names[1].toUpperCase();
     names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
     finalName = names.join(" ");
     $("#myName").html(finalName);
  });

 //scroll

 $(window).scroll(function () {
     onScrollHandle();
 });
 function onScrollHandle() {
     //Get current scroll position
     var currentScrollPos = $(document).scrollTop();
     //Iterate through all node
     $('#myNavbar > ul > li > a').each(function () {
         var curLink = $(this);
         var refElem = $(curLink.attr('href'));
         //Compare the value of current position and the every section position in each scroll
         if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
             //Remove class active in all nav
             $('#myNavbar > ul > li').removeClass("active");
             //Add class active
             curLink.parent().addClass("active");
         }
         else {
             curLink.parent().removeClass("active");
         }
     });
 }
 // adding map
$(".main").append(mapDiv);
$("#mapDiv").append(hrGradient);
$("#mapDiv").append(googleMap);

});
