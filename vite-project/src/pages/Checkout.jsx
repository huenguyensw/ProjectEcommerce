import React from 'react'
import { useOutletContext } from 'react-router-dom';
import Cart from '../components/Cart'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Checkout = () => {
    const { lineItems, setLineItems, totalPrice, setTotalPrice, handleResetCart } = useOutletContext();

    const handleRemoveItem = (item) => {
        setLineItems(lineItems => lineItems.filter((i) => i.product._id != item.product._id));
        setTotalPrice(totalPrice - item.product.price * item.quantity)
    }

    return (
        <div className='checkout'>
            <OrdersSection>
                <h3>Products</h3>
                <LineBreak/>
                {lineItems.length > 0
                    ? <Cart handleRemoveItem={handleRemoveItem} />
                    : <h1>Shopping cart is empty, <Link to={"/"}>start shopping!</Link></h1>}
            </OrdersSection>
            <NewsSection>
                <h3>Newsletter</h3>
                <LineBreak/>
                <SecondInput type='text'></SecondInput>
                <SubscribeBtn>Subscribe</SubscribeBtn>
            </NewsSection>
            <ShippingSection>
                <h3>Shipping address</h3>
                <LineBreak/>
                <label >
                    First name
                    <br />
                    <PrimaryInput type='text'></PrimaryInput>
                </label>
                <label>
                    Last name
                    <br />
                    <PrimaryInput type='text'></PrimaryInput>
                </label>
                <label>
                    Email
                    <br />
                    <PrimaryInput type='text'></PrimaryInput>
                </label>
                <label>
                    Password
                    <br />
                    <PrimaryInput type='text'></PrimaryInput>
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
            </ShippingSection>

        </div>
    )
}

const OrdersSection = styled.div`
    grid-area: orders;
`;
const NewsSection = styled.section`
grid-area: news;
padding-left: 50px;
font-size: 14px;`

const SecondInput = styled.input`
    height: 25px;
  width: 97%;
  margin-top: 8px;
  border-radius:4px;
  border: 1.2px solid;
`
const SubscribeBtn = styled.button`
background-color: orange;
  border: 2px solid orange;
  border-radius: 4px;
  margin-top: 10px;
  width: 100%;
  height: 28px;
`
const ShippingSection = styled.section`
grid-area: shipping;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const PrimaryInput = styled.input`
grid-column: 1fr 2fr;
`
const LineBreak = styled.hr`
height: 1.4px;
`
export default Checkout
