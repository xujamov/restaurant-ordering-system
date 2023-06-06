// import connection
import db from "../config/database.js";

import pgPromise from 'pg-promise';

// create an instance of pg-promise
const pgp = pgPromise();

// get newest Bill Status
export const getNewestId = async (result) => {
    try {
        const query = "SELECT bill_id FROM billstatus ORDER BY bill_id DESC LIMIT 1";
        const newestBill = await db.oneOrNone(query);
        result(null, newestBill);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// insert Bill Status
export const insertBillStatus = async (data, result) => {
    try {
        const insertQuery = pgp.helpers.insert(data, null, 'billstatus');
        const newBillStatus = await db.oneOrNone(insertQuery, [], (row) => row);
        result(null, newBillStatus);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// get all Bills Status by user
export const getBillsByUser = async (id, result) => {
    try {
        const query = "SELECT * FROM billstatus WHERE user_id = $1";
        const bills = await db.any(query, id);
        result(null, bills);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// get all Bills Status by bill
export const getBillsByBill = async (id, result) => {
    try {
        const query = "SELECT * FROM billstatus WHERE bill_id = $1";
        const bills = await db.any(query, id);
        result(null, bills);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// get all Bills Status
export const getAll = async (result) => {
    try {
        const query = "SELECT * FROM billstatus";
        const bills = await db.any(query);
        result(null, bills);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// update Bill Status
export const updateStatus = async (id, result) => {
    try {
        const query = "UPDATE billstatus SET bill_status = bill_status + 1 WHERE bill_id = $1";
        const updatedBill = await db.any(query, id);
        result(null, updatedBill);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// update Bill Paid
export const updatePaid = async (id, result) => {
    try {
        const query = "UPDATE billstatus SET bill_paid = true WHERE bill_id = $1";
        const updatedBill = await db.any(query, id);
        result(null, updatedBill);
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};

// cancel Bill Status
export const cancelStatus = async (id, result) => {
    try {
        const updateStatusQuery = "UPDATE billstatus SET bill_status = 0 WHERE bill_id = $1";
        const updatePaidQuery = "UPDATE billstatus SET bill_paid = false WHERE bill_id = $1";

        await db.any(updateStatusQuery, id);
        await db.any(updatePaidQuery, id);
        result(null, "Bill status canceled successfully.");
    } catch (error) {
        console.error('Error executing query:', error);
        result(error, null);
    }
};
