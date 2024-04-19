import express from "express"
import {getContactPersons, getContactPersonById, updateContactPersonById, deleteContactPersonById} from "../controllers/contactPerson.controller.js"
import { upload, uploadContactPersonsCSV } from "../controllers/csvUpload.controller.js";
import { auth, verifyUser } from "../utils/auth.js";
const router = express.Router()

//CREATE
router.post('/uploadContacts',auth, verifyUser, upload.single('file'), uploadContactPersonsCSV);
//GET ALL CONTACT
router.get('/getAllContacts',auth, verifyUser, getContactPersons);
//GET CONTACT BY ID
router.get('/getContact/:id',auth, verifyUser, getContactPersonById);
// UPDATE CONTACT
router.put('/updateContact/:id',auth, verifyUser, updateContactPersonById);
// DELETE CONTACT
router.delete('/deleteContact/:id',auth, verifyUser, deleteContactPersonById);

export default router