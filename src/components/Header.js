import { FaShoppingCart, FaSearch, FaUser, FaTimes } from "react-icons/fa";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "@/helpers/CommonHelper";
import LoginModal from "./Auth/LoginModal";
import Link from "next/link";
import { fetchUserData, logout } from "@/utils/auth";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { userAtom } from "@/store/auth/authAtom";
import { useRouter } from "next/router";
import SignUpModal from "./Auth/SignUpModal";
import {
  cartItemCountAtom,
  showOrderDetailsAtom,
} from "@/store/frontend/frontendAtom";

const Header = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const setShowOrderDetails = useSetAtom(showOrderDetailsAtom);

  const [user, setUser] = useAtom(userAtom);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  const cartItemCount = useAtomValue(cartItemCountAtom);

  // live search
  useEffect(() => {
    const fetchResults = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);

      try {
        const response = await axios.get(
          `${backendUrl}/search?search=${query}`
        );
        // console.log(response);
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounceFetch = setTimeout(() => {
      fetchResults();
    }, 500);

    return () => clearTimeout(debounceFetch);
  }, [query]);

  // useEffect to fetch user data on initial load
  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await fetchUserData();
        setUser(user);
      } catch (e) {
      } finally {
        setDashboardLoading(false);
      }
    };
    getUserData();
  }, []);

  // Callback function for handling login success
  const handleLoginSuccess = async () => {
    return await fetchUserData(); // Fetch updated user data after login
  };

  if (dashboardLoading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <header>
      <div className="container-fluid">
        <TopBar />
        {/* <!-- Button trigger modal --> */}
        <LoginModal onLoginSuccess={handleLoginSuccess} setUser={setUser} />
        <SignUpModal />

        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <Link href="/" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </Link>
          </div>
          {/* -------- live search --------- */}
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="input-group-append">
                  {query && (
                    <span
                      className="input-group-text bg-transparent text-primary cursor-pointer"
                      onClick={() => setQuery("")}
                    >
                      <FaTimes />
                    </span>
                  )}
                  <span className="input-group-text bg-transparent text-primary cursor-pointer">
                    <FaSearch />
                  </span>
                </div>
              </div>
            </form>
            {query && (
              <div className="search-results position-absolute bg-white w-100">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  results &&
                  results.map((result, index) => (
                    <div
                      key={index}
                      className="search-result-item p-2 border-bottom text-dark roboto-regular"
                    >
                      {result}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
          {/* ------- / live search ------- */}
          <div className="col-lg-3 col-6 text-right">
            <div className="d-flex align-items-center gap-3">
              {!user ? (
                <>
                  {" "}
                  <a
                    data-toggle="modal"
                    data-target="#loginModal"
                    href="#"
                    className="d-flex align-items-center gap-1"
                  >
                    <FaUser /> Login
                  </a>
                  <p className="mb-0 text-primary">|</p>
                  <a
                    data-toggle="modal"
                    data-target=".create-modal-lg"
                    href="#"
                    className="d-flex align-items-center gap-1"
                  >
                    Sign Up
                  </a>{" "}
                </>
              ) : (
                <ul className="mb-0 pl-0">
                  <li className="nav-item dropdown list-style-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {user.full_name}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link
                        onClick={() => setShowOrderDetails(false)}
                        className="dropdown-item"
                        href="/dashboard"
                      >
                        Dashboard
                      </Link>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={async () => {
                          await logout();
                          setUser(null);
                          router.push("/");
                        }}
                      >
                        Log Out
                      </a>
                    </div>
                  </li>
                </ul>
              )}

              <Link href="/cart" className="btn border">
                <FaShoppingCart className="text-primary" />
                <span className="badge">{cartItemCount}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
