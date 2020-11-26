let arr = [4,'r',5,7,23,6,null,NaN,0];
let oddElem = 0;
let evenElem = 0;
let zeroElem = 0;
let otherElem = 0;
for (let i=0; i<arr.length;i++)
{
    if ((typeof arr[i] != "number") || (isNaN(arr[i])))
    {
        otherElem = elemSum(otherElem); //суммируем не числовые элементы
    }
    else
    {
        if (arr[i] === 0)
        {
            zeroElem = elemSum(zeroElem);
        } // суммируем нули
        else if (arr[i] % 2 === 0)
        {
            evenElem = elemSum(evenElem);
        } // суммируем чётные числа
        else
        {
            oddElem = elemSum(oddElem);
        } // суммируем нечётные числа
    }
}
console.log("Number of even: ", evenElem);
console.log("Number of odd: ", oddElem);
console.log("Number of zero: ", zeroElem);
console.log("Number of other elements: string, boolean, null and etc. - ", otherElem);

function elemSum(inputElem) {

    let result = inputElem + 1;
    return result;

}