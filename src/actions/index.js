// src/actions/index.js
import axios from "axios";

const netlifyAppBaseURL = `https://zen-brahmagupta-169e98.netlify.app`;
const localBaseURL = `http://localhost:3000`;
const baseURL =
  process.env.NODE_ENV === "dev" ? localBaseURL : netlifyAppBaseURL;

export const client = axios.create({
  baseURL: `${baseURL}/.netlify/functions/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
