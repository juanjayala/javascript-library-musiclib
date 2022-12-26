# js-library-ayalajua

---Landing page:---
https://mysterious-wave-56080.herokuapp.com/

---Documentation:---
https://mysterious-wave-56080.herokuapp.com/documentation.html

![image](https://user-images.githubusercontent.com/60584205/209575520-44ca1ca5-3ce5-4683-a237-3eb0bd0736f9.png)


---Getting Started:---  
You will need to add the following link/scripts/styles:  
link: rel="stylesheet" type="text/css" href="music_lib.css"  
script: defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"  
style: @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap') 
link: rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer"  
script: defer type="text/javascript" src="music_lib.js"  

Initialize The Library:  
const mlib = new MusicLib()  

Library Usage Example:  
const albumObj = mlib.createAlbum(...)  
mlib.albumPopUp("selector-name", albumObj, ["class"])  
