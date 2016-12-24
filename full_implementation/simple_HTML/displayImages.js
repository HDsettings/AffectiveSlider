function displayImage(){
    localStorage.setItem("displayedImagesCount", parseInt(localStorage.getItem("displayedImagesCount"))+1);
    if (parseInt(localStorage.getItem("displayedImagesCount")) <= 8){
      document.getElementById("testImage").src="test_images/" + examplesArray[displayedImagesCount];
      console.log(examplesArray[displayedImagesCount]);
    } else {
      document.getElementById("testImage").src="test_images/" + imagesArray[displayImagesArray];
      localStorage.setItem("displayImagesArray", parseInt(localStorage.getItem("displayImagesArray"))+1);
      console.log(imagesArray[displayImagesArray]);
    }
    if (parseInt(localStorage.getItem("displayImagesArray")) == imagesArray.length){
      displayedImagesCount = 0;
    }
}

function countPhotos(){
  var displayed=parseInt(displayedImagesCount)+1;
  var total=imagesArray.length + examplesArray.length;
  return "(" + displayed + " de " + total +  ")";
}
