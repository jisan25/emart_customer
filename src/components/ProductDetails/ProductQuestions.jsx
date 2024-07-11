import { useAtomValue } from "jotai";
import AskQuestion from "./ProductQuestions/AskQuestion";
import ProductQuestionItem from "./ProductQuestions/ProductQuestionItem";
import CardHeading from "./RatingAndReviews/CardHeading";
import { productAtom } from "@/store/frontend/frontendAtom";

const ProductQuestions = () => {
  const product = useAtomValue(productAtom);
  return (
    <div className="card mt-4">
      <CardHeading
        value={`Product Questions (${
          product.questions && product.questions.length
        })`}
      />
      <div className="card-body">
        <AskQuestion />
        <p className="mb-0 mt-4 text-dark roboto-regular text-medium">
          Answered Previous Questions by the{" "}
          {product.store && product.store.store_name} Store (
          {product.questions && product.questions.length})
        </p>
        <hr className="mb-3 mt-1" />
        {product.questions &&
          product.questions.map((item) => (
            <ProductQuestionItem question={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default ProductQuestions;
