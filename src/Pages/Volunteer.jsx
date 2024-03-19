import React from 'react'

function Volunteer() {
  function EventApplyForm({ eventId }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phNo, setPhNo] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;
        if (!userId) {
          // Handle user not logged in
          return;
        }
  
        const response = await axios.post(`/event/apply/${eventId}`, {
          name,
          email,
          phNo,
          description,
          userId
        });
        console.log(response.data);
        // Optionally, you can show a success message or redirect the user
      } catch (error) {
        console.error('Error:', error.response.data);
        // Handle error
      }
    };}

  return (
    <div className='bg-gray-100'>
        {/* Donation Form */}
      <div className="max-w-md mx-auto p-4 bg-white relative top-5">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-5">Volunteer Form</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="tel" placeholder="Phone Number" value={phNo} onChange={(e) => setPhNo(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">Apply</button>
           </form>
      </div>
    </div>
  )
}

export default Volunteer








