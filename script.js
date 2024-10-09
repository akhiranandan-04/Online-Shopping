function frmo_data(event){
    event.preventDefault
}
function login_page(){
    let name = document.getElementById("username").value
    let password = document.getElementById("password").value
    if(name=="akhiranandan" && password=="1111"){
        document.getElementById("body").innerHTML=
        window.location.href="catalog.html"
        }
    else{
        document.getElementById("login-info").innerText='password mismatch'
    }
}

function cart_page(){
    window.location.href="cart.html"
}