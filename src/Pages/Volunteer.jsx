import React from 'react'

function Volunteer() {
  return (
    <div className='bg-gray-100'>
        {/* Donation Form */}
      <div className="max-w-md mx-auto p-4 bg-white relative top-5">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-5">Volunteer Form</h2>
        <form action="submit_volunteer.php" method="post"/>
        <label for="name">Name:</label>
        <input className='required' type="text" id="name" name="name" required/>

        <label for="email">Email:</label>
        <input className='required' type="email" id="email" name="email" required/>

        <label for="phone">Phone:</label>
        <input className='required' type="tel" id="phone" name="phone" required/>

        <label for="availability">Availability:</label>
        <select id="availability" name="availability" required>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="weekends">Weekends</option>
        </select>

        <label for="skills">Skills (comma-separated):</label>
        <input className='required' type="text" id="skills" name="skills"/>

        <label for="message">Why do you want to volunteer?</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button className=' relative left-36 mt-2' id='vol-btn' type="submit">Submit</button>
    <form/>
      </div>
    </div>
  )
}

export default Volunteer








