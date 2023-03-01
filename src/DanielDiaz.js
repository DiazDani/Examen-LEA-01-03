const express= require('express');
const app =express();

app.use(express.json());

port=3020;

app.listen(port,()=> {
  console.log(`Server listening on the port::${port}`)
})

app.get('/api/ex6',(req,res)=>{

  //Connexio a la base de dades:
  var serviceAccount = require("./daniel-diaz-add-ex1-firebase-adminsdk-roqau-4afe826208.json");
  var admin = require("firebase-admin");
  const {getFirestore} = require("firebase-admin/firestore");

  const app= !admin.apps.length ? admin.initializeApp  ({
    credential: admin.credential.cert(serviceAccount)
  }): admin.app
  const db = getFirestore(app);

  db.collection('mundial22Diaz').doc('final22Diaz').get().then(al2 =>{
    console.log(al2);
    res.json(al2)
  })

})

;
