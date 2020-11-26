let num = prompt("Введите любое число от 0 до 1000:");
function isSimpleNumber(num) {

   // let result;

    if (+num === 0) {return ' - это не простое и не составное число';}
    else if (+num === 1) {return ' - это простое число';}
    else if (+num > 1000) {return ' - это число больше 1000';}
    else {
        for(let i=2; i<=Math.sqrt(num); i++) {
            if (num % i === 0)
            {return ' - это число НЕ является простым';}

        }
        return ' - это число является простым';
    }
}

console.log(num + isSimpleNumber(num));