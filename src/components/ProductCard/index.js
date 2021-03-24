import React from 'react';
import { useSelector } from 'react-redux';

import {
  Nav,
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

const ProductCard = ({ img, category, name, cost }) => {

  const userPoints = useSelector(state => state.user.points);
  const pointsNeeded = cost - userPoints;
  const isAvailable = () => {
    if (userPoints >= cost) return true;
    return false;
  }

  return (
    <>
      <Nav isAvailable={isAvailable()}>
        <Wrapper>
          <ImageWrapper>
            <Image src={img} />
            {
              isAvailable() ? <>

                <RedeemWrapper>
                  <ProductCost>{cost}<Coin2 /></ProductCost>
                  <RedeemBox>
                    <RedeemText>Redeem now</RedeemText>
                  </RedeemBox>
                </RedeemWrapper>
                <AvailableItem>
                  <BuyIcon />
                  <BuyIcon2 />
                </AvailableItem></>
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