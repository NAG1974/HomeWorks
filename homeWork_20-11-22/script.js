// let login = prompt('Enter login', '')

// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' : '';

// alert(message);

// let month = prompt('Enter the number of month', 0)

// let season = (month < 3 || month == 12) ? 'It is Winter' :
//     (month > 2 && month < 6) ? 'It is Spring' :
//     (month > 5 && month < 9) ? 'It is Summer' : 
//     (month > 8 && month < 12) ? 'It is Autumn' : 'This is not the month number';

// alert(season);

// let num = +prompt('Enter the number', 0)
// simpleNumb:
// for (let i=2; i<=num; i++) {
//     for (let j=2; j<i; j++) {
//         if (i % j == 0) continue simpleNumb;
//     }
//     alert (i)
// }

function reverseanumber(n) {
    n = n + "";
    return n.split("").reverse().join("");
    };
    console.log(reverseanumber(258961)) 