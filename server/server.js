
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const igRouter = require('./routes/ig.router');
const postRouter = require('./routes/post.router');
const recipeRouter = require('./routes/recipe.router');
const restaurantRouter = require('./routes/restaurant.router');
const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/ig', igRouter);
app.use('/api/post', postRouter);
app.use('/api/recipe', recipeRouter);
app.use('/api/restaurant', restaurantRouter);


// S3 Bucket
app.use('/s3', UploaderS3Router({
  bucket: process.env.S3_BUCKET,
  region: 'us-east-2',
  headers: {'Access-Control-Allow-Origin': '*'},
  ACL: 'public-read',
}));

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
