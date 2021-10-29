

export function addImgToGallery(url, gallery, callbackdel = function (){this.parentElement.remove()})
{
    const div = document.createElement("div");
    div.classList.add("gallery__item");
    const img = document.createElement("img");
    img.src = url;

    const del = document.createElement("div");
    del.classList.add("gallery__item-delete");
    del.innerHTML = "X";
    del.dataset.url=url;

    div.append(del);
    div.append(img);
    gallery.append(div);

    del.addEventListener("click",callbackdel);
}