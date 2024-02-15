import React from "react";
import { Link } from "react-router-dom";

function Donate() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100">
      {/* Image */}
      <div className="w-full ">
        <img
          className="w-full h-80  object-cover"
          src="https://images.unsplash.com/photo-1495653797063-114787b77b23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* Content */}
      <div className=" mx-4 mt-4 text-center bg-blue-100 relative bottom-20 p-8 w-3/4 3/5">
        <h1 className="text-blue-900 text-6xl mb-4 py-5">Donate Now</h1>
        <p className="leading-6">
          Your generosity has enabled us to make a difference in the lives of
          many outstanding and deserving youngsters. Our team is available to
          assist you with routing your contribution. You may give to SZABIST
          today, no matter where you live.
        </p>

        <h2 className="text-4xl font-bold mt-8 text-left ml-5 py-5 text-blue-900 ">Let's Get Started</h2>
        <p className="leading-6"> 
          You may help{" "}
          <Link to={"/"} className="text-blue-500 ">
            <span>SZABIST HYD </span>
          </Link>{" "}
          in a number of ways, including donations to our financial assistance
          and NOP scholars, as well as infrastructure and research. Please use
          our secure online giving form to make this donation. The procedure is
          simple and will only take a few minutes, but the impact will last a
          lifetime.
        </p>
      </div>

      {/* Donation Form */}
      <div className="max-w-md mx-auto p-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-900">Donation Form</h2>
        <form id="form" action="" method="" />
            <label for="full_name">Full Name:</label>
        <input type="text" id="full_name" name="full_name" required/>

        <label for="email">Email (Gmail):</label>
        <input type="email" id="email" name="email" required/>

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required/>

        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required/>

        <label for="occupation">Occupation:</label>
        <input type="text" id="occupation" name="occupation"/>

            

            <label for="message">Message (Optional):</label>
            <textarea id="message" name="message" rows="4"></textarea>

            <input className=" relative left-36 mt-2" type="submit" value="Make a Donation" />
            <form />
      </div>
    </div>
  );
}

export default Donate;
