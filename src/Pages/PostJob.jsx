import React, { useState } from 'react';

const PostJob = () => {
 

  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
  });

  const handleInputChange = (key, value) => {
    setJobData({
      ...jobData,
      [key]: value,
    });
  };

  const handlePostJob = () => {
    // Add logic to handle posting the job data (e.g., sending to a server)
    console.log('Posting job:', jobData);
    // Optionally, redirect to the job listings page after posting
    history.push('/job-listings');
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mx-auto max-w-lg mt-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-950">Post a Job</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Job Title</label>
        <input
          type="text"
          name="title"
          value={jobData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
        <textarea
          name="description"
          value={jobData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          rows="4"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={jobData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Salary</label>
        <input
          type="text"
          name="salary"
          value={jobData.salary}
          onChange={(e) => handleInputChange('salary', e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
        onClick={handlePostJob}
      >
        Post Job
      </button>
    </div>
  );
};

export default PostJob;
