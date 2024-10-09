
let cartlist = JSON.parse(localStorage.getItem("data")) || [];

function add_to_cart(img, name, price) {
    cartlist.push({
        img: img,
        name: name,
        price: price
    });
    localStorage.setItem("data", JSON.stringify(cartlist));
    alert(`${name} added to cart`);
}
