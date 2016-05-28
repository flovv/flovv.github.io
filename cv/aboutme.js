var addElements = function() {

        var distanceFromTop = 0;
        $('#visualization-container').append('<div id="bubble" class="bubble"></div>');
    	for (var i = 0; i < aboutMe.length; i++) {
    		$('#visualization-container').append('<div id="' + idName(i) + '">' + innerHTML(i) + '</div>');
    		var currentElement = document.getElementById(idName(i));
    		currentElement.className = className(i);
    		currentElement.style.left = setLeft((beginTime(i))) + "%";
    		currentElement.style.width = setWidth(beginTime(i), endTime(i)) + "%";
    		if (aboutMe[i][5]) {
    			distanceFromTop += alignHeight;
    		}
    		currentElement.style.top = distanceFromTop + "px";

            if (className(i) == "tick" || className(i) == "timeline") {
                //do nothing
            } else {
        		if (isOverflowed(currentElement)) {
        		    //clear the text if it's overflowed
        		      currentElement.innerHTML = "";
                }
        		if (endTime(i) == today) {
        		    //draw an arrow to the right > 
        		    $('#' + idName(i)).append('<div class="present" id="' + idName(i) + '">&raquo;&nbsp;</div>');
        		    //ADD A CHECK FOR THAT IF THERE IS OVERLAP CLEAR THE TEXT
        		}
            }
    	}
    	//add something here to automatically add 2016 and 2017 JUST IN CASE YOU FORGET heh
};

var websiteText;
websiteText = "<h4>About me</h4>";
websiteText += "<div id='duration'><i>Dec 2015 - present</i></div>";
websiteText += "Mouse-over for more information";

function addDefaultText() {
    $("#bubble").html(websiteText);
}

function addListeners() {
    addDefaultText();
    $( window ).resize(function() {
        //go through the divs and set the innerhtml to nothing if it's too big
    });
	$(".me, .college, .hs, .work, .adult").bind({
	    click: function(event) {
	      switch(event.target.id) {
	          case "dcd":
	              window.open('http://dcd15.de/', '_blank');
	              break;

	          default:
	              //
	      }  
	    },
	    mouseover: function(event) {
	        var string;
            switch(event.target.id) {
			    case "website":
                    string = "<h4>flovv.github.io</h4>";
                    string += "<div id='duration'><i>Feb 2014 - present</i></div>";
                    string += "Hi. I'm Florian, yet another data scientist ;)";
                    $("#bubble").html(string);
                    break;
                case "yahoo":
                    string = "<h4>Yahoo!</h4>";
                    string += "<div id='duration'><i>Feb 2014 - present</i></div>";
                    string += " Visiting Scholar, Yahoo!  Research (New York, USA) -Developed and tested various market interfaces using Javascript and R";
                    $("#bubble").html(string);
                    break;
           
                case "msr":
                    string = "<h4>Microsoft Research</h4>";
                    string += "<div id='duration'><i>Dec 2005 - present</i></div>";
                    string += "Visiting Scholar, Microsoft Research  (New York, USA)";
                    $("#bubble").html(string);
                    break;

                //



                //


                //


                   }
	        }
	});
}

function isOverflowed(element){
    if ((element.scrollWidth - 2) >  $(element).innerWidth()) {
        return true;
    }
}

var alignHeight = 17; //height = 14, padding = 3;

var jan = 0/12;
var feb = 1/12;
var mar = 2/12;
var apr = 3/12;
var may = 4/12;
var jun = 5/12;
var jul = 6/12;
var aug = 7/12;
var sep = 8/12;
var oct = 9/12;
var nov = 10/12;
var dec = 11/12;

var getDate = new Date();
var today = getDate.getFullYear() + getDate.getMonth() / 12;

var beginDate = 2002 + sep;
var totalMonths = (today - beginDate) * 12;

var filler = ["", "filler", "filler", may + 1992, jun + 1992, true];

var aboutMe = [
	//["innerHTML", "className", "idName", "startTime", "endTime", new row? (boolean), "hovertext (point to a variable?)"]
	
	["flovv", "me", "website", mar + 2015, today, true],
	
    ["dcd", "me", "dcd", 2015+feb, 2015+dec, true],
	
	["Henkel", "me", "henkel", 2012+sep, 2013+dec, true],
	
	["Kurspiloten", "me", "kurspiloten", 2011+mar, 2011+dec, true],
	
	["EIX", "me", "eix", nov + 2009, dec + 2013, false],
	
	["AKX", "me", "akx", aug + 2008, feb + 2009, false],
	
	["Stoccer", "me", "stoccer", 2007+nov, nov + 2008, true],	
	
	["meet2trade", "me", "m2t", jul + 2004, aug + 2006, true],
	
	
	
	filler,
	
	// work
	["Research Assistent", "hs", "ra1", jul + 2004, aug + 2006, true],
	["Vialog", "hs", "dev", 2005, dec + 2005, true],
	["Amadeus", "hs", "amadeus", mar+ 2007, dec + 2007, false],
	["RA", "hs", "ra2", 2008, sep + 2008, true],
	
	["Doctoral Student", "hs", "Promo1", mar + 2009, aug + 2012, false],
	["Postdoc", "hs", "postPromo1", sep + 2012, dec + 2013, false],
	
	["Universal McCann", "hs", "um", 2014, today, true],
	filler,
	// education
	
	["University of Karlsruhe (TH)", "work", "TH", sep + 2003, mar + 2009, true],
	["KTH", "work", "KTH", sep + 2006, may + 2007, true],	
	["CSIRO", "work", "CSIRO", aug + 2008, feb + 2009, true],
	["Karlsruhe Institute of Technology", "work", "Promo", mar + 2009, aug + 2012, true],
	["KIT", "work", "postPromo", aug + 2012, dec + 2013, true],
	
		["Y!", "work", "yahoo", aug + 2011, dec + 2011, true],
		["MSR", "work", "msr", aug + 2013, dec + 2013, true],
	filler,

	// Coding!
	["PHP", "adult", "php", 2002, 2002+nov, true],
	["SQL", "college", "sql", 2004+may, today, false],
	["C++", "adult", "c++", 2002, 2002+nov, true],
	
	
	["Java", "adult", "java", 2003+mar, 2013, false],
	["JS", "adult", "js", aug + 2011, dec + 2011, true],
	["JS", "adult", "js2", aug + 2008, dec + 2008, false],
	["Grails", "adult", "grails", 2008, dec+2014, true],
	
	["Python", "adult", "python", 2015+mar, today, false],
	
	["SAS", "college", "sas", 2009+may, aug+2012, true],
	["R", "college", "R", 2012+mar, today, true],
	
	
	filler,
	
	//["&laquo;", "tick", "2005tick", 2005, 2006, true],
	["PAST", "timeline", "2002", 2002, 2003, true],
	

	["|", "tick", "2003tick", 2003, 2004, false],
	["2003", "timeline", "2003", 2003, 2004, false],
	
	["|", "tick", "2004tick", 2004, 2005, false],
	["2004", "timeline", "2004", 2004, 2005, false],
	
	["|", "tick", "2005tick", 2005, 2006, false],	
	["2005", "timeline", "2005", 2005, 2006, false],
	
	["|", "tick", "2006tick", 2006, 2007, false],
	["2006", "timeline", "2006", 2006, 2007, false],
	["|", "tick", "2007tick", 2007, 2008, false],
	["2007", "timeline", "2007", 2007, 2008, false],
	["|", "tick", "2008tick", 2008, 2009, false],
	["2008", "timeline", "2008", 2008, 2009, false],
	["|", "tick", "2009tick", 2009, 2010, false],
	["2009", "timeline", "2009", 2009, 2010, false],
	["|", "tick", "2010tick", 2010, 2011, false],
	["2010", "timeline", "2010", 2010, 2011, false],
	["|", "tick", "2011tick", 2011, 2012, false],
	["2011", "timeline", "2011", 2011, 2012, false],
	["|", "tick", "2012tick", 2012, 2013, false],
	["2012", "timeline", "2012", 2012, 2013, false],
	["|", "tick", "2013tick", 2013, 2014, false],
	["2013", "timeline", "2013", 2013, 2014, false],
	["|", "tick", "2014tick", 2014, 2015, false],
	["2014", "timeline", "2014", 2014, 2015, false],
	["|", "tick", "2015tick", 2015, 2016, false],
    ["2015", "timeline", "2015", 2015, 2016, false],
    ["|", "tick", "2016tick", 2016, 2017, false],
	["PRESENT", "timeline", "2016", 2016, 2017, false]
];

var setWidth = function(entryStartTime, entryEndTime) {
	var monthsBetweenStartAndEnd = (entryEndTime - entryStartTime) / (1/12);
	var width = monthsBetweenStartAndEnd / totalMonths;
	return width * 100;
};

var setLeft = function(entryStartTime) {
	var monthsBetweenStartAndEntry = (entryStartTime - beginDate) / (1/12);
	var leftPadding = (monthsBetweenStartAndEntry / totalMonths);
	return leftPadding * 100;
};

var innerHTML = function(index) {
	var myInnerHTML = aboutMe[index][0];
	return myInnerHTML;
};

var className = function(index) {
	var myClassName = aboutMe[index][1];
	return myClassName;
};

var idName = function(index) {
	var myIdName = aboutMe[index][2];
	return myIdName;
};

var beginTime = function(index) {
	var myBeginTime = aboutMe[index][3];
	return myBeginTime;
};

var endTime = function(index) {
	var myEndTime = aboutMe[index][4];
	return myEndTime;
};

