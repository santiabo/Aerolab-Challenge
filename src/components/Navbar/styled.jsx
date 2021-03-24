import styled from "styled-components"


export const Nav = styled.nav` 
  width:100%;
  display: flex;
  background: #f9f9f9;  
  justify-content:center;
`;

export const Wrapper= styled.div`
display: flex;
flex-direction:row;
border-bottom:2px solid #ededed;
width: 85%;
justify-content:space-between;
align-items:center;
padding-bottom:20px;
background: #f9f9f9;

`;

export const SortWrapper= styled.div`
width:70%;
display: flex;
align-items:center;
justify-content: space-between;
`;

export const ProductsQuantity = styled.p`
font-family: 'Recursive', sans-serif;
font-size:1.2rem;
color:#616161;
letter-spacing:-0.15px;
line-height:48px;
text-align:left;
border-right: 2px solid #ededed;
padding-right:20px;
`;

export const SortBy = styled.p`
font-family: 'Recursive', sans-serif;
font-size:1.2rem;
color:#a3a3a3;
letter-spacing:-0.15px;
line-height:48px;
text-align:left;
margin-left:10px;
`;

export const SortButton = styled.button`

background: ${(props) => props.selected ? '#0ad4fa' : '#ededed'};
border-radius:100px;
width:163px;
height:48px;
cursor:pointer;
outline: none;
border: none;
margin: 3px;
font-family: 'Recursive', sans-serif;
font-size: 1.2rem;
color: ${(props) => props.selected ?  '#ededed' : '#a3a3a3'};
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


