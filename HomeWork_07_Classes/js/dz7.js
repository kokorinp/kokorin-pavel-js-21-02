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

const AnimalObj = {
    nik: "кличка",
    eat (){
        console.log(`${this.nik} ест`);
    },
    say() {
        console.log('неизвестное животное молчит');
    }
}

runOBJ = () => {
    //const animalOBJ = new AnimalObj;
    AnimalObj.eat()
}




//--------------------------------------------
class AnimalCl {
    #nik = "кличка";
    constructor(nicknames = "кличка дефолт") {
        this.#nik = nicknames;
    }

    set rename (nicknames) {
        this.#nik = nicknames;
    }
    get nik () {
        return this.#nik;
    }

    eat (){
        console.log(`${this.nik} ест`);
    }

    say (){
        console.log('неизвестное животное молчит');
    }
}


class CatCl extends AnimalCl {
    say (){
        console.log('кот мяукает мяу мяу');
    }
}

class DogCl extends AnimalCl {
    say (){
        console.log('собачка гавкает гав гав');
    }
}

class ParrotCl extends AnimalCl {
    say (){
        console.log('Попугой опять ругается *******');
    }
}

runCL = () => {
    const animalCL = new AnimalCl("Животинка");
    console.log(animalCL.nik);
    animalCL.eat();
    animalCL.say();

    console.log("----------------------------------");

    const catCL = new CatCl("Тишка");
    console.log(catCL.nik);
    catCL.eat();
    catCL.say();
}





document.addEventListener("DOMContentLoaded", function() {
    runOBJ();
    // runCL();

    document.getElementById("n1").addEventListener("click", function () {
        runOBJ();
        // runCL();
    });
});

