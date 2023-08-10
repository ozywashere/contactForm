import PropTypes from 'prop-types';
function Contact({ user }) {
  return (
    <div>
      {user.firstName} {user.lastName}
    </div>
  );
}

Contact.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Contact;
