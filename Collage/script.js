const fulImgBox = document.getElementById("fulImgBox"),
    fulImg = document.getElementById("fulImg"),
    fulVideo = document.getElementById("fulVideo");

function openFulImg(reference) {
    fulImgBox.classList.remove("show-video");
    fulImgBox.classList.add("show-image");
    fulImg.src = reference;
    fulImgBox.style.display = "flex";
}

function openFulVideo(reference) {
    fulImgBox.classList.remove("show-image");
    fulImgBox.classList.add("show-video");
    fulVideo.src = reference;
    fulImgBox.style.display = "flex";
}

function closeImg() {
    fulImgBox.style.display = "none";
}