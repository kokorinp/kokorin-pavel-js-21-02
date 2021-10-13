


document.addEventListener("DOMContentLoaded", function() {

    //1. На вход поступает массив, вывести массив, удалив неуникальные значения.
    document.getElementById("n1").addEventListener("click", function () {
        let arr = [1, 2, 3, 4, 4, 5, 6, 2, 1, 7, 6, 2, 'кот', 8 , 9 ,6 ,'кот', 'котята'];
        console.log(arr);
        let r_arr = arr.filter((e,i,tmp_arr) =>{
            const j = tmp_arr.indexOf(e);
            return j === i;
        });
        console.log(r_arr);
    });


    //2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.
    document.getElementById("n2").addEventListener("click", function () {
        let arr = [1, 2, 3, 4, 5, 6, 7, 'кот', 8, 9, 'котята'];
        console.log(arr);
        let r_arr = [];
        arr.forEach((e) => {
            r_arr.unshift(e);
        });
        console.log(r_arr);
    });


    //3. На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект
    // , где ключами являются нулевой индекс вложенныхых массивов, а значениями являются элементы с индексом один.
    document.getElementById("n3").addEventListener("click", function () {
        let arr = [
            ["key1",1],
            ["key2",2],
            ["key3",3],
            ["key4",4],
            ["key5","конь"],
            ["key6",],
            5
        ];
        console.log(arr);
        let o = {};
        arr.forEach((e)=>{
            if (Array.isArray(e)){
                if (e.length>1){
                    o[e[0]] = e[1];
                }
            }
        });
        console.log(o);

    });


    //4. На вход поступает объект, вывести сумму числовых свойств объекта.
    document.getElementById("n4").addEventListener("click", function () {
        let o = {
            key1: 1,
            key2: 2.7,
            key3: [100,200],
            key4: 3,
            key5: "слон",
            key6: 5.3,
            key7: {
                    key71: 300,
                    key72: 400
                },
            key8: "-1",
            key9: -1,
            key10: "",
            key11: "9 0",
            key12: "90 ",
            key13: "000",
        };
        console.log(o);

        let summa = 0;
        for(let key in o){
            if (!Number.isNaN(Number(o[key]))){ //если не может преобразовать, то будет NaN
                summa += Number(o[key]);
                console.log(`Number(o[${key}]): ${Number(o[key])}`);
            }
        }

        console.log(`summa: ${summa}`);
    });


    //5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.
    document.getElementById("n5").addEventListener("click", function () {
        let arr = ["1", 2, 3, 4, 5, 6, 7, 'кот', 8, 9, 'котята'];  //  45/11 = 4.090909090909091
        console.log(arr);
        const avg = arr.reduce((r,e,i,a)=>{
            //if (i === 0) {console.log("INDEX 0");}
            if (i === 1){
                if (!Number.isNaN(Number(r))){
                    r = Number(r) / a.length;
                    console.log(`${r} = Number(${r}) / ${a.length};`);
                } else{ r = 0;}
            }

            if (!Number.isNaN(Number(e))){
                r += Number(e) / a.length;
                console.log(`${r} += Number(${e}) / ${a.length};`);
            }
            return r;
        });
        console.log(`avg: ${avg}`);
    });

    //6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее значение и методы сложения, вычитания
    // , умножения и деления, принимающие число и манипулирующий свойством значения в соответствии с назначением метода, а так же функцию
    // , сбрасывающую значение в ноль.
    document.getElementById("n6").addEventListener("click", function () {
        function Calc(){
            this.result = 0;
            this.isNum = (x)=>{
                //return Number.isNaN(Number(x)) ? false : true;
                return !Number.isNaN(Number(x));
            };
            this.clear = ()=>{
                this.result = 0;
                return 0;
            };
            this.plus = (x)=>{
                return this.isNum(x) ? this.result += Number(x) : null;
            };
            this.minus = (x)=>{
                return this.isNum(x) ? this.result -= Number(x) : null;
            };
            this.multi = (x)=>{
                return this.isNum(x) ? this.result *= Number(x) : null;
            };
            this.div = (x)=>{
                if (this.isNum(x)){
                    x = Number(x);
                    return x !== 0 ? this.result /= x : null;
                }
                return null;
            };
        }

        const c = new Calc();
        console.log(c);
        console.log(c.plus(100));
        console.log(c.minus("50"));
        console.log(c.multi(10));
        console.log(c.div(5.5));
        console.log(c.clear());
        console.log(c);
    });


    //7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers
    // , strings и objects, содержащими массив со значениями, соответствующими названию поля.
    document.getElementById("n7").addEventListener("click", function () {
        const arr = [1, 2.7, [100,200], 3, "слон", 5.3, {key71: 300,key72: 400}, "-1", -1, {key101: "qwer", key102: 500},
                    "9 0", [1000,2000,"zxcvzxcv"], "000", null, -0, NaN, "",undefined];
        let o = {
            numbers: [],
            strings : [],
            objects: [],
            arrays: []
        }

        console.log(arr);
        arr.forEach(e=>{
            if (Array.isArray(e)){
                o.arrays.push(e);
            }else if (e === Object(e)){ //typeof e === "object" //null
                o.objects.push(e);
            }else if(typeof e === "string"){
                o.strings.push(e);
            }else if(Number.isFinite(e) && e !== -0){ //typeof e === "number" //-0 //NaN
            //}else if(!Number.isNaN(Number(e))){  //-0 //null
                o.numbers.push(e);
            }else {
                console.log(e);
            }
            // console.log(typeof e);

        });

        console.log(o);
    });


});

