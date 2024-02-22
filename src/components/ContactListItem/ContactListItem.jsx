import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
  // handleDelete method
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <tr className={css.contactListItem}>
      <td>{filteredContact.name}</td>
      <td>{filteredContact.number}</td>
      <td><button onClick={handleDelete}>Delete</button></td>
    </tr>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
