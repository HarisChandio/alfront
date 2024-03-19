import axios from 'axios';
import {React,useEffect,useState} from 'react';
function Event() {

  const eventsFetch = async ()=>{
    console.log('fetching ');
    const userData = JSON.parse(localStorage.getItem('user'));
    const tokenJson = {"token":userData['token']};
    console.log(tokenJson);

    const response = await axios.get('http://localhost:3000/api/ev/events',JSON.stringify(tokenJson));
    console.log(response);
  };

  useEffect(()=>{
    eventsFetch();
  },[]);

  return (
    <div className='bg-gray-100'>
      <header className=" text-blue-950 py-8 mt-2">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-950">Events</h1>
          <p className="mt-2 text-lg">Join us for exciting events and experiences!</p>
        </div>
      </header>

      <section className="container mx-auto my-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="bg-blue-950 p-6 rounded-md drop-shadow-2xl ">
          <img
              src="/src/assests/1.jpg"
              alt="szabist Events"
              className="w-96 h-48 object-cover rounded-md "
            />
            <h2 className="text-lg font-bold text-white mb-4 mt-2">Career & Professional Development Session</h2>
            <p className="text-l mb-4 text-white">Date: November 28, 2023</p>
            <p className="text-l mb-4 text-white">Location: Room-17, 8th Floor SZABIST University</p>
            <p className="text-l mb-4 text-white">Speaker: MR. AFZAL KHAN MEMON</p>
        
          </div>
          {/* Event Card 2 */}
          <div className="bg-blue-950 p-6 rounded-md drop-shadow-2xl ">
          <img
              src="/src/assests/2.jpg"
              alt="szabist Events"
              className="w-96 h-48 object-cover rounded-md "
            />
            <h2 className="text-lg font-bold text-white mb-4 mt-2">Career Fair</h2>
            <p className="text-l mb-4 text-white">Date: November 30, 2023</p>
            <p className="text-l mb-4 text-white">Location: 8th Floor SZABIST University</p>
            <p className="text-l mb-4 text-white">About: Funded by INGITE % MOITT</p>
        
          </div>

          {/* Event Card 3 */}
          <div className="bg-blue-950 p-6 rounded-md drop-shadow-2xl ">
          <img
              src="/src/assests/3.jpg"
              alt="szabist Events"
              className="w-96 h-48 object-cover rounded-md "
            />
            <h2 className="text-lg font-bold text-white mb-4 mt-2">Graduation Week</h2>
            <p className="text-l mb-4 text-white">Date: November 27, 2023</p>
            <p className="text-l mb-4 text-white">Location: SZABIST University</p>
            <p className="text-l mb-4 text-white">Activity: Student</p>
        
          </div>

          {/* Add more cards with images */}
        </div>
      </section>
    </div>
  );
}

export default Event;
