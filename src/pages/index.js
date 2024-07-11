import Category from "@/components/Home/Category";
import Feature from "@/components/Home/Feature";
import Navbar from "@/components/Home/Navbar";
import Products from "@/components/Home/Products";
import { backendUrl } from "@/helpers/CommonHelper";
import { cartAtom } from "@/store/frontend/frontendAtom";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

// Server-side data fetching function
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(backendUrl);
  const { data } = await res.json();
  const homePageData = data.data;
  return { props: { homePageData } };
}

const Home = ({ homePageData }) => {
  const [products, setProducts] = useState(homePageData.products || []);
  const [skipProducts, setSkipProducts] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLoadMoreProducts = async () => {
    setLoading(true);
    const newSkip = skipProducts + 20;
    setSkipProducts(newSkip);

    // Fetch more products from the API with the new skip parameter
    const res = await fetch(`${backendUrl}?skip=${newSkip}`);
    const { data } = await res.json();
    const moreProducts = data.data.products;

    // Update the products state with the newly fetched products
    setProducts((prevProducts) => [...prevProducts, ...moreProducts]);
    setLoading(false);
  };

  return (
    <>
      {homePageData && (
        <>
          <Navbar homePageData={homePageData} />
          <Feature />
          <Category homePageData={homePageData} />
          <Products
            props={{
              products,
              loading,
              handleLoadMoreProducts,
            }}
          />
        </>
      )}
    </>
  );
};

export default Home;
