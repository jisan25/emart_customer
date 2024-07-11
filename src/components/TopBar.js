import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const TopBar = () => {
  return (
    <div className="row bg-secondary py-2 px-xl-5">
      <div className="col-lg-6 d-none d-lg-block">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark" href="">
            Become A Seller
          </a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href="">
            Faqs
          </a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href="">
            Help & Support
          </a>
        </div>
      </div>
      <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark px-2" href="">
            <FaFacebookF />
          </a>
          <a className="text-dark px-2" href="">
            <FaTwitter />
          </a>
          <a className="text-dark px-2" href="">
            <FaYoutube />
          </a>
          <a className="text-dark px-2" href="">
            <FaInstagram />
          </a>
          <a className="text-dark pl-2" href="">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
