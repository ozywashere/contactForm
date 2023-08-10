import PropTypes from 'prop-types';
function ContactForm({ initialValues, setInitialValues, handleSubmit }) {
  const handleChange = (e) => {
    setInitialValues({
      ...initialValues,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <form
      className='lg:w-5/12  bg-gray-300 shadow-lg bg-opacity-50 p-6'
      onSubmit={handleSubmit}
    >
      <h3 className='text-lg font-medium text-gray-900 mb-4'>Contact Form</h3>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        {/*First Name*/}
        <div>
          <label
            htmlFor='first_name'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            First name
          </label>
          <input
            type='text'
            id='first_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='John'
            value={initialValues.first_name}
            onChange={handleChange}
            required
          />
        </div>
        {/*Last Name*/}
        <div>
          <label
            htmlFor='last_name'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Last name
          </label>
          <input
            type='text'
            id='last_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Doe'
            value={initialValues.last_name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Email */}
        <div>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            value={initialValues.email}
            onChange={handleChange}
          />
        </div>
        {/* Password */}
        <div>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            value={initialValues.password}
            onChange={handleChange}
          />
        </div>
        {/*Location */}
        <div>
          <label
            htmlFor='location'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Location
          </label>
          <select
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            id='location'
            name='location'
            value={initialValues.location}
            onChange={handleChange}
          >
            <option value=''>Select</option>
            <option value='1'>TR</option>
            <option value='2'>USA</option>
            <option value='3'>DE</option>
            <option value='4'>FR</option>
            <option value='5'>IT</option>
            <option value='6'>RU</option>
            <option value='7'>OTHER</option>
          </select>
        </div>
        {/* Status */}
        <div>
          <label
            htmlFor='message'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Status
          </label>
          <select
            id='status'
            name='status'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            value={initialValues.status}
            onChange={handleChange}
          >
            <option value=''>Select</option>
            <option value='1'>Active</option>
            <option value='2'>Inactive</option>
            <option value='3'>Pending</option>
            <option value='4'>Banned</option>
          </select>
        </div>
        {/* Phone Number */}
        <div className='col-span-2'>
          <label
            htmlFor='phone'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Phone
          </label>
          <input
            type='tel'
            id='phone'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            value={initialValues.phone}
            onChange={handleChange}
          />
        </div>
        {/* Message */}
        <div className='col-span-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto w-full'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  initialValues: PropTypes.object,
  setInitialValues: PropTypes.func,
  handleSubmit: PropTypes.func,
};
export default ContactForm;
