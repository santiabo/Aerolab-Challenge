import styled from "styled-components"


export const Nav = styled.nav` 
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

export const Wrapper= styled.div`
display: flex;
flex-direction:row;
width: 20%;
justify-content:space-around;
align-items:center;

`;

export const PointsWrapper= styled.div`
display: flex;
background:#ededed;
border-radius:100px;
width:103px;
height:48px;
align-items:center;
justify-content: space-around;
`;

export const Name = styled.p`
font-family: 'Recursive', sans-serif;
font-size:1.2rem;
color:#616161;
letter-spacing:-0.15px;
line-height:48px;
text-align:left;
`;

export const Points = styled.p`
font-family: 'Recursive', sans-serif;
font-size:1.2rem;
color:#616161;
letter-spacing:-0.15px;
background:#ededed;
`;



export const Coin = styled.div`
background:#f8b013;
width:15px;
height:15px;
border-radius: 100px;
`;

export const Logo = styled.img`
width: 49px;
height: 56px;
cursor: pointer;
margin-left: 30px;
margin-top:10px;
`;

