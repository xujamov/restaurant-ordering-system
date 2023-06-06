// import connection
import db from "../config/database.js";

import pgPromise from 'pg-promise';

// create an instance of pg-promise
const pgp = pgPromise();

export const getAllItems = async (userId, result) => {
    try {
        const items = await db.any('SELECT * FROM cart WHERE user_id = $1', [userId]);
        result(null, items);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

export const getAItem = async (userId, foodId, result) => {
    try {
        const item = await db.oneOrNone(
            'SELECT * FROM cart WHERE user_id = $1 AND food_id = $2',
            [userId, foodId]
        );
        result(null, item);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

export const insertToCart = async (data, result) => {
    try {
        const insertQuery = pgp.helpers.insert(data, null, "cart");
        const newItem = await db.oneOrNone(insertQuery, [], (row) => row);
        result(null, newItem);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

export const updateCartItemQty = async (data, result) => {
    try {
        const updateQuery =
            'UPDATE cart SET item_qty = $1 WHERE user_id = $2 AND food_id = $3';
        const results = await db.oneOrNone(updateQuery, [data.item_qty, data.user_id, data.food_id]);
        result(null, results);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error);
    }
};

export const deleteItemInCart = async (userId, foodId, result) => {
    try {
        const deleteQuery = 'DELETE FROM cart WHERE user_id = $1 AND food_id = $2';
        await db.none(deleteQuery, [userId, foodId]);
        result(null);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error);
    }
};

export const deleteAllItemsByUser = async (userId, result) => {
    try {
        const deleteQuery = 'DELETE FROM cart WHERE user_id = $1';
        await db.none(deleteQuery, [userId]);
        result(null);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error);
    }
};
