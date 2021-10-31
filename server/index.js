const express = require("express");
const app = express();
const port = 5000;
const { MongoClient } = require('mongodb');
const url = `mongodb+srv://mahmud:mahmud@cluster0.bxr3c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const client = new MongoClient(url);

// Database Name
const dbName = 'bdRental';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('rooms');

  // the following code examples can be pasted here...

}
main()
  .then(console.log)
  .catch(console.error)
  
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
