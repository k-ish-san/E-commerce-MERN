const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const router = express.Router();

require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // Function to handle the stream upload to Cloudinary
        const streamUpload = (fileBuffer) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    (error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    }
                );
                //Use streamifier to convert the buffer to a stream
                streamifier.createReadStream(fileBuffer).pipe(stream);
            });
        }
        //Call the streamUpload function  
        const result = await streamUpload(req.file.buffer);
        //Respond with the URL of the uploaded image
        res.json({
        imageUrl: result.secure_url,
        });
        
    } catch (error) {
        console.error("Error uploading file", error);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
