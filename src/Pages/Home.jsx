import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const images = [
    "http://hyd.szabist.edu.pk/images/G2.jpg",
    "http://hyd.szabist.edu.pk/images/G5.jpg",
    "http://hyd.szabist.edu.pk/images/G13.jpg",
    "http://hyd.szabist.edu.pk/images/G8.jpg",
    "http://hyd.szabist.edu.pk/images/G14.jpg",
    "http://hyd.szabist.edu.pk/images/G17.jpg",
    "http://hyd.szabist.edu.pk/images/G23.jpg",
    
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
    centerPadding: "19%", // Adjust the padding from left and right
  };

  return (
    <div className="bg-slate-100 ">
      
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover p-3 shadow-sm "
            />
          </div>
        ))}
      </Slider>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-slate-100">
  <div id="hero2" className="lg:ml-10 lg:mb-0 mb-4">
    <div
      id="box11"
      className="transform transition-transform hover:scale-105 mb-2 lg:mb-0"
    ></div>
    <div
      id="box22"
      className="transform transition-transform hover:scale-105 mb-2 lg:mb-0"
    ></div>
    <div
      id="box33"
      className="transform transition-transform hover:scale-105 mb-2 lg:mb-0"
    ></div>
    <div
      id="box44"
      className="transform transition-transform hover:scale-105 mb-2 lg:mb-0"
    ></div>
    <div
      id="box55"
      className="transform transition-transform hover:scale-105 mb-2 lg:mb-0"
    ></div>
    <div
      id="box66"
      className="transform transition-transform hover:scale-105 mb-2 lg:mb-0"
    ></div>
  </div>
  <div className="flex flex-col lg:flex-row ml-4 lg:ml-0">
    <h1
      className="relative lg:ml-8 mr-8 p-8 text-lg font-medium mt-3 tracking-wider leading-7"
    >
      To our cherished alumni, the threads of time may weave us in different
      directions, but the tapestry of memories binds us forever. As we
      reflect on the journey we've shared, each chapter is etched with
      laughter, learning, and the camaraderie that shaped us into the
      community we are today. The milestones we achieved, the challenges
      we overcame, and the friendships we forged have become the foundation
      of our shared legacy.
    </h1>
  </div>
</div>

<div
        className="flex justify-center items-center font-black
       text-6xl font-serif  mt-10"
      >
        <h1 className="text-blue-950 ">More About Alumni </h1>

      </div>
<div className="w-screen h-auto md:h-56 mt-2 mb-4 flex justify-center items-center p-10 text-center text-lg leading-7">
  
  <p>
    Students of SZABIST Hyderabad Campus participated and won many prizes
    and awards in iCube 2014 held on Monday, November 24, 2014 at Isra
    University. Hyderabad. <span className="text-blue-950 font-bold">Mr. Wajeeh Baloch</span>,
    student of BS-7 and Ambassador for iCube 2014 from SZABIST Hyderabad
    Campus, won the top prize for bringing the highest number of students
    for participation in the afore-mentioned event.<span className="text-blue-950 font-bold"> Mr. Muhammad Owais Memon</span> ,
    student of BBA-6, along with team members, won the first prize in
    Business Idea competition.<span className="text-blue-950 font-bold">Mr. Waleed Abro</span>, student of BS-7,
    won first position in Photography competition. <span className="text-blue-950 font-bold">Mr. Abdul Basit Memon</span>,
    student of BS-6, won first prize in Software Exhibition competition.
    Team of students from BS-1 won first prize in "Techno Idea" competition.
  </p>
</div>

<div className="flex justify-center items-center font-black mb-8 text-4xl md:text-5xl lg:text-6xl font-serif">
  <h1 className="text-blue-950">Achievements</h1>
</div>

<div className="flex flex-wrap justify-evenly items-center">
  <div className="max-w-sm h-full rounded overflow-hidden shadow-lg p-1 bg-blue-950 text-white transform transition-transform hover:scale-105 mb-5">
    <img
      className="w-52 relative left-14 top-8"
      src="https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg"
      alt="Avatar"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-1 mt-6 text-center">Ms. Pooja Poohwani</div>
      <p className="text-base">
        Ms. Pooja Poohwani, a student of the BBA Program, secured the 1st position in the Summer Internship Program at State Bank of Pakistan Banking Service Corporation Hyderabad.
      </p>
    </div>
  </div>

  <div className="max-w-sm h-full rounded overflow-hidden shadow-lg p-1 bg-blue-950 text-white transform transition-transform hover:scale-105 mb-5">
    <img
      className="pt-8 w-28 md:w-40 lg:w-48 relative left-20"
      src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
      alt="Avatar"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-1 text-center">Mr. Sadaqat Ahsan</div>
      <p className="text-base">
        Mr. Sadaqat Ahsan, a student of BBA, got selected for the Global UGRAD exchange program. He got placement at Fairleigh Dickinson University, New Jersey & traveled to the USA.
      </p>
    </div>
  </div>

  <div className="max-w-sm h-full rounded overflow-hidden shadow-lg p-1 bg-blue-950 text-white transform transition-transform hover:scale-105 mb-5">
    <img
      className="pt-8 w-28 md:w-40 lg:w-48 relative left-20"
      src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
      alt="Avatar"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center">Mr. Haris</div>
      <p className="text-base">
        Mr. Haris, a student of MBA, along with his student group, were awarded the first position at the closing ceremony of the summer internship 2018 at the State Bank of Pakistan.
      </p>
    </div>
  </div>
</div>

      {/* ========================================================================== */}


      <div className="w-full flex flex-col md:flex-row items-center p-8">
      <div className="w-full md:w-1/2 p-4">
    <hr className="h-1 bg-blue-950 mb-4" />
    <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-center text-blue-950">
      Events and Activities
    </h2>
    <p className="text-lg md:text-base px-4 md:px-0">
      Students from the SZABIST Hyderabad Campus took part in iCube 2014, which was held on Monday, November 24, 2014, at Isra University in Hyderabad, and received several prizes and accolades. Mr. Wajeeh Baloch, BS-7 student and Ambassador for iCube 2014 from SZABIST Hyderabad Campus, earned the top medal for bringing the most students to the aforementioned event. Mr. Muhammad Owais Memon, a BBA-6 student, and team members took first place in the Business Idea competition.
    </p>
  </div>
  <div className="w-full md:w-1/2 relative">
    <img
      src="http://hyd.szabist.edu.pk/images/campuslifeslider.jpg"
      alt="Event Image"
      className="w-full h-60 p-8 transform transition-transform hover:scale-105"
    />
  </div>
  
</div>


      {/* ========================================================================================= */}
      <div className="flex flex-col items-center justify-center h-full md:h-3/4">
  <div className="w-full md:w-5/6 lg:w-4/5 bg-blue-950 p-4 md:p-8 mb-4 md:mb-16">
    <h1 className="text-3xl md:text-5xl text-center font-black text-white mb-4 md:mb-8">
      Contact Us
    </h1>
    <p className="text-base md:text-lg text-center text-white mb-4 md:mb-8">
      You are always welcome to reach out to us or drop by for a visit! Our team strives to nurture your connection with SZABIST and is always happy to help.
    </p>
    <div className="w-full md:w-4/5 bg-blue-100 p-4 md:p-8 mt-4 md:ml-20 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start ">
      <div className="mb-4 md:mb-0">
        <h3 className="text-sm md:text-base lg:text-lg">
          Address: 98HP+GGX State Life Building, Ground & 3rd and 4th, Thandi Sarak, Bangali Colony, Hyderabad, Sindh 71000
        </h3>
      </div>
      <div className="mb-4 md:mb-0">
        <h3 className="text-sm md:text-base lg:text-lg">
          Nuzhat Kamran Director – Office of Advancement nuzhat.kamran@SZABIST.edu.pk Muhammad Irfan Latif Alumni Relations Lead – Office of Advancement irfan.latif@SZABIST.edu.pk Marwa Mohkam Sheikh Alumni Relations Specialist – Office of Advancement marwa.mohkam@SZABIST.edu.pk
        </h3>
      </div>
      <div>
        <h3 className="text-sm md:text-base lg:text-lg">
          Minahil Khalid Alumni Relations Specialist – Office of Advancement minahil.khalid@SZABIST.edu.pk
        </h3>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default Home;
