import { IoIosChatboxes } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import { useAtomValue } from "jotai";
import { productAtom } from "@/store/frontend/frontendAtom";
const VendorStore = () => {
  const product = useAtomValue(productAtom);
  return (
    <div className="card bg-off-white ml-2 px-3 py-3 box-shadow-small  border-radius-5 my-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="pb-2">
          <p className="mb-0 text-small ">Sold by</p>
          <h4 className="text-lead-plus roboto-regular text-dark">
            {product.store && product.store.store_name}
          </h4>
        </div>
        <a className="text-primary roboto-regular text-lead" href="#">
          <IoIosChatboxes /> CHAT
        </a>
      </div>
      <div className="row">
        <div className="col-md-6 border-light-gray border-left-none">
          <p className="text-small mb-0  pt-2 line-height-12">
            Positive Seller Ratings
          </p>
          <p className="roboto-regular text-dark text-lead pt-2">New Seller</p>
        </div>
        <div className="col-md-6 border-light-gray border-left-none border-right-none">
          <p className="text-small mb-0 pt-2">Ship on Time</p>
          <p className="roboto-regular mt-2 text-dark text-lead text-very-large">
            100%
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center p-2 pt-3">
        <a className="roboto-regular d-flex gap-1" href="#">
          <BsShop className="mt-1" /> Visit Store
        </a>
      </div>
    </div>
  );
};

export default VendorStore;
