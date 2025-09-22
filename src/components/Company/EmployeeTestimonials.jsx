// // 'use client';

// // import React from "react";
// // import Image from 'next/image'; // Import Image from Next.js

// // export default function EmployeeTestimonials() {
// //   return (
// //     <section className="bg-gray-50 dark:bg py-16 sm:py-20 px-4">
// //       <div className="max-w-4xl mx-auto text-center">
// //         {/* Section Title */}
// //         <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
// //           <span className="text-black">Employee</span>{' '}
// //           <span className="text-[#ff5010]">Testimonials</span>
// //         </h2>
// //         <p className="text-left text-black mb-12 max-w-3xl mx-auto text-lg sm:text-xl">
// //           Hear what our team has to say about working at Brandsmashers Tech. We believe in appreciation, growth, and a great work culture.

// //         </p>

// //         {/* Testimonial Card */}
// //         <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
// //           <p className="text-left text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-6 ">
// //             “It’s been 4+ years with Brandsmashers Tech, and it’s truly an AWESOME place to work! The work culture is supportive and flexible, allowing employees to work with freedom and creativity. There’s strong support from seniors, and efforts are always recognized and appreciated.”
// //           </p>

// //           {/* Employee Info */}
// //           <div className="flex items-center space-x-4">
// //             <Image
// //               src="/path-to-image.jpg" // Replace with the actual path to the image
// //               alt="Aryman Saxena"
// //               width={56} // Set the image width (in pixels)
// //               height={56} // Set the image height (in pixels)
// //               className="w-14 h-14 rounded-full object-cover border-2 border-[#ff5010]"
// //             />
// //             <div className="text-left">
// //               <p className="font-bold text-gray-800 dark:text-white">Aryman Saxena</p>
// //               <span className="text-sm text-gray-500 dark:text-gray-400">CTO</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Dot Indicators */}
// //         {/* Add dot indicators or other content here */}
// //       </div>
// //     </section>
// //   );
// // }



// 'use client';

// import React from "react"; 
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const testimonials = [
//   {
//     name: "Sagar Rai",
//     role: "Intern Experience",
//     review:
//       "I joined as an intern and the mentorship I received has shaped me into a confident software engineer.",
//   },
//   {
//     name: "Ayushi Namdev",
//     role: "Software Developer",
//     review:
//       "Working at Brandsmashers Tech as a Software Developer was a great experience. I had the opportunity to work on exciting projects, collaborate with a skilled and supportive team, and grow both technically and professionally. The company’s culture of innovation and continuous learning made it a rewarding place to work.",
//   },
//   {
//     name: "Nisarg Shah",
//     role: "Client Review",
//     review:
//       "BrandSmasher Tech is truly impressive! The team is professional, innovative, and always delivers on time. They provide smart solutions and go the extra mile to ensure client satisfaction. Highly recommend them!",
//   },
//   {
//     name: "Sarthak Srivastava",
//     role: "Candidate Review",
//     review:
//       "They offered me a role of Java Developer with a package of 6.5 LPA. Although I couldn’t join due to my notice period, I appreciated the opportunity. Their credibility in the market shows they are serious about hiring quality talent.",
//   },
//   {
//     name: "Virendra Kumar Dwivedi",
//     role: "Developer – 1.5 years",
//     review:
//       "I’ve been a developer here for 1.5 years and the variety of projects keeps me motivated. One sprint I work on fintech and the next on healthcare. There is always something new to learn.",
//   },
//   {
//     name: "Vishakha Pawar",
//     role: "First Company Experience",
//     review:
//       "This is my first company. I’m genuinely grateful for the opportunity to begin my journey here. The work culture is very positive and supportive. What I appreciate the most is how approachable and helpful everyone is—whether it’s teammates or seniors.",
//   },
//   {
//     name: "Jaydeep",
//     role: "Developer Review",
//     review:
//       "Peer reviews and coding standards are taken seriously. My problem-solving and clean-code habits have improved a lot since joining.",
//   },
//   {
//     name: "Tarun Namdev",
//     role: "Team Culture",
//     review:
//       "The culture is collaborative but also respects personal time. Deadlines are set realistically so late nights are rare.",
//   },
//   {
//     name: "Chirag Shukla",
//     role: "Intern Experience",
//     review:
//       "I joined Brand Smashers a month ago as an intern, and it’s been a fantastic experience. The environment here is collaborative and inspiring, allowing me to learn, grow, and truly enhance my skills. Grateful to be part of such a dynamic team!",
//   },
//   {
//     name: "Mayank Rajpoot",
//     role: "Client Review",
//     review:
//       "Brandsmashers software development company delivers exceptional services. Their team expertise and dedication to client satisfaction are truly impressive. I highly recommend them for anyone seeking top-notch software solutions.",
//   },
//   {
//     name: "Priya Kumari",
//     role: "Client Review",
//     review:
//       "I was thoroughly impressed with their professionalism and expertise. The team at Brandsmashers demonstrated a deep understanding of our project requirements and delivered a top-notch software solution that exceeded our expectations.",
//   },
// ];

// export default function EmployeeTestimonials() {
//   return (
//     <section className="bg-gray-50 dark:bg py-16 sm:py-20 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Section Title */}
//         <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
//           <span className="text-black">Employee</span>{' '}
//           <span className="text-[#ff5010]">Testimonials</span>
//         </h2>
//         <p className="text-left text-black mb-12 max-w-3xl mx-auto text-lg sm:text-xl">
//           Hear what our team has to say about working at Brandsmashers Tech. We believe in appreciation, growth, and a great work culture.
//         </p>

//         {/* Carousel */}
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           spaceBetween={30}
//           slidesPerView={1}
//           className="pb-12"
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={i}>
//               <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
//                 <p className="text-left text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-6">
//                   “{t.review}”
//                 </p>
//                 <div className="text-left">
//                   <p className="font-bold text-gray-800 dark:text-white">{t.name}</p>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">{t.role}</span>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sagar Rai",
    role: "Intern Experience",
    review:
      "I joined as an intern and the mentorship I received has shaped me into a confident software engineer.",
  },
  {
    name: "Ayushi Namdev",
    role: "Software Developer",
    review:
      "Working at Brandsmashers Tech as a Software Developer was a great experience. I had the opportunity to work on exciting projects, collaborate with a skilled and supportive team, and grow both technically and professionally.",
  },
  {
    name: "Nisarg Shah",
    role: "Client Review",
    review:
      "BrandSmasher Tech is truly impressive! The team is professional, innovative, and always delivers on time. Highly recommend them!",
  },
  {
    name: "Virendra Kumar Dwivedi",
    role: "Developer – 1.5 years",
    review:
      "I’ve been a developer here for 1.5 years and the variety of projects keeps me motivated. Each sprint brings something new to learn.",
  },
  {
    name: "Vishakha Pawar",
    role: "First Company Experience",
    review:
      "This is my first company. I’m genuinely grateful for the opportunity to begin my journey here. The work culture is very positive and supportive.",
  },
  {
    name: "Jaydeep",
    role: "Developer Review",
    review:
      "Peer reviews and coding standards are taken seriously. My problem-solving and clean-code habits have improved a lot since joining.",
  },
  {
    name: "Tarun Namdev",
    role: "Team Culture",
    review:
      "The culture is collaborative but also respects personal time. Deadlines are set realistically so late nights are rare.",
  },
  {
    name: "Chirag Shukla",
    role: "Intern Experience",
    review:
      "I joined Brand Smashers a month ago as an intern, and it’s been a fantastic experience. The environment here is collaborative and inspiring.",
  },
  {
    name: "Mayank Rajpoot",
    role: "Client Review",
    review:
      "Brandsmashers delivers exceptional services. Their expertise and dedication to client satisfaction are truly impressive.",
  },
  {
    name: "Priya Kumari",
    role: "Client Review",
    review:
      "The team at Brandsmashers demonstrated deep understanding of our requirements and delivered a top-notch software solution.",
  },
];

export default function EmployeeTestimonials() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          <span className="text-black dark:text-white">Employee</span>{" "}
          <span className="text-[#ff5010]">Testimonials</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-lg sm:text-xl">
          Hear what our team and clients have to say about working with
          Brandsmashers Tech. We believe in appreciation, growth, and a culture
          of innovation.
        </p>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={1}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl max-w-3xl mx-auto">
                {/* Stars */}
                <div className="flex justify-start mb-4 text-[#ffb400]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.447a1 1 0 00.95.69h3.631c.969 0 1.371 1.24.588 1.81l-2.94 2.137a1 1 0 00-.364 1.118l1.12 3.447c.3.921-.755 1.688-1.54 1.118l-2.94-2.137a1 1 0 00-1.176 0l-2.94 2.137c-.784.57-1.838-.197-1.539-1.118l1.12-3.447a1 1 0 00-.364-1.118L2.81 8.874c-.783-.57-.38-1.81.588-1.81h3.631a1 1 0 00.95-.69l1.12-3.447z" />
                    </svg>
                  ))}
                </div>

                {/* Review */}
                <p className="text-left text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-6">
                  “{t.review}”
                </p>

                {/* Author */}
                <div className="text-left">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {t.name}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}