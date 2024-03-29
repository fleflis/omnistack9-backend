const multer = require('multer')
const path = require('path')
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext)
            callback(null, `${basename}-${Date.now()}${ext}`)
        }
    })
}