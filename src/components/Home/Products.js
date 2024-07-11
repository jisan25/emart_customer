import { backendImageUrl, truncateText } from "@/helpers/CommonHelper";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
const Products = ({ props }) => {
  const { loading, products, handleLoadMoreProducts } = props;
  return (
    <div className="container-fluid pt-5 products">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Our Products</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {products.map((item) => (
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={item.id}>
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100 product_image"
                  src={backendImageUrl + "/" + item.image}
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className=" mb-3 font-weight-bold">
                  {truncateText(item.product_name, 60)}
                </h6>
                <div className="d-flex justify-content-center">
                  <h6>৳ {item.price}</h6>
                  <h6 className="text-muted ml-2">
                    <del>0 taka</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-end bg-light border">
                <Link
                  href={"/products/" + item.id}
                  className="btn btn-sm text-dark p-0"
                >
                  <FaEye className="mr-1" />
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center w-100 my-4">
          <button
            className="btn btn-primary text-white border-radius-5"
            onClick={handleLoadMoreProducts}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
