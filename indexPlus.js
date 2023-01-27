
export const imageNames = [
    {
        id: '1',
        name: "Plums",
        imageName: "plums-g22f8139e5_640.jpg",
        price: '2500',
    },
    {
        id: '2',
        name: "Cherries",
        imageName: "cherries-g243662146_640.jpg",
        price: 200,
    },
    {
        id: '3',
        name: "Apples",
        imageName: "apples-g9dd35cbde_640.jpg",
        price: 100,
    },
    {
        id: '4',
        name: "Ilona",
        imageName: "ilona-frey-7V5HdfPZKP4-unsplash.jpg",
        price: 50,
    },
    {
        id: '5',
        name: "Apple",
        imageName: "apple-g517729a42_1920.jpg",
        price: 305,
    },
    {
        id: '6',
        name: "Apple",
        imageName: "apples-g4dd3b390a_640.jpg",
        price: 25,
    },
    {
        id: '7',
        name: "Xialong",
        imageName: "xiaolong-wong-9gpERFdyDW4-unsplash.jpg",
        price: 35,
    },
    {
        id: '8',
        name: "Mango",
        imageName: "mango-gfc1994225_1920.jpg",
        price: 300,
    },
    {
        id: '9',
        name: "Watermelon",
        imageName: "watermelon-g63c2107dd_1920.jpg",
        price: 725,
    },
    {
        id: '10',
        name: "Raspberry",
        imageName: "raspberries-g5cba7a976_640.jpg",
        price: 1000,
    },
    {
        id: '11',
        name: "grapes",
        imageName: "grapes-ge74c1b960_640.jpg",
        price: 700,
    },
    {
        id: '12',
        name: "Engin",
        imageName: "engin-akyurt-dCSU6fPP1i8-unsplash.jpg",
        price: 10,
    },
    {
        id: '13',
        name: "Engin",
        imageName: "engin-akyurt-kQIRZiMpV4o-unsplash.jpg",
        price: 40,
    },
    {
        id: '14',
        name: "Smoothie",
        imageName: "smoothie-g1c036c965_640.jpg",
        price: 65,
    },
    {
        id: '15',
        name: "Strawberries",
        imageName: "strawberries-g1c1eb5b6f_640.jpg",
        price: 190,
    },
    {
        id: '16',
        name: "Cocao Nut",
        imageName: "food-gfb3e0dec0_640.jpg",
        price: 50,
    },
    {
        id: '17',
        name: "Fig",
        imageName: "peaches-g5d2170b15_640.jpg",
        price: 550,
    },
    {
        id: '18',
        name: "Cherry",
        imageName: "quaritsch-photography-lZ8onQ1wuY8-unsplash.jpg",
        price: 520,
    },
    {
        id: '19',
        name: "Apple",
        imageName: "apples-g365fc248c_640.jpg",
        price: 75,
    },
    {
        id: '20',
        name: "Strawberry",
        imageName: "istockphoto-173888437-170667a.jpg",
        price: 275,
    },
    {
        id: '21',
        name: "flower",
        imageName: "flower-gf348a473c_1920.jpg",
        price: 325,
    },
    {
        id: '22',
        name: "Tomato",
        imageName: "tomatoes-g7a4e46557_640.jpg",
        price: 325,
    },
]

export function createproducs(){
    for(let fileName of imageNames){
        // console.log(fileName);
        document.querySelector("#containerGridID").append(createProduct(fileName.imageName, fileName.name, fileName.price));
    }
}
export function createProduct(img, name, price){
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

function cart(){
    let itemPrice = this.parentElement.children[1].outerText; // climbing to get the parent object
    itemPrice = itemPrice.split("$"); // Split
    const totalprice = itemPrice[1]; //  get the product price
    // console.log(totalprice);
    test(totalprice);
    // return totalprice;
}
export function test(x){
    console.log(x);
}