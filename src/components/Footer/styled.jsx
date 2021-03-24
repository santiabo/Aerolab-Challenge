import styled from "styled-components"

export const ProductsQuantity = styled.p`
font-family: 'Recursive', sans-serif;
font-size:1.2rem;
color:#616161;
letter-spacing:-0.15px;
line-height:48px;
text-align:left;
padding-right:20px;
`;

export const Nav = styled.nav` 
display:flex;
justify-content:center;
height:150px;
align-items:flex-start;
background: #f9f9f9;
`;

export const Div = styled.div`
width:85%;
display:flex;
align-items:center;
justify-content:space-between;
border-bottom: 2px solid #ededed;
margin-top:20px;
padding-bottom:10px;
`;


export const PageWrapper= styled.div`
display: flex;
align-items:center;
justify-content: space-between;
`;

export const PageButton = styled.button`
background: #f9f9f9;
cursor:pointer;
margin: 5px;
border:1px solid #d9d9d9;
outline: none;
width:46px;
height:46px;
border-radius:100%;
font-weight: 100;
font-size: 1rem;
`;

export const ArrowRight = styled.i`
  border: solid #a3a3a3;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(-45deg);
  height: 0.1rem;
  width: 0.1rem;
`;

export const ArrowLeft = styled.i`
  border: solid #a3a3a3;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(135deg);
  height: 0.1rem;
  width: 0.1rem;
`;
