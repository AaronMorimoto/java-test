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