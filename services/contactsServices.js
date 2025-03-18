import { resolve } from "node:path";

import Contact from "../models/Contact.js";

export function listContacts() {
  return Contact.findAll();
}

export async function getContactById(contactId) {
  return Contact.findByPk(contactId);
}

export async function removeContact(contactId) {
  return Contact.destroy({ where: { id: contactId } });
}

export function addContact(name, email, phone, favorite = false) {
  return Contact.create({
    name,
    email,
    phone,
    favorite,
  });
}

export async function putContact(contactId, name, email, phone) {
  const contact = await getContactById(contactId);

  if (!contact) return null;

  const updatedContact = {
    ...contact,
    name: name ?? contact.name,
    email: email ?? contact.email,
    phone: phone ?? contact.phone,
  };

  return contact.update(updatedContact, { returning: true });
}

export async function updateFavoriteContact(contactId, favorite) {
  const contact = await getContactById(contactId);

  if (!contact) return null;

  const updatedContact = {
    ...contact,
    favorite,
  };

  return contact.update(updatedContact, { returning: true });
}
