import { imageNames } from "./indexPlus.js";
for(let fileName of imageNames){
    // console.log(fileName);
    document.querySelector("#containerGridID").append(createProduct(fileName.imageName, fileName.name, fileName.price));
}
// Creating DOM for images
/*
<div class="image">
    <img class="fruitImageGrid" src="./images/apple-g517729a42_1920.jpg" alt="">
    <div class="fruitTitleNcart">
        <div class="fruitTitleDiv">
            <h3 id="fruitTitle">Orange</h3>
        </div>
        <div class="addToCart">
            <p><b>Price: 350</b></p>
            <a class="addToCartAnchor" href="#">
                <span class="material-symbols-outlined" style="font-size: 30px;">add</span>
            </a>
        </div>
    </div>
<div>
*/
function createProduct(img, name, price){
    const mainImageGrid = document.createElement('div');
    mainImageGrid.className = 'image';
    const image = document.createElement('img');
    image.className = 'fruitImageGrid';
    image.src = `./images/${img}`;
    // Create fruit and title div
    const fruitTitleNcart = document.createElement('div');
    fruitTitleNcart.className = 'fruitTitleNcart';
    const fruitTitleDiv = document.createElement('div');
    fruitTitleDiv.className = 'fruitTitleDiv';
    const fruitTitle = document.createElement('h3');
    fruitTitle.id = 'fruitTitle';
    fruitTitle.innerHTML = name;
    //Create add to cart icon
    const addToCart =  document.createElement('div');
    addToCart.className = 'addToCart';
    const priceName = document.createElement('p');
    const boldPrice = document.createElement('b');
    boldPrice.innerHTML = `Price: $${price}`;
    const addToCartAnchor = document.createElement('a');
    addToCartAnchor.onclick = cart;
    addToCartAnchor.id = 'callCart';
    addToCartAnchor.className = 'addToCartAnchor';
    addToCartAnchor.href = "#";
    const materialSymbol = document.createElement('span');
    materialSymbol.className = 'material-symbols-outlined';
    
   
    materialSymbol.style.fontSize = '30px';
    materialSymbol.innerText = 'add';

    //nesting the elemnts
    addToCartAnchor.append(materialSymbol);
    priceName.append(boldPrice);
    addToCart.append(addToCartAnchor, priceName);
    fruitTitleDiv.append(fruitTitle);
    fruitTitleNcart.append(fruitTitleDiv, addToCart);
    mainImageGrid.append(image, fruitTitleNcart);
    // console.log(mainImageGrid.outerHTML);
    return mainImageGrid
}
// create cart() function

function cart(){
    let itemPrice = this.parentElement.children[1].outerText;
    itemPrice = itemPrice.split("$");
    console.log(itemPrice[1]);
}