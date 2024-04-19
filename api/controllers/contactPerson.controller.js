import ContactPerson from "../models/contactPerson.model.js"

// Create a new contact person
export const createContactPerson = async (req, res) => {
  try {
    const contactPerson = new ContactPerson(req.body);
    await contactPerson.save();
    res.status(201).json(contactPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all contact persons
export const getContactPersons = async (req, res) => {
  try {
    const contactPersons = await ContactPerson.find();
    res.json(contactPersons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
// Get a contact person by ID
export const getContactPersonById = async (req, res) => {
  try {
    const contactPerson = await ContactPerson.findById(req.params.id);
      if (!contactPerson) {
      return res.status(404).json({ message: 'Contact person not found' });
    }
    res.json(contactPerson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a contact person by ID
export const updateContactPersonById = async (req, res) => {
  try {
    const contactPerson = await ContactPerson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contactPerson) {
      return res.status(404).json({ message: 'Contact person not found' });
    }
    res.json(contactPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a contact person by ID
export const deleteContactPersonById = async (req, res) => {
  try {
    const contactPerson = await ContactPerson.findByIdAndDelete(req.params.id);
    if (!contactPerson) {
      return res.status(404).json({ message: 'Contact person not found' });
    }
    res.json({ message: 'Contact person deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};