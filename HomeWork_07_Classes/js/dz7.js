//'use strict'
// Реализовать объект animal, с полем клички, методом eat, выводящим сообщение "/*кличка*/ ест" и
// методом say, выводящим фразу, "неизвестное животное молчит",
//
// путём прототипного наследования создать объекты кота, собаки и попугая.
// Переопределить в них метод say, в зависимости от типа животного.
//
// Для кота добавить новый метод hunt, выводящий сообщение "/*кличка*/ охотится".
//
// Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи.
//
// Методы должны быть неперечисляемыми. Разработать метод rename, для смены клички животного.
//
// Новая кличка должна содержать только кирилические символы, пробелы или символ "-".
//
// Выполнить то же самое использую функции конструкторы. Выполнить то же самое, используя классы.

const defaultsPropMethods = {
    configurable: false,
    enumerable: false,
    writable: false
}

const defaultsProp = {
    configurable: false,
    enumerable: true,
    writable: true
}


//-------------------------------------------------------------------------------------

const AnimalObj = {
    nik: "Кличка",
    eat (){
        console.log(`${this.nik} ест`);
    },
    say() {
        console.log('неизвестное животное молчит');
    },
    rename (name){
        const reg = /^([А-ЯЁ]|[а-яё]|\s|-)+$/g;

        if (reg.test(name)){
            this.nik = name;
        }
        else{
            console.log(`ОШИБКА: "${name}" - Новая кличка должна содержать только кирилические символы, пробелы или символ "-"`);
        }
    }
}
Object.defineProperty(AnimalObj, "nik", defaultsProp);
Object.defineProperty(AnimalObj, "eat", defaultsPropMethods);
Object.defineProperty(AnimalObj, "say", defaultsPropMethods);
Object.defineProperty(AnimalObj, "rename", defaultsPropMethods);

//-------------------------------------------------------------------------------------

const CatObj = {
    __proto__: AnimalObj,
    say() {
        console.log('кот мяукает мяу мяу');
    },
    hunt(){
        console.log(`${this.nik} охотится`);
    }
}
Object.defineProperty(CatObj, "say", defaultsPropMethods);
Object.defineProperty(CatObj, "hunt", defaultsPropMethods);

//-------------------------------------------------------------------------------------

const DogObj = {
    __proto__: AnimalObj,
    say() {
        console.log('собачка гавкает гав гав');
    }
}
Object.defineProperty(DogObj, "say", defaultsPropMethods);

//-------------------------------------------------------------------------------------

const ParrotObj = {
    __proto__: AnimalObj,
    say() {
        console.log('Попугой опять ругается *******');
    }
}
Object.defineProperty(ParrotObj, "say", defaultsPropMethods);

//-------------------------------------------------------------------------------------

function runOBJ () {
    //const animalOBJ = new AnimalObj;
    delete(AnimalObj.eat);
    AnimalObj.eat();
    AnimalObj.say = function (){
        console.log("неизвестное животное должно говорить что-нибудь типа \"writable: false\"");
    };
    AnimalObj.say();
    console.log(Object.getOwnPropertyDescriptors(AnimalObj));
    console.log("--------start Object.keys(AnimalObj)----------");
    console.log(Object.keys(AnimalObj));
    console.log("--------end Object.keys(AnimalObj)----------");
    console.log('-----------------------------');

    CatObj.rename("Тишка");
    CatObj.eat();
    CatObj.say();
    CatObj.hunt();
    console.log(Object.getOwnPropertyDescriptors(CatObj));
    console.log('-----------------------------');

    DogObj.rename("Тузик");
    DogObj.eat();
    DogObj.say();

    console.log('-----------------------------');

    ParrotObj.rename("Кеша великий - пупок");
    ParrotObj.eat();
    ParrotObj.say();
    ParrotObj.rename("Кеша великий - пупок222");
}


//-----------------------------------------------------------------------------------------------------
// функции
function AnimalFnc(noname = "Кличка") {
    this.nik = noname;
    this.eat = function () {
        console.log(`${this.nik} ест`);
    };
    this.say = function () {
        console.log('неизвестное животное молчит');
    };
    this.rename = function (name){
        const reg = /^([А-ЯЁ]|[а-яё]|\s|-)+$/g;
        if (reg.test(name)){
            this.nik = name;
        }
        else{
            console.log(`ОШИБКА: "${name}" - Новая кличка должна содержать только кирилические символы, пробелы или символ "-"`);
        }
    };

    Object.defineProperty(this, "nik", defaultsProp);
    Object.defineProperty(this, "eat", defaultsPropMethods);
    Object.defineProperty(this, "say", {
        configurable: false,
        enumerable: false,
        writable: true
    });
    Object.defineProperty(this, "rename", defaultsPropMethods);
}

//----------------------------------------

function CatFnc (noname) {
    AnimalFnc.call(this,noname);
    this.say = function () {
        console.log('кот мяукает мяу мяу');
    };
    this.hunt = function (){
        console.log(`${this.nik} охотится`);
    };
    Object.defineProperty(this, "say", defaultsPropMethods);
    Object.defineProperty(this, "hunt", defaultsPropMethods);
}
//CatFnc.prototype = AnimalFnc;

//-------------------------------------------

function DogFnc (noname) {
    AnimalFnc.call(this,noname);
    this.say = function () {
        console.log('собачка гавкает гав гав');
    }
    Object.defineProperty(this, "say", defaultsPropMethods);
}

//-------------------------------------------

function ParrotFnc (noname) {
    AnimalFnc.call(this,noname);
    this.say = function () {
        console.log('Попугой опять ругается *******');
    };
    Object.defineProperty(this, "say", defaultsPropMethods);
}
//-------------------------------------------


function runFNC  () {
    const animalFNC = new AnimalFnc;
    delete(animalFNC.eat);
    animalFNC.eat();
    animalFNC.say = function (){
        console.log("Если \"writable: false\", то в последующих функциях-конструкторах не даёт переопределить метод!");
    };
    animalFNC.say();
    console.log(Object.getOwnPropertyDescriptors(animalFNC));
    console.log("--------start Object.keys(animalFNC)----------");
    console.log(Object.keys(animalFNC));
    console.log("--------end Object.keys(animalFNC)----------");
    console.log('-----------------------------');

    const catFNC = new CatFnc;
    catFNC.rename("Тишка");
    catFNC.eat();
    catFNC.say();
    catFNC.hunt();
    console.log(Object.getOwnPropertyDescriptors(catFNC));
    console.log('-----------------------------');


    const dogFNC = new DogFnc("Бобик");
    console.log(dogFNC.nik);
    dogFNC.rename("Тузик");
    dogFNC.eat();
    dogFNC.say();

    console.log('-----------------------------');


    const parrotFNC = new ParrotFnc();
    parrotFNC.rename("Кеша - великий");
    parrotFNC.eat();
    parrotFNC.say();

    console.log('-----------------------------');
}



//-----------------------------------------------------------------------------------------------------
class AnimalCl {
    #nik = "кличка";
    constructor(noname = "кличка дефолт") {
        this.#nik = noname;
    };

    set rename (name) {
        const reg = /^([А-ЯЁ]|[а-яё]|\s|-)+$/g;
        if (reg.test(name)){
            this.#nik = name;
        }
        else{
            console.log(`ОШИБКА: "${name}" - Новая кличка должна содержать только кирилические символы, пробелы или символ "-"`);
        }
    };
    get nik () {
        return this.#nik;
    };

    #eat (){
        console.log(`${this.nik} ест`);
    };
    get eat (){
        this.#eat();
    };

    #say (){
        console.log('неизвестное животное молчит');
    };
    get say (){
        this.#say();
    };

}
//-------------------------------------
class CatCl extends AnimalCl {
    #say (){
        console.log('кот мяукает мяу мяу');
    };
    get say(){
        this.#say();
    };
    #hunt (){
        console.log(`${this.nik} охотится`);
    };
    get hunt(){
        this.#hunt();
    }
}
//----------------------------------------------
class DogCl extends AnimalCl {
    #say (){
        console.log('собачка гавкает гав гав');
    }
    get say(){
        this.#say();
    };
}
//---------------------------------------
class ParrotCl extends AnimalCl {
    #say (){
        console.log('Попугой опять ругается *******');
    }
    get say(){
        this.#say();
    };
}
//----------------------------------
function runCL() {
    const animalCL = new AnimalCl("Животинка");
    console.log(animalCL.nik);
    animalCL.eat;
    delete(animalCL.eat);
    animalCL.eat;
    animalCL.say;
    animalCL.say = function (){
        console.log("say переопределил");
    };
    animalCL.say;

    console.log("----------------------------------");

    const catCL = new CatCl("Басик");
    console.log(catCL.nik);
    catCL.rename = "Тишка - азаз";
    catCL.eat;
    catCL.say;
    catCL.hunt;

    console.log("----------------------------------");

    const dogCL = new DogCl("Рэкс");
    dogCL.eat;
    dogCL.say;

    console.log("----------------------------------");

    const parrotCL = new ParrotCl("Кеша");
    parrotCL.eat;
    parrotCL.say;
}







document.addEventListener("DOMContentLoaded", function() {
    // runOBJ();
    // runFNC();
    //runCL();

    document.getElementById("n1").addEventListener("click", function () {
        runOBJ();
    });
    document.getElementById("n2").addEventListener("click", function () {
        runFNC();
    });
    document.getElementById("n3").addEventListener("click", function () {
        runCL();
    });

});

