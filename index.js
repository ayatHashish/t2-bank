const express = require("express")
const hbs = require("hbs")
const path = require("path")
require("dotenv").config()
const app = express()

const PORT = process.env.PORT || 3000
/* const staticFiles = path.join(__dirname, "frontend/public") */
const viewsFiles = path.join(__dirname, "frontend/views")
const layoutsFiles = path.join(__dirname, "frontend/layouts")
app.use(express.urlencoded({extended:true}))
/* app.use(express.static(staticFiles)) */
app.set("view engine", "hbs")
app.set("views", viewsFiles)
hbs.registerPartials(layoutsFiles)
const custRoutes = require("./app/routes/cust.routes")
app.use(custRoutes)
/* app.all("*", (req,res)=> res.render("err404", {pageTitle:"error not found"})) */
app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`))