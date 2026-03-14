// controllers/menu.controller.js
import * as menuService from "./menu.service.js";

export const createMenuController = async (req, res) => {
  try {
    const created = await menuService.createMenu({ body: req.body, file: req.file });
    return res.status(201).json({ success: true, data: created });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};
 
export const getMenusController = async (req, res) => {
  try {
    const { page = 1, limit = 20, category, search } = req.query;
    const result = await menuService.getMenus({ page, limit, category, search });
    return res.json({ success: true, ...result });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const getMenuByIdController = async (req, res) => {
  try {
    const menu = await menuService.getMenuById(req.params.id);
    if (!menu) return res.status(404).json({ success: false, message: "Not found" });
    return res.json({ success: true, data: menu });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const updateMenuController = async (req, res) => {
  try {
    const updated = await menuService.updateMenu(req.params.id, { body: req.body, file: req.file });
    return res.json({ success: true, data: updated });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteMenuController = async (req, res) => {
  try {
    const result = await menuService.deleteMenu(req.params.id);
    return res.json({ success: true, data: result });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};