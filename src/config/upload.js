import multer from 'multer';
import path from 'path';
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req, file, callback) => {
            callback(null, `${file.filename}-${Date.now()}${path.extname(file.originalname)}`)
        }
    })
}