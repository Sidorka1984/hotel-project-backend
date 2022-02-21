const mongoose = require("mongoose");
require("dotenv").config();

const app = require('../app');
const { DB_HOST, PORT = 3030 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful')
    app.listen(PORT)
  })
  .catch((error) => {
    console.log(error.message)
    process.exit(1)
  })

// mongoose.connect(DB_HOST, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
// })
  // .then(() => app.listen(PORT))
  // .catch(error => {
    // console.log(error.message);
    // process.exit(1);
  // });
