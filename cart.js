const express = require ("express")
const cart = express.Router()
const items = [
    {id: 1, product: "celery", price: 2.99, quantity: 2000}, 
    {id: 2, product: "toilet paper", price: 3.99, quantity: 3000},
    {id: 3, product: "apples", price: 4.99, quantity: 4000},
    {id: 4, product: "oranges", price: 5.99, quantity: 5000},
    {id: 5, product: "green onions", price: 6.99, quantity: 6000},
]
app.get("/cart-items", (req, res)=>{
    res.status(200)
    res.json(items)
})
app.get("/cart-items/:id", (req, res)=>{
   res.status(200)
   const item = items.find(i=>i.id==parseInt(req.params.id))
   if (!item)res.status(404).json("not found")
}
)
app.post("/cart-items", (req, res)=>{
    if(!req.body.product||req.body.id.length < 5) {
    res.status(201).json("product name needed")
return    }
items.push(item)
res.json(item)
})
app.put("/cart-items/:id ", (req, res)=>{
    const item = items.find(i=>i.id==parseInt(req.params.id))
    const newItem = req.body
    if(!item)res.status(404).json("not found")
    const index = items.indexOf(item)
    items.splice(index, 1, newItem)
    res.status(200)
    res.json(newItem)
})
app.delete("/cart-items/:id", (req, res)=>{
    const item = items.find(i=>i.id==parseInt(req.params.id))
    if(!item)res.status(404).json("not found")
    const index = items.indexOf(item)
    items.splice(index, 1)
    res.status(204)
    res.json(item)
})
module.exports = cart;