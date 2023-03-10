function home(items){
    let totalCost = 0;
    if(items){
        items = JSON.parse(items);
        for(let item of items){
            totalCost += parseInt(item.price);
            document.querySelector('#cartItems').append(cartElements(item.name, item.imageName, sepNum(parseInt(item.price)), item.fruitID));
        }
    }
    else{
        items = [];
    }
    document.querySelector('#total').innerText = `$${sepNum(totalCost)}`;
}
let items = localStorage.getItem('items');
home(items)

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
    hideID.innerText = `${itemId}`;
    hideID.style.display = 'none';
    totalAmount.className = 'amountAdded noMargin';
    totalAmount.innerText = 'Price: ';
    const totalSpan = document.createElement('span');
    totalSpan.innerText = `$${price}`;
    totalSpan.style.color = '#0066ff'
    const form = document.createElement('form');
    form.action = "";
    form.id = 'formID';
    const aTagforDelIcon = document.createElement('button');
    aTagforDelIcon.style.background = "white";
    aTagforDelIcon.style.border = 'none';
    aTagforDelIcon.onclick = deleteProduct;
    const Icon = document.createElement('span');
    Icon.className = 'material-symbols-outlined cart delete';
    Icon.innerText = 'delete_outline';
    
    // Append the elements to each other
    aTagforDelIcon.append(Icon);
    form.append(aTagforDelIcon);
    totalAmount.append(totalSpan)
    cartRight.append(totalAmount, form, hideID);
    fruitName.append(boldFruitName);
    cartLeft.append(fruitName, fruitImage);
    flexContainer.append(cartLeft, cartRight);
    listItem.append(flexContainer);
    return listItem;
}

function deleteProduct(){
    let items = localStorage.getItem('items');
    let newItems = JSON.parse(items);
    let finalItem = [];
    let itemIDToDel = this.parentElement.parentElement.children[2].innerText;
    console.log(itemIDToDel);
    
    for(let x of newItems){
        if(itemIDToDel === x['fruitID']){
            console.log(x);
        }
        else{
            finalItem.push(x)
        }
    }
    console.log(finalItem);
    localStorage.setItem('items', JSON.stringify(finalItem));
    let items2 = localStorage.getItem('items');
    console.log(items2);
}
function formFunc(){
    console.log(this);
    this.addEventListener('submit',
    function(e){
        e.preventDefault();
        console.log('Form submitted');
    })
}
function sepNum(amount){
    amount = amount.toLocaleString();
    return amount;
}