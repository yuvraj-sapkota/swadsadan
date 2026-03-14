import {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant
} from "./restaurant.service.js";


export const create = async (req, res, next) => {
  try {

    const restaurant = await createRestaurant(req.user._id, req.body);

    res.status(201).json({
      success: true,
      message: "Restaurant created successfully",
      restaurant
    });

  } catch (err) {
    next(err);
  }
};


export const getAll = async (req, res, next) => {
  try {

    const restaurants = await getAllRestaurants();

    res.json({
      success: true,
      message: "Restaurants get all successfully",
      restaurants
    });

  } catch (err) {
    next(err);
  }
};


export const getOne = async (req, res, next) => {
  try {

    const restaurant = await getRestaurantById(req.params.id);

    res.json({
      success: true,
      message: "Restaurant get  by id ",
      restaurant
    });

  } catch (err) {
    next(err);
  }
};


export const update = async (req, res, next) => {
  try {

    const restaurant = await updateRestaurant(
      req.params.id,
      req.user._id,
      req.body
    );

    res.json({
      success: true,
      message: "Restaurant updated successfully",
      restaurant
    });

  } catch (err) {
    next(err);
  }
};


export const remove = async (req, res, next) => {
  try {

    const result = await deleteRestaurant(
      req.params.id,
      req.user._id
    );

    res.json({
      success: true,
      message: "Restaurant deleted successfully",
      message: result.message
    });

  } catch (err) {
    next(err);
  }
};