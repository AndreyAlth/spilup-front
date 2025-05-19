import { jwtDecode } from "jwt-decode";
import axios from "./axios";

/**
 * Checks if the provided JWT token is valid (not expired).
 *
 * @param {string} authToken - The JWT token to validate.
 * @returns {boolean} - Returns `true` if the token is valid, otherwise `false`.
 */
const isTokenValid = (authToken) => {
  if (typeof authToken !== "string") {
    console.error("Invalid token format.");
    return false;
  }

  try {
    const decoded = jwtDecode(authToken);
    const currentTime = Date.now() / 1000; // Current time in seconds since epoch

    return decoded.exp > currentTime;
  } catch (err) {
    console.error("Failed to decode token:", err);
    return false;
  }
};

/**
 * Sets or removes the authentication token in local storage and axios headers.
 *
 * @param {string} [token] - The JWT token to set. If `undefined` or `null`, the session will be cleared.
 */
const setSession = (token: string) => {
  if (typeof token === "string" && token.trim() !== "") {
    // Store token in local storage and set authorization header for axios
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.defaults.headers.common["access_token"] = token;
  } else {
    // Remove token from local storage and delete authorization header from axios
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
    delete axios.defaults.headers.common["access_token"];
  }
};

export { isTokenValid, setSession };
