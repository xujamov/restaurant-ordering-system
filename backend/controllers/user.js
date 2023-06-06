// import functions from User model
const jwtSecret = 'restaurant'; // Replace with your own secret key
const jwtExpiresIn = '1m'; // Set the token expiration time

import {getAllUser, getUserByEmail, insertUser, loginUser} from "../models/UserModel.js";
import jwt from "jsonwebtoken";

// get all Users
export const allUsers=(req,res)=>{
    getAllUser((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// login as user
export const login = (req,res)=>{
    const data = req.body
    loginUser(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            results.token = jwt.sign({userId: results.user_id}, jwtSecret, {expiresIn: jwtExpiresIn});
            res.json(results);
        }
    });
};



// get single user
export const showAUser = (req,res)=>{
    getUserByEmail(req.params.email,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// create user
export const createAccount=(req,res)=>{
    const data = req.body;
    insertUser(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};




