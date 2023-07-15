import React from 'react';

const ContactsList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>
          {name}: {number}
        </span>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
