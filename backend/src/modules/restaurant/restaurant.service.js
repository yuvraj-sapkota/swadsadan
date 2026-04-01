import Restaurant from "./restaurant.model.js";
import User from "../auth/auth.model.js";

export const createRestaurant = async (userId, data , file) => {
  

  const existing = await Restaurant.findOne({ owner: userId });

  if (existing) {
    throw new Error("Restaurant already exists");
  }

  const restaurant = await Restaurant.create({
    owner: userId,
    ...data,
    image: file?.path,              
    imagePublicId: file?.filename,  
  });

 

  await User.findByIdAndUpdate(userId, {
    role: "resturentOwner",
    hasRestaurant: restaurant._id

  });

  return restaurant;
};


 export const getAllRestaurants = async () => {
  return await Restaurant.find().populate("owner", "name email");
};


export const getRestaurantById = async (id) => {
  return await Restaurant.findById(id).populate("owner", "name email");
};


export const updateRestaurant = async (id, userId, data, file) => {

  const restaurant = await Restaurant.findById(id);

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  if (restaurant.owner.toString() !== userId.toString()) {
    throw new Error("Not authorized");
  }

  if (file) {
    if (restaurant.imagePublicId) {
      await cloudinary.uploader.destroy(restaurant.imagePublicId);
    }

    restaurant.image = file.path;
    restaurant.imagePublicId = file.filename;
  }

  restaurant.name = data.name || restaurant.name;
  restaurant.address = data.address || restaurant.address;
  restaurant.contact = data.contact || restaurant.contact;
  restaurant.description = data.description || restaurant.description;

  await restaurant.save();

  return restaurant;
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