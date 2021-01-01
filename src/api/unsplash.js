import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID gUF2YIf7-r2_sBO1jjRpvd1KE2UO7t9gUCSP5l5PoGc",
  },
});
