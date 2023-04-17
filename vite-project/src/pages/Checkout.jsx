import React from 'react'
import { useOutletContext } from 'react-router-dom';
import Cart from '../components/Cart'

const Checkout = () => {
    const { lineItems, setLineItems, totalPrice, setTotalPrice, handleResetCart } = useOutletContext();

    const handleRemoveItem = (item) => {
        setLineItems(lineItems => lineItems.filter((i) => i.product._id != item.product._id));
        setTotalPrice(totalPrice - item.product.price * item.quantity)
    }

    return (
        <div className='checkout'>
            <section className='orders'>
                <h3>Products</h3>
                <hr />
                {lineItems.length > 0
                    ? <Cart handleRemoveItem={handleRemoveItem}/>
                    : <h1>Shopping cart is empty</h1>}
            </section>
            <section className='news'>
                <h3>Newsletter</h3>
                <hr />
                <input type='text'></input>
                <button className='subscribe'>Subscribe</button>
            </section>
            <section className='shipping'>
                <h3>Shipping address</h3>
                <hr />
                <label >
                    First name
                    <br />
                    <input type='text'></input>
                </label>
                <label>
                    Last name
                    <br />
                    <input type='text'></input>
                </label>
                <label>
                    Email
                    <br />
                    <input type='text'></input>
                </label>
                <label>
                    Password
                    <br />
                    <input type='text'></input>
                </label>
                <label>
                    Country
                    <br />
                    <select>
                        <option value='Sweden'>Sweden</option>
                        <option value='Finland'>Finland</option>
                        <option value='Denmark'>Denmark</option>
                        <option value='Norway'>Norway</option>
                    </select>
                </label>
                <label>
                    Comment
                    <br />
                    <textarea></textarea>
                </label>
                <button>Proceed to payment</button>
            </section>

        </div>
    )
}

export default Checkout
