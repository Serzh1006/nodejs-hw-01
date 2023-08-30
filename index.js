const { program } = require("commander");
const contactsFunc = require("./contacts");

const { listContacts, getContactById, removeContact, addContact } =
  contactsFunc;

const contacts = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const getContacts = await listContacts();
      console.table(getContacts);
      break;
    case "getById":
      const contactById = await getContactById(id);
      console.log(contactById);
      break;
    case "add":
      const addNewContact = await addContact(name, email, phone);
      console.log(addNewContact);
      break;
    case "remove":
      const removeCont = await removeContact(id);
      console.log(removeCont);
      break;
    default:
      return console.log("Unknown action");
  }
};

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
contacts(options);
