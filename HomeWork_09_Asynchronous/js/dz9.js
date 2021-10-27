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

    document.getElementById("next").addEventListener("click",()=> {
        peoples.nextLisener();
    });

    document.getElementById("prev").addEventListener("click",()=> {
        peoples.prevLisener();
    });

    function clearSort(){
        Array.from(document.getElementsByClassName("sort")).forEach((element)=> {
            element.dataset.sort = "0";
            element.textContent = element.textContent.replace(/[\^˅]/g,"");
        });
    }
    Array.from(document.getElementsByClassName("sort")).forEach((e)=>{
        e.addEventListener("click",()=> {
            const str = e.textContent.replace(/[\^˅]/g,"");
            if (e.dataset.sort === "1"){
                peoples.sort(e.dataset.sorttype, e.dataset.sortname, 2);
                clearSort();
                e.dataset.sort = "2";
                e.textContent = "˅"+str
            }
            else{
                peoples.sort(e.dataset.sorttype, e.dataset.sortname, 1);
                clearSort();
                e.dataset.sort = "1";
                e.textContent = "^"+str
            }
            peoples.draw();
        });
    });


    //console.log(peoples);


});

