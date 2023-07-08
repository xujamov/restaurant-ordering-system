import multer from "multer";
import * as crypto from "crypto";
import {writeImageName} from "../controllers/food.js";

// Create an instance of the multer storage and specify destination and filename
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/home/doniyor/IdeaProjects/restaurant-ordering-system/backend/images');
    },
    filename: function (req, file, cb) {
        const uuid = crypto.randomUUID();
        // Get the original filename
        const originalName = file.originalname;
        // Get the file format
        const fileFormat = originalName.substring(originalName.lastIndexOf('.') + 1);
        // Append the file format to the generated UUID
        const fileNameWithFormat = uuid + '.' + fileFormat;
        writeImageName(fileNameWithFormat)
        cb(null, fileNameWithFormat);
    }
});

// Create the multer upload instance and specify the storage
export const upload = multer({ storage: storage});