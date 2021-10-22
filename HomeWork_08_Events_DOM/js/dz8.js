const jstr = `[
  {
    "name": "Алексей Мордашов",
    "phone": "+79876543210"
  },
  {
    "name": "Владимир Потанин",
    "phone": "+79876543220"
  },
  {
    "name": "Владимир Лисин",
    "phone": "+79876543230"
  },
  {
    "name": "Вагит Алекперов",
    "phone": "+79876543240"
  },
  {
    "name": "Леонид Михельсон",
    "phone": "+79876543250"
  },
  {
    "name": "Геннадий Тимченко",
    "phone": "+79876543260"
  },
  {
    "name": "Алишер Усманов",
    "phone": "+79876543270"
  }
]`;


class People {
    #name
    #phone
    constructor(n,p) {
        this.name = n
        this.phone = p
    }

    set name(n){
        const reg = /^([А-ЯЁ]|[а-яё]|\s|-)+$/g;
        if (reg.test(n)){
            this.#name = n;
        }
        else{
            throw new Error(`Имя "${n}" не соответствует формату (ирилица/пробел/-)`);
            // this.#name = "";
            // console.log(`Имя "${n}" не соответствует формату (ирилица/пробел/-)`);
            // alert(`Имя "${n}" не соответствует формату (ирилица/пробел/-)`);
        }
    }

    set phone(p){
        //const reg = /^((\+79)|89)(\d){9}$/g;
        const reg = /^((\+79)|89)(\d)+$/g;
        p = p.replace(/\s/g,"").replace(/-/g,"");
        if (reg.test(p)){
            this.#phone = p;
        }
        else{
            throw new Error(`Телефон "${p}" не соответствует формату "(+7/8)9876543210"`);
            // this.#phone = "";
            // console.log(`Имя "${p}" не соответствует формату "(+7/8)9876543210"`);
            // alert(`Имя "${p}" не соответствует формату "(+7/8)9876543210"`);
        }

    }

    get name(){
        return this.#name;
    }
    get phone(){
        return this.#phone;
    }
}
//------------------------------------------------------------------------------

class PhoneBook{
    #arr = []
    constructor(s) {
        //this.#arr = "arr";
        //this.#arr = JSON.parse(s);
        JSON.parse(s).forEach((e,i,a) =>{
            const p = new People(e.name,e.phone);
            this.push(p);
            // console.log(e);
        });
    }
//----------------------------------
    get length(){
        return this.#arr.length;
    }
//----------------------------------
    push(p){
        if (p === Object(p)){ // было бы круто сделать проверку на то, что этот объект является экземпляром класса People
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
    draw(tbodyID, deleteClassEvent){
        const tbody = document.getElementById(tbodyID);
        //tbody.innerHTML="";
        let tr = ""
        this.#arr.forEach((e,i,a) =>{
            tr += `
            <tr data-i="${i}">
                <td>${i+1}</td>    
                <td>${e.name}</td>    
                <td>${e.phone}</td>    
                <td>
                    <span class="${deleteClassEvent}" data-i="${i}">x</span>                
                </td>    
            </tr>                  
            `;
        });
        tbody.innerHTML=tr;

        const obj = this;
        Array.from(document.getElementsByClassName(deleteClassEvent)).forEach((e) =>{
            e.addEventListener("click", function (event) {
                // console.log(Number(event.target.dataset.i));
                obj.delete(Number(event.target.dataset.i));
                obj.draw(tbodyID,deleteClassEvent);
            })
        });
    }
}


// const phonebook = new PhoneBook(jstr);
// console.log(phonebook);
// console.log(phonebook.get(6));
// console.log(phonebook.length);
// const keks = new People("Вася Пупкин","+7 9- -8-7 65-43-2 10");
//
// console.log(phonebook.push(keks));
// console.log(phonebook.length);
// console.log(phonebook.get(7));
// console.log(phonebook.delete(6));
// console.log(phonebook);




document.addEventListener("DOMContentLoaded", function() {

    const phonebook = new PhoneBook(jstr);
    phonebook.draw("tbl_tbody","delete-row");
    let name = "";
    let phone = "";

    const error_section = document.getElementById("form-error");

    const input_name = document.getElementById("name");
    input_name.addEventListener("input",(e)=>{
        const reg = /^([А-ЯЁ]|[а-яё]|\s|-)+$/g;
        if (reg.test(input_name.value) || e.inputType === "deleteContentBackward" || e.inputType ===  "deleteContentForward" || e.inputType === "deleteByCut"){
            name = input_name.value;
            error_section.style.visibility = "hidden";
        }
        else {
            input_name.value = name;
            // console.log(name);
            error_section.innerHTML=`Имя может содержать только кирилицу, пробелы или тире "-"`;
            error_section.style.visibility = "visible";
        }
    });

    const input_phone = document.getElementById("phone");
    input_phone.addEventListener("input",(e)=>{
        const reg = /^(((\+79)|89)(\d)+)|\+?|8?$/g;
        //const reg = /^((\+79)|89)(\d)+$/g;
        if (reg.test(input_phone.value) || e.inputType === "deleteContentBackward" || e.inputType ===  "deleteContentForward" || e.inputType === "deleteByCut"){
            phone = input_phone.value;
            error_section.style.visibility = "hidden";
            console.log(phone);
        }
        else {
            input_phone.value = phone;

            error_section.innerHTML=`Телефон должен начинаться с "+79" или "89" и содержать только цифры`;
            error_section.style.visibility = "visible";
        }
    });
});

