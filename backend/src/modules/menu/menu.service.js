// services/menu.service.js
import Menu from "./menu.model.js";
import cloudinary from "../../config/cloudinary.js";

export const createMenu = async ({ body, file }) => {
  // body.variantGroups expected as array or JSON string
  let variantGroups = [];
  if (body.variantGroups) {
    variantGroups = typeof body.variantGroups === "string"
      ? JSON.parse(body.variantGroups)
      : body.variantGroups;
  }

  // sanitize/convert prices
  const normalize = (groups) =>
    groups.map((g) => ({
      groupName: g.groupName,
      required: !!g.required,
      multiSelect: !!g.multiSelect,
      options: (g.options || []).map((opt) => ({
        name: opt.name,
        price: Number(opt.price) || 0,
      })),
    }));

  const menuData = {
    name: body.name,
    description: body.description || "",
    category: body.category,
    basePrice: Number(body.basePrice) || 0,
    status: body.status || "available",
    variantGroups: normalize(variantGroups),
  };

  if (file) {
    // file.path or file?.path depends on storage; multer-storage-cloudinary returns file.path (url) and file.filename or file?.filename?
    // multer-storage-cloudinary returns file.path in newer versions and file.filename as public_id (varies) - check your version
    menuData.imageUrl = file.path || file.location || "";
    menuData.imagePublicId = file.filename || file.public_id || "";
  }

  const menu = new Menu(menuData);
  return menu.save();
};

export const getMenus = async ({ page = 1, limit = 20, category, search }) => {
  const q = {};
  if (category) q.category = category;
  if (search) q.name = { $regex: search, $options: "i" };

  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    Menu.find(q).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
    Menu.countDocuments(q),
  ]);
  return { items, total, page: Number(page), limit: Number(limit) };
};

export const getMenuById = async (id) => {
  return Menu.findById(id);
};

export const updateMenu = async (id, { body, file }) => {
  const menu = await Menu.findById(id);
  if (!menu) throw new Error("Menu not found");

  if (body.name) menu.name = body.name;
  if (body.description !== undefined) menu.description = body.description;
  if (body.category) menu.category = body.category;
  if (body.basePrice !== undefined) menu.basePrice = Number(body.basePrice) || 0;
  if (body.status) menu.status = body.status;

  if (body.variantGroups) {
    const variantGroups = typeof body.variantGroups === "string" ? JSON.parse(body.variantGroups) : body.variantGroups;
    menu.variantGroups = (variantGroups || []).map((g) => ({
      groupName: g.groupName,
      required: !!g.required,
      multiSelect: !!g.multiSelect,
      options: (g.options || []).map((opt) => ({
        name: opt.name,
        price: Number(opt.price) || 0,
      })),
    }));
  }

  if (file) {
    // delete old image from cloudinary if exists
    if (menu.imagePublicId) {
      try {
        await cloudinary.uploader.destroy(menu.imagePublicId);
      } catch (err) {
        console.warn("Cloudinary delete failed:", err.message);
      }
    }
    menu.imageUrl = file.path || file.location || "";
    menu.imagePublicId = file.filename || file.public_id || "";
  }

  return menu.save();
};

export const deleteMenu = async (id) => {
  const menu = await Menu.findById(id);
  if (!menu) throw new Error("Menu not found");

  // delete image if exists
  if (menu.imagePublicId) {
    try {
      await cloudinary.uploader.destroy(menu.imagePublicId);
    } catch (err) {
      console.warn("Cloudinary delete failed:", err.message);
    }
  }

  await menu.remove();
  return { deletedId: id };
};