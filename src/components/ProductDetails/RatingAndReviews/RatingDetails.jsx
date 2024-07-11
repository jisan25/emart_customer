import { FaStar } from "react-icons/fa";

const RatingDetails = () => {
  return (
    <div className="col-lg-9 pl-5">
      <div className="d-flex align-items-center gap-3">
        <div className="d-flex">
          <FaStar className="text-warning icon-small mr-1" />
          <FaStar className="text-warning icon-small mr-1" />
          <FaStar className="text-warning icon-small mr-1" />
          <FaStar className="text-warning icon-small mr-1" />
          <FaStar className="text-warning icon-small mr-1" />
        </div>
        <span>Progress</span>
        <p className="mb-0 text-dark roboto-medium text-lead">2271</p>
      </div>
    </div>
  );
};

export default RatingDetails;
