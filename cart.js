
let cartlist = JSON.parse(localStorage.getItem("data")) || []
let cartContainer = document.getElementById("cart-items")
function generateCartItem() {
    if (cartlist.length !== 0) {
        cartContainer.innerHTML = cartlist.map((Element, index) => {
            let { img, name, price } = Element
            return `
                <div class="cart-ind-products">
                    <p>${name}</p>
                    <img src="${img}" alt="${name}" class="cart-img"/>
                    <p>${price}</p>
                    <button onclick="remove_button(${index})" class="cart-btn">remove</button>
                </div>
            `
        }).join('')
    } else {
        cartContainer.innerHTML = '<h3>Shopping cart is empty</h3>'
    }
}


function total_price() {
    let total_amount = 0

    if (Array.isArray(cartlist)) {
        for (let each of cartlist) {
            let price = Number(each.price)
            console.log(price)
            if (!isNaN(price)) {
                total_amount += price
            }
        }
    }

    document.getElementById("total-price").innerHTML = `<h3>Total price: $${total_amount.toFixed(2)}</h3>`
}
total_price();



function remove_button(index) {
    cartlist.splice(index, 1)
    localStorage.setItem("data", JSON.stringify(cartlist))
    generateCartItem()
    total_price()
}

generateCartItem()

console.log(cartlist.map(item => item.img));  // Log all image URLs
