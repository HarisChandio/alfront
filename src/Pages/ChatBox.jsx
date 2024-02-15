// ChatBox.js

import React, { useEffect, useState } from 'react';

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { text: userInput, isUser: true }]);
      setUserInput('');
      // Add logic to handle bot response here
    }
  };

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4">
      <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
        {/* Header */}
        <div className="p-4 border-b bg-blue-900 text-white rounded-t-lg flex justify-between items-center">
          <p className="text-lg font-semibold">Alumni Name</p>
          <button
            className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div id="chatbox" className="p-4 h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.isUser ? 'text-right' : ''}`}>
              <p
                className={`rounded-lg py-2 px-4 inline-block ${
                  message.isUser ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {message.text}
              </p>
            </div>
          ))}
        </div>

        {/* Input and Send Button */}
        <div className="p-4 border-t flex ">
          <input
            id="user-input"
            type="text"
            placeholder="Type a message"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <button
            id="send-button"
            className="bg-blue-800 text-white px-4  rounded-md hover:bg-blue-900 transition duration-300 h-11 ml-2"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
