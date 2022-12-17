const dotenv = require("dotenv");
dotenv.config({
  path: ".env"
});

const dbType = process.env.DB_TYPE
const uriString = process.env.MONGO_URI_STRING || "mongodb://localhost:27017/colegio"

module.exports = {
  dbType,
  uriString
}