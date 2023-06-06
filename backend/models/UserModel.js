// import connection
import db from "../config/database.js";

import pgPromise from 'pg-promise';

// create an instance of pg-promise
const pgp = pgPromise();


export const getAllUser = async (result) => {
    try {
        const users = await db.any('SELECT * FROM "user"');
        result(null, users);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

export const getUserByEmail = async (email, result) => {
    try {
        const user = await db.oneOrNone(
            'SELECT user_id, user_name, user_password FROM "user" WHERE user_email = $1',
            [email]
        );
        if (user) {
            result(null, user);
        } else {
            result('User not found', null);
        }
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

export const loginUser = async (data, result) => {
    try {
        const user = await db.oneOrNone(
            'SELECT user_id, user_name FROM "user" WHERE user_email = $1 AND user_password = $2',
            [data.email, data.password]
        );
        if (user) {
            result(null, user);
        } else {
            result('User not found', null);
        }
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};


export const insertUser = async (data, result) => {
    try {
        const insertQuery = pgp.helpers.insert(data, null, 'user');
        const user = await db.oneOrNone(insertQuery, [], (row) => row.user_id);
        result(null, user);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};


