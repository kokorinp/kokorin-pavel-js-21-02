function addClass(cl,classname) {
    var e;
    e = document.getElementsByClassName(cl);
    for (var i = 0; i < e.length; i++) {
        e[i].classList.add(classname);
    }
}

function removeClass(cl,classname) {
    var e;
    e = document.getElementsByClassName(cl);
    for (var i = 0; i < e.length; i++) {
        e[i].classList.remove(classname);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("switch-them").addEventListener("click", function() {
        if (this.checked){
            console.log("dark");
            addClass("body","body_them_dark");
            addClass("header","header_them_dark");
            addClass("main__left","main__left_them_dark");
            addClass("cats__item","cats__item_them_dark");
            addClass("popular__item","popular__item_them_dark");
            addClass("popular__img-wrapper","popular__img-wrapper_them_dark");
            addClass("popular__link-button","popular__link-button_them_dark");
            addClass("footer","footer_them_dark");
        }
        else {
            console.log("white");
            removeClass("body","body_them_dark");
            removeClass("header","header_them_dark");
            removeClass("main__left","main__left_them_dark");
            removeClass("cats__item","cats__item_them_dark");
            removeClass("popular__item","popular__item_them_dark");
            removeClass("popular__img-wrapper","popular__img-wrapper_them_dark");
            removeClass("popular__link-button","popular__link-button_them_dark");
            removeClass("footer","footer_them_dark");
        }
    });
});
