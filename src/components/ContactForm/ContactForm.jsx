import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getContacts } from '../../redux/contacts/selectors';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const isContactExist = contacts.some(
      contact =>
        (contact.name &&
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()) ||
        (contact.number && contact.number.trim() === number.trim())
    );

    if (isContactExist) {
      Notiflix.Notify.info(`Contact "${name}" is already in contacts😎`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
      Notiflix.Notify.success(`${name} was added to your phonebook`);
    }
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formName}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          className={css.formNumber}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
