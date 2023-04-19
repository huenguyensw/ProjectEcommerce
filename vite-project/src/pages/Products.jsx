import React, { useRef } from 'react'
import ProductItem from '../components/ProductItem';
import usefetchAllRecords from './usefetchAllRecords'
import { useOutletContext } from 'react-router-dom'
import Cart from '../components/Cart'
import styled from 'styled-components'
import ScrollToTop from '../components/ScrollToTop';



const Products = () => {
  const intervalRef = useRef(null);
  const {lineItems, setLineItems, totalPrice,setTotalPrice,toggle,setToggle, setIsDisplayCart} = useOutletContext();
  const URL = 'https://db.up.railway.app'
  const { data: products, isLoading, isError } = usefetchAllRecords(`${URL}/products`)
  
// if product existed then only increase amount of products and update total price
// else  if product does not exist, add product to list LineItems, update total price as well.
  const handleClick = (product,amount) => {
    setToggle(true);
    let isExist = lineItems.some(element => element.product._id == product._id)
    if (!isExist) {
      setTotalPrice(totalPrice => totalPrice + product.price*amount)
      setLineItems([...lineItems, { product: product, quantity: amount }])
    } else {
      setLineItems(lineItems.map((order) => {
        if (order.product._id === product._id) {
          
          setTotalPrice(totalPrice + order.product.price*amount)
          return { ...order, quantity: order.quantity + amount }
        } else {
          return order;
        }
      }))
    }
  //set timeout for mini-shopping cart
  clearInterval(intervalRef.current);
  intervalRef.current =setTimeout(()=>{
      setToggle(false)
  },3000)
  }

  //show cart on Products page
  setIsDisplayCart(true);
  
// update list of items and total price.
  const handleRemoveItem = (item)=>{
    setLineItems(lineItems => lineItems.filter((i)=>i.product._id != item.product._id));
    setTotalPrice(totalPrice - item.product.price*item.quantity)
  }

  //267 is width of product items. totalWidth is used to justify content in ProductContainer
  const totalWidth = products.length*267;
  
  return (
    <Wrapper>
    <ProductContainer totalWidth={totalWidth}>
      <ScrollToTop />
    {isLoading
    ? <h1>Loading...</h1>
    :isError
        ?<h1>{isError}</h1>
        : products.map((product)=>
      <ProductList key={product._id}>
        <ProductItem  product={product} URL={URL} handleClick={handleClick} isSingleView={false}/>
      </ProductList>)}
      
      {(lineItems.length >0 && toggle === true) 
        && <Cart popup={true}  handleRemoveItem={handleRemoveItem} />}
    </ProductContainer>
    </Wrapper>
  )
}



const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  border: 1px solid white;
  background-color: white;
  align-items: center;
  text-align: center;
`;
//display space-evenly if there is enough space for all items.
//else displaying flex-start
const ProductContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 30px;
  justify-content: space-evenly;
  column-gap:15px;
  padding: 20px;
  @media (max-width: ${props => props.totalWidth}px) {
    justify-content: flex-start;
    column-gap: 30px;
  }
`;

const Wrapper = styled.div`
display: block;
margin: auto;
`;



export default Products
