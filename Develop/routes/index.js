const router = require('express').Router();
const apiRoutes = require('./api');


// up until the line below, to properly query any route or endpoint
// in your API, all you would have needed is http://localhost:3001/

router.use('/api', apiRoutes);
// now to properly query the endpoints, you need to write
// http://localhost:3001/api

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;