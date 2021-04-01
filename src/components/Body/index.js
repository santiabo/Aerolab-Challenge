import React from 'react';
import ProductCard from "../ProductCard";
import { Nav, Wrapper } from "./styled";

const Body = ({currentProducts}) => {
    return (
      <>
        <Nav>
          <Wrapper>
            {currentProducts.map(prod => <ProductCard
              key={prod._id}
              img={prod.img.url}
              name={prod.name}
              cost={prod.cost}
              category={prod.category}
              id={prod._id}
            />)}
          </Wrapper>
        </Nav>
      </>
    )
};

export default Body;