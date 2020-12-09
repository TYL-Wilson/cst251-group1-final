/*
  * Authors: Team 1
  * Created: 06 November 2020
  * License: Public Domain
  * Randomizer code borrowed from https://www.javatpoint.com/oprweb/door.jsp?filename=random-image-generator-in-javascript1
  * Link Image code borrowed from https://stackoverflow.com/questions/14294452/how-to-create-link-on-image-using-javascript
*/
//define random link function
function getRandomLink() {
//declare an array to store the images
var randomLink = new Array();

//insert the URL of images in array
randomLink[0] = "https://jonathangracidaportfolio.weebly.com";
randomLink[1] = "https://drive.google.com/file/d/1RaxjNNyOXJLK_Rp0dWfPWAy8c-NYQAU8/view?usp=sharing";
randomLink[2] = "https://drive.google.com/file/d/1aKwyNogHvahSdG_R-52RufA8QoXhc5gG/view?usp=sharing";
randomLink[3] = "https://dev-ajsportfolio.pantheonsite.io/";
randomLink[4] = "https://www.boredbutton.com/";
randomLink[5] = "https://www.youtube.com/watch?v=9uhM_SUhdaw";
randomLink[6] = "https://www.youtube.com/watch?v=UKMHBC0XrKc";
randomLink[7] = "https://www.youtube.com/watch?v=oZ7MF5C3ffU";
randomLink[8] = "https://martamuza.design";
randomLink[9] = "https://martamuza.wixsite.com/mist";
randomLink[10] = "https://nmustafamgubanova.weebly.com/";
randomLink[11] = "https://mgubanova.github.io/cst252/lab19/";
randomLink[12] = "https://youtu.be/DJRPo1dvZuU";
randomLink[13] = "https://jogracida.github.io/cst252/index.html";
randomLink[14] = "https://itcdland.csumb.edu/~jogracida/cst251/lab3/indexlab3works.html";
randomLink[15] = "https://drive.google.com/file/d/1QrMGb-MLr2fVxuKg2muEWsmZCaAt2Xd1/view?usp=sharing";
randomLink[16] = "https://drive.google.com/file/d/1ybHCt8fPLIH5kozxHAPyRDaEGgHlacAm/view?usp=sharing";
randomLink[17] = "https://www.youtube.com/watch?v=uSFhDbdL-uk";
randomLink[18] = "https://www.artstation.com/?sort_by=community";
randomLink[19] = "https://polycount.com/"
randomLink[20] = "https://ajsamudio.github.io/cst252/";
randomLink[21] = "https://itcdland.csumb.edu/~jogracida/cst251/lab22/how_to_main.html";
randomLink[22] = "https://itcdland.csumb.edu/~aau/cst251/final/final.html";
randomLink[23] = "https://ajsamudio.github.io/cst252/";
randomLink[24] = "http://dev-cst351-breakfast-s19.pantheonsite.io/"
//generate a number and provide to the image to generate randomly
var copyLink = [...randomLink];

var randomLink = copyLink.splice(Math.floor(Math.random() * copyLink.length),1)[0];
return randomLink;
}

$("#backDoor").wrap("<a>");
$("#door1 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor2").wrap("<a>");
$("#door2 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor3").wrap("<a>");
$("#door3 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor4").wrap("<a>");
$("#door4 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor5").wrap("<a>");
$("#door5 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor6").wrap("<a>");
$("#door6 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor7").wrap("<a>");
$("#door7 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor8").wrap("<a>");
$("#door8 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor9").wrap("<a>");
$("#door9 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor10").wrap("<a>");
$("#door10 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor11").wrap("<a>");
$("#door11 a").attr("href", getRandomLink()).attr('target', '_blank');
$("#backDoor12").wrap("<a>");
$("#door12 a").attr("href", getRandomLink()).attr('target', '_blank');
