import styled from "styled-components";

export const Nav = styled.nav` 
display: grid;
grid-template-rows: 0.85fr 0.15fr;
background: #f9f9f9;
`;

export const Div = styled.div`
width:100%;
height:100%;
color:#f9f9f9;
grid-row: 2 / 3;
grid-column: 1 / 2;
background: #f9f9f9;
`;

export const Header = styled.img`
 max-width: 100%;
  height: auto;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
`;

export const TitleWrapper = styled.div`
text-align:left;
grid-row: 1 / 2;
grid-column: 1 / 2;
align-self: end;
background: none;
`;


export const Title = styled.p`
font-weight: 800;
font-size: 3rem;
color:#ffffff;
background: none;
margin-bottom: 50px; 
margin-left: 75px;
`;
