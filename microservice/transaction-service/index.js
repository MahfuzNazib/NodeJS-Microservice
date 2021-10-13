// DECLARATION
const express = require('express');
const app = express();

const { registerRoutes } = require('./routes');
const port = 3003;

// CONFIGURATION
app.use(express.json());


// MIDDLEWARES



// ROUTES
registerRoutes(app);



// SERVER
app.listen(port, () => {
  console.log(`Server started at port ${port}...`);
});