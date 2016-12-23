function displayImage(){
    console.log(imagesArray[displayedImagesCount]);
    localStorage.setItem("displayedImagesCount", parseInt(localStorage.getItem("displayedImagesCount"))+1);
    if (parseInt(localStorage.getItem("displayedImagesCount")) == imagesArray.length){
      displayedImagesCount = 0;
      displayedImages = {};
    }
      document.getElementById("testImage").src="test_images/" + imagesArray[displayedImagesCount];
}

function countPhotos(){
  return "(" + localStorage.getItem("displayedImagesCount") + " de " + imagesArray.length +  ")";
}
