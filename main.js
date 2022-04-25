let word = document.getElementById("look-up")
let pronounciation = document.getElementById("word-pro")
let wordType = document.getElementById("word-type")
let defining = document.getElementById("info")
let audio = document.getElementById("myAudio")
let title = document.getElementsByTagName("title")

word.innerHTML = "pick"
word = word.innerHTML

title.innerHTML = word;

let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`


async function getDefintion(){
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data[0].phonetics[0].text);
    
    for(var i=0; i<data[0].meanings.length; i++){
        if(data[0].meanings[i].partOfSpeech !== ""){
            wordType.innerHTML = data[0].meanings[0].partOfSpeech;
        }else{
            wordType.innerHTML = "undefined";
        }
        if(data[0].meanings[i].definitions[i].definition !== ""){
            defining.innerHTML = data[0].meanings[i].definitions[i].definition;
            break;
        }else{
            defining.innerHTML = "undefined";
        }

    }
    
    for(var i=0; i<data[0].phonetics.length; i++){
        if(data[0].phonetics[i].audio !== ""){
            audio.innerHTML = `<source src="${data[0].phonetics[i].audio}">`
        }
        if(data[0].phonetics[i].text !== ""){
            pronounciation.innerHTML = data[0].phonetics[i].text;
        }else{
            pronounciation.innerHTML = `undefined`;
        }
        
    }
    if(audio.innerHTML !== ""){
        document.getElementById("imageOfSpeaker").innerHTML = ` <img src="volume-high.svg" class="speaker" onclick="playAudio()">`;
        if(document.getElementById("imageOfSpeaker").innerHTML !== null){
            console.log("Success!")
        }
    }
}

function playAudio() { 
    audio.play(); 
}

getDefintion();
