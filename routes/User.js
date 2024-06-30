// Import the required modules
const express = require("express")
const router = express.Router()//Creates a new Express.js router instance.

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
} = require("../controllers/Auth") //n web development, a controller is a component that handles incoming requests and sends responses. Controllers are responsible for receiving input, processing it, and returning a response to the client. They act as an intermediary between the client and the application's business logic.
                                   // the business the logc is written in the controller 
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword")

const { auth } = require("../middlewares/auth")

// Routes for Login, Signup, and Authentication


// Route for user login,when the /login link gets called then it has to go to login function we imported
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)

                                

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)

// Export the router for use in the main application
module.exports = router