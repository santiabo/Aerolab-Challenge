import React from 'react';
import { useSelector } from 'react-redux';
import {
  ProductsQuantity,
  Div,
  PageWrapper,
  PageButton,
  ArrowLeft,
  ArrowRight,
  Nav
} from './styled';


function Footer({ indexOfLastProduct, paginate, currentPage, productsPerPage, totalProducts }) {

  const products = useSelector(state => state.products)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Nav>
      <Div>
        <ProductsQuantity>{indexOfLastProduct} of {products.length} products</ProductsQuantity>
        <PageWrapper>
          {currentPage !== pageNumbers[0] &&
            <>
              <PageButton onClick={() => paginate("previous")} ><ArrowLeft /></PageButton>
            </>
          }
          <PageButton onClick={() => paginate("next")} ><ArrowRight /></PageButton>
        </PageWrapper>
      </Div>
    </Nav>
  )
}

export default Footer
