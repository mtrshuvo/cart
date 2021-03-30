let productList = document.querySelector("#product__list");
let cartList = document.querySelector("#cart__list");

const products = [
    {
        name: "Milk",
        price: 35
    },
    {
        name: "Rice",
        price: 45
    },
    {
        name: "Daal",
        price: 30
    },
    {
        name: "Water",
        price: 15
    },
    {
        name: "Coke",
        price: 20
    }
]


let cart = {
    items: [],
    totalPrice: 0,
};



function renderingProducts(){
    products.forEach((item,index) => {
        productList.innerHTML += `<tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><button onclick = "addToCart(${index})" class="btn btn-sm btn-success">Add to cart</button></td>
      </tr>`
    })
}


function addToCart(productIndex){
    let product = products[productIndex];
    let isAlreadyInCart = false;
    cart.items.forEach((item)=>{
        if(item.name === product.name){
            isAlreadyInCart = true;
            alert("already in cart")
        }
        
    });
    if(!isAlreadyInCart){
        cart.items.push(product);
        renderingCartItem()
    }
}


function renderingCartItem(){
    cartList.innerHTML = ""
   
    cart.items.forEach((item,index)=>{
        cartList.innerHTML += `<tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><button onclick = "removeFromCart(${index})" class="btn btn-sm btn-danger">Remove item</button></td>
      </tr>`
    })
    
}

function removeFromCart(productIndex){
    cart.items.splice(productIndex,1);
    renderingCartItem();
}



renderingProducts();
