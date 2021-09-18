import axios from "axios";

// Setting up pre Configured instance of axios client with default properties set

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID i7SmZRPXoa63eGXo-dSYkLfdTCttOldX0r7rrEDJKXs",
  },
});
