const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const sessionMiddleware = require('./modules/session-middleware');

// const passport = require('./strategies/user.strategy');

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app;