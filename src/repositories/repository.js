import axios from "axios";

const baseDomain = "https://interview.intelligent-systems-solutions.com";

// Create custom headers for multipart/form-data and application/json
export const customHeadersMultipart = {
  "Content-Type":
    "multipart/form-data; boundary=<calculated when request is sent>",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: localStorage.getItem("token")
    ? "Bearer " + localStorage.getItem("token")
    : "",
};

export const customHeadersJSON = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: localStorage.getItem("token")
    ? "Bearer " + localStorage.getItem("token")
    : "",
};

export const baseUrl = `${baseDomain}`;

// Create two different Axios instances with the corresponding headers
export const axiosInstanceMultipart = axios.create({
  baseUrl,
  headers: customHeadersMultipart,
});

export const axiosInstanceJSON = axios.create({
  baseUrl,
  headers: customHeadersJSON,
});
