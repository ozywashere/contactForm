import PropTypes from 'prop-types';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
function Contacts({ users, initialValues, setInitialValues, handleSubmit }) {
  return (
    <section className='w-full py-20'>
      {/* Container */}
      <div className='max-w-screen-2xl w-full  flex justify-center gap-4  mx-auto flex-col lg:flex-row'>
        <ContactForm
          initialValues={initialValues}
          setInitialValues={setInitialValues}
          handleSubmit={handleSubmit}
        />
        <ContactList users={users} />
      </div>
    </section>
  );
}

Contacts.propTypes = {
  users: PropTypes.array.isRequired,
  initialValues: PropTypes.object.isRequired,
  setInitialValues: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default Contacts;
