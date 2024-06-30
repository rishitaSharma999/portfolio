const express= require("express");
const app = express();

const userRoutes = require("../dummy/routes/User");//This line imports a module that defines routes for user-related functionality. 


const database = require("../dummy/config/database");//This line imports a module that configures the database connection.
const cookieParser = require("cookie-parser");//This line imports the cookie-parser middleware, which is used to parse cookies sent in HTTP requests.

const dotenv = require("dotenv");//Env files, short for environment files, are configuration files that store sensitive information, such as database credentials, API keys, and other settings, as key-value pairs. 

dotenv.config();
const PORT = process.env.PORT || 4000;


database.dbConnect();

app.use(express.json());{/*In Express.js, when a client sends a request to the server, the request body is sent in a format that needs to be parsed and understood by the server. By default, Express.js doesn't know how to parse the request body, so we need to tell it how to do so.app.use(express.json()); is a middleware function that enables JSON parsing for incoming requests. */}
app.use(cookieParser());//express.json() middleware to parse the JSON data into a JavaScript object.The parsed JSON data is then stored in the req.body property, which is an object that contains the parsed data.


app.use("/api/v1/auth",userRoutes);//This line mounts the userRoutes module at the /api/v1/auth path. This means that any requests to this path will be handled by the routes defined in the userRoutes module.


app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"your server is up and running"
    });
});


app.listen(PORT,()=>{
    console.log("App is running at port 4000")
})

{/* Routing is the process of determining how an application responds to a client request, typically a web browser or mobile app, based on the requested URL and HTTP method. It's like a traffic cop that directs incoming requests to the appropriate handler or controller, which then generates a response. */}
//GET
//Purpose: Retrieve a resource,Response: The requested resource is returned in the response body
//POST
//Purpose: Create a new resource,Response: The newly created resource is returned in the response body
//PUT
//Purpose: Update an existing resource,Response: The updated resource is returned in the response body
//When a client sends a request to a server, the routing mechanism kicks in. The server analyzes the requested URL and HTTP method to determine which action to take.

//JSON (JavaScript Object Notation) is a lightweight, text-based data format that is easy for humans to read and write, and easy for machines to parse and generate.
//In Express.js, middleware functions are functions that have access to the entire request object (req), the entire response object (res), and the next middleware function in the application’s request-response cycle. 

//Cookies 
//are small text files stored on a user's device by a web browser. They contain data, such as user preferences, login information, or other settings, that can be accessed by a website or web application. Cookies are sent by a website to a user's browser, which then stores them and sends them back to the website on subsequent requests.
//Cookies are used because they provide a way for websites to store and retrieve data on a user's device, allowing for a more personalized and efficient user experience.
//In HTTP, headers are key-value pairs that are sent with the request or response to provide additional information about the request or response. 
//The parsed cookies are then stored in the req.cookies property, which is an object that contains the cookie data.

//In web development, a route is a way to map an incoming HTTP request to a specific handler function or controller action. 
//In other words, routes determine what happens when a user visits a specific URL or sends a request to a specific endpoint.
//There are several types of routes, including:
//GET routes: Handle GET requests, typically used for retrieving data.
//POST routes: Handle POST requests, typically used for creating new data.
//PUT routes: Handle PUT requests, typically used for updating existing data.


//TOKENS:
//a token is a string of characters that represents a set of claims or permissions. Tokens are used to authenticate and authorize users, allowing them to access protected resources or perform specific actions.
//A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The token is digitally signed and contains a payload that can be verified and trusted.
//When a server receives a JWT token, it can verify the signature by recalculating it using the same secret key and comparing it to the provided signature.








