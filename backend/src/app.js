import express from "express";
import cors from "cors";
import categoryRoutes from "./modules/categories/category.routes.js";
import menuRoutes from "./modules/menu/menu.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
import restaurantRoutes from "./modules/restaurant/restaurant.routes.js";



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.json({ message: "Api running" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import { errorHandler } from "./middlewares/errorHandler.js";


// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);


app.use(errorHandler);  
export default app;