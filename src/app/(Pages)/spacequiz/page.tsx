"use client";

import Image from "next/image";
import React from "react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

// Define the type for the card data
interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  tryNowLink: string;
}

const cardData: CardData[] = [
  {
    title: "Solar System Quiz",
    description: "Test your knowledge about the solar system!",
    imageUrl: "/Solar.jpg",
    tryNowLink: "/solarsystemquiz", // Make sure this route exists
  },
  {
    title: "Asteroids Quiz",
    description: "How much do you know about asteroids?",
    imageUrl: "/asteroids.png",
    tryNowLink: "/asteroidsquiz", // Make sure this route exists
  },
  {
    title: "Stars Quiz",
    description: "Explore your knowledge of stars!",
    imageUrl: "/Stars.jpg",
    tryNowLink: "/starsquiz", // Make sure this route exists
  },
  {
    title: "Satellite Quiz",
    description: "How well do you understand satellites?",
    imageUrl: "/Satellite.jpg",
    tryNowLink: "/satellitequiz", // Make sure this route exists
  },
];

const ThreeDCard: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 mt-10 text-black">
      {cardData.map((card, index) => (
        <CardContainer className="inter-var" key={index}>
          <CardBody className="bg-transparent border-white relative group/card dark:hover:shadow-2xl bg-blend-darken w-auto sm:w-[22rem] h-auto rounded-xl p-6 border shadow-md hover:shadow-white">
            <CardItem translateZ="50" className="text-2xl font-bold text-white">
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white/90 text-sm max-w-sm mt-2 font-semibold"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.imageUrl}
                height={800}
                width={800}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={`Thumbnail for ${card.title}`}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={60}
                as={Link}
                href={card.tryNowLink} // Use the string link for routing
                className="flex items-center justify-center px-4 py-2 w-full h-16 rounded-xl bg-transparent backdrop-blur-sm border-white text-white text-xl font-bold border-2 hover:bg-white hover:text-black hover:shadow-slate-500 shadow-sm"
              >
                Launch
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}

      <div className="-z-10">
        {/* <ShootingStars maxSpeed={10} minDelay={2000} starColor="white" trailColor="blue" starWidth={60} /> */}
        {/* <StarsBackground maxTwinkleSpeed={5} starDensity={0.0009} /> */}
      </div>
    </div>
  );
};

export default ThreeDCard;
