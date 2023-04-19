import  express  from "express"
const app = express()
app.listen(5001, ()=> console.log("App running at 5001"))

app.get('/', (req,res)=>res.json("Hello"))