/*
  * Authors: Team 1
  * Created: 06 November 2020
  * License: Public Domain
*/

// Define the output field
var topDoors = document.getElementById("top");

// Class Definition
class Door {
	constructor(imgSrc) {
		this.imgSrc = img;
		//this.link = link;
	}
	displayHTML() {
    return "<div class="col-sm-2 backDoor">
      <img class="img-responsive" src="img/back_sample.png" alt="Back">
      <div class="door"> +
      <img " + imgSrc + "alt="Door">
      </div>
    </div>";
  }
  console.log(displayHTML)
}
//loop through image files to create a source link
var files = {'jpg':14};
var pageName = "door";
for (var ext in files){
for (var i = 0; i < files[ext]; i++){
    var src = "src = img/" + pageName + "-" + (i+1) + "." + ext;}
    //instantiate new door 
    var newDoor = new Door(src);
    $("#top").after("<div class="col-sm-2 backDoor">
      <img class="img-responsive" src="img/back_sample.png" alt="Back">
      <div class="door"> +
      <img " + imgSrc + "alt="Door">
      </div>
    </div>")
    console.log("new door added");
}
}
// Create new objects using the class


// Create an array of vehicles
//var vehicleArray = [myCar, myBike];

// loop through array of vehicles
//for (i=0; i<vehicleArray.length; i++) {
// get info for object in array
//  console.log(info);
// add info to output div
//  newEl.innerHTML = displayHTML;
//  topDoors.appendChild(newEl);
}
