"use strict";

const mlib = new MusicLib()

// the info boxes 
const mitskiInfoBox = {
    selector: "mitskiPopUp",
    image_path: "images/mitski.jpg",
    bio: "Mitski (born Sep 27, 1990) is an indie pop artist."
}

const fkatwigsInfoBox = {
    selector: "fkatwigsPopUp",
    image_path: "images/fkatwigs.jpg",
    bio: "FKA twigs (born Jan 17, 1988) is an alt artist."
}

const theweekndInfoBox = {
    selector: "theweekndPopUp",
    image_path: "images/theweeknd.jpg",
    bio: "The Weeknd (born Feb 16, 1990) is an R&B artist."
}

// album objs
const aewsilksonicAlbum = mlib.createAlbum(
    "An Evening with Silk Sonic",
    "Bruno Mars",
    "R&B/Soul",
    2021,
    ["Silk Sonic Intro", "Leave the Door Open", "Fly as Me", "After Last Night", "Smokin Out the Window",
    "Put On a Smile", "777", "Skate", "Blast Off"],
    "images/silk_aewss.jpg")

const bluebAlbum = mlib.createAlbum(
    "Blue Banisters",
    "Lana Del Rey",
    "Folk/Pop",
    2021,
    ["Text Book", "Blue Banisters", "Arcadia", "Interlude - The Trio", "Black Bathing Suit",
    "If You Lie Down with Me", "Beautiful", "Violets for Roses", "Dealer", "Thunder",
    "Wildflower Wildfire", "Nectar of the Gods", "Living Legend", "Cherry Blossom", "Sweet Carolina"],
    "images/lana_bb.jpg"
)

const callmiyglAlbum = mlib.createAlbum(
    "Call Me If You Get Lost",
    "Tyler, the Creator",
    "Hip Hop", 
    2021, 
    ["Sir Baudelaire", "Corso", "Lemonhead", "WusYaName", "Lumberjack",
    "Hot Wind Blows", "Massa", "RunItUp", "Manifesto", "Sweet / I Thought You Wanted To Dance",
    "Momma Talk", "Rise!", "Blessed", "Juggernaut", "Wilshire", "Safari"],
    "images/tyle_cmiygl.jpg"
)

const happierteAlbum = mlib.createAlbum(
    "Happier Than Ever", 
    "Billie Eilish", 
    "Pop", 
    2021,
    ["Getting Older", "I Didn't Change My Number", "Billie Bossa Nova", "My Future", "Oxytocin",
    "Goldwing", "Lost Cause", "Halley's Comet", "Not My Responsibility", "OverHeated",
    "Everybody Dies", "Your Power", "NDA", "Therefore I Am", "Happier Than Ever",
    "Male Fantasy"],
    "images/bill_hte.jpg"
)

const jubileeAlbum = mlib.createAlbum(
    "Jubilee", 
    "Japanese Breakfast", 
    "Alternative Pop", 
    2021, 
    ["Paprika", "Be Sweet", "Kokomon, IN", "Slide Tackle", "Posing in Bondage",
    "Sit", "Savage Good Boy", "In Hell", "Tactics", "Posing for Cars"],
    "images/japa_jubilee.jpg"
)

const slingAlbum = mlib.createAlbum(
    "Sling",
    "Clairo",
    "Folk/Pop",
    2021,
    ["Bambi", "Amoeba", "Partridge", "Zinnias", "Blouse", 
    "Wade", "Harbor", "Just For Today", "Joanie", "Reaper", 
    "Little Changes", "Management"],
    "images/clai_sling.jpg"
)

const solarpAlbum = mlib.createAlbum(
    "Solar Power",
    "Lorde",
    "Folk/Pop",
    2021,
    ["The Path", "Solar Power", "California", "Stoned at the Nail Salon", "Fallen Fruit",
    "Secrets from a Girl (Who's Seen It All)", "The Man with the Axe", "Dominoes", "Big Star", "Leader of a New Regime",
    "Mood Ring", "Oceanic Feeling"],
    "images/lord_sp.jpg"
)

const stilloiAlbum = mlib.createAlbum(
    "Still Over It",
    "Summer Walker",
    "R&B",
    2021,
    ["Bitter", "Ex for a Reason", "No Love", "Throw it Away", "Reciprocate",
    "You Don't Know Me", "Circus", "Insane", "Constant Bullshit", "Switch a * Out",
    "Unloyal", "Closure", "Toxic", "Dat Right There", "Screwin'",
    "Broken Promises", "Session 33", "4th Baby Mama (Prelude)", "4th Baby Mama", "Ciara's Prayer"],
    "images/summ_soi.jpg"
)

const sourAlbum = mlib.createAlbum(
    "Sour",
    "Olivia Rodrigo",
    "Pop",
    2021,
    ["Brutal", "Traitor", "Drivers License", "1 Step Forward, 3 Steps Back", "Deja Vu",
    "Good 4 U", "Enough for You", "Happier", "Jealousy, Jealousy", "Favorite Crime", 
    "Hope Ur OK"],
    "images/or_sour.jpg"
)

const planetherAlbum = mlib.createAlbum(
    "Planet Her",
    "Doja Cat",
    "Pop/R&B",
    2021,
    ["Woman", "Naked", "Payday", "Get Into It (Yuh)", "Need to Know",
    "I Don't Do Drugs", "Love to Dream", "You Right", "Been Like This", "Options",
    "Ain't Shit", "Imagine", "Alone", "Kiss Me More"],
    "images/dc_planether.jpg"
)

const asitwasAlbum = mlib.createAlbum(
    "As It Was",
    "Harry Styles",
    "Pop",
    2022,
    ["As It Was"],
    "images/hs_asitwas.jpg"
)

const heatwavesAlbum = mlib.createAlbum(
    "Heat Waves",
    "Glass Animals",
    "Pop",
    2020,
    ["Heat Waves"],
    "images/ga_heatwaves.jpg"
)

const bigEnergyAlbum = mlib.createAlbum(
    "Big Energy",
    "Latto",
    "Pop/Rap",
    2021,
    ["Big Energy"],
    "images/latto_bige.jpg"
)

const monteroAlbum = mlib.createAlbum(
    "Montero",
    "Lil Nas X",
    "Pop/Rap",
    2021,
    ["Montero (Call Me by Your Name)", "Dead Right Now", "Industry Baby", "Thats What I Want", "The Art of Realization",
    "Scoop", "One of Me", "Lost in the Citadel", "Dolla Sign Slime", "Tales of Dominica", 
    "Sun Goes Down", "Void", "Dont Want It", "Life After Salem", "Am I Dreaming"],
    "images/lnx_montero.jpg"
)

const futurenAlbum = mlib.createAlbum(
    "Future Nostalgia",
    "Dua Lipa",
    "Pop",
    2020,
    ["Future Nostalgia", "Don't Start Now", "Cool", "Physical", "Levitating", 
    "Pretty Please", "Hallucinate", "Love Again", "Break My Heart", "Good in Bed",
    "Boys Will Be Boys"],
    "images/dua_futuren.jpg"
)

const borntodieAlbum = mlib.createAlbum(
    "Born To Die",
    "Lana Del Rey",
    "Alternative Pop",
    2012,
    ["Born to Die", "Off to the Races", "Blue Jeans", "Video Games", "Diet Mountain Dew",
    "National Anthem", "Dark Paradise", "Radio", "Carmen", "Million Dollar Man",
    "Summertime Sadness", "This Is What Makes Us Girls"],
    "images/lana_btd.jpg"
)

const dirtyCompAlbum = mlib.createAlbum(
    "Dirty Computer",
    "Janelle Monae",
    "Funk/Hip Hop",
    2018,
    ["Dirty Computer", "Crazy, Classic, Life", "Take a Byte", "Jane's Dream", "Screwed",
    "Django Jane", "Pynk", "Make Me Feel", "I Got the Juice", "I Like That",
    "Don't Judge Me", "Stevie's Dream", "So Afraid", "Americans"],
    "images/jm_dirtycomp.jpg"
)

// album pop up - staff picks
mlib.albumPopUp("future-nostalgia", futurenAlbum, ["staff-picks-img"])
mlib.albumPopUp("silk-sonic", aewsilksonicAlbum, ["staff-picks-img"])
mlib.albumPopUp("born-to-die", borntodieAlbum, ["staff-picks-img"])
mlib.albumPopUp("dirty-computer", dirtyCompAlbum, ["staff-picks-img"])

// current hits playlist - song objs
const asitwasSong = mlib.createSong("As It Was", asitwasAlbum, "2:47")

const heatwavesSong = mlib.createSong("Heat Waves", heatwavesAlbum, "3:58")

const bigenergySong = mlib.createSong("Big Energy", bigEnergyAlbum, "2:53")

const womanSong = mlib.createSong("Woman", planetherAlbum, "2:53")
const needtoknowSong = mlib.createSong("Need To Know", planetherAlbum, "3:11")
const kissmemoreSong = mlib.createSong("Kiss Me More", planetherAlbum, "3:29")

const happierteSong = mlib.createSong("Happier Than Ever", happierteAlbum, "4:58")

const industrybbSong = mlib.createSong("Industry Baby", monteroAlbum, "3:32")
const thatswiwSong = mlib.createSong("Thats What I Want", monteroAlbum, "2:24")

const good4uSong = mlib.createSong("good 4 u", sourAlbum, "2:58")
const traitorSong = mlib.createSong("traitor", sourAlbum, "3:49")
const driverslicenseSong = mlib.createSong("drivers license", sourAlbum, "4:02")

const levitatingSong = mlib.createSong("Levitating", futurenAlbum, "3:23")
const dontstartnSong = mlib.createSong("Don't Start Now", futurenAlbum, "3:03")

// ---------- EXAMPLES OF LIBRARY FUNCTIONS BEING CALLED ----------
// make info boxes
mlib.makeInfoBox(mitskiInfoBox)
mlib.makeInfoBox(fkatwigsInfoBox)
mlib.makeInfoBox(theweekndInfoBox)

// drag/drop - rank your favourite 2021 albums
const albumsArr = [happierteAlbum, jubileeAlbum, solarpAlbum, monteroAlbum,
     planetherAlbum, stilloiAlbum,  slingAlbum,  bluebAlbum, callmiyglAlbum]

mlib.insertDraggingBox("draggingBox", "Rank your favourite 2021 albums", albumsArr, "aquamarine")

// playlist - current hits
const currentHitsSongs = [asitwasSong, heatwavesSong, industrybbSong, bigenergySong, womanSong,
                        thatswiwSong, good4uSong,levitatingSong, kissmemoreSong, happierteSong, needtoknowSong, traitorSong, 
                        dontstartnSong, driverslicenseSong]

mlib.insertPlaylist("currentHitsPlaylist", "Current Hits", "images/current_hits_img.jpg", currentHitsSongs, "#3F77C2")