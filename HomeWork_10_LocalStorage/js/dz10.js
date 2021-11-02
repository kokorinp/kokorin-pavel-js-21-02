import {uploadBase64} from "./ImgBB.js";

import {addImgToGallery} from "./gallery.js";

const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");
const imgArr = localStorage.getItem("imgArr") ? JSON.parse(localStorage.getItem("imgArr")) : [];


function delImgFromGalleryCallback(){
    imgArr.splice(imgArr.indexOf(this.dataset.url),1);
    localStorage.setItem("imgArr", JSON.stringify(imgArr));
    this.parentElement.remove();
}


imgArr.forEach((e)=>{
    addImgToGallery(e,gallery,delImgFromGalleryCallback);
});

document.getElementById("fileButton").addEventListener("click", () => {
    if (fileInput.files[0]){
        uploadBase64(fileInput.files[0], (response) => {
            imgArr.push(response.data.display_url);
            localStorage.setItem("imgArr", JSON.stringify(imgArr));
            addImgToGallery(response.data.display_url, gallery,delImgFromGalleryCallback);
        }, console.error);
    }

    //uploadBase64UrlToImgBB(input.files[0])
})




