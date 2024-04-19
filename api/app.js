import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser"
import customerRoute from "./routes/customer.routes.js"
import adressRoute from "./routes/adress.routes.js"
import contactPersonRoute from "./routes/contactPerson.routes.js"
import userRoute from "./routes/users.routes.js"


const app = express()

// Function to handle Error on MongoDB connection
const connect = async ( ) => {
    try{        
         await mongoose.connect(process.env.MONGO_URI)
         console.log("Connect to MongoDB");
     }catch (error){
         throw(error)
     }
 }
 // Connection watch for MongoDB
 mongoose.connection.on("disconnected", ()=> {
     console.log("mongoDB disconnected!");
 })

//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors())

//routes
app.use("/api/customer", customerRoute)
app.use("/api/address", adressRoute)
app.use("/api/contact-person", contactPersonRoute)
app.use("/api/user", userRoute)

// * ErrorHandler
app.use((err, req, res, next)=>{
    console.log("Error handling middleware called")
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    console.error(err.stack);
    return res.status(errorStatus).json({
        success: false,
        status:errorStatus,
        message:errorMessage,
        // more Details about the error
        stack: err.stack,
    })
})

app.listen(process.env.PORT, () => 
{
connect()
console.log("Server läuft auf Port:", process.env.PORT)
})