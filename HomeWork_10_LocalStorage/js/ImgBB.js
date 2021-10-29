import {URL} from "./consts.js";
import {KEY} from "./consts.js";
import {loader} from "./loader.js";


//loader(true);

export function uploadBase64(file,callback,callbackError) {
    const reader = new FileReader();
    reader.readAsDataURL(file)

     reader.onload = async () => {
        loader(true);
        const formData = new FormData();
        formData.set("key", KEY);
        formData.set("image", reader.result.replace(/^.*,/, ""));

        await fetch(URL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(callback)
        .catch(callbackError);

        loader(false);
    }

}