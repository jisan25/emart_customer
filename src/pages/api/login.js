import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/customer/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      res.status(error.response?.status || 500).json({
        message:
          error.response?.data?.message ||
          "An unexpected error occurred. Please try again.",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
