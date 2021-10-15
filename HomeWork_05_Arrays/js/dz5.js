


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
            if (typeof o[key] === "number"){
                summa += Number(o[key]);
                console.log(`Number(o[${key}]): ${Number(o[key])}`);
            }
        }

        console.log(`summa: ${summa}`);
    });


    //5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.
    document.getElementById("n5").addEventListener("click", function () {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        console.log(arr);
        const avg = arr.reduce((r,e)=>r + e) / arr.length;
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
            //console.log(`${e} (${typeof e})`);

        });

        console.log(o);
    });


    //8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива
    // , значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)
    document.getElementById("n8").addEventListener("click", function () {

        function ArrayBetween(ar,a,b){
            if (a>b){return false;}
            return ar.filter((e)=> e>=a&&e<=b);
        }

        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        console.log(arr);
        console.log(ArrayBetween(arr,3.1,7));
    });


    //9. Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false
    document.getElementById("n9").addEventListener("click", function () {
        function Anagramma(a,b){
            if (typeof a !== "string"||typeof b !== "string"){return false;}
            if (a.length !== b.length){return false;}
            a = a.toLowerCase().split("");
            b = b.toLowerCase().split("");

            const ccc = a.map((ae)=>{
                //console.log(ae);
                let i = b.findIndex(be=>be===ae);
                if (i!==-1){
                    b.splice(i,1);
                    return 1;
                }
                return 0;
                //return i===-1 ? 0 : 1;
            });
            //console.log(ccc);
            const c = ccc.reduce((acum, e)=>{
                return acum+e;
            });

            return c===a.length;
        }

        console.log(Anagramma("ЖУТКАЯ","УТЯЖКА"));
        console.log(Anagramma("ЛЕСОПРОМЫШЛЕННИК","СОЛЕПРОМЫШЛЕННИК"));
        console.log(Anagramma("Я в мире — сирота.","Я в Риме — Ариост."));
    });


    //10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение"
    // через запятую (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты)
    // сама функция в консоль выводиться не должна.
    document.getElementById("n10").addEventListener("click", function () {
        function Obj(){
            this.print = () =>{
                let arr = [];
                Object.entries(this).forEach(([k,v])=>{
                    //if (!Array.isArray(v) && v !== Object(v)) {
                    if((typeof v === "string" || typeof v === "number") && !Number.isNaN(v)){
                        arr.push(k+":"+v);
                    }
                    // console.log(typeof v);
                })
                console.log(arr.join());

            };

            this.name = "Петя";
            this.num = 22;
            this.obj = {
                key1: 1,
                key2: "str"
            };
            this.arr = [1,2,"asdf"];
            this.null = null;
            this.NaN = NaN;
            this.undef = undefined;
            this.nol = -0;
        }

        const o = new Obj();
        o.print();
    });



    // 11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства)
    // , метод принимает ключь (строка), значение (произвольное) и объект со свойствами writable, configurable, enumerable
    // (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства).
    // Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено
    document.getElementById("n11").addEventListener("click", function () {
        function Obj(){
            this.setProp = (k,v,prop)=>{
                if(typeof k !== "string" || Number.isNaN(k)){
                    console.log("ERROR: Ключь имеет тип данных отличны от string")
                    return false;
                }
                if (prop !== Object(prop)){
                    console.log("ERROR: prop не является объектом");
                    return false;
                }

                let p = {
                    //value: v,
                    configurable: true,
                    enumerable: true,
                    writable: true
                };

                Object.entries(prop).forEach(([pk,pv])=>{
                    if (typeof pv !== "boolean"){
                        console.log("ERROR: prop значение не является boolean");
                        pv = true;
                    }
                    if (Object.keys(p).findIndex((e)=>e===pk) !== -1){
                        p[pk] = pv;
                    }
                });

                Object.defineProperty(this, k, p);
                this[k] = v;
                return true;
            }

            Object.defineProperty(this, "setProp", {
                configurable: false,
                enumerable: false,
                writable: false
            });
        }


        const o = new Obj();
        console.log(o.setProp("key1",100,{
            configurable: true,
            enumerable: false,
            writable: false
        }));
        console.log(Object.getOwnPropertyDescriptors(o));
        console.log(o.setProp("key1",1000,{
            enumerable: false,
        }));
        console.log(Object.getOwnPropertyDescriptors(o));
        console.log(o.setProp("key1",10000,{
            configurable: false,
            enumerable: false,
            writable: false
        }));
        console.log(Object.getOwnPropertyDescriptors(o));
    });

});

