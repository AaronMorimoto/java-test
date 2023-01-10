alert('Hello World');

let hello = 'Hello World';
alert (hello);

let int1 = 1;
alert (int1);
let int2 = 10;
alert (int2);
let float1 = 3.14;
alert (float1);
let str1 = 'JavaScriptを覚えよう';
alert (str1);

alert (3+4);
alert (3-4);
alert (3*4);
alert (3/4);

//文字列と文字列の結合
alert ('Hello'+'World');

let str2 = 'Hello';
let str3 = 'World';
alert (str2 + str3);


let orange = 120;
let apple = 120;

// 条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3を実行	
if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}


let max = 100;
let num = 1;
let count = 0;

// 引数の条件がtrueの間、波括弧内部の処理が繰り返される。
//while(num < max){
  //num = num * 2;
  //count = count + 1;
//}

//alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


do{
  //最低1回は行われる処理
  num = num * 100;
}while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


let i;
let num1 = 0;

for(i = 1; i < 11; i++){
  num1 = num1 + i;
}

alert('1から10まで足し算した結果は' + num1 + 'です');