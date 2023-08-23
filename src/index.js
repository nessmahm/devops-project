const express = require('express')
const app  = express()
app.get('/', (req, res) => { res.send('hello world') })
app.listen(3000, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port 3000 ")
else
    console.log("Error occurred, server can't start", error);
}
);