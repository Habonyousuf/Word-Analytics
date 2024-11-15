document.getElementById('text-input')

.addEventListener("input",(event)=>{

    //word
const inputFieldValue=event.target.value;
const wordCount=inputFieldValue.trim().split(/\s+/).filter(function(word){
    return word.length>0;
}).length

document.getElementById("word-count").textContent=wordCount;

// charcount
const charCount=inputFieldValue.length;
document.getElementById("char-count").textContent=charCount;

//twitter
const twitterLimit=200-charCount;
document.getElementById("twitter-limit").textContent= twitterLimit>=0?twitterLimit:0;

//facebook
const facebookLimit=63206-charCount;
document.getElementById("facebook-limit").textContent=  facebookLimit>=0?facebookLimit:0;

});