// import express 
import express from "express";

// import functions from controller 
import {
    getImage,
    createCategory,
    showCategories,
    showProducts,
    showFoods,
    showFoodById,
    createFood,
    updateFood,
    deleteFood, showCategoryProducts,
} from "../controllers/food.js";

import {
    login,
    showAUser,
    createAccount
} from "../controllers/user.js";

import {
    addItems,
    getItem,
    updateItem,
    allItems,
    deleteItem,
    deleteItems
} from "../controllers/cart.js";

import {
    createBooking
} from "../controllers/booktable.js";

import {
    createBillDetails,getBillDetailsById
} from "../controllers/billdetails.js";

import {
    showNewestStatusId,
    createBillStatus, 
    getAllBillsByUser,
    getAllBillsByBill,
    getAllBills,
    updateBillStatus,
    updateBillPaid,
    cancelBillStatus
} from "../controllers/billstatus.js";
import {upload} from "../config/multer.js";

// init express router
const router = express.Router();

////////////////////////// FOOD ////////////////////////////////

// get image
router.get("/api/image/:id", getImage)

// add category
router.post("/api/addCategory", upload.single('image'), createCategory);

// get all categories
router.get("/api/getCategories", showCategories);

router.get("/api/getProducts", showProducts);

router.get("/api/getCategoryProducts", showCategoryProducts);

// get all Food
router.get("/api/foods", showFoods);

// get single Food 
router.get("/api/foods/:id", showFoodById);

// create Food
router.post("/api/foods", upload.single('image'), createFood);

// update Food 
router.put("/api/foods/:id", updateFood);

// delete Food
router.delete("/api/foods/:id", deleteFood);



////////////////////////// USER ////////////////////////////////
//login
router.put("/api/users/login/", login);

// get all user
router.get("/api/users/:email", showAUser);

// create account
router.post("/api/users/", createAccount);



////////////////////////// CART ////////////////////////////////
// add to cart
router.post("/api/cartItem", addItems);

// get a item in cart
router.get("/api/cartItem/:user_id/:food_id", getItem);

// get all items by user id
router.get("/api/cartItem/:id", allItems);

// update item qty
router.put("/api/cartItem/", updateItem);

// delete a item in cart
router.delete("/api/cartItem/:user_id/:food_id", deleteItem);

// delete all items in cart
router.delete("/api/cartItem/:id", deleteItems);



////////////////////////// Booking ////////////////////////////////
router.post("/api/booking", createBooking);



////////////////////////// Bill Details ////////////////////////////////
router.post("/api/billdetails", createBillDetails);
router.get("/api/billdetails/:id", getBillDetailsById);



////////////////////////// Bill Status ////////////////////////////////
router.get("/api/billstatus/new", showNewestStatusId);
router.post("/api/billstatus", createBillStatus);
router.get("/api/billstatus/user/:id", getAllBillsByUser);
router.get("/api/billstatus/bill/:id", getAllBillsByBill);
router.get("/api/billstatus", getAllBills);
router.put("/api/billstatus/:id", updateBillStatus);
router.put("/api/billstatus/paid/:id", updateBillPaid);
router.put("/api/billstatus/cancel/:id", cancelBillStatus);





// export default router
export default router;








