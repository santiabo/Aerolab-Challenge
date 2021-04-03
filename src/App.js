import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from './redux/actions/user';
import { getProducts } from './redux/actions/products'
import Header from "../src/components/Header/";
import Banner from "../src/components/Banner";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
import { GlobalStyle } from "./globalStyles"
import Footer from './components/Footer';


function App() {

  const sortedBy = useSelector(state => state.sort.sort)
  const products = useSelector(state => state.products);
  const loading = useSelector(state => state.loading.loading);

  const [prods, setProds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);

  useEffect(() => {
    if (sortedBy === "date") setProds(products);
    if (sortedBy === "ascendant") setProds(lowProducts);
    if (sortedBy === "descendant") setProds(highProducts);

  }, [products, sortedBy])

  function sortAscendant(a, b) {
    if (a.cost > b.cost) {
      return 1;
    } else if (a.cost < b.cost) {
      return -1;
    }
    return 0;
  }

  function sortDescendant(a, b) {
    if (a.cost < b.cost) {
      return 1;
    } else if (a.cost > b.cost) {
      return -1;
    }
    return 0;
  }
  const lowProducts = products.slice().sort(sortAscendant);
  const highProducts = products.slice().sort(sortDescendant);


  const dispatch = useDispatch();
  useEffect(() => { dispatch(getProducts()) }, []);
  useEffect(() => { dispatch(getUser()) }, []);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  //Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = prods.slice(indexOFirstProduct, indexOfLastProduct);

  //Change page
  const paginate = (changePage) => {
    if (changePage === "previous" && currentPage !== 1) setCurrentPage(currentPage - 1);
    if (changePage === "next" && currentPage !== pageNumbers[pageNumbers.length - 1]) setCurrentPage(currentPage + 1);
    if (changePage === "start" && currentPage !== 1) setCurrentPage(1);
  }

 if(loading) return null ;
   return (
    <div>
      <GlobalStyle />
      <Header />
      <Banner />
      <Navbar
        productsPerPage={productsPerPage}
        paginate={paginate}
        totalProducts={products.length}
        indexOfLastProduct={indexOfLastProduct}
        currentPage={currentPage}
      />
            <Body currentProducts={currentProducts} />
            <Footer
              productsPerPage={productsPerPage}
              indexOfLastProduct={indexOfLastProduct}
              totalProducts={products.length}
              paginate={paginate}
              currentPage={currentPage}
            />
    </div>
  );
}

export default App;
