const express = require('express');
const bodyParser = require('body-parser');

const middleware = require('./middleware');
const routes = require('./routes');

// Starting point of the server
function main() {
  let app = express(); // Export app for other routes to use
  const port = process.env.PORT || 8000;

  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(bodyParser.json());

  // Routes & Handlers
  app.use('/login', routes.login);
  app.use('/todos', middleware.checkToken, routes.app);

  app.listen(port, () => console.log(`Server is listening on port: ${port}!!`));
}

main();
