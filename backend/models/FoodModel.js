// import connection
import db from "../config/database.js";

import pgPromise from 'pg-promise';

// create an instance of pg-promise
const pgp = pgPromise();

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

export const insertFood = async (data, result) => {
    try {
        const insertQuery = pgp.helpers.insert(data, null, 'food');
        const food = await db.oneOrNone(insertQuery, [], (row) => row.food_id);
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
