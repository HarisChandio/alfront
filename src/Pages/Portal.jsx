


// Import React and other necessary libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Create a new ChatContent component
const ChatContent = () => {
  // Add chat logic here
  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Chat</h2>
      {/* Add chat UI or logic here */}
      <p>This is the chat feature. chat UI or logic here.</p>
    </div>
  );
};
import axios from 'axios';

const ProfileContent = ({ profileData, handleInputChange }) => {
  const handleUpdateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append('profilePicture', profileData.profilePicture);
      formData.append('age', profileData.age);
      formData.append('job', profileData.job);

      const response = await axios.post("http://localhost:3000/api/auth/profile", formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });

      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-8">
      <h2 className="text-3xl font-bold mb-4">Profile</h2>
      <div className="flex items-center mb-4">
        <img
          src={profileData.profilePicture}
          alt="Profile"
          className="w-32 h-32 rounded-full mr-4"
        />
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleInputChange("profilePicture", e.target.files[0])}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">Age</label>
        <input
          type="number"
          name="age"
          value={profileData.age}
          onChange={(e) => handleInputChange("age", e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-1">
          Job Status
        </label>
        <input
          type="text"
          name="jobStatus"
          value={profileData.job}
          onChange={(e) => handleInputChange("job", e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleUpdateProfile}
      >
        Update Profile
      </button>
    </div>
  );
};




const JobListingsContent = () => {
  // ... (JobListingsContent code)
  // Dummy job data
  const dummyJobs = [
    {
      id: 1,
      title: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue vel odio fringilla iaculis.",
      location: "City, Country",
      salary: "$80,000 - $100,000",
      image: "https://via.placeholder.com/150x150",
    },
    {
      id: 2,
      title: "Data Scientist",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      location: "City, Country",
      salary: "$90,000 - $110,000",
      image: "https://via.placeholder.com/150x150",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      description:
        "Nullam hendrerit, arcu ut facilisis consectetur, felis odio fringilla massa, eget dignissim felis nisi nec purus.",
      location: "City, Country",
      salary: "$75,000 - $95,000",
      image: "https://via.placeholder.com/150x150",
    },
    {
      id: 4,
      title: "Marketing Specialist",
      description:
        "Curabitur nec arcu vel lectus congue convallis. Duis eu ex nec est auctor iaculis a in nibh.",
      location: "City, Country",
      salary: "$70,000 - $90,000",
      image: "https://via.placeholder.com/150x150",
    },
    {
      id: 5,
      title: "Sales Manager",
      description:
        "Vivamus vitae laoreet sem. Suspendisse ut risus sed urna congue imperdiet in vitae libero.",
      location: "City, Country",
      salary: "$100,000 - $120,000",
      image: "https://via.placeholder.com/150x150",
    },
    // Add more dummy job entries as needed
  ];

  const [expandedJobId, setExpandedJobId] = useState(null);

  const handleReadMoreClick = (jobId) => {
    setExpandedJobId(jobId === expandedJobId ? null : jobId);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 inline text-b;ue-900">
        Job Listings
      </h2>

      <Link to="/postjob">
        <button
          type="submit"
          className=" text-xl mb-4 relative left-96 md:w-32 bg-blue-950 hover:bg-blue-dark text-white py-1 rounded-lg mt-3 hover:bg-blue-900 transition ease-in-out duration-300"
        >
          Post Job
        </button>
      </Link>

      {dummyJobs.map((job) => (
        <div
          key={job.id}
          className="mb-4 border border-gray-300 rounded-md p-4"
        >
          <img
            src={job.image}
            alt={job.title}
            className="w-32 h-32 rounded-full mb-4 mx-auto"
          />
          <h3 className="text-xl font-bold mb-2 text-center">{job.title}</h3>
          <p className="text-black mb-2">{job.description}</p>
          <p className="text-sm text-black mb-2">{job.location}</p>
          <p className="text-sm text-black mb-2">{job.salary}</p>
          <button
            className="text-blue-500 hover:underline mx-auto block"
            onClick={() => handleReadMoreClick(job.id)}
          >
            {expandedJobId === job.id ? "Read Less" : "Read More"}
          </button>
          {expandedJobId === job.id && (
            <div className="mt-2">
              {/* Additional details or expanded content can be added here */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

import Chatbox from './ChatBox.jsx'; // Import the Chatbox component

const AlumniDirectoryContent = () => {
  const dummyAlumniData = [
    // ... (your existing dummy alumni data)
    {
      id: 1,
      name: 'Azhar',
      education: 'Computer Science',
      age: 28,
      about: 'Passionate about technology and innovation.',
    },
    {
      id: 2,
      name: 'Fahad ',
      education: 'Business Administration',
      age: 30,
      about: 'Experienced entrepreneur with a focus on sustainable business practices.',
    },
    {
      id: 3,
      name: 'Mazhar',
      education: 'Economics',
      age: 25,
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  
  ];

  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const openChatbox = (alumniId) => {
    setSelectedAlumni(alumniId);
  };

  const closeChatbox = () => {
    setSelectedAlumni(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
      {dummyAlumniData.map((alumni) => (
        <div key={alumni.id} className="bg-white p-4 rounded-md shadow-md flex flex-col">
          

         
          <div className="flex items-center justify-center mb-2">
            <img
              src={`https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=${alumni.name}`}
              alt={alumni.name}
              className="w-28 h-28 rounded-full mb-2"
            />
          </div>
          {/* Alumni card */}
          <div className="bg-blue-950 text-white p-4 rounded-md mb-4 ">
            <h3 className="text-xl font-bold">{alumni.name}</h3>
            <p className="text-sm">{alumni.education}</p>
            <div className="flex justify-center items-center">
            <div>
              <p className="text-sm text-white">Age: {alumni.age}</p>
              <p className="text-sm text-white">{alumni.about}</p>
            </div>
          </div>
          </div>

          <div className="flex-grow"></div> {/* This will push the following elements to the bottom */}

          {/* Display chatbox trigger button at the bottom */}
          <button
            className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300 mb-2"
            onClick={() => openChatbox(alumni.id)}
          >
            Chat
          </button>

          {/* Add more buttons or content if needed */}
          
          {/* Display chatbox if alumni is selected */}
          {selectedAlumni === alumni.id && <Chatbox onClose={closeChatbox} />}
        </div>
      ))}
    </div>
  );
};

const Portal = () => {
  const [selectedFeature, setSelectedFeature] = useState("profile");
  const [profileData, setProfileData] = useState({
    name: "",
    age: null,
    education: "",
    profilePicture: "https://via.placeholder.com/150x150",
  });

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const handleInputChange = (key, value) => {
    setProfileData({
      ...profileData,
      [key]: value,
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-300">
  {/* Sidebar on the left */}
  <div className="w-full md:w-1/4 bg-white p-4 shadow-md">
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Features</h2>
    <ul>
      {/* ... (existing list items) */}
 <li
            className={`cursor-pointer mb-2 p-2 ${
              selectedFeature === "profile"
                ? "bg-blue-950 text-white rounded"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleFeatureClick("profile")}
          >
            Profile
          </li>
          <li
            className={`cursor-pointer mb-2 p-2 ${
              selectedFeature === "jobListings"
                ? "bg-blue-950 text-white rounded"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleFeatureClick("jobListings")}
          >
            Job Listings
          </li>
          <li
            className={`cursor-pointer mb-2 p-2 ${
              selectedFeature === "alumniDirectory"
                ? "bg-blue-950 text-white rounded"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleFeatureClick("alumniDirectory")}
          >
            Alumni Directory
          </li>
    </ul>
  </div>

  {/* Main content on the right */}
  <div className="flex-1 p-4">
    <header className="bg-blue-950 p-3 text-white mb-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl sm:text-4xl font-bold">FYP Portal</h1>
        <div className="flex items-center mt-2 sm:mt-0">
          {/* <div className="flex items-center">
            <input
              type="text"
              id="search"
              className="p-2 border border-gray-300 rounded relative top-2 text-black"
              placeholder="Search"
            />
            <button className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-400 rounded-lg text-xs sm:text-sm px-2 sm:px-5 py-1 sm:py-2.5 focus:outline-none relative left-2">
              Search
            </button>
          </div> */}
        </div>
        <Link
          to="/"
          className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-400 rounded-lg text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 mr-2 focus:outline-none mt-2 sm:mt-0"
        >
          Logout
        </Link>
      </div>
    </header>

    {/* Conditionally render content based on the selected feature */}
    {selectedFeature === "profile" && (
      <ProfileContent
        profileData={profileData}
        handleInputChange={handleInputChange}
      />
    )}
    {selectedFeature === "jobListings" && <JobListingsContent />}
    {selectedFeature === "alumniDirectory" && <AlumniDirectoryContent />}
    {selectedFeature === "chat" && <ChatContent />}
  </div>
</div>
  );
};

export default Portal;

