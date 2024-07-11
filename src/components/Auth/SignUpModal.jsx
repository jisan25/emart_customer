import axios from "axios";
import ModalClose from "../common/ModalClose";
import ModalSubmitButton from "../common/ModalSubmitButton";
import ModalTitle from "../common/ModalTitle";
import { useEffect, useRef, useState } from "react";
import { backendUrl } from "@/helpers/CommonHelper";

const SignUpModal = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "01921-001122",
    address: "",
    upazila_id: "",
    district_id: "",
    division_id: "",
  });

  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  const modalRef = useRef();

  useEffect(() => {
    axios
      .get(backendUrl + "/divisions")
      .then((response) => {
        setDivisions(response.data.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the locations:", error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleDivisionChange = (e) => {
    const divisionId = e.target.value;
    setFormData({
      ...formData,
      division_id: divisionId,
    });
    axios
      .get(`${backendUrl}/locations?type=district&id=${divisionId}`)
      .then((response) => {
        setDistricts(response.data.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the districts:", error);
      });
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setFormData({
      ...formData,
      district_id: districtId,
    });
    axios
      .get(`${backendUrl}/locations?type=upazila&id=${districtId}`)
      .then((response) => {
        setUpazilas(response.data.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the upazilas:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post(backendUrl + "/customer/register", formData)
      .then((response) => {
        alert("Customer Signed Up Successfully");
        modalRef.current.click();
      })
      .catch((error) => {
        console.error("There was an error submitting the form:", error);
      });
  };

  return (
    <div
      className="modal fade create-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="createModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg " role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <ModalTitle value="Sign Up" />
              <ModalClose modalRef={modalRef} />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label htmlFor="division_id">Division</label>
                    <select
                      className="form-control"
                      id="division_id"
                      value={formData.division_id}
                      onChange={handleDivisionChange}
                      required
                    >
                      <option value="">Select</option>
                      {divisions &&
                        divisions.map((division) => (
                          <option key={division.id} value={division.id}>
                            {division.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label htmlFor="district_id">District</label>
                    <select
                      className="form-control"
                      id="district_id"
                      value={formData.district_id}
                      onChange={handleDistrictChange}
                      required
                    >
                      <option value="">Select</option>
                      {districts.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label htmlFor="upazila_id">Upazila</label>
                    <select
                      className="form-control"
                      id="upazila_id"
                      value={formData.upazila_id}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      {upazilas.map((upazila) => (
                        <option key={upazila.id} value={upazila.id}>
                          {upazila.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      type="password"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label htmlFor="upazila_id">Password Confirmation</label>
                    <input
                      className="form-control"
                      id="password_confirmation"
                      value={formData.password_confirmation}
                      onChange={handleChange}
                      type="password"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <ModalSubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
