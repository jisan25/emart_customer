"use client";

import { useEffect } from "react";

function BootstrapClient() {
  useEffect(() => {
    alert("hi");
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}
export default BootstrapClient;
