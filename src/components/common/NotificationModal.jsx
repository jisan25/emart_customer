import { useRef } from "react";
import ModalClose from "./ModalClose";
import ModalTitle from "./ModalTitle";
import { FaCheckCircle } from "react-icons/fa";

const NotificationModal = ({ props }) => {
  const { quantity, router } = props;

  const modalRef = useRef();

  const handleGotoCart = () => {
    modalRef.current.click(); 
    router.push("/cart");
  };

  return (
    <div
      className="modal fade"
      id="notificationModal"
      tabindex="-1"
      aria-labelledby="notificationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <ModalTitle value={"Cart"} />
            <ModalClose modalRef={modalRef} />
          </div>
          <div className="modal-body">
            <p className="text-success">
              <FaCheckCircle /> {quantity} new item(s) have been added to cart.
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={handleGotoCart}
              className="btn btn-primary text-white"
            >
              Go To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
