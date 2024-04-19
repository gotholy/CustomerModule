import User from "./models/user.model.js";
import mongoose from "mongoose";
import "dotenv/config"

const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password1'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      password: 'password2'
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bob.smith@example.com',
      password: 'password3'
    }
  ];
  const connect = async ( ) => {
    try{        
         await mongoose.connect(process.env.MONGO_URI)
         console.log("Connect to MongoDB");
     }catch (error){
         throw(error)
     }
 }

 async function createUsers() {
    try {
      await connect(); // Connect to MongoDB
      await User.deleteMany({}); // Clear existing users
  
      for (const user of users) {
        const newUser = new User(user);
        await newUser.save();
      }
  
      console.log("Users seeded successfully!");
    } catch (error) {
      console.error("Error seeding users:", error);
    }
  }


  createUsers()

