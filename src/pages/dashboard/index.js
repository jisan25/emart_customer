import MyOrders from "@/components/Dashboard/MyOrders";
import MyQuestions from "@/components/Dashboard/MyQuestions";
import MyReviews from "@/components/Dashboard/MyReviews";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { logout } from "@/utils/auth";
import { useSetAtom } from "jotai";
import { userAtom } from "@/store/auth/authAtom";
import MyProfile from "@/components/Dashboard/MyProfile";
import { axiosAuth } from "@/axiosService";
import { backendUrl } from "@/helpers/CommonHelper";
import { showOrderDetailsAtom } from "@/store/frontend/frontendAtom";

const Dashboard = () => {
  const router = useRouter();
  const setUser = useSetAtom(userAtom);
  const [dashboardData, setDashboardData] = useState(null);

  const setShowOrderDetails = useSetAtom(showOrderDetailsAtom);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/");
      return;
    }
    const fetchDashboardData = async () => {
      try {
        const { data } = await axiosAuth.get(
          backendUrl + "/customer/dashboard"
        );
        setDashboardData(data.data.data);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      }
    };

    fetchDashboardData();
  }, [router]);

  return (
    <div className="container-fluid">
      <div className="row px-xl-5 pt-5">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Dashboard
            </a>
            <a
              className="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              My Profile
            </a>
            <a
              className="nav-link"
              id="v-pills-orders-tab"
              data-toggle="pill"
              href="#v-pills-orders"
              role="tab"
              aria-controls="v-pills-orders"
              aria-selected="false"
              onClick={() => setShowOrderDetails(false)}
            >
              My Orders
            </a>
            <a
              className="nav-link"
              id="v-pills-reviews-tab"
              data-toggle="pill"
              href="#v-pills-reviews"
              role="tab"
              aria-controls="v-pills-reviews"
              aria-selected="false"
            >
              My Reviews
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-questions"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              My Questions
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-wishlist"
              role="tab"
              aria-controls="v-pills-wishlist"
              aria-selected="false"
            >
              My Wishlist
            </a>
            <a
              className="nav-link"
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
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="card p-4">
                <p className="mb-0">Welcome To Emart</p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <MyProfile />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-orders"
              role="tabpanel"
              aria-labelledby="v-pills-orders-tab"
            >
              <MyOrders orders={dashboardData && dashboardData.orders} />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-reviews"
              role="tabpanel"
              aria-labelledby="v-pills-reviews-tab"
            >
              <MyReviews reviews={dashboardData && dashboardData.reviews} />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-questions"
              role="tabpanel"
              aria-labelledby="v-pills-reviews-tab"
            >
              <MyQuestions questions={dashboardData && dashboardData.questions}/>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-wishlist"
              role="tabpanel"
              aria-labelledby="v-pills-wishlist-tab"
            >
              My Wishlist
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
