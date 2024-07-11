import { useAtomValue } from "jotai";
import EditProfileModal from "./EditProfileModal";
import SectionTitle from "./SectionTitle";
import { userAtom } from "@/store/auth/authAtom";

const MyProfile = () => {
  const user = useAtomValue(userAtom);
  return (
    <>
      <EditProfileModal />
      <div className="card p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <SectionTitle value={"My Profile"} />
          <a
            className="text-primary roboto-regular"
            href="#"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            Edit Profile
          </a>
        </div>
        {user && (
          <div className="row my_profile">
            <div className="col-12 col-lg-4">
              <p>Full Name</p>
              <h5>{user.full_name}</h5>
            </div>
            <div className="col-12 col-lg-4">
              <p>Email</p>
              <h5>{user.email}</h5>
            </div>
            <div className="col-12 col-lg-4">
              <p>Mobile</p>
              <h5>{user.phone}</h5>
            </div>
            <div className="col-12 col-lg-4">
              <p>Address</p>
              <h5>{user.address}</h5>
            </div>
            {/* <div className="col-12 col-lg-4">
            <p>Upazila</p>
            <h5>Cox's Bazar Sadar</h5>
          </div>
          <div className="col-12 col-lg-4">
            <p>District</p>
            <h5>Cox's Bazar</h5>
          </div>
          <div className="col-12 col-lg-4">
            <p>Division</p>
            <h5>Chattogram</h5>
          </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default MyProfile;
