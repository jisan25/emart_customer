import "../styles/globals.css";
import "../styles/style.css";
import "../styles/custom.slider.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // -- setup bootstrap js -----
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
