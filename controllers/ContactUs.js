const mailSender = require("../utils/mailSender")

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo } = req.body
  console.log(req.body)
  try {
    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      `firstName - ${firstname} 
      email = ${email}
      message = ${message}

      your mail has been registered , all the queries would be solved soon 
      thank you for choosing S.S tutorials`
    )
    const mailSendToOwner = await mailSender(
      "rishita2004sharma@gmail.com","issue in Rishita's portfolio",
      `user is contacting , the user details and the issue faced are as follows:
      ${firstname} ${lastname}
       - ${phoneNo}
      the message is : ${message}`
    ) 
    console.log("Email Res ", emailRes)
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}