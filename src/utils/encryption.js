import sjcl from "sjcl";

const secretKey = "your_secure_generated_key"; // Ensure this key is securely stored

export const encryptToken = (token) => {
  return sjcl.encrypt(secretKey, token);
};

export const decryptToken = (encryptedToken) => {
  return sjcl.decrypt(secretKey, encryptedToken);
};
