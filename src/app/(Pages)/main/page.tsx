"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Footer from "@/components/manual-ui/Footer";

// Define the type for the card data
interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  tryNowLink: string;
}

const cardData: CardData[] = [
  {
    title: "Journey Through the Solar System",
    description:
      "Embark on an interstellar adventure and explore the wonders of our solar system. Discover planets, moons, and the beauty of space.",
    imageUrl: "https://i.redd.it/rb4uyyz4crwa1.jpg",
    tryNowLink: "/solarsystem",
  },
  {
    title: "Constellations: A Celestial Map",
    description:
      "Unlock the secrets of the night sky as you hover over constellations. Learn their stories and navigate through the stars.",
    imageUrl:
      "https://i.ytimg.com/vi/2zPheO1e3Lc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcuvAc5Zs6ka025VhXK1yN8R28TA",
    tryNowLink: "/constellations",
  },
  {
    title: "Mythical Constellations Awaits",
    description:
      "Discover the mythical tales behind constellations. Dive deep into the legends that shaped our understanding of the cosmos.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/508/247/647/space-stars-carina-nebula-nebula-wallpaper-preview.jpg",
    tryNowLink: "constellationsinfo",
  },
  {
    title: "Asteroids: The Cosmic Wanderers",
    description:
      "Learn about the asteroids that traverse our solar system. Understand their origins and their impact on Earth and beyond.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/375/518/332/space-space-art-asteroids-asteroid-wallpaper-preview.jpg",
    tryNowLink: "/asteroids",
  },
  {
    title: "Discovering Satellites: Guardians of Space",
    description:
      "Dive into the world of satellites and learn how they help us understand our planet and the universe. Explore their functions and history.",
    imageUrl:
      "https://img.freepik.com/premium-photo/satellites-glowing-earth-s-atmosphere-ai-technology-generated-image_1112-12065.jpg",
    tryNowLink: "/satellites",
  },
  {
    title: "Galactic Quiz: Test Your Knowledge",
    description:
      "Put your space knowledge to the test! Participate in our cosmic quiz and challenge yourself with questions about the universe.",
    imageUrl:
      "https://i.pinimg.com/originals/ee/7d/bc/ee7dbc369fd1cf1cce4714002480a8ad.jpg",
    tryNowLink: "/spacequiz",
  },
];

const ThreeDCard: React.FC = () => {
  return (
    <>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 mt-10 text-black">
        {cardData.map((card, index) => (
          <CardContainer className="inter-var" key={index}>
            <CardBody className=" bg-transparent border-white relative group/card dark:hover:shadow-2xl bg-blend-darken w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-md hover:shadow-white">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-white"
              >
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
                  href={card.tryNowLink}
                  className="flex items-center justify-center px-4 py-2 w-full h-16 rounded-xl bg-transparent backdrop-blur-sm border-white text-white text-xl font-bold border-2 hover:bg-white hover:text-black hover:shadow-slate-500 shadow-sm"
                >
                  Launch
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}

        <div className="-z-10">
          <ShootingStars
            maxSpeed={10}
            minDelay={2000}
            starColor="white"
            trailColor="blue"
            starWidth={60}
          />
          <StarsBackground maxTwinkleSpeed={5} starDensity={0.0009} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThreeDCard;
