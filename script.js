// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!
// 10
let discount = prompt("Какая скидка?");

let totalSale = Number;

let total = Number; 

let max = Object;

let min = Object;

let average = Number;

let arr = [
  {
    name: "Milk",

    price: 3.25,
  },

  {
    name: "Coffee",

    price: 1.5,
  },

  {
    name: "Ice Cream",

    price: 7.85,
  },

  {
    name: "Tomatos",

    price: 4.14,
  },

  {
    name: "Onion",

    price: 2.25,
  },
];

let arr_sale = [];


// 1. Сохранить самый дорогой товар в переменную`max`*     //
// 2. Сохранить самый дешевый товар в переменную`min`*     //
// 3. Сохранить общую цену без скидок в переменную`total`*  //
// 4. Сохранить общую цену со скидкой в переменную`totalSale` 
// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*
// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок* //
// *Писать весь код в функции `setup()`
// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*



total = 0



const setup = () => {
   arr.map(item => total += item.price)
console.log(total);


max = arr.at(-3) // max
min = arr.at(1) // min

average = arr.reduce((a,b) => a + b.price, 0) / (arr.length || 1) //middle price

console.log(max,min,average); 
};




setup();
