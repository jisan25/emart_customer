import React from "react";

const EditProfileModal = () => {
  return (
    <div
      className="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg " role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Edit Profile
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    value={"Shihabun Mobin Jisan"}
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
                    value={"jisan@gmail.com"}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    value={"01921-001122"}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="mobile">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    value={"Merul Badda, Imperial Irish Building, Dhaka"}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="mobile">Upazila</label>
                  <select className="form-control" name="" id="">
                    <option value="">Select</option>
                    <option value="">Cox'sBazar Sadar</option>
                    <option value="">Chakoria</option>
                    <option value="">Stakania</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="mobile">District</label>
                  <select className="form-control" name="" id="">
                    <option value="">Select</option>
                    <option value="">Cox'sBazar Sadar</option>
                    <option value="">Chakoria</option>
                    <option value="">Stakania</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="mobile">Division</label>
                  <select className="form-control" name="" id="">
                    <option value="">Select</option>
                    <option value="">Cox'sBazar Sadar</option>
                    <option value="">Chakoria</option>
                    <option value="">Stakania</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary text-white">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
