let searchIcon = document.getElementById("searchIcon")
let closeInputBar = document.getElementById("closet")
let languageButton = document.getElementById("language")
let germanyLanguage = document.getElementById("germany")
let englishLanguage=document.getElementById("english")
let languageText = document.getElementById("languageText")


var leftDiv = document.querySelector(".leftDiv");
var input = document.querySelector('.input');
var ulLanguage = document.querySelector(".notActiveLanguage");

const openInputBar=()=> {
    leftDiv.className = "notActive";
    input.className = "activeInput";
    searchIcon.className = "notActive"
}

const closeInputBarFunc=() =>{
    leftDiv.className = "leftDiv";
    input.className = "notActive";
    searchIcon.className = "searchIcon";

}

const openLanguage = () => {
    ulLanguage.className = "ulLanguage"
}

const changeLanguageToGermany = () => {
    languageText.textContent = "DE"
    ulLanguage.className="notActiveLanguage";
}
const changeLanguageToEnglish=()=>{
    languageText.textContent="EN"
    ulLanguage.className="notActiveLanguage"
}

searchIcon.addEventListener("click", openInputBar);
closeInputBar.addEventListener("click", closeInputBarFunc);
languageButton.addEventListener("click", openLanguage)
germanyLanguage.addEventListener("click", changeLanguageToGermany)
englishLanguage.addEventListener("click",changeLanguageToEnglish)
