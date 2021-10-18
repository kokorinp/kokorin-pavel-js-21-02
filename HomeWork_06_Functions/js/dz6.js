


document.addEventListener("DOMContentLoaded", function() {

    //1. Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи),
    // функция должна вернуть значение числа. Использовать рекурсию.
    document.getElementById("n1").addEventListener("click", function () {

        function fibo(index){
            return index>=2 ? fibo(index-2) + fibo(index-1) : (index<1 ? 0n : 1n);
        }

        const start= new Date().getTime();
        console.log(fibo(0));
        console.log(fibo(1));
        console.log(fibo(2));
        console.log(fibo(10));
        console.log(fibo(20));
        console.log(fibo(30));
        console.log(fibo(40));
        const end= new Date().getTime();
        console.log(`Время выполнения: ${end - start}ms`);
    });


    //2. Модернизировать написанную функцию, добавив кэширование
    // (функция “”запоминает”” входной параметр и вычесленное значение, при следующем вызыве с этим же параметром
    // , функция не вычисляет значение, а возвращает из памяти)
    document.getElementById("n2").addEventListener("click", function () {
        let f = {
            "0": 0n,
            "1": 1n
        };
        function fibo(index){
            if (index >= 2){
                if (f.hasOwnProperty(index)){
                    return f[index];
                }
                else{
                    f[index] = fibo(index-2) + fibo(index-1);
                    return f[index];
                }
            }
            else{
                return index<1 ? 0n : 1n;
            }
        }

        const start= new Date().getTime();
        console.log(fibo(0));
        console.log(fibo(1));
        console.log(fibo(2));
        console.log(fibo(10));
        console.log(fibo(20));
        console.log(fibo(30));
        console.log(fibo(50));
        console.log(fibo(100));
        console.log(fibo(150));
        console.log(f);
        const end= new Date().getTime();
        console.log(`Время выполнения: ${end - start}ms`);

    });




    document.getElementById("n3").addEventListener("click", function () {
        const arr = [
            ['name1', 'Anna'],
            ["key8", {
                "key9": {"key10": [["key11","value11"],["key12","value12"]]}}],
            ['age', 22],
            ['pets',
                [
                    ['dog', 'Faust'],
                    ['cat', 'Balthazar'],
                    ['cat2', false],
                    ['object_test',
                        {
                            "key1": [
                                ["key2", "value 2"],
                                ["key3", true],
                                ["key4", "value 4"]
                            ],
                            "key5": {
                                "key6": "value6"
                            }
                        }
                    ]
                ]
            ]
        ];


        function ParseArr(ar){
            let o ={};
            if (Array.isArray(ar)) {
                if (Array.isArray(ar[0])) { // первый уровень
                    ar.forEach((e)=>{
                        if (Array.isArray(e[1])||e[1]===Object(e[1])) {
                            //console.log(e[1]);
                            o[e[0]] = ParseArr(e[1]);
                        }
                        else
                        {
                            o[e[0]] = e[1];
                        }
                    })
                }
            }
            else{
                //объект
                for (let key in ar) {
                    // console.log(ar[key]);
                    if (ar[key]===Object(ar[key])){
                        o[key] = ParseArr(ar[key]);
                    }
                    else{
                        o[key] = ar[key];
                    }
                }

            }
            return o;
        }


        console.log(arr);
        console.log(ParseArr(arr));
    });

});

