// import functions from Food model

import {
    getCategories,
    getCategoryProducts,
    getProducts,
    getFoods,
    getFoodById,
    insertFood,
    updateFoodById,
    deleteFoodById,
    insertCategory,
} from "../models/FoodModel.js";
import crypto from "crypto";

let imgName = ""

//  add Category
export const createCategory=(req, res)=>{
    const data = {
        ...req.body,
        category_id: crypto.randomUUID(),
        category_src: imgName
    };
    insertCategory(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json({ message: 'Category added successfully.' });
        }
    });
};

//  add Category
export const writeImageName=(imageName)=>{
    imgName = imageName;
};

//  upload Image
export const getImage=(req,res)=>{
    const id = req.params.id;
    // Get the image data from the request body or FormData
    const file = `/home/doniyor/IdeaProjects/restaurant-ordering-system/backend/images/${id}`;
    res.download(file); // Set disposition and send it.
};

// get all getCategories
export const showCategories=(req,res)=>{
    getCategories((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get all getCategories
export const showCategoryProducts=(req,res)=>{
    const id = req.query.categoryId
    getCategoryProducts(id, (err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get all getProducts
export const showProducts=(req,res)=>{
    getProducts((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get all Foods
export const showFoods=(req,res)=>{
    getFoods((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// get single Food
export const showFoodById=(req,res)=>{
    getFoodById(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// create Food
export const createFood=(req,res)=>{
    const data = {
        ...req.body,
        food_id: crypto.randomUUID(),
        food_src: imgName
    };
    insertFood(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json({ message: 'Food added successfully.' });
        }
    });
};

// update Food
export const updateFood=(req,res)=>{
    const data = req.body;
    const id = req.params.id;
    updateFoodById(data,id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// delete Food
export const deleteFood=(req,res)=>{
    const id = req.params.id;
    deleteFoodById(id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};