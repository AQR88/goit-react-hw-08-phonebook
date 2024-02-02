import { useDispatch, useSelector } from 'react-redux';
import { delContact } from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';
import Notiflix from 'notiflix';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);

  const handleDelete = id => {
    dispatch(delContact(id));
    Notiflix.Notify.failure('Contact deleted!');
  };

  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {visibleContacts.map((contact, id) => (
          <li key={id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
