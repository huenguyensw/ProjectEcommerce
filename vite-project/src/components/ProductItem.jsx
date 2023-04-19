import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductItem = ({product, URL, handleClick, isSingleView}) => {
    const endpoint = encodeURI(product.image);
    const [quantity, setQuantity] = useState(1)
    
    const increment = () => {
        setQuantity(quantity + 1);
    }
    const decrement = () => {
        quantity>0 ? setQuantity(quantity - 1)
        : setQuantity(quantity)
    }

  return (
    <ProductContainer className={isSingleView ? 'single-view' : ''}>
      <ProductImage className={isSingleView ? 'single-view' : ''}src={`${URL}/uploads/${endpoint}`}></ProductImage>
      <ProductInfo className={isSingleView ? 'single-view' : ''}>
        <Title className={isSingleView ? 'single-view' : ''}>{product.title}</Title>
      <Price>{product.price} kr</Price>
      <StockValue className={product.quantity>0?'':'out-of-stock'}>{product.quantity>0?'In stock':'Out of stock'}</StockValue>
      <ProductDescription className={isSingleView ? 'single-view' : ''}>{product.description}</ProductDescription>
      <ReadMoreLink className={isSingleView ? 'single-view' : ''} to={"/products/"+`${product._id}`}>Read more...</ReadMoreLink>
      <br/><br/>
      <QuantityInput className={isSingleView ? 'single-view' : ''}type='text' readOnly value={quantity}></QuantityInput>
      <QuantityButton className={isSingleView ? 'single-view' : ''}onClick={increment}>+</QuantityButton>
      <QuantityButton className={isSingleView ? 'single-view decrement' : 'decrement'} onClick={decrement}>-</QuantityButton>
      <br/>
      <AddToCart onClick={()=>handleClick(product,quantity)} className={isSingleView ? 'single-view' : ''}>Add to cart</AddToCart><FavouriteButton>&#x2764;</FavouriteButton>
      </ProductInfo>
      </ProductContainer>
  )
}

const lightColor = 'rgb(123, 172, 191)'
const darkColor = 'rgb(103, 163, 186)'

const Title = styled.h1`
  font-size: 20pt;
  margin-bottom: -16px;
  font-weight: lighter;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 200px;

  &.single-view {
    width: 100%;
  }
`;

const Price = styled.h2`
  font-size: 20pt;
  margin-bottom: -10px;
`;


const ProductContainer = styled.div`
  flex-grow: 1;
  
  &.single-view {
    display: flex;
    background-color: white;
    padding: 30px;
  }
`;

const StockValue = styled.p`
  color: black;

  &.out-of-stock {
    color: red;
  }
`;

const ProductInfo = styled.div`
&.single-view {
  display: inline-block;
  padding-left: 50px;
  vertical-align: top;
}
`;

const ProductDescription = styled.div`
  display: none;

  &.single-view {
    display: block;
  }
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 34px;
  border: none;
  color: white;
  background-color: ${darkColor};
  text-decoration: none;

  &:hover {
    background-color: ${lightColor};
  }

  &.decrement {
    border-radius: 0px 5px 5px 0px;
  }

  &.single-view {
    height: 54px;
    width: 50px;
  }
`;

const QuantityInput = styled.input`
  width: 30px;
  text-align: center;
  height: 30px;
  border: 1px solid ${darkColor};
  border-radius: 5px 0px 0px 5px;

  &.single-view {
    width: 50px;
    height: 50px;
  }
`;

const FavouriteButton = styled.button`
  border: 1px solid ${darkColor};
  color: ${darkColor};
  background-color: white;
  border-radius: 15px;
  font-size: 15pt;
  padding: 5px;
  margin: 10px;

  &:hover {
    background-color: ${lightColor}
  }
`;

const AddToCart = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  background-color: ${darkColor};
  text-decoration: none;

  &:hover {
    background-color: ${lightColor};
  }

  &.single-view {
    width: 160px;
    height: 40px;
  }
`;

const ProductImage = styled.img`
  height: 200px;
  width: 200px;

  &.single-view {
    height: 500px;
    width: 500px;
  }
`;

const ReadMoreLink = styled(Link)`
  color: ${darkColor};
  text-decoration: none;

  &:hover {
    color: ${lightColor};
  }

  &.single-view {
    display: none;
  }
`;


export default ProductItem
