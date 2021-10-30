
export class People{
    protected _name: string
    protected _height: string
    protected _mass: string
    protected _gender: string
    constructor(n: string,h: string,m: string,g: string) {
        this.name = n;
        this.height = h;
        this.mass = m;
        this.gender = g;
    }
    set name(n: string){
        this._name = n;
    }
    set height(h: string){
        this._height = h;
    }
    set mass(m: string){
        this._mass = m;
    }
    set gender(g: string){
        this._gender = g;
    }

    get name(): string{
        return this._name;
    }
    get height(): string{
        return this._height;
    }
    get mass(): string{
        return this._mass;
    }
    get gender(): string{
        return this._gender;
    }
    GetValForIndex(x: string): string {
        // я тут всякое попробовал... и ничего лучше не придумал чем это :(
        switch (x){
            case "name":
                return this.name;
            case "mass":
                return this.mass;
            case "height":
                return this.height;
            case "gender":
                return this.gender;
        }
        return "";
    }
}


//-------------------------------------------------------------------------------------------------------------------
interface InterfacePeople{
    name: string
    height: string
    mass: string
    gender: string
}

interface InterfacePeoples{
    count: number
    next: string | null
    results: Array<InterfacePeople>
}

export class Peoples{
    protected _arr: Array<People> = []
    protected _next: string
    protected _count: number
    protected _current_page: number
    protected _blockFetch: boolean = true
    protected _sorttype: string = "default"
    protected _sortname: string = "default"
    protected _vector: number = 0
    constructor(url: string) {
        const z = this.fetchURL(url, (r: InterfacePeoples)=>{
            this._current_page = 0;
            this._count = r.count;
            this._next = r.next ? r.next : "";
            r.results.forEach((e: InterfacePeople)=>{
                const p = new People(e.name, e.height, e.mass, e.gender);
                this.push(p);
            });
            this.draw();
        }, console.error)
        z.catch(console.error);
    }
//----------------------------------
    push(p: People): number{
        this._arr.push(p);
        return this._arr.length-1;
    }
//----------------------------------
    async fetchURL (url: string, callback: any, errorCallback: any)  {
        document.body.style.cursor="progress";
        this._blockFetch = true;
        await fetch(url)
            .then(response => response.json())
            .then(callback)
            .catch(errorCallback);
        this._blockFetch = false;
        document.body.style.cursor="default";
    }
//----------------------------------
    get length(): number{
        return this._arr.length;
    }

//----------------------------------
    draw(){
        (document.getElementById("next") as HTMLButtonElement).disabled = ((this._current_page+1)*10 > this.length) && !this._next;
        (document.getElementById("prev")as HTMLButtonElement).disabled = !this._current_page;
        document.getElementById("page").innerHTML=String(this._current_page+1);

        const tbl_tbody = document.getElementById("tbl_tbody");

        tbl_tbody.innerHTML="";
        this._arr.forEach((p,i)=>{
            if (i>=this._current_page*10 && i<(this._current_page+1)*10) {
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

//----------------------------------
    nextLisener(): boolean {
        if (this._blockFetch) {return false;}
        if (this._next && ((this._current_page+1)*10 >= this.length)) {
            const z = this.fetchURL(this._next, (r: InterfacePeoples) => {
                this._current_page++;
                this._next = r.next ? r.next : "";
                r.results.forEach((e: InterfacePeople) => {
                    const p = new People(e.name, e.height, e.mass, e.gender);
                    this.push(p);
                });
                this.sort();
                this.draw();
            }, console.error)
            z.catch(console.error);
        } else {
            this._current_page++;
            this.draw();
        }
        return true;
    }

    prevLisener(): boolean {
        if (this._blockFetch) {return false;}
        this._current_page--;
        this.draw();
        return true;
    }

//------------------------------------------------------------------------------
    sort(sorttype: string = this._sorttype, sortname: string = this._sortname, vector: number = this._vector){
        this._sorttype = sorttype;
        this._sortname = sortname;
        this._vector = vector;
        if (sorttype === "string"){
            if (vector === 1) {
                this._arr.sort((a:People, b:People) => {
                    const x = a.GetValForIndex(sortname);
                    const y = b.GetValForIndex(sortname);
                    if (x > y) return 1;
                    if (x === y) return 0;
                    if (x < y) return -1;
                });
            }
            else {
                this._arr.sort((a:People, b:People) => {
                    const x = a.GetValForIndex(sortname);
                    const y = b.GetValForIndex(sortname);
                    if (x < y) return 1;
                    if (x === y) return 0;
                    if (x > y) return -1;
                });
            }
        }
        else if (sorttype === "number") {
            if (vector === 1) {
                this._arr.sort((a:People, b:People) => {
                    const x = this.GetNumberFromPeopleForSortname(a,sortname);
                    const y = this.GetNumberFromPeopleForSortname(b,sortname);
                    if (x > y) return 1;
                    if (x === y) return 0;
                    if (x < y) return -1;
                });
            } else {
                this._arr.sort((a:People, b:People) => {
                    const x = this.GetNumberFromPeopleForSortname(a,sortname);
                    const y = this.GetNumberFromPeopleForSortname(b,sortname);
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

    GetNumberFromPeopleForSortname(a: People, sortname: string): number{
        return Number.isNaN(Number(a.GetValForIndex(sortname).replace(/,/g, ""))) ? 0 : Number(a.GetValForIndex(sortname).replace(/,/g, ""));
    }

}

