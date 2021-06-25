const path = require('path');
const fs = require('fs');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const ACCEPTED_FILE_EXTENSIONS = ['image/png', 'image/jpg', 'image/jpeg'];

const storage = multer.diskStorage({
    filename: (req, res, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
    destination: (req, file, cb) => {
        const directory = path.join(__dirname, '../public/uploads');
        cb(null, directory);
    }
});

const fileFilter = (req, file, cb) => {
    if (ACCEPTED_FILE_EXTENSIONS.includes(file.mimetype)) {
        cb(null, true);
    } else {
        const error = new Error ('Invalid file type');
        error.status = 400;
        cb(error);
    }
};

const upload = multer({
    storage,
    fileFilter,
});

const uploadToCloudinary = async (req, res, next) => {
    if (req.file) {
        const filePath = req.file.path;
        const imageFromCloudinary = await cloudinary.uploader.upload(filePath);

        await fs.unlinkSync(filePath);

        req.image._url = imageFromCloudinary.secure_url;

        return next();
    } else {
        return next();
    }
};

module.exports = { upload: upload , uploadToCloudinary };