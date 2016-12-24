function displayImage(){
    console.log(imagesArray[displayedImagesCount]);
    localStorage.setItem("displayedImagesCount", parseInt(localStorage.getItem("displayedImagesCount"))+1);
    if (parseInt(localStorage.getItem("displayedImagesCount")) < 8){
      document.getElementById("testImage").src="test_images/" + examplesArray[displayedImagesCount];
    } else {
      document.getElementById("testImage").src="test_images/" + imagesArray[displayImagesArray];
      localStorage.setItem("displayImagesArray", parseInt(localStorage.getItem("displayImagesArray"))+1;
    }
    if (parseInt(localStorage.getItem("displayImagesArray")) == imagesArray.length){
      displayedImagesCount = 0;
    }
}

function countPhotos(){
  return "(" + (parseInt(localStorage.getItem("displayedImagesCount"))+1) + " de " + imagesArray.length +  ")";
}
