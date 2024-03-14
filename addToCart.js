import { getCartProductFromLS } from "./getCartPeoductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  let currentProdElem = document.querySelector(`#card${id}`);
  // console.log(currentProdElem);

  let quantity = currentProdElem.querySelector(".productQuantity").innerText;

  let price = currentProdElem.querySelector(".productPrice").innerText;
  console.log(quantity, price);

  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);

    let updateCart = { id, quantity, price };

    updateCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updateCart : curProd;
    });
    console.log(updateCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    //show toast when product added to the cart
    showToast("delete", id);
  }

  if (existingProd) {
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //update cart button value
  updateCartValue(arrLocalStorageProduct);

  //show toast when product added to the cart
  showToast("add", id);
};
