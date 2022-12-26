# Javascript Library - MusicLib
MusicLib - Create interactive music-related features.

The purpose of my library is to display different interactive DOM objects regarding musicians and music. The library can be used by developers in web apps such as apps where users rate songs and albums, music-centered apps that talk about musicians in articles, and the musician section in apps to buy concert tickets. The library has wide variety of uses for different music related topics and can provide a visually appealing addition to websites.

## Webpage Example - Music Blog
I created a music blog webpage using the MusicLib library. It features all the methods (see more in the Documentation section) I implemented in the library:

### - makeInfoxBox
When hovering over the artists' names, an info box pops up with a mini bio of the artist. 
![image](https://user-images.githubusercontent.com/60584205/209578097-1f0421fd-79cc-43ba-bcda-7f8bef1c15cc.png)

### - albumPopUp
When hovering over the album images, a pop up box shows up with all the album information.
![image](https://user-images.githubusercontent.com/60584205/209578862-a2a51fe5-9c3a-47d3-b3fa-2037b17ba2da.png)

### - insertDraggingBox
Images inside this box can be dragged around. In the music blog, this was used to rank the different albums (which each have an albumPopUp added).

https://user-images.githubusercontent.com/60584205/209580248-e744273a-28c0-4be2-b2d8-2ce2282bad8e.mov

### - insertPlaylist
A playlist is simply made up of a list of _**Song objects**_ (see more in the Documentation section). 

![image](https://user-images.githubusercontent.com/60584205/209580841-8c4145ac-cae3-4b6c-b516-6bf240558ff5.png)




## Getting Started:
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

## Documentation:
### MusicLib Objects:
#### - Album object:
  * name: album name
  * artist: artist name
  * genre: album genre
  * year: album release year
  * tracklist: array of the songs in the album (in order)
  * image_path: path to the image of the album

#### - Song object:
  * name: song name
  * album: _**Album object**_
  * length: song length

### Methods - Create Objects:
#### - createAlbum:
Description: Create an _**Album object**_ and return it.
Parameters:
  * name: album name
  * artist: artist name
  * genre: album genre
  * year: album release year
  * tracklist: array of the songs in the album (in order)
  * image_path: path to the image of the album

Return: _**Album object**_

#### - createSong:
Description: Create a _**Song object**_ and return it.
Paremeters:
  * name: song name
  * album: Album object
  * length: song length

Return: _**Song object**_

### Methods - MusicLib:
#### - makeInfoBox:
Description:
Add an artist info box with an image _image_path_ and bio _bio_ of the artist that pops up when hovering over a chosen element _selector_.
Usage:
Pass in an object with the attributes:
  * selector: the id of where in the web page the info box should show up when you hover over it
  * image_path: path to the image that will show up in the pop up
  * bio: the text to be added to pop up box

#### - insertDraggingBox:
Description:
Add dragging box, at _selector_, where albums _albums_ can be dragged and dropped with the title _title_ and background colour _backgroundColor_.
Usage:
Pass in these arguments:
  * selector: the id of where in the webpage the dragging box will be inserted
  * title: the title of the box
  * albums: list of _**Album objects**_
  * backgroundColor: background colour of dragging box

#### - insertPlaylist:
Description:
Add playlist interface with title _title_, an image _playlist_img_, list of songs _songs_, and background colour _backgroundColor_.
Usage:
Pass in these arguments:
  * selector: the id of where in the webpage the dragging box will be inserted
  * title: playlist title
  * playlist_img: the image of the playlist
  * songs: list of _**Song objects**_ that are in the playlist
  * backgroundColor: background colour of dragging box

#### - albumPopUp:
Description:
Add an album that when hovered over will show a pop up box with its name, artist, genre, year, and tracklist.
Usage:
Pass in these arguments:
  * selector: the id of where in the webpage the dragging box will be inserted
  * album: Album object
  * img-classes: list of classes to be added to the album image (so users can decide the size/style of the image)

