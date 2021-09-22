let buttonWatch = document.getElementById("buttonWatch")
let closeIframe = document.getElementById("closeIframeButton")

let iframe = document.querySelector(".ytFrameNotActive")

const activeIframe = () => {
    iframe.className = "ytFrame"
}

const closeFunc = () => {
    iframe.className = "ytFrameNotActive"
}

buttonWatch.addEventListener("click", activeIframe)
closeIframe.addEventListener("click", closeFunc)