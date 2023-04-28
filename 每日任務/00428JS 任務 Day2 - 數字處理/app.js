// 題目一：hello world！
// // input 輸入
// hello()
// hello()

// // output 輸出
// "Hello world！"
// "Hello world！"

function hello() {
  return "Hello world！";
}

console.log(hello());
console.log(hello());

// 題目二：參數+字串練習
// // input 輸入
// sayHi("Tom")
// sayHi("John")

// // output 輸出
// "Tom，Hello world！"
// "John，Hello world！"

function sayHi(name) {
  return name + "，Hello world！";
}

console.log(sayHi("Tom"));
console.log(sayHi("John"));

// 題目三：參數加法產生器
// // input 輸入
// add(2)
// add(4)
// add(8)

// // output 輸出
// 4
// 8
// 16

function add(number) {
  return number * 2;
}

console.log(add(2));
console.log(add(4));
console.log(add(8));

// 題目四：兩個參數相加器
// // input 輸入
// addTwo(5,10)
// addTwo(4,20)
// addTwo(9,100)

// // output 輸出
// 15
// 24
// 109

function addTwo(number1, number2) {
  return number1 + number2;
}

console.log(addTwo(5, 10));
console.log(addTwo(4, 20));
console.log(addTwo(9, 100));

// 題目五：參數+字串相加
// // input 輸入
// addNumberAndString(5,10,30)
// addNumberAndString(4,20,22)
// addNumberAndString(9,100,44)

// // output 輸出
// "第一加第二個參數加總為 15，第三個參數為 30"
// "第一加第二個參數加總為 24，第三個參數為 22"
// "第一加第二個參數加總為 109，第三個參數為 44"

function addNumberAndString(number4, number5, number6) {
  let number3 = number4 + number5;
  return "第一加第二個參數加總為" + number3 + "第三個參數為" + number6;
}

console.log(addNumberAndString(5, 10, 30));
console.log(addNumberAndString(4, 20, 22));
console.log(addNumberAndString(9, 100, 44));
