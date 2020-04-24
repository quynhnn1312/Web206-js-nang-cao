var cart = [];
if (localStorage.getItem('listCart')) {
    cart = JSON.parse(localStorage.getItem('listCart'))
}

function addToCartPro(obj = {}) {
    var num = parseInt(document.querySelector(".quantityPro-" + obj.proId).value);
    var flag = false;
    obj.quantity = num;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].cateId == obj.cateId && cart[i].proId == obj.proId) {
            flag = true;
            break;
        }
    }
    if (flag === false) {
        cart.push(obj);
    } else {
        cart[i].quantity += obj.quantity;
    }
    console.log(flag)
    localStorage.setItem('listCart', JSON.stringify(cart))
}