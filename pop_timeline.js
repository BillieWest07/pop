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
	"The Magic Lanter was one of the first noticeable examples of projection technology. \
	This was created by the Dutch scientist, Christiaan Huygens. \
	The magic lantern was composed of painted see through slides, a light source, \
	and a lense. This light source tended to be candles or oil lamps. latern on, \
	stronger light sources like the Argand Lamp in the late 1700s." ,
	"George Eastman created the film roll, which launched the ability \
	to make motion pictures with projectors. Following this, competition \
	grew on who could make a device to weild the new film roll. This led to the creation of multiple versions of film projectors.\
	A good example would be the Eidoloscope, created by Woodville Latham and his family in the United States.",
	"After years of projector development, the use for projectors expanded. So did the technology!\
	Liquid Crystal Display, better known as LCD, was created by Gene Dolgof. \
	LCD works by passing light through a series of mirrors. These mirrors seperate \
	colors, and created the image pixel by pixel. It is then recombined.",
	"In a similar time frame, Dr. Larry Hornbeck creted Digital Light Processing. \
	DLP uses a chip with millions of microscopic mirrors that tilt constantly. \
	A beam of light is projected and red, green, and blue images are projected. This happens so fast that the colors blend together.",
	"In the present day, we have 4K resolution and stronger light sources. Even \
	with these improved features, the older technologies are still utilized today! \
	In Fact, most projecotrs use LCD or DLP. Now, Projectors are used in large and small scale.",
	"But, what does the future hold for us? Some speculate new technologies being made for longer and more energy friendly projectors.\
	The development of lenses creates ultra short distances in which projectors can work! Of course with most modern things, \
	there is room for AI integration for voice control. Lastly, Holographs and interactive mapping is becoming a reality!"
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
	
	
	