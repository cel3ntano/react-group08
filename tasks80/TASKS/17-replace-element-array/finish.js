/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */

const arr = ["hello", 14, true];
console.log(arr);
// const newArr = arr.map((item, index, ) =>  index === 1 ? "world" : item)
const newArr = arr.map((item, index, ) =>  {
    return index === 1 ? "world" : item})
console.log(newArr);


