import React from 'react'
import { useOutletContext } from 'react-router-dom';
import Cart from '../components/Cart'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Checkout = () => {
    const { lineItems, setLineItems, totalPrice, setTotalPrice,setIsDisplayCart } = useOutletContext();

    const handleRemoveItem = (item) => {
        setLineItems(lineItems => lineItems.filter((i) => i.product._id != item.product._id));
        setTotalPrice(totalPrice - item.product.price * item.quantity)
    }

    setIsDisplayCart(false);
    return (
        <CheckoutPage>
            <OrdersSection>
                <h3>Products</h3>
                {/* <LineBreak /> */}
                {lineItems.length > 0
                    ? <Cart handleRemoveItem={handleRemoveItem} />
                    : <h1>Shopping cart is empty, <Link to={"/"}>start shopping!</Link></h1>}
            </OrdersSection>
            <NewsSection>
                <h3>Newsletter</h3>
                {/* <LineBreak /> */}
                <SecondInput type='text'></SecondInput>
                <SubscribeBtn>Subscribe</SubscribeBtn>
            </NewsSection>
            <div>
                <h3>Shipping address</h3>
                {/* <LineBreak /> */}
                <ShippingSection>
                <FirstName >
                    First name
                    <br />
                    <PrimaryInput type='text'></PrimaryInput>
                </FirstName>
                <LastName>
                    Last name
                    <br />
                    <PrimaryInput type='text'></PrimaryInput>
                </LastName>
                <Email>
                    Email
                    <br />
                    <PrimaryInput type='text'></PrimaryInput>
                </Email>
                <Password>
                    Password
                    <br />
                    <PrimaryInput type='text'></PrimaryInput>
                </Password>
                <Country>
                    Country
                    <br />
                    <SelectField>
                        <option value='Sweden'>Sweden</option>
                        <option value='Finland'>Finland</option>
                        <option value='Denmark'>Denmark</option>
                        <option value='Norway'>Norway</option>
                    </SelectField>
                </Country>
                <Comment>
                    Comment
                    <br />
                    <TextArea></TextArea>
                </Comment>
                </ShippingSection>
                <PrimaryButton>Proceed to payment</PrimaryButton>
                
            </div>

        </CheckoutPage>
    )
}

const CheckoutPage = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 1.3fr;
  grid-template-areas: 
  'orders news'
  'shipping news';
  line-height: 1rem;
  padding: 40px 50px;
  background-color: white;

`

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
  height: 1.6rem;
  cursor: pointer;
`
const ShippingSection = styled.section`
  grid-area: shipping;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid skyblue;
  border-radius: 4px;
  grid-template-areas: 'First Last'
  'Email Password'
  'Country Country'
  'Comment Comment'
  ;
  row-gap: 15px;
  padding: 15px 5px;
`
const FirstName = styled.label`
grid-area: First;`

const LastName = styled.label`
grid-area: Last;`

const Email = styled.label`
grid-area: Email;`

const Password = styled.label`
grid-area: Password;`

const Country = styled.label`
grid-area: Country;`

const Comment = styled.label`
grid-area: Comment;`

const PrimaryInput = styled.input`
width: 95%;
margin: auto;
border-radius: 4px;
border: 1px solid;
height: 1.3rem;
`
const SelectField = styled.select`
width: 98%;
height: 1.3rem`
const TextArea = styled.textarea`
width: 97%;
height: 3rem;`
const LineBreak = styled.hr`
height: 1.4px;
`
const PrimaryButton = styled.button`
width: 100%;
margin-top: 20px;
border-radius: 4px;
height: 1.6rem;
border: 1px solid orange;
background-color: orange;
cursor: pointer;
`;
export default Checkout
