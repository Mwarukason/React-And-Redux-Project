import express from 'express';
import path from 'path';

let app = express();

//erro function
app.get('/*', (req, res) => {
  //send file using path package showing path directory and importing path
  res.sendFile(path.join(__dirname, './index.html'));
});

//listen to port 3000 and tel use we are running on localhost
app.listen(3000, () => console.log('running on localhost:3000'));
