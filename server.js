const express = require('express')
const app = express()
app.get("/", (request, response) => {
    response.send("this is default end point")
})
app.get("/student", (request, response) => {
    response.json([
        { name: "Scott", city: "boston" },
        { name: "Scot22t", city: "b333oston" },
        { name: "Scot33t", city: "bost222on" }
    ])
})
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post("/student",(req,res)=>{
    const body=req.body
    res.json(body)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is lisring yo this ${PORT}`)
})
