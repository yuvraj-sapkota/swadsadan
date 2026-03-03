import express from "express";
import cors from "cors";
import categoryRoutes from "./modules/categories/category.routes.js";
import menuRoutes from "./modules/menu/menu.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.json({ message: "Api running" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/auth", authRoutes);


export default app;