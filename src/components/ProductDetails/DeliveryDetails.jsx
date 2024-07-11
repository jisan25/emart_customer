import { CiCircleInfo } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
const DeliveryDetails = () => {
  return (
    <div className="card bg-off-white ml-2 px-3 pyc-5 box-shadow-small border-radius-5">
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0 text-dark roboto-regular">Delivery</p>
        <CiCircleInfo className="text-dark cursor-pointer" />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0 text-dark d-flex gap-1 roboto-regular line-height-12">
          <FiMapPin className="icon-large" /> Chattogram, Cox's Bazar Sadar,
          Cox's Bazar Bus Terminal
        </p>
        <a href="#" className="roboto-regular">
          Change
        </a>
      </div>
      <hr />
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex gap-1">
            <CiDeliveryTruck className="text-dark icon-lead" />
            <div>
              <h2 className="text-lead-plus roboto-regular text-dark mb-1">
                Standard Delivery
              </h2>
              <p className="mb-0 text-dark roboto-regular text-small">
                12 Jul - 18 Jul{" "}
                <span className="text-light-gray text-x-small">
                  ( 6-12 days )
                </span>
              </p>
            </div>
          </div>
          <p>৳ 100</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
