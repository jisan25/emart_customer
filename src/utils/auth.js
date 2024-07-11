import { axiosAuth } from "@/axiosService";

export const logout = async () => {
  try {
    const encryptedToken = localStorage.getItem("authToken");
    if (encryptedToken) {
      await axiosAuth.post("/logout", null, {
        withCredentials: true,
      });
      localStorage.removeItem("authToken");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export const fetchUserData = async () => {
  try {
    const response = await axiosAuth.get("/user", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
