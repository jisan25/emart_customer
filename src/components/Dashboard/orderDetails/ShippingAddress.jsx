import { userAtom } from "@/store/auth/authAtom";
import { useAtomValue } from "jotai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const ShippingAddress = () => {
  const user = useAtomValue(userAtom);
  return (
    <div className="col-lg-6">
      <div className="card p-3 my-2 px-3 py-3">
        <h6 className="text-medium-plus text-dark">Shipping Address</h6>
        <p className="text-dark-600 roboto-regular text-lead mb-0">
          {user.full_name}
        </p>
        <p className="text-small mb-0 mt-1 d-flex gap-1 align-items-start">
          <FaMapMarkerAlt className="mr-1 mt-1" />
          {user.address}
        </p>
        <p className="text-x-small text-dark d-flex align-items-center gap-1 mt-1">
          <FaPhoneAlt className="text-x-small" />{" "}
          <span className="mt-1">{user.phone}</span>
        </p>
      </div>
    </div>
  );
};

export default ShippingAddress;
