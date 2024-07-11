import CustomerQuestion from "./CustomerQuestion";
import SellerAnswer from "./SellerAnswer";

const ProductQuestionItem = ({ question }) => {
  return (
    <div className="my-3">
      <CustomerQuestion question={question} />
      <SellerAnswer question={question} />
      <hr className="my-1" />
    </div>
  );
};

export default ProductQuestionItem;
