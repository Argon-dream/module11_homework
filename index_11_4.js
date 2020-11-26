let step = 9; // дополнительная переменная, равная numFrom для шага

const intervalId = setInterval(function (numFrom, numTo) {

    if (step <= numTo)
    {
        console.log(step);
        step = step + 1;
    }

}, 1000, step, 29); // каждую секунду выводятся числа от 9 до 29
