// JavaScript source code
// Purpose, functions and steps of this code
// *****************************************
// 1. get the value of the search input
// 2. check if the value is "video1" or "video2"
// 3. Redirect based on the value entered/submitted 
//	  check if the value is "video1" or "video2"
// 4. if the value does not exist, then show a warning message on the page 
//    or whatever the manager/supervisor suggests per client's requirements.
//    console.log("not found in our database");
function handleSearchForm() {

// 1. get the value of the search input 
	
let inputElement = document.getElementById("search");
	// console.log(inputElement.value);

// 2. check if the value is "video1" or "video2"

	if(inputElement.value == "video1") {

// 3. Redirect based on the value entered/submitted 

	window.location.href="https://www.youtube.com/watch?v=vbqDtWZBQiE";
	return;
	}
	if(inputElement.value == "video2") {
	window.location.href="https://www.youtube.com/watch?v=cnXapYkboRQ";
	return;
	}
		console.log("Sorry, the video you are looking for does not exist!");

	}
			

	// window.location.href="https://www.youtube.com/watch?v=vbqDtWZBQiE";
	// } else if (inputElement.value == "video2") {
	// window.location.href="https://www.youtube.com/watch?v=cnXapYkboRQ";
	// } else {
	//	console.log("the video you are looking for does not exist!");
	//} // Top curly bracket




