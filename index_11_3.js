function func1(num1){
    return function func2(num2) {
        return console.log(num1+num2);}
}

const summaFunc = func1(17); //num1 как аргумент

summaFunc(12); // num2 как аргумент