
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
    constructor(url) {
        this.dofetchURL(url, (r)=>{
            console.log("callback");
            r.results.forEach((e)=>{
                const p = new People(e.name, e.height, e.mass, e.gender);
                this.push(p); //тут нет контекста!
            });

            console.log("draw");
            this.draw();
        }, console.error);
    }
//----------------------------------
    async dofetchURL (url, callback, errorCallback) {
        document.body.style.cursor="progress";
        await fetch(url)
                .then(response => response.json())
                .then(callback)
                .catch(errorCallback);
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
    indexIsNumber(i){
        if (typeof i !== "number"){
            throw new Error(`Индекс не является числом`);
        }
        else if (i >= this.#arr.length){
            throw new Error(`Не верный индекс`);
        }
        else{
            return true;
        }
    }
//----------------------------------
    get(i){
        return this.indexIsNumber(i) ? this.#arr[i] : false;
    }
//----------------------------------
    delete(i){
        if (this.indexIsNumber(i)){
            this.#arr.splice(i,1);
            return true;
        }
        else {
            return false;
        }
    }
//----------------------------------
    draw(){

        const tbl_tbody = document.getElementById("tbl_tbody");
        tbl_tbody.innerHTML="";

        this.#arr.forEach((p,i)=>{
            const tr = document.createElement("tr");

            const td1 = document.createElement("td");
            td1.append(document.createTextNode(String(i+1)));
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
        });

    }
}