"use client";
import axios from "axios";
import { backendUrl } from "@/helpers/CommonHelper";

// -------- public api service --------------

export const fetchHomePageData = async () => {
  const { data } = await axios.get(`${backendUrl}`);
  return data.data.data;
};
