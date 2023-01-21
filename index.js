import { imageNames } from "./indexPlus.js";
for(let fileName of imageNames){
    console.log(fileName);
    document.querySelector("#containerGridID").append(createProduct(fileName))
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
            <a class="addToCartAnchor" href="#">
                <span class="material-symbols-outlined" style="font-size: 30px;">add</span>
            </a>
        </div>
    </div>
<div>
*/
function createProduct(img){
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
    fruitTitle.className = 'fruitTitle';
    fruitTitle.innerHTML = 'Fruit';
    //Create add to cart icon
    const addToCart =  document.createElement('div');
    addToCart.className = 'addToCart';
    const addToCartAnchor = document.createElement('a');
    addToCartAnchor.className = 'addToCartAnchor';
    const materialSymbol = document.createElement('span');
    materialSymbol.className = 'material-symbols-outlined';
    materialSymbol.style.fontSize = '30px';
    materialSymbol.innerText = 'add';

    //nesting the elemnts
    addToCartAnchor.append(materialSymbol);
    addToCart.append(addToCartAnchor);
    fruitTitleDiv.append(fruitTitle);
    fruitTitleNcart.append(fruitTitleDiv, addToCart);
    mainImageGrid.append(image, fruitTitleNcart);
    // console.log(mainImageGrid.outerHTML);
    return mainImageGrid
}
// createProduct()