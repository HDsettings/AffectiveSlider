var examplesArray = ["Ej1A.png", "Ej1.B.png", "Ej2.A.png", "Ej2.B.png", "Ej3.A.png", "Ej3.B.png",
"Ej4.A.png", "Ej4.B.png"];

var imagesArray = ["Alc1A.png", "Alc5A.png", "Cn1A.png", "Cn5A.png", "Coca1A.png", "Coca5A.png", 
"Hero1A.png", "Hero5A.png", "N1A.png", "N5A.png", "Alc1B.png", "Alc5B.png", "Cn1B.png", "Cn5B.png", 
"Coca1B.png", "Coca5B.png", "Hero1B.png", "Hero5B.png", "N1B.png", "N5B.png", "Alc2A.png", "Alc6A.png", 
"Cn2A.png", "Cn6A.png", "Coca2A.png", "Coca6A.png", "Hero2A.png", "Hero6A.png", "N2A.png", "N6A.png", 
"Alc2B.png", "Alc6B.png", "Cn2B.png", "Cn6B.png", "Coca2B.png", "Coca6B.png", "Hero2B.png", "Hero6B.png", 
"N2B.png", "N6B.png", "Alc3A.png", "Alc7A.png", "Cn3A.png", "Cn7A.png", "Coca3A.png", "Coca7A.png", 
"Hero3A.png", "Hero7A.png", "N3A.png", "N7A.png", "Alc3B.png", "Alc7B.png", "Cn3B.png", "Cn7B.png", 
"Coca3B.png", "Coca7B.png", "Hero3B.png", "Hero7B.png", "N3B.png", "N7B.png", "Alc4A.png", "Alc8A.png", 
"Cn4A.png", "Cn8A.png", "Coca4A.png", "Coca8A.png", "Hero4A.png", "Hero8A.png", "N4A.png", "N8A.png", 
"Alc4B.png", "Alc8B.png", "Cn4B.png", "Cn8B.png", "Coca4B.png", "Coca8B.png", "Hero4B.png", "Hero8B.png", 
"N4B.png", "N8B.png"];

if(localStorage.getItem("displayedImagesCount")==null){
  var displayedImagesCount=1;
  localStorage.setItem("displayedImagesCount", displayedImagesCount);
  var displayedImages={};
  localStorage.setItem("displayedImages", JSON.stringify(displayedImages));
  
  for (i = imagesArray.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = imagesArray[i]
      imagesArray[i] = imagesArray[j]
      imagesArray[j] = temp
  }
  localStorage.setItem("imagesArray", JSON.stringify(imagesArray));

} else {
  var displayedImagesCount=localStorage.getItem("displayedImagesCount");
  var displayedImages=JSON.parse(localStorage.getItem("displayedImages"));
  imagesArray=JSON.parse(localStorage.getItem("imagesArray"));
};
