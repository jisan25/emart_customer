import CustomSlider from "@/components/custom.slider";
import images from "@/data/image";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
const Navbar = ({ homePageData }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const toggleSubDropdown = (index) => {
    setOpenSubDropdown(openSubDropdown === index ? null : index);
  };
  return (
    <div className="container-fluid mb-5 mt-3 ">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0 text-white">Categories</h6>
            <FaAngleRight className="text-white" />
          </a>
          <nav
            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: "410px" }}
            >
              {homePageData.categories.map((item, index) => (
                <div className="nav-item dropdown" key={index}>
                  <a
                    href="#"
                    className={`nav-link ${
                      openDropdown === index
                        ? "font-weight-bold text-primary"
                        : ""
                    }`}
                    onClick={() =>
                      item.descendants.length > 0 && toggleDropdown(index)
                    }
                  >
                    {item.category_name}{" "}
                    {item.descendants.length > 0 ? (
                      openDropdown === index ? (
                        <FaAngleDown className="float-right mt-1" />
                      ) : (
                        <FaAngleRight className="float-right mt-1" />
                      )
                    ) : (
                      ""
                    )}
                  </a>
                  <div
                    className={`dropdown-menu position-absolute bg-secondary pl-3 border-0 rounded-0 w-100 m-0 ${
                      openDropdown === index ? "show" : ""
                    }`}
                  >
                    {item.descendants.length > 0 &&
                      item.descendants.map((subCategory, index) => (
                        <React.Fragment key={index}>
                          <a
                            href="#"
                            className={`dropdown-item ${
                              openSubDropdown === index
                                ? "font-weight-bold"
                                : ""
                            }`}
                            key={index}
                            onClick={() =>
                              subCategory.descendants.length > 0 &&
                              toggleSubDropdown(index)
                            }
                          >
                            {subCategory.category_name}
                            {subCategory.descendants.length > 0 ? (
                              openSubDropdown === index ? (
                                <FaAngleDown className="float-right mt-1" />
                              ) : (
                                <FaAngleRight className="float-right mt-1" />
                              )
                            ) : (
                              ""
                            )}
                          </a>
                          <div
                            className={`dropdown-menu position-absolute bg-primary-light pl-c-4 border-0 rounded-0 w-100 m-0 ${
                              openSubDropdown === index ? "show" : ""
                            }`}
                          >
                            {subCategory.descendants.map((childCategory) => (
                              <a
                                href=""
                                className="dropdown-item"
                                key={childCategory.id}
                              >
                                {childCategory.category_name}
                              </a>
                            ))}
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <CustomSlider>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            ></div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
