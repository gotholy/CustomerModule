import Customer from "../models/customer.model.js"
import adressModel from "../models/adress.model.js";
import contactPersonModel from "../models/contactPerson.model.js";

export const createCustomer = async (customerData) => {
  try {
    const customer = new Customer(customerData);
    await customer.save();
    return customer;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
  
// Get all customers
export const getCustomers = async (req, res) => {
  console.log("getCustomers called");
   try {
    const customers = await Customer.find();
    res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  
// Get a customer by ID
export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate('contact_persons').populate('addresses');
    if (!customer) {
       return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
};
  
// Update a customer by ID
export const updateCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
     res.status(400).json({ message: error.message });
  }
};
  
// Delete a customer by ID
export const deleteCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Löschen der zugehörigen Adressen
    for (const addressId of customer.addresses) {
      await adressModel.findByIdAndDelete(addressId);
    }

    // Löschen der zugehörigen Kontaktpersonen
    for (const contactPersonId of customer.contact_persons) {
      await contactPersonModel.findByIdAndDelete(contactPersonId);
    }

    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};