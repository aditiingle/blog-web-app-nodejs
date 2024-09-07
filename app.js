// Importing necessary modules and dependencies for the Express application
import express from 'express'; 
import path from 'path';
import { fileToPath } from 'url';
import postRoutes from './routes/posts.js'; // Importing routes related to posts

// Importing index routes and post-related routes
import indexRoutes from './routes/index.js';
import postRoutes from './routes/posts.js';

// Getting current module's file path and directory path
const __filename = fileURLToPath(import.meta.url); // Full path to the current file
const __dirname = path.dirname(__filename); // Directory of the current file


const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static("public"));

// Setting EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', "views");

// Using the post routes defined in routes/posts.js
app.use('/posts', postRoutes);

// Default route to render home page
app.get("/", (req, res) => {
    res.render("home");
  });

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});



