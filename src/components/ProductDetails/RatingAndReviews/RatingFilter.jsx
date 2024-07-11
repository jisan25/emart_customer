import { FaStar } from "react-icons/fa";

const RatingFilter = () => {
  return (
    <div className="d-flex gap-3">
      <button className="btn btn-secondary border-radius-5 d-flex gap-1 roboto-regular">
        <FaStar className="text-warning icon-lead" /> 5
      </button>
      <button className="btn btn-secondary border-radius-5 d-flex gap-1 roboto-regular">
        <FaStar className="text-warning icon-lead" /> 4
      </button>
      <button className="btn btn-secondary border-radius-5 d-flex gap-1 roboto-regular">
        <FaStar className="text-warning icon-lead" /> 3
      </button>
      <button className="btn btn-secondary border-radius-5 d-flex gap-1 roboto-regular">
        <FaStar className="text-warning icon-lead" /> 2
      </button>
      <button className="btn btn-secondary border-radius-5 d-flex gap-1 roboto-regular">
        <FaStar className="text-warning icon-lead" /> 1
      </button>
    </div>
  );
};

export default RatingFilter;
