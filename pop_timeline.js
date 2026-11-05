/*
	
	Progression of Projecotrs
	Author:  Billie Jo Westfall 
	Date:     11/2/2026
   
	Filename: pop_timeline.js
   
	Controls what text is displayed based on aprt of timeline being clicked or hovered over
	
	Ai was used to imporve my approach, and for troubleshooting syntax errors
*/

	
	// create variables
	var HTML = "";
	var webElement = "";
	
	
	// array of text
	const textArray = [
	"first event for Magic lantern",
	"second event for the film projectos",
	"third event for LCD projectors",
	"fourth event DLP Tech",
	"2000s /now event",
	"sixth event, the future"
	];
	
	
	// array for images
	const imgArray = [
	"img0.png",
	"img1.png",
	"img2.png",
	"img3.png",
	"img4.png",
	"img5.png",
	];
	
	// associate imgmap hotspots to events
	const magicLantern = document.getElementById("magicLantern");
	const filmProjector = document.getElementById("filmProjector");
	const LCDProjector = document.getElementById("LCDProjector");
	const DLPTechnology = document.getElementById("DLPTechnology");
	const Now = document.getElementById("Now");
	const future = document.getElementById("future");
	
	// associate webElement with timelineInfo area in website
	webElement = document.getElementById("timelineInfo");
	
	
	// update HTML based on aray number clicked
	function myFunction(arrayNum){
		HTML = "<p>" + textArray[arrayNum] + "</p><br>" + "<img src='" + imgArray[arrayNum] + "' alt='temp'>";
	
		webElement.innerHTML = HTML;
		
		
		// this section was partially amde with chatgpt in order to apply animation numerous times
		webElement.style.animation = "none";
		webElement.offsetHeight; // Force browser reflow
		webElement.style.animation = "fadeIn 0.8s ease-in-out";
	
	}
	
	
	// specific click events
	magicLantern.onclick = (event) => {
		event.preventDefault();
		myFunction(0);
	};
	
	filmProjector.onclick = (event) => {
		event.preventDefault();
		myFunction(1);
	};
	
	LCDProjector.onclick = (event) => {
		event.preventDefault();
		myFunction(2);
	};
	
	DLPTechnology.onclick = (event) => {
		event.preventDefault();
		myFunction(3);
	};
	
	Now.onclick = (event) => {
		event.preventDefault();
		myFunction(4);
	};
	
	future.onclick = (event) => {
		event.preventDefault();
		myFunction(5);
	};
	
	
	