import BreadCrumb from "@/components/ProductDetails/BreadCrumb";
import { FaStar } from "react-icons/fa";

const CategoryPage = () => {
  return (
    <div className="container-fluid">
      <div className="px-xl-5">
        <div className="row">
          <div className="col-md-12 my-2">
            <BreadCrumb />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 my-2">
            <div className="card p-3 align-items-center">
              <img src="/red-t-shirts.jpg" alt="" className="image-medium" />
              <p className="text-medium">Sarees</p>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div className="card p-3 align-items-center">
              <img src="/red-t-shirts.jpg" alt="" className="image-medium" />
              <p className="text-medium">Sarees</p>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div className="card p-3 align-items-center">
              <img src="/red-t-shirts.jpg" alt="" className="image-medium" />
              <p className="text-medium">Sarees</p>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div className="card p-3 align-items-center">
              <img src="/red-t-shirts.jpg" alt="" className="image-medium" />
              <p className="text-medium">Sarees</p>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div className="card p-3 align-items-center">
              <img src="/red-t-shirts.jpg" alt="" className="image-medium" />
              <p className="text-medium">Sarees</p>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div className="card p-3 align-items-center">
              <img src="/red-t-shirts.jpg" alt="" className="image-medium" />
              <p className="text-medium">Sarees</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h2 className="my-3">Filters</h2>
            <div>
              <p>Category</p>
              <hr className="my-1" />
              <div className="d-flex flex-column">
                <a href="#">Sarees</a>
                <a href="#">Shalwar Kameez</a>
                <a href="#">Unstiched Fabric</a>
                <a href="#">Party Wear</a>
                <a href="#">Bulk Deals</a>
                <a href="#">Dupattas & Stoles</a>
                <a href="#">Kurtis</a>
              </div>
            </div>

            <div className="my-3">
              <p>Color Family</p>
              <hr className="my-1" />
              <div className="d-flex gap-3">
                <a href="#">Red</a>
                <a href="#">Green</a>
                <a href="#">Black</a>
                <a href="#">White</a>
                <a href="#">Black</a>
                <a href="#">Blue</a>
              </div>
            </div>

            <div className="my-3">
              <p>Size</p>
              <hr className="my-1" />
              <div className="d-flex gap-2">
                <input type="checkbox" className="form-check" /> <span>M</span>
              </div>
              <div className="d-flex gap-2">
                <input type="checkbox" className="form-check" /> <span>XL</span>
              </div>
            </div>

            <div className="my-3">
              <p>Price</p>
              <hr className="my-1" />
              <div className="d-flex mt-3 gap-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="min"
                />
                <input
                  type="number"
                  className="form-control"
                  placeholder="max"
                />
                <button className="btn btn-primary text-white">Apply</button>
              </div>
            </div>

            <div className="my-3">
              <p>Rating</p>
              <hr className="my-1" />
              <div className="d-flex flex-column gap-2">
                <div className="d-flex gap-1">
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                </div>
                <div className="d-flex gap-1">
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-secondary" />
                </div>
                <div className="d-flex gap-1">
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-secondary" />
                  <FaStar className="text-secondary" />
                </div>
                <div className="d-flex gap-1">
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-secondary" />
                  <FaStar className="text-secondary" />
                  <FaStar className="text-secondary" />
                </div>
                <div className="d-flex gap-1">
                  <FaStar className="text-warning" />
                  <FaStar className="text-secondary" />
                  <FaStar className="text-secondary" />
                  <FaStar className="text-secondary" />
                  <FaStar className="text-secondary" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <h4 className="my-3">Category Products</h4>
            <div className="row">
              <div className="col-lg-3 mb-2">
                <div className="card p-2">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/product-6.jpg"
                      alt=""
                      className="image-medium-plus"
                    />
                  </div>
                  <p className="my-2">
                    Black Half Silk Tangail Tat Saree Without Blouse Piece For
                    Women
                  </p>
                  <p>
                    <FaStar className="text-warning" />
                    4.3/5(729) - 4k Sold
                  </p>
                  <p className="text-primary text-large">
                    ৳158{" "}
                    <span className="text-line-through text-small text-light-gray">
                      ৳140
                    </span>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 mb-2">
                <div className="card p-2">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/product-6.jpg"
                      alt=""
                      className="image-medium-plus"
                    />
                  </div>
                  <p className="my-2">
                    Black Half Silk Tangail Tat Saree Without Blouse Piece For
                    Women
                  </p>
                  <p>
                    <FaStar className="text-warning" />
                    4.3/5(729) - 4k Sold
                  </p>
                  <p className="text-primary text-large">
                    ৳158{" "}
                    <span className="text-line-through text-small text-light-gray">
                      ৳140
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 mb-2">
                <div className="card p-2">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/product-6.jpg"
                      alt=""
                      className="image-medium-plus"
                    />
                  </div>
                  <p className="my-2">
                    Black Half Silk Tangail Tat Saree Without Blouse Piece For
                    Women
                  </p>
                  <p>
                    <FaStar className="text-warning" />
                    4.3/5(729) - 4k Sold
                  </p>
                  <p className="text-primary text-large">
                    ৳158{" "}
                    <span className="text-line-through text-small text-light-gray">
                      ৳140
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 mb-2">
                <div className="card p-2">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/product-6.jpg"
                      alt=""
                      className="image-medium-plus"
                    />
                  </div>
                  <p className="my-2">
                    Black Half Silk Tangail Tat Saree Without Blouse Piece For
                    Women
                  </p>
                  <p>
                    <FaStar className="text-warning" />
                    4.3/5(729) - 4k Sold
                  </p>
                  <p className="text-primary text-large">
                    ৳158{" "}
                    <span className="text-line-through text-small text-light-gray">
                      ৳140
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
