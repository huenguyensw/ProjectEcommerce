import styled from "styled-components";

export const ProductWrapper = styled.div`
    display: block;
    width: 50%;

    height: 60%;
    border-radius: 10px;
    padding: 30px 40px;
    border: 1px solid #e5e5e5;
    background-color: white;
    align-items: center;
    text-align: center;
    margin: auto;
    justify-content: space-between;
  `;

export const StyleInputs = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  padding: 5px;
  margin: 5px;
  line-height: 1.5;
  align-items: center;
  text-align: left;
`;

export const InputLabel = styled.label`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 5px;
    line-height: 1.5rem;
    padding: 5px;
    align-items: center;
    
    textarea[name="description"] {
      padding:5px;
      margin:5px;
      align-items: center;
      height: 5.5rem;
      width: 95%;
      border-radius:4px;
      border: 1px solid;
    }
    
    input[type="text"] {
      padding:5px;
      margin:5px;
      align-items: center;
      height: 2.0rem;
      width: 95%;
      border-radius:4px;
      border: 1px solid;
    }
  `;

export const Button = styled.button`
    font-size: 1em;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    color: black;
    background-color: rgb(172, 226, 239);
    align-items: center;
  `;



export const Image = styled.div`
    margin-bottom: 30px;
    align-items: center;
    padding: 10px;
    
    input[type="file"] {
      margin-top: 10px;
      padding: 5px;
     
    }
  `;



