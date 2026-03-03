import app from "./app.js";
import dotenv from "dotenv";
import db from "./config/db.js";
dotenv.config();

const PORT = process.env.PORT || 6000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
db();

  