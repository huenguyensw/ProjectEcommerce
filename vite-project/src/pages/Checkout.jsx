import React from 'react'
import Cart from '../components/Cart'

const Checkout = () => {
  return (
    <div>
        <Cart/>
        <section className='orders'>
            <h3>Products</h3>
            <hr/>
        </section>
        <section className='news'>
            <h3>Newsletter</h3>
            <hr/>
            <input type='text'></input>
            <button className='subscribe'>Subscribe</button>
        </section>
        <section className='shipping'>
            <h3>Shipping address</h3>
            <hr/>
            <label >
                First name
                <br/>
                <input type='text'></input>
            </label>
            <label>
                Last name
                <br/>
                <input type='text'></input>
            </label>
            <label>
                Email
                <br/>
                <input type='text'></input>
            </label>
            <label>
                Password
                <br/>
                <input type='text'></input>
            </label>
            <label>
                Country
                <br/>
                <select>
                    <option selected>Sweden</option>
                    <option>Finland</option>
                    <option>Denmark</option>
                    <option>Norway</option>
                </select>
            </label>
            <label>
                Comment
                <br/>
                <textarea></textarea>
            </label>
            <button>Proceed to payment</button>
        </section>
      
    </div>
  )
}

export default Checkout
