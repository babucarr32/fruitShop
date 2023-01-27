import { imageNames } from "./indexPlus.js";
function createproducs(){
    for(let fileName of imageNames){
        // console.log(fileName);
        document.querySelector("#containerGridID").append(createProduct(fileName.imageName, fileName.name, fileName.price, fileName.id));
    }
}
createproducs()
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
function createProduct(img, name, price, id){
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
    const hiideID = document.createElement('p');
    hiideID.innerText = id;
    hiideID.style.display = 'none';
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
    // addToCartAnchor.href = "#";
    const materialSymbol = document.createElement('span');
    materialSymbol.className = 'material-symbols-outlined addIcon';
    
   
    materialSymbol.style.fontSize = '30px';
    materialSymbol.innerText = 'add';

    //nesting the elemnts
    addToCartAnchor.append(materialSymbol);
    priceName.append(boldPrice);
    addToCart.append(addToCartAnchor, priceName, hiideID);
    fruitTitleDiv.append(fruitTitle);
    fruitTitleNcart.append(fruitTitleDiv, addToCart);
    mainImageGrid.append(image, fruitTitleNcart);
    // console.log(mainImageGrid.outerHTML);
    return mainImageGrid
}
// create cart() function

function cart(){
    let parent = this.parentElement;
    let imageTag = parent.parentElement.parentElement.children[0];
    let fruitTag = parent.parentElement.parentElement.children[1];
    
    const imageName = imageTag.src.split("/images/")[1]; // get the name of the image
    const fruitName = fruitTag.children[0].children[0].innerHTML;
    const fruitPrice = fruitTag.children[1].children[1].outerText.split("$")[1];
    const fruitID = fruitTag.children[1].children[2].innerText;
    console.log(imageName);
    console.log(fruitName);
    console.log(fruitPrice);
    console.log(fruitID);
    // let itemPrice = this.parentElement.children[1].outerText; // climbing to get the parent object
    // itemPrice = itemPrice.split("$"); // Split
    // const totalprice = itemPrice[1]; //  get the product price
    // console.log(totalprice);
    // // test(totalprice);
    let items = localStorage.getItem('items');
    if(items){
        items = JSON.parse(items);
        console.log(items);
        console.log(typeof items);
    }
    else{
        items = [];
    }
    items.push({
        name: fruitName,
        imageName: imageName,
        price: fruitPrice,
        fruitID: fruitID,
    });
    localStorage.setItem('items', JSON.stringify(items));
    // return totalprice;
}

// Store data in Local Storage
// function storeDataLS(){
//     let items = localStorage.getItem('items');
//     // items =  getItemList();
//     items.push({

//     })
// }
// Needs review
// export function test(x){
//     console.log(x);
// }
