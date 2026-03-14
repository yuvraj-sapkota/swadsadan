import Category from "./category.model.js";
import cloudinary from "../../config/cloudinary.js";

export const createCategory = async (data, file) => {
  const category = await Category.create({
    ...data,
    image: file?.path,
    imagePublicId: file?.filename,
  });

  return category;
};

export const getAllCategories = async ({ page = 1, limit = 20, search }) => {
  const q = {};

  if (search) {
    q.name = { $regex: search, $options: "i" };
  }

  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    Category.find(q)
      .sort({ priority: 1 })
      .skip(skip)
      .limit(Number(limit)),

    Category.countDocuments(q),
  ]);

  return {
    items,
    total,
    page: Number(page),
    limit: Number(limit),
  };
};

export const getCategoryById = async (id) => {
  return await Category.findById(id);
};

export const updateCategory = async (id, data, file) => {
  const category = await Category.findById(id);
  if (!category) throw new Error("Category not found");

  if (file) {
    // delete old image
    if (category.imagePublicId) {
      await cloudinary.uploader.destroy(category.imagePublicId);
    }

    category.image = file.path;
    category.imagePublicId = file.filename;
  }

  category.name = data.name || category.name;
  category.description = data.description || category.description;
  category.status = data.status || category.status;
  category.priority = data.priority || category.priority;

  await category.save();
  return category;
};

export const deleteCategory = async (id) => {
  const category = await Category.findById(id);
  if (!category) throw new Error("Category not found");

  if (category.imagePublicId) {
    await cloudinary.uploader.destroy(category.imagePublicId);
  }

  await category.deleteOne();
};