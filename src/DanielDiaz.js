const express= require('express');
const app =express();

app.use(express.json());

port=3020;

app.listen(port,()=> {
  console.log(`Server listening on the port::${port}`)
})
