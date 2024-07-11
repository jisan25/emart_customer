import Ratings from "@/components/ProductDetails/Ratings";

const ShopPage = () => {
  return (
    <div className="container-fluid">
      <div className="px-xl-5">
        <div className="row">
          <diiv className="col-lg-6">
            <div className="card p-3 px-4">
              <div className="d-flex gap-3">
                <img
                  src="/red-t-shirts.jpg"
                  alt=""
                  className="image-small logo"
                />
                <div>
                  <p className="text-medium roboto-medium text-dark mb-0">
                    Utsob Fashion & Rumaisha fashion
                  </p>
                  <p>3679 Followers</p>
                  <p>80% Positive Seller Ratings</p>
                </div>
              </div>
            </div>
          </diiv>
        </div>

        <div className="shop_products">
          <h2 className="my-3">Shop Products</h2>
          <div className="row">
            <div className="col-lg-2">
              <div className="card p-3">
                <img src="/product-2.jpg" alt="" className="image-medium" />
                <p>Fashionable padded crop top for womens and girls.</p>
                <p>tk 150</p>
                <p>
                  <span className="text-line-through">tkk 100</span> -17%
                </p>
                <div className="d-flex gap-2">
                  <Ratings /> (3)
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="card p-3">
                <img src="/product-2.jpg" alt="" className="image-medium" />
                <p>Fashionable padded crop top for womens and girls.</p>
                <p>tk 150</p>
                <p>
                  <span className="text-line-through">tkk 100</span> -17%
                </p>
                <div className="d-flex gap-2">
                  <Ratings /> (3)
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="card p-3">
                <img src="/product-2.jpg" alt="" className="image-medium" />
                <p>Fashionable padded crop top for womens and girls.</p>
                <p>tk 150</p>
                <p>
                  <span className="text-line-through">tkk 100</span> -17%
                </p>
                <div className="d-flex gap-2">
                  <Ratings /> (3)
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="card p-3">
                <img src="/product-2.jpg" alt="" className="image-medium" />
                <p>Fashionable padded crop top for womens and girls.</p>
                <p>tk 150</p>
                <p>
                  <span className="text-line-through">tkk 100</span> -17%
                </p>
                <div className="d-flex gap-2">
                  <Ratings /> (3)
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="card p-3">
                <img src="/product-2.jpg" alt="" className="image-medium" />
                <p>Fashionable padded crop top for womens and girls.</p>
                <p>tk 150</p>
                <p>
                  <span className="text-line-through">tkk 100</span> -17%
                </p>
                <div className="d-flex gap-2">
                  <Ratings /> (3)
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="card p-3">
                <img src="/product-2.jpg" alt="" className="image-medium" />
                <p>Fashionable padded crop top for womens and girls.</p>
                <p>tk 150</p>
                <p>
                  <span className="text-line-through">tkk 100</span> -17%
                </p>
                <div className="d-flex gap-2">
                  <Ratings /> (3)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
