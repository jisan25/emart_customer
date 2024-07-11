import { FaCheck } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
const Feature = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center border mb-4"
            style={{ padding: "30px" }}
          >
            <FaCheck className="fa fa-check text-primary m-0 mr-3 text-lg" />
            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center border mb-4"
            style={{ padding: "30px" }}
          >
            <FaShippingFast className="fa fa-check text-primary m-0 mr-3 text-lg" />
            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center border mb-4"
            style={{ padding: "30px" }}
          >
            <FaExchangeAlt className="fa fa-check text-primary m-0 mr-3 text-lg" />
            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center border mb-4"
            style={{ padding: "30px" }}
          >
            <FaPhoneVolume className="fa fa-check text-primary m-0 mr-3 text-lg" />
            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
