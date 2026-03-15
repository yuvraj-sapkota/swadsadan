// controllers/menu.controller.js
import * as menuService from "./menu.service.js";
import Resturent from "../restaurant/restaurant.model.js";

export const createMenu = async (req, res) => {
  try {

    const restaurant = await Resturent.findOne({
  owner: req.user._id
});
if(!restaurant) return res.status(404).json({ success: false, message: " resturent Not found" });
const ownerid = restaurant._id;
console.log("resid",ownerid);

    const created = await menuService.createMenu({ id: ownerid, body: req.body, file: req.file });
    return res.status(201).json({ success: true, message: "Menu created successfully",  data: created });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};

export const getMenus = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, category, search } = req.query;

    const result = await menuService.getMenus({ page, limit, category, search });
    return res.json({ success: true,message: "Menu get successfully",  ...result });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const getMenuById = async (req, res) => {
  try {
    const menu = await menuService.getMenuById(req.params.id);
    if (!menu) return res.status(404).json({ success: false, message: "Not found" });
    return res.json({ success: true, message: "getbyid successfully", data: menu });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const updateMenu = async (req, res) => {
  try {
    const updated = await menuService.updateMenu(req.params.id, { body: req.body, file: req.file });
    return res.json({ success: true, message: "Menu updated successfully", data: updated });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    const result = await menuService.deleteMenu(req.params.id);
    return res.json({ success: true, message: "Menu deleted successfully", data: result });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};