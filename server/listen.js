const app = require('./index.js');

// Set port to listen to
const port = 3001;
app.listen(port, () => console.log(`Listening to port ${port}...`));
