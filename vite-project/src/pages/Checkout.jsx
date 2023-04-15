import React from 'react'
import { useOutletContext } from 'react-router-dom';
import Cart from '../components/Cart'
const Checkout = () => {
    const [lineItems, setLineItems, totalPrice,setTotalPrice,handleResetCart,isDisplayCart,setIsDisplayCart] = useOutletContext();

    const handleRemoveItem = (item)=>{
        setLineItems(lineItems => lineItems.filter((i)=>i.product._id != item.product._id));
        setTotalPrice(totalPrice - item.product.price*item.quantity)
      }
    
      // const handleIncrement = (product) =>{
      //   setLineItems(lineItems.map((item) => {
      //     if (item.product._id === product._id) {
      //       console.log('exist')
      //       setTotalPrice(totalPrice + item.product.price)
      //       return { ...item, quantity: item.quantity + 1 }
      //     } else {
      //       return item;
      //     }
      //   }))
      // }
    
      // const handleDecrement = (product) =>{
      //   setLineItems(lineItems.map((item) => {
      //     if (item.product._id === product._id) {
      //       console.log('exist')
      //       setTotalPrice(totalPrice - item.product.price)
      //       return { ...item, quantity: item.quantity - 1 }
      //     } else {
      //       return item;
      //     }
      //   }))
      // }
    
    return (
        <div className='checkout'>
            <section className='orders'>
                <h3>Products</h3>
                <hr />
                {lineItems.length >0 ? <Cart lineItems={lineItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} handleRemoveItem={handleRemoveItem} handleResetCart={handleResetCart} setLineItems={setLineItems}/>:<h1>Shopping cart is empty</h1>}
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
                        <option selected>Sweden</option>
                        <option>Finland</option>
                        <option>Denmark</option>
                        <option>Norway</option>
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
