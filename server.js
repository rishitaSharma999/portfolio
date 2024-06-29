const express = require("express"); /* This line imports the Express.js framework, a popular Node.js web framework, and assigns it to a constant named express. The require function is used to load the express module. */
const router = express.Router(); /* This line creates a new instance of the Express Router, which is a built-in middleware function in Express.js. The Router function returns a new router instance, which is assigned to a constant named router. */
const cors = require("cors"); /*This line imports the CORS (Cross-Origin Resource Sharing) middleware, which is used to enable cross-origin requests. The require function is used to load the cors module. */
const nodemailer = require("nodemailer");

// server used to send  emails
const app = express(); /*This line creates a new instance of the Express.js app, which is assigned to a constant named app. */
app.use(cors()); /*This line enables CORS for the entire app by adding the CORS middleware to the app's middleware stack. */
app.use(express.json()); /*This line enables JSON parsing for the entire app by adding the express.json() middleware to the app's middleware stack. This allows the app to parse JSON requests. */
app.use("/", router); /*This line mounts the router instance to the root URL ("/") of the app. This means that any requests to the root URL will be handled by the router instance. */
app.listen(3000, () => console.log("Server Running")); /* This line starts the Express.js app and listens for incoming requests on port 3000. When the server is running, it logs "Server Running" to the console. */
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

/*This line creates a new Nodemailer transport instance, which is used to send emails. The transport instance is configured with a Gmail service and authentication credentials (username and password). */
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "rishita2004sharma@gmail.com",
    pass: "Rishita@123!"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("http://localhost:3000/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "rishita2004sharma@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});


/* JSON, which stands for JavaScript Object Notation, is a lightweight 
data interchange format that is easy for humans to read and write and easy
 for machines to parse and generate. It is widely used for transmitting
  data between a server and a web application, as well as for storing and
   exchanging structured data. */

//JSON is based on key-value pairs and data structures like arrays and objects.

/* Parsing, in the context of JSON, refers to the process of converting a JSON string into a native data structure in a programming language. For example, in JavaScript, you can parse a JSON string using the JSON.parse() method to convert it into a JavaScript object. Once parsed, you can access and manipulate the data as needed within your program. */