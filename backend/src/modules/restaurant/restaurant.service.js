import Restaurant from "./restaurant.model.js";
import User from "../auth/auth.model.js";

export const createRestaurant = async (userId, data) => {
  

  const existing = await Restaurant.findOne({ owner: userId });

  if (existing) {
    throw new Error("Restaurant already exists");
  }

  const restaurant = await Restaurant.create({
    owner: userId,
    ...data
  });

  await User.findByIdAndUpdate(userId, {
    role: "resturentOwner"
  });

  return restaurant;
};


export const getAllRestaurants = async () => {
  return await Restaurant.find().populate("owner", "name email");
};


export const getRestaurantById = async (id) => {
  return await Restaurant.findById(id).populate("owner", "name email");
};


export const updateRestaurant = async (id, userId, data) => {

  const restaurant = await Restaurant.findById(id);

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  if (restaurant.owner.toString() !== userId.toString()) {
    throw new Error("Not authorized");
  }

  return await Restaurant.findByIdAndUpdate(id, data, { new: true });
};


export const deleteRestaurant = async (id, userId) => {

  const restaurant = await Restaurant.findById(id);

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  if (restaurant.owner.toString() !== userId.toString()) {
    throw new Error("Not authorized");
  }

  await restaurant.deleteOne();

  return { message: "Restaurant deleted successfully" };
};