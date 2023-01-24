// import { test } from "./indexPlus.js";
// import { imageNames } from "./indexPlus.js";
// console.log(test());

let items = localStorage.getItem('items');
if(items){
    items = JSON.parse(items);
    for(let item of items){
        console.log(item);
        document.querySelector('#cartItems').append(cartElements(item.name, item.imageName, item.price));
    }
}
else{
    items = [];
}

// Create cart objects
function cartElements(name, imageName, price){
    const listItem = document.createElement('li');
    const cartLeft = document.createElement('div');
    cartLeft.className = 'cartLeft';
    const fruitName = document.createElement('h3');
    fruitName.innerText = `${name}`;
    const fruitImage = document.createElement('img');
    fruitImage.className = 'fruitImageGrid';
    fruitImage.src = `./images/${imageName}`;
    
    const cartRight = document.createElement('div');
    cartRight.className = 'cartRight';
    const totalAmount = document.createElement('h3');
    totalAmount.innerText = 'Amount: ';
    const totalSpan = document.createElement('span');
    totalSpan.innerText = `${price}`;
    const aTagforDelIcon = document.createElement('a');
    aTagforDelIcon.href = '#';
    const Icon = document.createElement('span');
    Icon.className = 'material-symbols-outlined cart delete';
    Icon.innerText = 'delete_outline';
    
    // Append the elements to each other
    aTagforDelIcon.append(Icon);
    totalAmount.append(totalSpan)
    cartRight.append(totalAmount, aTagforDelIcon);
    cartLeft.append(fruitName, fruitImage);
    listItem.append(cartLeft, cartRight);
    // console.log(listItem);
    return listItem;
}