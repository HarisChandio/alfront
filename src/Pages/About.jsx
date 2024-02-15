import React from "react";
import Slider from "react-slick";

const images = [
  "/src/assests/4.jpg",
  "/src/assests/5.jpg",
  "/src/assests/6.jpg",
  "/src/assests/7.jpg",
  "/src/assests/8.jpg",
  "/src/assests/9.jpg",
  "/src/assests/10.jpg",
  
];
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, // Adjust the autoplay speed (in milliseconds)
  centerMode: true,
  centerPadding: "20%", // Adjust the padding from left and right
};
export default function About() {
  return (
    <div className="py-16 mt-2 mb-10">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 shadow-2xl shadow-blue-300 mt-5">
            <img
              src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="szabist"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-blue-950 font-bold md:text-4xl">
            Welcome to the SZABIST Alumni Community!
            </h2>
            <p className="mt-6  text-black">
            As a <span className=" text-blue-950 font-bold"> SZABIST graduate </span>, you are part of an 11,000+ strong network around the world. Every day we work towards improving the<span className=" text-blue-950 font-bold"> SZABIST</span> experience for you, beyond the walls of the campuses. Nothing makes us happier than seeing our alumni coming together and sharing their success stories with us. This platform will update <span className=" text-blue-950 font-bold">SZABIST</span> alums with the current events and activities. It allows alum to update their entire professional experience and can also share job postings available in their organization. Our <span className=" text-blue-950 font-bold"> SZABIST Alumni Global Association (SAGA) </span> exists to keep all our former students in touch with the institution for life. <span className=" text-blue-950 font-bold">SZABIST</span> host series of events throughout the year including Alumni Reunion, Career fair, HR Networking Meetup & Corporate Finesse Workshop. This portal is designed to maintain strong alumni network. Team EDC encourages your active participation at this forum. 
            </p>
          </div>
          
        </div>
        
      </div>
      <Slider {...settings} className="mx-auto max-w-5xl mt-10">
      {images.map((image, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-96 object-cover p-2 shadow-sm max-w-full"
          />
        </div>
      ))}
    </Slider>
    
    </div>
  );
}
