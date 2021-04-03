import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { getUser } from '../../redux/actions/user';
import {
  Nav,
  Div,
  ImageWrapper,
  Image,
  ProductNameWrapper,
  ProductCategory,
  ProductName,
  Wrapper,
  AvailableItem,
  BuyIcon,
  BuyIcon2,
  NotAvailableWrapper,
  Points,
  Coin,
  Coin2,
  RedeemBox,
  RedeemText,
  ProductCost,
  RedeemWrapper
} from "./styled"


const ProductCard = ({ img, category, name, cost, id }) => {

  const userPoints = useSelector(state => state.user.points);
  const pointsNeeded = cost - userPoints;
  const isAvailable = () => {
    if (userPoints >= cost) return true;
    return false;
  }

  const authAxios = axios.create({
    baseURL: 'https://coding-challenge-api.aerolab.co',
  });

  const dispatch = useDispatch();
  const handleClick = () => {
    return async () => {
      try {
        await authAxios.post(`https://coding-challenge-api.aerolab.co/redeem`, {
          "productId": "5a0b3678734d1d08bf708537"
        }, {
          headers: {
            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRmYWNmMDdlNzE4NzAwMjBlMzhmOGIiLCJpYXQiOjE2MTU4MzQzNTJ9.fBvgjWDMXYCOOAxpEqsrIAs3wC0OKb_tn8MQ4oZ_W8s"}`
          }
        });
        dispatch(getUser());
        alert("Product redeemed !") //Change for a modal !
      } catch (err) {
        console.log(err);
        alert("User doesn't have enogh points") //Change for a modal !
      }
    };
  }

  return (
    <>
      <Nav isAvailable={isAvailable()}>
        {isAvailable() &&
          <Div>
            <BuyIcon />
            <BuyIcon2 />
          </Div>
        }
        <Wrapper>
          <ImageWrapper>
          <Image src={img} />           
            {
              isAvailable() ? <>

                <RedeemWrapper>
                  <ProductCost>{cost} <Coin2 /></ProductCost>
                  <RedeemBox onClick={handleClick()}>
                    <RedeemText>Redeem now</RedeemText>
                  </RedeemBox>
                </RedeemWrapper>
                <AvailableItem />
              </>
                : <NotAvailableWrapper>
                  <Points>You need {pointsNeeded}</Points>
                  <Coin />
                </NotAvailableWrapper>
            }
          </ImageWrapper>
          <ProductNameWrapper>
            <ProductCategory> {category} </ProductCategory>
            <ProductName> {name} </ProductName>
          </ProductNameWrapper>
        </Wrapper>
      </Nav>
    </>
  )
};

export default ProductCard;