import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ filterContact, deleteContact }) => {
  const filteredContacts = filterContact();

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>name</th>
          <th>contact</th>
          <th>option</th>
        </tr>
      </thead>
      <tbody>
          {filteredContacts.map(filteredContact => (
            <ContactListItem
              key={filteredContact.id}
              filteredContact={filteredContact}
              deleteContact={deleteContact}
            />
          ))}
      </tbody>
    </table>
  );
};

ContactList.propTypes = {
  filterContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
