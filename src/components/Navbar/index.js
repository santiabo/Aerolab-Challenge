import React from "react";
import {
  Nav,
  Wrapper,
  SortWrapper,
  SortBy,
  ProductsQuantity,
  PageButton,
  SortButton,
  PageWrapper,
  ArrowRight,
  ArrowLeft
} from "./styled"
import { sortAscendantAction, sortDescendantAction, sortByDate } from "../../redux/actions/sort";
import { useDispatch, useSelector } from "react-redux";


const Navbar = ({ productsPerPage, totalProducts, paginate, indexOfLastProduct, currentPage }) => {

  const sortedBy = useSelector((state) => state.sort.sort)
  const dispatch = useDispatch();

  const handleclick = (sort) => {
    if (sort === "date") {
      paginate("previous");
      dispatch(sortByDate());
    };
    if (sort === "ascendant") {
      paginate("previous");
      dispatch(sortAscendantAction());
    };
    if (sort === "descendant") {
      paginate("previous");
      dispatch(sortDescendantAction());
    }
  };

  const isSelected = (prop) => {
    if (sortedBy === prop) return true;
    return false;
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <Nav>
        <Wrapper>
          <SortWrapper>
            <ProductsQuantity>{indexOfLastProduct} of {totalProducts} products</ProductsQuantity>
            <SortBy>Sort by: </SortBy>
            <SortButton selected={isSelected("date")} onClick={() => handleclick("date")}>
              Most recent
            </SortButton>
            <SortButton selected={isSelected("ascendant")} onClick={() => handleclick("ascendant")}>
              Lowest price
            </SortButton>
            <SortButton selected={isSelected("descendant")} onClick={() => handleclick("descendant")}>
              Highest price
            </SortButton>
          </SortWrapper>
          <PageWrapper>
            {currentPage !== pageNumbers[0] &&
              <>
                <PageButton onClick={() => paginate("previous")} ><ArrowLeft /></PageButton>
              </>
            }
            <PageButton onClick={() => paginate("next")} ><ArrowRight /></PageButton>
          </PageWrapper>
        </Wrapper>

      </Nav>
    </>
  )
};

export default Navbar;