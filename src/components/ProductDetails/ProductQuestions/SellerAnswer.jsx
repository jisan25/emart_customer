import { productAtom } from "@/store/frontend/frontendAtom";
import { useAtomValue } from "jotai";

const SellerAnswer = ({ question }) => {
  const product = useAtomValue(productAtom);
  return (
    <div className="d-flex gap-4 ml-4">
      <span className="badge badge-secondary  h-2 px-2 pt-1 mt-2">A</span>
      <div>
        <p className="mbc-1 text-dark text-lead-plus roboto-regular">
          {question.answer}
        </p>
        <p className="d-flex align-items-center">
          <span className="text-light-gray text-lead roboto-regular ml-3">
            {product.store && product.store.store_name}
          </span>
          <span className="text-x-small">&nbsp;- 01 Apr 2024</span>
        </p>
      </div>
    </div>
  );
};

export default SellerAnswer;
