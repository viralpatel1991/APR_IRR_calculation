// Bring in our dependencies
const app = require('express')();
const cors = require('cors');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

app.use(cors());

//  Connect all our routes to our application
app.use('/', routes);

// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
