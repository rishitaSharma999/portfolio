const express = require("express")
const router = express.Router()
const { contactUsController } = require("../controllers/ContactUs")
console.log("this reahced the contact routes");
router.post("/contact", contactUsController)

module.exports = router