import { axiosAuth } from "@/axiosService";

export const fetchUser = async () => {
  try {
    const { data } = await axiosAuth.get("/user");
    return data;
  } catch (error) {
    console.log(error);
    // return error.response.data;
  }
};

export const logoutUser = async () => {
  const { data } = await axiosAuth.post("/logout");
  return data;
};
