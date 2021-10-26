function tik_setTimeout(i,j){
    console.log(`setTimeout: ${i}`);
    i++;
    if (i<=j){
        setTimeout(tik_setTimeout,1000,i,j);
    }
}


import {Peoples} from "./peoples.js";
import {ROOT_URL} from './consts.js'



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("n1-setTimeout").addEventListener("click",()=>{
        const i = Number(document.getElementById("i").value);
        const j = Number(document.getElementById("j").value);
        setTimeout(tik_setTimeout,1000,i,j);
    });

    document.getElementById("n1-setInterval").addEventListener("click",()=>{
        let i = Number(document.getElementById("i").value);
        const j = Number(document.getElementById("j").value);

        const setI = setInterval(()=>{
            console.log(`setInterval: ${i}`);
            if (i>=j){
                clearInterval(setI);
            }
            i++;
        },1000);
    });




    const peoples = new Peoples(ROOT_URL+"people/");
    //peoples.push(p);

    console.log(peoples);


});

