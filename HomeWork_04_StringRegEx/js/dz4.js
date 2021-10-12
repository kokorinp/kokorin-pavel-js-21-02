


document.addEventListener("DOMContentLoaded", function() {

    //1. Написать скрипт, предлагающий пользователю ввести две строки через запятую. Вывести сообщение true, если вторая строка содержится в первый, в противном случае false, регистр при проверке не учитывать.
    document.getElementById("n1").addEventListener("click", function () {
        const reg = /,/g;
        const str = prompt("Введите 2 строки разделённых запятой:",'Привет ака уку, аку');
        let c = str.match(reg);
        //console.log(c);
        if (c == null){
            alert("В строке нет запятых!");
            return 0;
        }
        if (c.length > 1){
            alert("В строке больее 1 запятой");
            return 0;
        }
        const i = str.indexOf(',');
        const str1 = str.slice(0,i).toLowerCase();
        const str2 = str.slice(i+1,str.length).toLowerCase();
        console.log(str1);
        console.log(str2);
        alert(str1.includes(str2));
    });



    //2. Пользователь вводит строку, затем число (кол-во символов). Функция усекает строку до кол-ва символов и добавляет многоточие.
    document.getElementById("n2").addEventListener("click", function () {
        const str = prompt("Введите строку:");
        const i = Number(prompt("Введите число:"));
        console.log(i);
        if (isNaN(i)){
            alert("Введено не корректное число!");
            return 0;
        }
        if (!Number.isInteger(i)){
            alert("Введено не целое число!");
            return 0;
        }
        if(str.length < i){
            alert("Длина строки меньше чем запрашиваемое количество символов!");
            return 0;
        }
        alert(str.slice(0,i) + '...');
    });



    //3. Написать функцию, преобразующее строку с датой и временем формата '12/02/2021 12-00' в строку формата 12.02.2021 12:00, используя регулярные выражения
    document.getElementById("n3").addEventListener("click", function () {
        let datestr = prompt("Введите дату в формату '12/02/2021 12-00' в строку формата:","12/02/2021 12-00");
        const reg = /^\d\d\/\d\d\/\d{4} \d\d-\d\d$/;
        const reg2 = /\//g;
        const reg3 = /-/g;
        console.log(datestr);
        if (!reg.test(datestr)){
            alert("Не верный формат даты! вот верный формат: 12/02/2021 12-00");
            return 0;
        }
        datestr = datestr.replace(reg2,'.');
        datestr = datestr.replace(reg3,':');
        alert(datestr);
    });


    //4. Написать функцию, валидирующую ФИО из кирилличиских символов (считать, что отчество может оканчиваться только на "вна" или "вич" или может отсутствовать)
    document.getElementById("n4").addEventListener("click", function () {
        const str = prompt("Введите ФИО (например: Кокорин Павел Владимирович): ","Кокорин Павел Семёнович");
        const reg = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+( [А-ЯЁ][а-яё]+(вна|вич))?$/; // про букву "ё" обсуждали с коллегами :)
        alert(reg.test(str));
    });


    //5. На вход дана строка в CamelCase, преобразовать строку в snake_case
    document.getElementById("n5").addEventListener("click", function () {
        const str = prompt("Введите строку в стиле CamelCase: ","КирилицаЁдАптека");
        const reg = /[A-Z|А-ЯЁ]/g;

        const r = str.replace(reg,function (match,offset){
            if (offset === 0) {
                return match.toLowerCase();
            }
            return "_" + match.toLowerCase();
        })

        alert(r);
    });

    //6. На вход даётся многострочная строка, найти и вернуть через alert все html комментарии
    document.getElementById("n6").addEventListener("click", function () {
        //const str = document.getElementById("txt6").value;
        const str = prompt("Введите html код с комментариями");
        const reg = /(?<=<!--).+?(?=-->)/g;

        let s = str.replace (/[\n\r]/g, ' ').replace (/\s{2,}/g, ' ').match(reg);

        if (s === null){
            alert("Комментарии не найдены");
            return 0;
        }
        let r = "";
        if (s.length > 0){
            for (let i = 0; i < s.length; i++){
                r += Number(i+1) + ". " + s[i].trim() + "\n";
            }
        }
        else{
            alert("Комментарии не найдены");
        }
        alert(r);
    });


    //7. На вход дана строка, вернуть через alert все числа (десятичные разделяются сиволом ".")
    document.getElementById("n7").addEventListener("click", function () {
        const str = prompt("Введите строку с числами: ","10 20 вафля30 40_конь50.60пень котлеты70 утюг 80,90степлер 100");
        const reg = /(\d+\.\d+)|(\d+)/g;

        alert(str.match(reg));
    });


    // 8. Валидация введённого значения. Вводится идентификатор документа.
    //     Идентификатор должен состоять из четырёх частей по четыре символа,разделённых или не разделённых знаком "-".
    //     Допускаются только символы латинского алфавита и числа. Вывести через alert "ведётся поиск",
    //     при соответствии введённого значения, или "неверный илентификатор", при несоответствии. При несоответствии снова вывести форму для ввода строки.
    document.getElementById("n8").addEventListener("click", function () {
        let x = 1;
        while (x<100) {
            const str = prompt("Введите идентификатор документа: ", "XX1X-XX2X-X3xX-X4xX");
            const reg = /^[a-zA-Z0-9]{4}((|-)[a-zA-Z0-9]{4}){3}$/;

            if (reg.test(str)) {
                alert("ведётся поиск");
                x = 1000;
            } else {
                alert("неверный идентификатор");
                x++; // когда-то это должно закончится :)
                //document.getElementById("n8").click(); //это почему-то не работает
            }
        }
    });

});

