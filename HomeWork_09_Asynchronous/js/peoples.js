
export class People{
    #name
    #height
    #mass
    #gender
    constructor(n,h,m,g) {
        this.name = n;
        this.height = h;
        this.mass = m;
        this.gender = g;
    }
    set name(n){
        this.#name = n;
    }
    set height(h){
        this.#height = h;
    }
    set mass(m){
        this.#mass = m;
    }
    set gender(g){
        this.#gender = g;
    }

    get name(){
        return this.#name;
    }
    get height(){
        return this.#height;
    }
    get mass(){
        return this.#mass;
    }
    get gender(){
        return this.#gender;
    }
}


//-------------------------------------------------------------------------------------------------------------------



export class Peoples{
    #arr = []
    #next
    #count
    #current_page
    #blockFetch = true
    #sorttype = "default"
    #sortname = "default"
    #vector = 0
    constructor(url) {
        this.fetchURL(url, (r)=>{
            // console.log(r);
            this.#current_page = 0;
            this.#count = r.count;
            this.#next = r.next ? r.next : "";
            r.results.forEach((e)=>{
                const p = new People(e.name, e.height, e.mass, e.gender);
                this.push(p);
            });

            this.draw();
        }, console.error).catch(console.error);
    }
//----------------------------------
    async fetchURL (url, callback, errorCallback) {
        document.body.style.cursor="progress";
        this.#blockFetch = true;
        await fetch(url)
                .then(response => response.json())
                .then(callback)
                .catch(errorCallback);
        this.#blockFetch = false;
        document.body.style.cursor="default";
    }
//----------------------------------
    get length(){
        return this.#arr.length;
    }
//----------------------------------
    push(p){
        if (p === Object(p)){
            this.#arr.push(p);
            return this.#arr.length-1;
        }
        else{
            throw new Error(`Не является объектом`);
        }
    }
//----------------------------------
    draw(){
        document.getElementById("next").disabled = ((this.#current_page+1)*10 > this.length) && !this.#next;
        document.getElementById("prev").disabled = !this.#current_page;
        document.getElementById("page").innerHTML=String(this.#current_page+1);

        const tbl_tbody = document.getElementById("tbl_tbody");

        tbl_tbody.innerHTML="";
        this.#arr.forEach((p,i)=>{
            if (i>=this.#current_page*10 && i<(this.#current_page+1)*10) {
                const tr = document.createElement("tr");

                const td1 = document.createElement("td");
                td1.append(document.createTextNode(String(i + 1)));
                tr.append(td1);

                const td2 = document.createElement("td");
                td2.append(document.createTextNode(p.name));
                tr.append(td2);

                const td3 = document.createElement("td");
                td3.append(document.createTextNode(p.height));
                tr.append(td3);

                const td4 = document.createElement("td");
                td4.append(document.createTextNode(p.mass));
                tr.append(td4);

                const td5 = document.createElement("td");
                td5.append(document.createTextNode(p.gender));
                tr.append(td5);

                tbl_tbody.append(tr);
            }
        });

    }

    nextLisener() {
        if (this.#blockFetch) {return 0;}
        if (this.#next && ((this.#current_page+1)*10 >= this.length)) {
            this.fetchURL(this.#next, (r) => {
                this.#current_page++;
                this.#next = r.next ? r.next : "";
                r.results.forEach((e) => {
                    const p = new People(e.name, e.height, e.mass, e.gender);
                    this.push(p);
                });
                this.sort();
                this.draw();
            }, console.error).catch(console.error);
        } else {
            this.#current_page++;
            this.draw();
        }
    }

    prevLisener() {
        if (this.#blockFetch) {return 0;}
        this.#current_page--;
        this.draw();
    }


    sort(sorttype = this.#sorttype, sortname = this.#sortname, vector = this.#vector){
        this.#sorttype = sorttype;
        this.#sortname = sortname;
        this.#vector = vector;
        if (sorttype === "string"){
            if (vector === 1) {
                this.#arr.sort((a, b) => {
                    const x = a[sortname];
                    const y = b[sortname];
                    if (x > y) return 1;
                    if (x === y) return 0;
                    if (x < y) return -1;
                });
            }
            else {
                this.#arr.sort((a, b) => {
                    const x = a[sortname];
                    const y = b[sortname];
                    if (x < y) return 1;
                    if (x === y) return 0;
                    if (x > y) return -1;
                });
            }
        }
        else if (sorttype === "number") {
            if (vector === 1) {
                this.#arr.sort((a, b) => {
                    const x = Number.isNaN(Number(a[sortname].replace(/,/g, ""))) ? 0 : Number(a[sortname].replace(/,/g, ""));
                    const y = Number.isNaN(Number(b[sortname].replace(/,/g, ""))) ? 0 : Number(b[sortname].replace(/,/g, ""));
                    if (x > y) return 1;
                    if (x === y) return 0;
                    if (x < y) return -1;
                });
            } else {
                this.#arr.sort((a, b) => {
                    const x = Number.isNaN(Number(a[sortname].replace(/,/g, ""))) ? 0 : Number(a[sortname].replace(/,/g, ""));
                    const y = Number.isNaN(Number(b[sortname].replace(/,/g, ""))) ? 0 : Number(b[sortname].replace(/,/g, ""));
                    if (x < y) return 1;
                    if (x === y) return 0;
                    if (x > y) return -1;
                });
            }
        }
        else if (sorttype === "default"){
            //
        }else{
            throw new Error("Не верный параметр сортировки");
        }

    }
}