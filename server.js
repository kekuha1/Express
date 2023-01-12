const express = require ("express")
const app = express()
app.use(express.json())
const port = 3000
app.listen(port, ()=>console.log(`listening on port ${port}`))
const cart = require('./cart-items');
app.use("/car.items/", cart);