import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import { fetchContacts } from '../../redux/phonebook/phonebook-operations';
import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactsList/ContactsList';
import s from './Phonebook.module.css';

export default function Phonebook() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h2 className={s.title}>Phonebook</h2>
      <Form />

      {contacts.length > 0 && (
        <>
          <Filter />
          <h3 className={s.contactTitle}>Contacts</h3>
          <ContactList />
        </>
      )}
    </>
  );
}