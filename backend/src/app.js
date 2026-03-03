import express from "express";
import cors from "cors";
import categoryRoutes from "./modules/categories/category.routes.js";
import menuRoutes from "./modules/menu/menu.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Api running" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/menus", menuRoutes);


export default app;