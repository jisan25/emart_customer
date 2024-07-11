import { userAtom } from "@/store/auth/authAtom";
import { useAtomValue } from "jotai";

const DeliveryDetails = () => {
  const user = useAtomValue(userAtom);
  return (
    <div className="card p-3 mb-3">
      <div className="d-flex align-items-center justify-content-between">
        <p>Deliver to: {user.full_name}</p>
        <a href="#" className="ml-3">
          Change
        </a>
      </div>
      <p>
        {user.phone} | {user.address}{" "}
      </p>
      <p>Email: {user.email} </p>
    </div>
  );
};

export default DeliveryDetails;
