import { test } from "./indexPlus.js";
// import { imageNames } from "./indexPlus.js";
// console.log(test());

let items = localStorage.getItem('items');
if(items){
    items = JSON.parse(items);
    for(let x of items){
        console.log(x);
    }
}
else{
    items = [];
}