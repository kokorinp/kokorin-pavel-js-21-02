


document.addEventListener("DOMContentLoaded", function() {

    //1. Написать скрипт, предлагающий пользователю ввести две строки через запятую. Вывести сообщение true, если вторая строка содержится в первый, в противном случае false, регистр при проверке не учитывать.
    document.getElementById("n1").addEventListener("click", function () {
        const reg = /,/g;
        const str = prompt("Введите 2 строки разделённых запятой:");
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
        const str2 = str.slice(i+1,str.length-1).toLowerCase();
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
        const reg = /^\d\d\/\d\d\/\d{4} \d\d\-\d\d$/;
        const reg2 = /\//g;
        const reg3 = /\-/g;
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
        const str = prompt("Введите ФИО (например: Кокорин Павел Владимирович): ","Кокорин Павел Владимирович");
        const reg = /^[А-Я][а-я]+ [А-Я][а-я]+( [А-Я][а-я]+(вна|вич))?$/;
        alert(reg.test(str));
    });


    //5. На вход дана строка в CamelCase, преобразовать строку в snake_case
    document.getElementById("n5").addEventListener("click", function () {
        const str = prompt("Введите строку в стиле CamelCase: ","CamelCase");
        const reg = /[A-Z]/;

        // const i = str.indexOf();
        // const str1 = str.slice(0,i);
        // const str2 = str.slice(i+1,str.length-1);

    });


});
