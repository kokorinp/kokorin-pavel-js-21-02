
export function loader(run){
    const ld = document.getElementById("loader");

    if (run) {
        ld.style.display = "block";
        const ldh = Number.parseInt(getComputedStyle(ld).height);
        for (let i = 0; i<ldh; i++){
            setTimeout(function() {
                line(i,1);
            }, 20*i);
        }

    }
    else{
        ld.innerHTML="";
        ld.style.display = "none";
    }
}


function line(y,h){
    let w = 0;
    const l = document.createElement("div");
    const ld = document.getElementById("loader");
    l.classList.add("loader__line");
    ld.append(l);
    l.style.left = 0+"px";
    l.style.top = y+"px";
    l.style.width = 0+"px";
    l.style.height = h+"px";

    let interval = moveW();


    function moveW(){
        return requestAnimationFrame(()=>{
            if (ld.style.display === "none"){
                l.remove();
            }
            else if (w < Number.parseInt(getComputedStyle(ld).width))
            {
                if (w+15 < Number.parseInt(getComputedStyle(ld).width)){
                    w = 15 + Number.parseInt(getComputedStyle(l).width);
                }else{
                    w = Number.parseInt(getComputedStyle(ld).width);
                }


                l.style.width = w+"px";
                //console.log(l.style.width);
                requestAnimationFrame(moveW);
            }
            else{
                //console.log("stop");
                // setTimeout(function() {
                //     l.remove();
                // }, 1500);
                // setTimeout(function() {
                //     line(y,1);
                // }, 3000);

            }
        });
    }

}

