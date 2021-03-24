import styled from "styled-components"
import buyIcon from '../../images/buy-blue.svg';
import buyIcon2 from '../../images/buy-white.svg';

export const Nav = styled.nav` 
display:flex;
justify-content:center;
align-items:flex-start;
background:#ffffff;
box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
width:276px;
height:276px;
transition: all 0.3s ease-in-out;

&:hover {
transform: ${props => props.isAvailable && "scale(1.1)"};
transition: ${props => props.isAvailable &&  "all 0.2s fade-in-out"};
};
`;

export const Wrapper= styled.div`
display: flex;
flex-direction:column;
width:90%;
height:90%;
justify-content:space-between;
align-items:flex-start;
background:white;
`;

export const ImageWrapper = styled.div`
display:flex;
width:100%;
align-items: center;
border-bottom: 1px solid #ededed;
`;

export const ProductNameWrapper = styled.div`
display: flex;
height:50px;
flex-direction:column;
justify-content:space-around;
background-color: white; 
`;

export const NotAvailableWrapper = styled.div`
display: flex;
border-radius:100px;
min-width:160px;
height:42px;
align-items:center;
justify-content: space-around;
margin-left:-165px;
margin-top: -110px; 
opacity:0.8;
background:#616161;

${Nav}:hover & {
  transform: scale(1.5);
  transition:all 0.3s ease-in-out ;
  margin-left:-215px;
  }
`;

export const Points = styled.p`
font-family: 'Recursive', sans-serif;
font-size:14px;
color:#ffffff;
letter-spacing:-0.03px;
text-align:right;
background:#616161;
`;

export const Coin = styled.div`
background:#f8b013;
width:15px;
height:15px;
border-radius: 100px;
`;

export const Image = styled.img`
margin-top:15px;
`;
export const BuyIcon = styled.img`
margin-left:220px;
margin-bottom: 200px;
${Nav}:hover & {
  display:none;
  }
`;


BuyIcon.defaultProps ={
  src:buyIcon
}

export const BuyIcon2 = styled.img`
margin-left:220px;
margin-bottom: 200px;
display:none;
${Nav}:hover & {
  opacity:1;
  display:flex;
  }
`;
BuyIcon2.defaultProps ={
  src:buyIcon2
}


export const AvailableItem = styled.div`
display:flex;
position:absolute;
min-width:276px;
min-height:276px;
margin-top:79px;
margin-left:-14px;
border-radius:3px;
z-index:1;
${Nav}:hover & {
  background-image:linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);
  opacity:0.6;
 
  }
`;

export const ProductCategory = styled.p`
font-family: 'Recursive', sans-serif;
font-size:16px;
color:#a3a3a3;
letter-spacing:-0.04px;
text-align:left;
line-height: 5px
`;

export const ProductName = styled.p`
font-family: 'Recursive', sans-serif;
font-size:18px;
color:#616161;
letter-spacing:-0.04px;
text-align:left;
line-height: 5px
`;
export const RedeemWrapper = styled.div`
display:none;
width:100%;
height:50%;
flex-direction: column;
align-items:center;
justify-content:space-between;
margin-left:-250px;
margin-top:100px;
z-index:2;
${Nav}:hover & {
  opacity:1;
  display:flex;
  }
`;

export const RedeemBox = styled.div`
display:none;
background:#ffffff;
width:228px;
height:42px;
border-radius:10px;
justify-content:center;
align-items:center;

${Nav}:hover & {
  opacity:1;
  display:flex;
  }
`;

export const RedeemText = styled.p`
font-size:18px;
color:#616161;
letter-spacing:-0.04px;
text-align:center;
`;

export const ProductCost = styled.p`
font-size:36px;
color:#ffffff;
letter-spacing:-0.08px;
min-width:150px;
display:none;
justify-content:center;
align-items:center;
${Nav}:hover & {
  opacity:1;
  display:flex;
  }
`;

export const Coin2 = styled.div`
background:#f8b013;
width:30px;
height:30px;
border-radius: 100px;
`;
