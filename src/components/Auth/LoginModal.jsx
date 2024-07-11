import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { encryptToken } from "@/utils/encryption";

const LoginModal = ({ onLoginSuccess, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const modalRef = useRef("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/login", { email, password });

      if (response.status === 200) {
        const { token } = response.data;
        const encryptedToken = encryptToken(token);
        localStorage.setItem("authToken", encryptedToken);
        const user = await onLoginSuccess(); // Call onLoginSuccess callback to fetch user data
        console.log(user);
        setUser(user);
        router.push("/dashboard");
        modalRef.current.click();
      } else {
        // Handle login error
        setError(response.data.message);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError(err.message);
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <form onSubmit={handleLogin}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Customer Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={modalRef}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary text-white border-radius-5"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
