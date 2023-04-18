import React, {useState} from 'react'
import styled from 'styled-components'

const ScrollToTop = () => {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };

    const [showButton, setShowButton] = useState(false)

    const checkScrollButton = () => {
    if (!showButton && window.pageYOffset > 200){
      setShowButton(true)
    } else if (showButton && window.pageYOffset <= 200){
      setShowButton(false)
    }
  };

  window.addEventListener('scroll', checkScrollButton)
  return (
    <ScrollButton onClick={scrollTop} className={showButton ? '' : 'hidden'}>UP</ScrollButton>
  )
}

export default ScrollToTop

const ScrollButton = styled.button`
    position: fixed; 
    right: 40px;
    bottom: 40px;
    height: 40px;
    width: 40px;
    opacity: 0.5;
    font-size: 10pt;
    background-color: white;
    border: 1px solid rgb(103, 163, 186);
    border-radius: 50%;

    &:hover {
        opacity: 1;
    }

    &.hidden {
        display: none;
    }
`;