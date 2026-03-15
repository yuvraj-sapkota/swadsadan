import * as categoryService from "./category.service.js";
import Resturent from "../restaurant/restaurant.model.js";

export const create = async (req, res, next) => { 
  try {

        const restaurant = await Resturent.findOne({
      owner: req.user._id
    });
    if(!restaurant) return res.status(404).json({ success: false, message: " resturent Not found" });
    const ownerid = restaurant._id;
    console.log("resid",ownerid);

    const category = await categoryService.createCategory(
      ownerid,
      req.body,
      req.file
    );
 
    res.status(201).json({ 
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, search } = req.query;

    const result = await categoryService.getAllCategories({
      page,
      limit,
      search,
    });

     if (limit > 100) {
      const error = new Error("Limit cannot be greater than 100");
      error.statusCode = 400;
      return next(error);
    }

    res.json({
        success: true,
      message: "Category get successfully",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);

    res.json({
  success: true,
      message: "euta category aayo",   
         data: category,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const category = await categoryService.updateCategory(
      req.params.id,
      req.body,
      req.file
    );

    res.json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    await categoryService.deleteCategory(req.params.id);

    res.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};