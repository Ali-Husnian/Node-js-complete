const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

/*
  console.log(app.get('env'));
  console.log(process.env);
*/
const port = process.env.PROT || 4500;
app.listen(port, () => {
  console.log(`App runing on port ${port} ...`);
});
