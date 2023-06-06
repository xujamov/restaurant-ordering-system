// import connection
import db from "../config/database.js";

import pgPromise from 'pg-promise';

// create an instance of pg-promise
const pgp = pgPromise();

// insert Bill Details
export const insertBillDetails = async (data, result) => {
    try {
        const insertQuery = pgp.helpers.insert(data, null, 'billdetails');
        const newBillDetails = await db.oneOrNone(insertQuery, [], (row) => row);
        result(null, newBillDetails);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// get Bill Details
export const getBillDetails = async (id, result) => {
    try {
        const query = "SELECT * FROM billdetails WHERE bill_id = $1";
        const billDetails = await db.any(query, id);
        result(null, billDetails);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};