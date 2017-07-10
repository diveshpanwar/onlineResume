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
  "title":"Divesh Panwar",
  "role": "Front End Developer",
  "biopic": "images/logo.jpg",
  "mobile": "9882887885",
  "tagLine": "I am Simple, Hardworking, and Innovative. I love to explore and learn new things",
  "email": "divesh.panwar@gmail.com",
  "location": "Shimla, H.P, India",
  "github": "https://diveshpanwar.github.com/",
  "linkedin": "https://linkedin.com/diveshpanwar",
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
    $("#personalInfo .row .col-md-6:last").append(headerTitle.replace("%title%", bio.title));
    $("#personalInfo .row .col-md-6:last").append(headerRole.replace("%role%", bio.role));
    $("#personalInfo").append(hrGradient);
  },

  display: function(){
    $("#personalInfo").append(bioContent);
    $("#personalInfo .row:last").append(tagLine.replace("%tagLine%",bio.tagLine));
    $("#personalInfo .row:last").append(bioMobile.replace("%mobile%",bio.mobile));
    $("#personalInfo .row:last").append(bioEmail.replace("%email%",bio.email));
    $("#personalInfo .row:last").append(bioLocation.replace("%location%",bio.location));
    $("#personalInfo .row:last").append(bioGitHub.replace("%github%",bio.github));
    $("#personalInfo .row:last").append(bioLinkedIn.replace("%linkedin%",bio.linkedin));
    $("#personalInfo .row:last").append(skillHeader);
    for(skill in bio.skills){
      $("#personalInfo .row:last").append(skillItem.replace("%skill%",bio.skills[skill].skill).replace("%%",bio.skills[skill].percent));
    }
  }
};

// object for education

var education = {
  "schools": [
    {
    "name": "Shishu Shiksha Niketan",
    "majors":["Science", " SST", " IP", " Mathematics"],
    "type": "High School",
    "location": "Totu, Shimla, Himachal Pradesh, India",
    "year": "March, 1999 - March, 2011"
  },
  {
    "name": "Kendriya Vidyalya",
    "majors":["Physics", " Chemistry", " Computer Science", " Mathematics"],
    "type": "Senior Secondary",
    "location": "Jutogh, Shimla, Himachal Pradesh, India",
    "year": "April, 2011 - March, 2013"
  },
  {
    "name": "University Institute of Information Technology",
    "majors":["Programming", " Algorithm", " Databases", " AI"],
    "type": "Graduation (B.Tech CSE)",
    "location": "Summer Hill, Shimla, Himachal Pradesh, India",
    "year": "August, 2013 - June, 2017"
  }
],
"onlineCourses": {
  "name": "Udacity",
  "majors":["HTML", " CSS", " JAVASCRIPT"],
  "type": "Nano Degree (Front End Web Development)",
  "year": "19 June, 2017 - Present"
},

display: function(){
$(".main").append(educationContainer);
$("#education").append(educationTitle);
$("#education").append(hrGradient);

  for(school in education.schools){
    $("#education").append(schoolOnlineCourseContainer);
    $("#education .col-md-5:last").append(educationName.replace("%name%",education.schools[school].name));
    $("#education .col-md-5:last").append(educationType.replace("%type%",education.schools[school].type));
    $("#education .col-md-5:last").append(educationMajors.replace("%majors%",education.schools[school].majors));
    $("#education .col-md-5:last").append(educationLocation.replace("%location%",education.schools[school].location));
    $("#education .col-md-5:last").append(educationYear.replace("%year%",education.schools[school].year));
  }

  $("#education").append(schoolOnlineCourseContainer);
  $("#education .col-md-5:last").append(educationName.replace("%name%",education.onlineCourses.name));
  $("#education .col-md-5:last").append(educationType.replace("%type%",education.onlineCourses.type));
  $("#education .col-md-5:last").append(educationMajors.replace("%majors%",education.onlineCourses.majors));
  $("#education .col-md-5:last").append(educationYear.replace("%year%",education.onlineCourses.year));

}
};

// object  for work experience

var works = {
  "jobs" : [
    {
      "role": "Web Master",
      "companyName": "University Institute of Information Technology",
      "location": "Summer Hill, Himachal Pradesh, India",
      "year": "March, 2015- March, 2017",
      "description": "My job description included managing the university website, and portals."
    },
    {
      "role": "Technical Head",
      "companyName": "University Institute of Information Technology",
      "location": "Summer Hill, Himachal Pradesh, India",
      "year": "March, 2016- March, 2017",
      "description": "My job description included managing and organizing technical events, providing technical support to university departments, and organizing and motivating my team."
    },
    {
      "role": "Web Developer",
      "companyName": "Google",
      "location": "Mountain View, California, United States",
      "year": "April, 2017- Present",
      "description": "My job description includes creating websites on client demands."
    },
    {
      "role": " Full Stack Web Developer",
      "companyName": "Apple",
      "location": "Cupertino, California, United States",
      "year": "April, 2017- Present",
      "description": "My job description includes managing and creating on demand websites."
    }
  ],
  display: function(){
    $("main").append(workExperienceMainContainer);
    $("#workExperience").append(workExperienceTitle);
    $("#workExperience").append(hrGradient);
    for(work in works.jobs){
      $("#workExperience").append(schoolOnlineCourseContainer);
      $("#workExperience .col-md-5:last").append(workRole.replace("%role%",works.jobs[work].role));
      $("#workExperience .col-md-5:last").append(workCompany.replace("%company%",works.jobs[work].companyName));
      $("#workExperience .col-md-5:last").append(workLocation.replace("%location%",works.jobs[work].location));
      $("#workExperience .col-md-5:last").append(workYear.replace("%year%",works.jobs[work].year));
      $("#workExperience .col-md-5:last").append(workDescription.replace("%description%",works.jobs[work].description));
    }
  }
};

// object for projects

var projects = {
  "projects": [
    {
      "name": "Laxmi Tutorials",
      "url": "https://laxmitutorials.com",
      "imgalt": "Laxmi Tutorials",
      "img": "images/projects/laxmi.png",
      "date": "July 2016",
      "description": "This project is based on core PHP, HTML, CSS. This project belongs to an institute called Laxmi Tutorials and Training Institute."
    },
    {
      "name": "UIIT Website",
      "date": "January 2017",
      "imgalt": "UIIT Website",
      "img": "images/projects/uiit.png",
      "url": "http://uiit.ac.in",
      "description": "This project is based on PHP, HTML, CSS. This project belongs to an educational institute, University Institute of Information Technology."
    },
    {
      "name": "UIIT Portal",
      "date": "March 2017",
      "imgalt": "UIIT Portal",
      "img": "images/projects/portal.png",
      "url": "http://portal.uiit.ac.in",
      "description": "This project is based on Laravel Framework, HTML, CSS, and Bootstrap. This project belongs to an institute, laxmitutorials.com."
    },
    {
      "name": "RICSIT Website",
      "date": "Feburary 2017",
      "imgalt": "RICSIT Website",
      "img": "images/projects/ricsit.png",
      "url": "http://ricsit.uiit.ac.in",
      "description": "This project is based on core PHP, HTML, CSS. This project is created for a conference, Recent Innovations in Computer Science and Information Technology."
    },
    {
      "name": "Portfolio",
      "date": "June 2017",
      "imgalt": "Portfolio",
      "img": "images/projects/portfolio.png",
      "url": "https://diveshpanwar.github.io/portfolio/",
      "description": "This project is based on HTML, CSS, JS. This project uses optimization and responsiveness as its its primary feature."
    }
  ],

  display: function(){
    $("main").append(projectMainContainer);
    $("#projects").append(projectTitleHolder);
    $("#projects").append(hrGradient);
    for (project in projects.projects) {
      $("#projects").append(projectContainer);
      $("#projects .col-md-5:last").append(projectTitle.replace("%name%", projects.projects[project].name));
      $("#projects .col-md-5:last").append(projectDate.replace("%date%", projects.projects[project].date));
      $("#projects .col-md-5:last").append(projectDescription.replace("%description%", projects.projects[project].description));
      $("#projects .col-md-5:last").append(projectImg.replace("%img%", projects.projects[project].img).replace("%imgalt%",projects.projects[project].imgalt));
      $("#projects .col-md-5:last").append(projectLink.replace("%link%", projects.projects[project].url));
    }
  }
};


//loading webpage script
$(window).on('load',function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
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
  works.display();

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
