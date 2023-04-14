import React from "react";
import { motion } from "framer-motion";
import ProductItem from "../pages/ProductItem";

const Cart = ({ onMouseLeave, insideCart }) => {
const URL = "https://db.up.railway.app";

const cartItems = insideCart.map((item) => (
<ProductItem key={item._id} product={item} URL={URL} />
));

const totalPrice = insideCart.reduce(
(accumulator, currentItem) => accumulator + currentItem.price,
0
);

return (
<div onMouseLeave={onMouseLeave} id="cart">
<h2>Shopping Cart</h2>
{cartItems}
<div>Total: {totalPrice}</div>
</div>
);
};

export default Cart;
