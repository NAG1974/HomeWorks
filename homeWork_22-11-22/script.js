//1.Дан массив с числами. Найдите сумму этих чисел, используя forEach.
// let arr = [1, 2, 3, 4, 5]
// let arr1 = [-2,-1,0,1]
// function sum(smth) {
//     let result = 0
//     smth.forEach(function(item) {
//     return ( result += item);
//   });
//   console.log(result);
// }
// sum(arr);
// sum(arr1);

//Случайно решил задачу из урока на увеличение каждого элемента на сумму предыдущих через forEach
// let arr3 = [1, 2, 3, 4, 5]
// let arr4 = [-2,-1,0,1]
// function getSum(smth) {
//     let newArr = []
//     let result = 0
//     smth.forEach(function(item) {
//     newArr.push( result += item);
//   });
//   console.log(newArr);
// }
// getSum(arr3); 
// getSum(arr4); 

//2.Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// let arr = [1, 2, 3, 4, 5]
// let arr1 = [-2,-1,0,1]
// function isPositive(number) {
//     return number > 0;
//   }
// console.log(arr.every(isPositive));
// console.log(arr1.every(isPositive));

//3.Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// const fruits = ['Apples', 'Pear', 'Orange', 'Ananas', "Äpfel"]
// const arrLength = fruits.filter(item => item.length > 5)
// console.log(arrLength);

//4.Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// let arr = [1, 2, 3, 4, 5]
// let arr1 = [-2,-1,0,1]
// function ammountNegatives(smth) {
//     let result = 0
//     smth.forEach(function(item) {
//         if (item < 0)
//     return ( result += 1);
//   });
//   console.log(result);
// }
// ammountNegatives(arr)
// ammountNegatives(arr1)

//5.Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// let arr = [1, 5, -1, 4, -2, 3, 4, 5]
// let result = 1
// arr.reduce((acc, item) => {
//         if (acc > 10) {
//     console.log (result);}
//     else {
//         result++
//         return acc + item};
// },);

//6.Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.
// let arr = [1, 5, -1, 4, -2, -3, 4, 5]
// let result = 1
// // arr.reverse().reduce((acc, item) => {
// arr.reduceRight((acc, item) => {

//         if (acc > 10) {
//     console.log (result);}
//     else {
//         result++
//         return acc + item};
// },);

//7.Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел.
let arr = [1, 5, -1, 4, -2, -3, 4, 5]
console.log(arr.filter(item => item >= 0).map(num => Math.sqrt(num)));
