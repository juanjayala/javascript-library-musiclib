"use strict";

(function(global, document, $){

    function MusicLib() {
    }

    // -- private functions --
    // Dragging + Dropping images
    function _dragDrop(){
        const popups = document.querySelectorAll('.popUp')

        // get draggables
        let draggables = []
        for (let i = 0; i < popups.length; i++){
            if (popups[i].firstChild.className === "dragImg"){
                draggables.push(popups[i])
            }
        }
        const containers = document.querySelectorAll('.dragContainer')

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging')
            })

            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging')
            })
        })


        containers.forEach(container => {
            container.addEventListener('dragover', e => {
                e.preventDefault()
                const afterElement = getDragAfterElement(container, e.clientX, e.clientY)
                console.log(afterElement)
                const draggable = document.querySelector('.dragging')
                if (afterElement == null) {
                    container.appendChild(draggable)
                } else {
                    container.insertBefore(draggable, afterElement)
                }
            })
        })


        function getDragAfterElement(container, x, y) {
            // get draggables
            let draggableElements = container.querySelectorAll('.popUp')
            let draggables = []
            for (let i = 0; i < draggableElements.length; i++){
                if (draggableElements[i].firstChild.className === "dragImg"){
                    draggables.push(draggableElements[i])
                }
            }

            // get draggables not dragging currently
            let not_dragging = []
            for (let i = 0; i < draggables.length; i++){
                if (!(draggables[i].classList.contains('dragging'))){
                    not_dragging.push(draggables[i])
                }
            }

            const notDraggingElements = [...not_dragging]
            return notDraggingElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect()
                // console.log(box)
                const offset = (y - box.top - box.height / 2) + (x - box.left - box.width / 2)
                // const offset = (y - box.top - box.height / 2) + (x - box.right - box.width / 2)
                console.log(offset)
                // const offset = y - box.top - box.height / 2

                if (offset < 0 && offset > closest.offset) {
                // if (offset > closest.offset) {
                    return { offset: offset, element: child }
                } 
                else {
                    return closest
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element
        }
    }

    // Playlist: number to play button
    function _initPlayBttns(){
        const play_buttons = document.getElementsByClassName("play-button");
        const arr_play_buttons = [...play_buttons]

        arr_play_buttons.forEach(play_button => {
            play_button.addEventListener('mouseover', function( event ) {
                play_button.getElementsByClassName("num")[0].style.display = "None"
                play_button.getElementsByClassName("fas fa-play")[0].style.display= "Block"
            })

            play_button.addEventListener('mouseout', function( event ) {
                play_button.getElementsByClassName("num")[0].style.display = "Block"
                play_button.getElementsByClassName("fas fa-play")[0].style.display= "None"
            })
        })
    }

    // Make albums have a pop up box
    function _albumPopUp(album, img_classes){
        // get values from js object
        const currImg = document.createElement('img')
        currImg.src = album.image_path
    
        for (let i = 0; i < img_classes.length; i++){
            currImg.classList.add(img_classes[i])
        }
    
        // pop up span
        const popUpSpan = document.createElement("SPAN")
        popUpSpan.className = "popUp"
        popUpSpan.appendChild(currImg)
    
        // album info pop box
        const albumInfoBox = document.createElement('div')
        albumInfoBox.className = "albumInfoBox"
        popUpSpan.appendChild(albumInfoBox)
    
        // add info to album info
        let albumInfo =
        `<b>Name:</b> ${album.name}<br>
        <b>Artist:</b> ${album.artist}<br>
        <b>Genre:</b> ${album.genre}<br>
        <b>Year:</b> ${album.year}<br>`
    
        let tracklist = `<b>Tracklist:</b><br>`
        for (let i = 0; i < album.tracklist.length; i++){
            tracklist += `${i+1}. ${album.tracklist[i]} <br>`
        }
    
        albumInfo += tracklist 
    
        albumInfoBox.innerHTML = albumInfo
    
        return popUpSpan
    }

    // -- end of private functions --

    MusicLib.prototype = {

        makeInfoBox: function(infoBoxObj) {
            // get values from js object
            const selector = infoBoxObj.selector
            const image_path = infoBoxObj.image_path
            const bio = infoBoxObj.bio
    
            const popUp = document.getElementById(selector)
            popUp.classList.add("popUp")
            // popUp.className = "popUp"
    
            // create infoBox div
            const infoBox = document.createElement('div')
            infoBox.className = "infoBox"
            popUp.appendChild(infoBox)
    
            // create image container div + img
            const imgContainer = document.createElement('div')
            imgContainer.className = "artistImgContainer"
            
            const artistImg = document.createElement('img')
            artistImg.src = image_path
            artistImg.className = "artistImg"
            imgContainer.appendChild(artistImg)
    
            infoBox.appendChild(imgContainer)
    
            // artist info
            const artistInfo = document.createElement('div')
            artistInfo.className = "artistInfo"
    
            infoBox.appendChild(artistInfo)
            
            // bio
            if (bio) {
                artistInfo.append(bio)
            }
            
        },
    
        insertDraggingBox: function(selector, title, albums, backgroundColor) {
            const dragContainer = document.getElementById(selector)
            dragContainer.classList.add("dragContainer")
            dragContainer.style.backgroundColor=backgroundColor
    
            // add title
            if (title) {
                const dragContainerTitle = document.createElement('div')
                dragContainerTitle.className = "dragContainerTitle"
                dragContainerTitle.innerText = title
    
                dragContainer.appendChild(dragContainerTitle)
            }
    
            for (let i = 0; i < albums.length; i++) {
                const currImg = _albumPopUp(albums[i], ["dragImg"])
    
                dragContainer.appendChild(currImg)
            }
    
            // event listeners
            _dragDrop()        
        },
    
        insertPlaylist: function(selector, title, playlist_img, songs, backgroundColor){
            const playlistContainer = document.getElementById(selector)
    
            // set title + img
            const table = document.createElement('table');
    
            table.setAttribute('class', 'playlist-table')
            table.style.backgroundColor=backgroundColor
    
            const thead = document.createElement('thead')
            const thead_tr = document.createElement('tr')
            const thead_td = document.createElement('td')
            thead_td.setAttribute('colspan', 5)
    
            const play_img = document.createElement('img')
            play_img.src = playlist_img
    
            const ttl_span = document.createElement('SPAN')
            ttl_span.setAttribute('class', "playlist-title")
            ttl_span.innerText = title
    
            playlistContainer.appendChild(table)
            table.appendChild(thead)
            thead.appendChild(thead_tr)
            thead_tr.appendChild(thead_td)
    
            thead_td.appendChild(play_img)
            thead_td.appendChild(ttl_span)
    
            // set body
            const tbody = document.createElement('tbody')
    
            table.appendChild(tbody)
    
            // body-header
            const tbody_tr_header = document.createElement('tr')
            tbody_tr_header.setAttribute('class', 'header')
    
            const num_head = document.createElement('td')
            num_head.setAttribute('class', 'number-header')
            num_head.innerText = '#'
    
            const name_head = document.createElement('td')
            name_head.innerText = 'Name'
    
            const album_head = document.createElement('td')
            album_head.innerText = 'Album'
    
            const artist_head = document.createElement('td')
            artist_head.innerText = 'Artist'
    
            const length_head = document.createElement('td')
            length_head.innerText = 'Length'
    
            tbody.append(tbody_tr_header)
            tbody_tr_header.appendChild(num_head)
            tbody_tr_header.appendChild(name_head)
            tbody_tr_header.appendChild(album_head)
            tbody_tr_header.appendChild(artist_head)
            tbody_tr_header.appendChild(length_head)
    
            // add songs
            for (let i = 0; i < songs.length; i++){
                const tr_song = document.createElement('tr')
    
                // number
                const num = document.createElement('td')
                num.classList.add('play-button')
    
                const num_span = document.createElement('SPAN')
                num_span.classList.add("num")
                num_span.innerText = `${i+1}`
    
                const icon = document.createElement('i')
                icon.setAttribute('class', 'fas fa-play')
    
                // name
                const name = document.createElement('td')
                const album_img = document.createElement('img')
                album_img.src = songs[i].album.image_path
    
                const name_span = document.createElement('SPAN')
                name_span.classList.add("song-name")
                name_span.innerText = `${songs[i].name}`
    
                // album
                const album = document.createElement('td')
                album.innerText = `${songs[i].album.name}`
    
                // artist
                const artist = document.createElement('td')
                artist.innerText = `${songs[i].album.artist}`
    
                // length
                const length = document.createElement('td')
                length.innerText = `${songs[i].length}`
    
    
                tbody.append(tr_song)
                tr_song.appendChild(num)
                num.append(num_span)
                num.append(icon)
                tr_song.appendChild(name)
                name.appendChild(album_img)
                name.appendChild(name_span)
                tr_song.appendChild(album)
                tr_song.appendChild(artist)
                tr_song.appendChild(length)
            }  
    
            // event listeners           
            _initPlayBttns()
    
        },
    
        albumPopUp: function(selector, album, img_classes){
            const albumContainer = document.getElementById(selector)
    
            // get values from js object
            const currImg = document.createElement('img')
            currImg.src = album.image_path
    
            for (let i = 0; i < img_classes.length; i++){
                currImg.classList.add(img_classes[i])
            }
    
            // pop up span
            const popUpSpan = document.createElement("SPAN")
            popUpSpan.className = "popUp"
            popUpSpan.appendChild(currImg)
    
            // album info pop box
            const albumInfoBox = document.createElement('div')
            albumInfoBox.className = "albumInfoBox"
            popUpSpan.appendChild(albumInfoBox)
    
            // add info to album info
            let albumInfo =
            `<b>Name:</b> ${album.name}<br>
            <b>Artist:</b> ${album.artist}<br>
            <b>Genre:</b> ${album.genre}<br>
            <b>Year:</b> ${album.year}<br>`
    
            let tracklist = `<b>Tracklist:</b><br>`
            for (let i = 0; i < album.tracklist.length; i++){
                tracklist += `${i+1}. ${album.tracklist[i]} <br>`
            }
    
            albumInfo += tracklist 
    
            albumInfoBox.innerHTML = albumInfo
    
            albumContainer.appendChild(popUpSpan)
        },
    
        createAlbum: function(name, artist, genre, year, tracklist, image_path) {
            const Album = {
                name: name,
                artist: artist,
                genre: genre,
                year: year,
                tracklist: tracklist,
                image_path: image_path
            }
            return Album
        },
    
        createSong: function(name, album, length) {
            const Song = {
                name: name,
                album: album,
                length: length
            }
            return Song
        }
    }

    global.MusicLib = global.MusicLib || MusicLib
    
    
})(window, window.document, $);




