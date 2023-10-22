import axios from "axios";

const baseDomain = "https://interview.intelligent-systems-solutions.com";

export const customHeaders = {
  "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: localStorage.getItem("token")
    ? "Bearer " + localStorage.getItem("token")
    : "",
};
export const baseUrl = `${baseDomain}`;
export default axios.create({
  baseUrl,
  headers: customHeaders,
});
