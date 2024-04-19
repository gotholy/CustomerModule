import express from "express"
import { getCustomers, getCustomerById, updateCustomerById, deleteCustomerById} from "../controllers/customer.controller.js"
import {upload, uploadCustomersCSV} from "../controllers/csvUpload.controller.js"
import { auth, verifyUser } from "../utils/auth.js"
const router = express.Router()

//CREATE
router.post('/uploadCustomer',auth, verifyUser, upload.single('file'), uploadCustomersCSV);
//GET ALL CONTACT
router.get('/allCustomers',auth, verifyUser, getCustomers);
//GET CONTACT BY ID
router.get('/getOneCustomer/:id', auth, verifyUser, getCustomerById);
// UPDATE CONTACT
router.put('/updateCustomer/:id', auth, verifyUser,updateCustomerById);
// DELETE CONTACT
router.delete('/deleteCustomer/:id',auth, verifyUser, deleteCustomerById);

export default router
