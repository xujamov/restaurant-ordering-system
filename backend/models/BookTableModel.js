// import connection
import db from "../config/database.js";

import pgPromise from 'pg-promise';

// create an instance of pg-promise
const pgp = pgPromise();

// insert Booking
export const insertBooking = async (data, result) => {
    try {
        const insertQuery = pgp.helpers.insert(data, null, 'booktable');
        const newBooking = await db.oneOrNone(insertQuery, [], (row) => row);
        result(null, newBooking);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};
