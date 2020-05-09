// src/actions/index.js
import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3000/.netlify/functions/api",
  headers: {
    "Content-Type": "application/json"
  }
})
