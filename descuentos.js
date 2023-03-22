// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const  discountValue = inputPrice.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
}

//console.log({
  //  precioOriginal,
  //  descuento,
  //  porcentajePrecioConDescuento,
  //  precioDescuento,
// });