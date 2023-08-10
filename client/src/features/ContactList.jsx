import PropTypes from 'prop-types';
import Contact from './Contact';
function ContactList({ users }) {
  return (
    <div className='lg:w-7/12'>
      <h2 className='text-2xl font-bold text-gray-800'>Contactos</h2>
      <div className='flex items-center justify-between mt-4 mb-2'>
        <div className='flex items-center'>
          <span className='text-gray-600'>Ordenar por</span>
          <select className='ml-2 text-gray-600 bg-transparent'>
            <option value=''>Nombre</option>
            <option value=''>Apellido</option>
            <option value=''>Empresa</option>
          </select>
        </div>
        <button className='px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded hover:bg-blue-700'>
          Nuevo Contacto
        </button>
      </div>

      <ul className='list-none'>
        {users.map((user) => (
          <Contact key={user._id} user={user} />
        ))}
      </ul>
    </div>
  );
}
ContactList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default ContactList;
