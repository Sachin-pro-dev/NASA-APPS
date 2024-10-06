import Link from "next/link";

interface Developer {
  name: string;
  linkedin: string;
}

const developers: Developer[] = [
  {
    name: "Sachin Baluragi",
    linkedin: "https://www.linkedin.com/in/sachinbaluragi/",
  },
  {
    name: "Rahul Jadvani",
    linkedin: "https://www.linkedin.com/in/rahul-jadvani-741751208",
  },
  {
    name: "Sai Jadhav",
    linkedin: "https://www.linkedin.com/in/sai-jadhav-371871200/",
  },
  { name: "Ganna Shree", linkedin: "https://www.linkedin.com/in/gaana-shree-s-25sep2004/" },
  {
    name: "Ashwini Jadhav",
    linkedin: "https://www.linkedin.com/in/ashwini-jadhav-a54869318/",
  },
  {
    name: "Mohammed Yaseen Sutar",
    linkedin:
      "https://www.linkedin.com/in/mohammedyaseen-sutar-6b0a9b195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white  flex justify-between w-[100%] h-[750px] ">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 "> */}

      <iframe
        src="https://my.spline.design/launchartemisrocket-17542ab2c3b035a2b0a5cf58a5bb8417/"
        frameBorder="0"
        width="1400px"
        height="750px"
      ></iframe>

      <div className="w-full md:w-1/2 flex justify-center items-center flex-col text-center" >
        <h3 className="text-5xl font-bold mb-8 text-blue-300 text-center">
          Our Stellar Team
        </h3>
        <div className="grid grid-cols-2 gap-4 ml-5">
          {developers.map((dev, index) => (
            <div key={index} className="mb-2">
              <p className="font-bold text-2xl text-blue-100">{dev.name}</p>
              <Link
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                LinkedIn
                
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* </div> */}
    </footer>
  );
}
// ======================================================
// 'use client'

// import React from 'react'
// import Link from 'next/link'
// // import { GlobeDemo } from "./globe-demo"

// interface Developer {
//   name: string;
//   linkedin: string;
// }

// const developers: Developer[] = [
//   { name: 'Alice Johnson', linkedin: 'https://www.linkedin.com/in/alice-johnson' },
//   { name: 'Bob Smith', linkedin: 'https://www.linkedin.com/in/bob-smith' },
//   { name: 'Carol Williams', linkedin: 'https://www.linkedin.com/in/carol-williams' },
//   { name: 'David Brown', linkedin: 'https://www.linkedin.com/in/david-brown' },
//   { name: 'Eva Davis', linkedin: 'https://www.linkedin.com/in/eva-davis' },
//   { name: 'Frank Miller', linkedin: 'https://www.linkedin.com/in/frank-miller' },
// ]

// export default function OrreryFooter() {
//   return (
//     <footer className="bg-black h-[800px] text-white py-8  relative overflow-hidden">

//       <div className="container mx-auto px-4 relative ">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-96">
//           <div className="w-full md:w-1/2 mb-8 md:mb-0">
//             <div className="w-full h-[400px] md:h-[500px] ">
//               {/* <GlobeDemo /> */}
//               <iframe src='https://my.spline.design/launchartemisrocket-17542ab2c3b035a2b0a5cf58a5bb8417/' frameBorder='5' width='1000px' height='700px' className='m-[-100px]'></iframe>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2">
//             <h3 className="text-xl font-bold mb-4 text-blue-300">Our Stellar Team</h3>
//             <div className="grid grid-cols-2 gap-4">
//               {developers.map((dev, index) => (
//                 <div key={index} className="mb-2">
//                   <p className="font-medium text-blue-100">{dev.name}</p>
//                   <Link
//                     href={dev.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:text-blue-300 transition-colors"
//                   >
//                     LinkedIn
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 text-center text-sm text-blue-200">
//           <p>&copy; {new Date().getFullYear()} Orrery Web App. Exploring the cosmos.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }
