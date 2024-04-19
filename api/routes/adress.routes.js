import express from "express"
import {getAddresses,getAddressById,updateAddressById,deleteAddressById} from "../controllers/adresse.controller.js"
import { upload, uploadAddressesCSV } from "../controllers/csvUpload.controller.js";
import { auth, verifyUser } from "../utils/auth.js";
const router = express.Router()

//CREATE
router.post('/uploadAddresses',auth, verifyUser, upload.single('file'), uploadAddressesCSV);
//GET ALL ADDRESSES
router.get('/allAddresses', auth, verifyUser,getAddresses);
//GET ADDRESS BY ID
router.get('/getOneAddresse/:id', auth, verifyUser,getAddressById);
// UPDATE ADRESS
router.put('/updateAddresse/:id', auth, verifyUser,updateAddressById);
// DELETE ADRESS
router.delete('/deleteAddresse/:id', auth, verifyUser,deleteAddressById);

export default router