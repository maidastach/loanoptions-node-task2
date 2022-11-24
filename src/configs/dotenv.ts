import dotenv from "dotenv";

dotenv.config();

// HARDCODING SOME VALUES BECAUSE .env WILL NOT BE IN THE REPO
export default {
  PORT: process.env.PORT || 5000,
  API_ENDPOINT:
    process.env.API_ENDPOINT || "https://api.publicapis.org/entries",
};
