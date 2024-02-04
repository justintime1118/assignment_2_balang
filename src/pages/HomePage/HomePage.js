import React, { useEffect } from "react";
import Page from "../../components/Page";
import api from "../../api/api";
import { updateProductList } from "../../store/reducers/product.reducer";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList";

function HomePage() {
  const dispatch = useDispatch();
  const storedProductList = useSelector((state) => state.product.productList);

  useEffect(() => {
    api.products.getAllProducts().then((fetchedProductList) => {
      dispatch(updateProductList(fetchedProductList));
    });
  }, []);

  return (
    <Page>
      <ProductList listTitle="전체 상품" productList={storedProductList} />
    </Page>
  );
}

export default HomePage;
