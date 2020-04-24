var storagekey = 'listCart';
var dataString = localStorage.getItem(storagekey);
var listCart;
if (dataString) {
    document.querySelector("#noCart").style.display = 'none';
    listCart = JSON.parse(dataString);
    document.querySelector("#cart-content").innerHTML = '';
    var content = `<tr>
                        <th class="product">Sản phẩm</th>
                        <th class="qty">Số lượng</th>
                        <th class="linePrice">Tổng tiền</th>
                        <th class="remove">Xóa</th>
                    </tr>`;
    var totalCart = 0;
    listCart.forEach(element => {
        var price = element.price.toLocaleString('vi', { style: 'currency', currency: 'VND' });
        var total = element.price * element.quantity;
        totalCart += total;
        var linePrice = total.toLocaleString('vi', { style: 'currency', currency: 'VND' });
        content += `<tr class="cartItem" data-id="22557316">
                        <td class="product">
                            <div class="thumb-cart">
                                <a href="./product-detail.html?proId=${element.proId}&cateId=${element.cateId}" title="${element.name}">
                                    <img src="${element.image}" alt="${element.name}">
                                </a>
                                <a href="./product-detail.html?proId=${element.proId}&cateId=${element.cateId}" title="${element.name}">
                                    <h4>${element.name}</h4>
                                </a>
                                <span>${price}</span>
                            </div>
                        </td>
                        <td class="qty">
                            <div class="qty-number">
                                <input type="button" value="<" class="qtyminus" field="quantity">
                                <input type="text" size="4" name="quantity" min="1" dataid="22557316" id="updates_1" value="${element.quantity}" onchange="this.val" onfocus="this.select();" class="tc item-quantity eventnone qty">
                                <input type="button" value=">" class="qtyplus" field="quantity">
                            </div>
                        </td>
                        <td class="linePrice">
                            <b>${linePrice}</b>
                        </td>
                        <td class="remove">
                            <a title="Xóa" class="remove-item" href="/cart/change?line=1&amp;quantity=0" data-id="1"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                        </td>
                    </tr>`
    });
    document.querySelector("#cart-content").innerHTML = content;
    document.querySelector("#total-cart").innerHTML = `Tổng tiền <b>${totalCart.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</b>`
} else {
    document.querySelector("#hasCart").style.display = 'none'
}