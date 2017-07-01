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


var bio  = {
  "title":"Divesh Panwar",
  "role": "Front End Developer",
  "image": "images/logo.jpg",
  "mobile": "9882887885",
  "tagLine": "I am a simple, Hardworking, and Innovative. I love to explore and learn new things",
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
    $("#personalInfo .row .col-md-6").append(headerImage.replace("%image%",bio.image));
    $("#personalInfo .row").append(headerImageTitle);
    $("#personalInfo .row .col-md-6:last").append(headerTitle.replace("%title%", bio.title));
    $("#personalInfo .row .col-md-6:last").append(headerRole.replace("%role%", bio.role));
    $("#personalInfo .row").append(hrGradient);
  },

  setBioData: function(){
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


//everything inside this document ready function
$(function(){
  // add navigation brand
  navItems.addNavBrand();
  // add the navigation list
  navItems.addNavItems();
  //adding image, role and title
  bio.setMainContent();

  // adding bio data
  bio.setBioData();
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

});
