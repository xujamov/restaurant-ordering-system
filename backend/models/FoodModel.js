// import connection
import db from "../config/database.js";

import pgPromise from 'pg-promise';

// create an instance of pg-promise
const pgp = pgPromise();

// get all categories
export const getCategories = async (result) => {
    try {
        const categories = await db.any("SELECT category_id AS id, category_name as name , category_src as imagePath\n" +
        // const categories = await db.any("SELECT category_id as id, category_name as name, category_src as imagePath\n" +
            "FROM category WHERE category_active = true");
        const newCategories = categories.map(c => {
            return {
                ...c,
                imagePath: c.imagepath
            }
        }
        )
        result(null, newCategories);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// get category Products
export const getCategoryProducts = async (id, result) => {
    try {
        const products = await db.any('SELECT food_id AS id, category_id as categoryId, food_name as name, ' +
        'food_src as imagePath, food_price as price FROM food WHERE category_id = $1', [id]);
        const newProducts = products.map(c => {
                return {
                    ...c,
                    imagePath: c.imagepath
                }
            }
        )
        result(null, newProducts);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// get all Products
export const getProducts = async (result) => {
    try {
        const foods = await db.any('SELECT food_id AS id, category_id as categoryId, food_name as name, ' +
            'food_src as imagePath, food_price as price FROM food');
        const newFoods = foods.map(f => {
            return {
                ...f,
                categoryId: f.categoryid,
                imagePath: f.imagepath,
                portions: ''
            }
        })
        result(null, newFoods);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// get all Foods
export const getFoods = async (result) => {
    try {
        const foods = await db.any('SELECT * FROM food');
        result(null, foods);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};


export const getFoodById = async (id, result) => {
    try {
        const food = await db.oneOrNone('SELECT * FROM food WHERE food_id = $1', [id]);
        result(null, food);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

export const insertCategory = async (data, result) => {
    try {
        const insertQuery = pgp.helpers.insert(data, null, 'category');
        const category = await db.oneOrNone(insertQuery, [], (row) => row);
        result(null, category);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

export const insertFood = async (data, result) => {
    try {
        const insertQuery = pgp.helpers.insert(data, null, 'food');
        const food = await db.oneOrNone(insertQuery, [], (row) => row);
        result(null, food);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

export const updateFoodById = async (data, id, result) => {
    try {
        const updateQuery = pgp.helpers.update(data, null, 'food') + ' WHERE food_id = $1';
        const food = await db.result(updateQuery, [id], (result) => result.rowCount);
        result(null, food);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

export const deleteFoodById = async (id, result) => {
    try {
        const food = await db.result('DELETE FROM food WHERE food_id = $1', [id], (result) => result.rowCount);
        result(null, food);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};
