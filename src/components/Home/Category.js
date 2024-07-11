import { backendImageUrl } from "@/helpers/CommonHelper";
import { homePageAtom } from "@/store/frontend/frontendAtom";
import { useAtomValue } from "jotai";

const Category = ({ homePageData }) => {
  // const homePageData = useAtomValue(homePageAtom);

  return (
    <div className="container-fluid category px-xl-5">
      <h3 className="text-dark mb-3">Categories</h3>
      <div className="d-flex gap-3 flex-wrap">
        {homePageData &&
          homePageData.categoryWithImages &&
          homePageData.categoryWithImages.map((item) => (
            <div className="card p-3" key={item.id}>
              <img
                className="category_image"
                src={backendImageUrl + "/" + item.image}
                alt=""
              />
              <p className="mb-0 text-center text-dark mt-2">
                {item.category_name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
