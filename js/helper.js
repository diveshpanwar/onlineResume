var navBrand = '<a href="%link%" class="navbar-brand text-thick">%name%</a>';
var navList = '<li><a href="%link%" class="text-thick">%title%</a></li>';

var hrGradient = '<hr class="gradient">';

var headerContent = '<header class="container-fluid text-center" id="personalInfo"><div class="row text-center header-margin"></div></header>';
var headerImageTitle = '<div class="col-md-6 text-left"></div>';
var headerTitle = '<h1 class="text-big" id="myName">%title%</h1>';
var headerRole = '<h3 class="">%role%</h3>';
var headerImage = '<picture><source media="(min-width: 700px)" srcset="%imageLarge%"><source media="(min-width: 500px)" srcset="%image%"><img src="%image%" class="header-image header-above-margin" alt="My Display Image"></picture>';

var bioContent = '<div class="row shadow"></div>';
var tagLine = '<div class="col-md-12"><h2>"%tagLine%"</h2></div>';
var bioMobile = '<div class="col-md-4"><span class="fa fa-mobile icon-big"></span> <span class="icon-text">%mobile%</span></div>';
var bioEmail = '<div class="col-md-4"><span class="fa fa-send icon-big"></span> <span class="icon-text">%email%</span></div>';
var bioLocation = '<div class="col-md-4"><span class="fa fa-map-marker icon-big"></span> <span class="icon-text">%location%</span></div>';
var bioGitHub = '<div class="col-md-6 text-right"><span class="fa fa-github icon-big"></span> <span class="icon-text">%github%</span></div>';
var bioLinkedIn = '<div class="col-md-6 text-left"><span class="fa fa-linkedin icon-big"></span> <span class="icon-text">%linkedin%</span></div>';
var skillHeader = '<div class="col-md-12"><h2>Skills</h2></div>';
var skillItem = '<div class="col-md-4"><h4 class="text-thick">%skill%</h4><span class="percent">%%</span></div>';

var educationContainer = '<main><div class="row header-margin" id="education"></div></main>';
var educationTitle = '<h2 class="text-center">Education</h2>';
var schoolOnlineCourseContainer = '<div class="col-md-5 shadow block-margin"></div>';
var educationName = '<h4><span class="text-thick">Title:</span> %name%</h4>';
var educationMajors = '<h4><span class="text-thick">Majors:</span> %majors%</h4>';
var educationType = '<h4><span class="text-thick">Degree:</span> %type%</h4>';
var educationLocation ='<h4><span class="text-thick">Location:</span> %location%</h4>';
var educationYear = '<h4><span class="text-thick">Dates:</span> %year%</h4>';
var educationUrl = '<h4><span class="text-thick">URL:</span> <a href="%url%" target="_blank">Visit Page</a></h4>';

var workExperienceMainContainer = '<div class="row header-margin" id="workExperience"></div>';
var workExperienceTitle = '<h2 class="text-center">Work Experience</h2>';
var workExperienceContainer = '<div class="col-md-5 shadow block-margin animated slideInLeft"></div>';
var workRole = '<h4><span class="text-thick">Title:</span> %role%</h4>';
var workCompany = '<h4><span class="text-thick">Employer:</span> %company%</h4>';
var workLocation = '<h4><span class="text-thick">Location:</span> %location%</h4>';
var workYear ='<h4><span class="text-thick">Dates:</span> %year%</h4>';
var workDescription = '<h4><span class="text-thick">Description:</span> %description%</h4>';

var projectMainContainer = '<div class="row header-margin" id="projects"></div>';
var projectTitleHolder = '<h2 class="text-center">Projects</h2>';
var projectContainer = '<div class="col-md-5 shadow block-margin"></div>';
var projectTitle = '<h4><span class="text-thick">Title:</span> %name%</h4>';
var projectDate = '<h4><span class="text-thick">Dates:</span> %date%</h4>';
var projectDescription = '<h4 class="text-justify"><span class="text-thick">Description:</span> %description%</h4>';
var projectImg = '<picture><source media="(min-width: 501px)" srcset="%imgLarge%"><source media="(max-width: 500px)" srcset="%img%"><img src="%img%" class="img-responsive images images-shadow" alt="%imgalt%"></picture>';
var projectLink = '<p><button type="button" name="button" class="btn btn-primary btn-normal-margin"><a href="%link%" target="_BLANK">Visit Page</a></button></p>';

var mapDiv = '    <div id="mapDiv"><h2 class="text-center">Where I\'ve Lived and Worked</h2></div>';
var googleMap = '<div id="map"></div>';


// Map Section Begins
/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});
