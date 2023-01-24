// import { test } from "./indexPlus.js";
// import { imageNames } from "./indexPlus.js";
// console.log(test());

let items = localStorage.getItem('items');
console.log(JSON.parse(items)[1]);
let totalCost = 0;
if(items){
    items = JSON.parse(items);
    for(let item of items){
        totalCost += parseInt(item.price);
        document.querySelector('#cartItems').append(cartElements(item.name, item.imageName, item.price, item.id));
        console.log(item.id);
    }
}
else{
    items = [];
}
document.querySelector('#total').innerText = `$${totalCost}`;

// Create cart objects
/*
<li>
    <div class="flexContainer">
        <div class="cartLeft">
            <p class="noMargin"><b>Orange</b></p>
            <img src="./images/apple-g517729a42_1920.jpg" alt="">
        </div>
        <div class="cartRight">
            <p class="amountAdded noMargin"><span style="color: black">Amount:</span>  +3</p>
            <a href="#">
                <span class="material-symbols-outlined cart delete" >delete_outline</span>
            </a>
        </div>
    </div>
</li>
*/
function cartElements(name, imageName, price, itemId){
    const listItem = document.createElement('li');
    const flexContainer = document.createElement('div');
    flexContainer.className = 'flexContainer';
    const cartLeft = document.createElement('div');
    cartLeft.className = 'cartLeft';
    const fruitName = document.createElement('p');
    fruitName.className = 'noMargin';
    const boldFruitName = document.createElement('b');
    boldFruitName.innerText = `${name}`;
    const fruitImage = document.createElement('img');
    fruitImage.src = `./images/${imageName}`;
    
    const cartRight = document.createElement('div');
    cartRight.className = 'cartRight';
    const totalAmount = document.createElement('p');
    const hideID = document.createElement('p');
    hideID.id = 'hide';
    hideID.innerText = itemId;
    hideID.style.display = 'none';
    totalAmount.className = 'amountAdded noMargin';
    totalAmount.innerText = 'Amount: ';
    const totalSpan = document.createElement('span');
    totalSpan.innerText = `$${price}`;
    totalSpan.style.color = '#0066ff'
    const aTagforDelIcon = document.createElement('a');
    aTagforDelIcon.href = '#';
    aTagforDelIcon.onclick = deleteProduct;
    const Icon = document.createElement('span');
    Icon.className = 'material-symbols-outlined cart delete';
    Icon.innerText = 'delete_outline';
    
    // Append the elements to each other
    aTagforDelIcon.append(Icon);
    totalAmount.append(totalSpan)
    cartRight.append(totalAmount, aTagforDelIcon, hideID);
    fruitName.append(boldFruitName);
    cartLeft.append(fruitName, fruitImage);
    flexContainer.append(cartLeft, cartRight);
    listItem.append(flexContainer)
    // console.log(listItem);
    return listItem;
}
function deleteProduct(){
    console.log(this.parentElement.parentElement);
}