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
  {
    title: "Latest Space News: Stay Informed",
    description:
      "Stay up-to-date with the latest developments in space exploration and astronomy. Discover breaking news, mission updates, and scientific discoveries that shape our understanding of the universe.",
    imageUrl:
      "https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    tryNowLink: "/spacenews",
  },
  {
    title: "Galactic Adventure: Space Game",
    description:
      "Embark on an exciting journey through the cosmos in this interactive space game! Navigate your spaceship, complete missions, and uncover hidden treasures while learning about the wonders of the universe. Are you ready for the challenge?",
    imageUrl:
      "data:image/jpeg;base64,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",
    tryNowLink: "/spacegame"
  },
];

const ThreeDCard: React.FC = () => {
  return (
    <>
      <div className="grid  md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 mt-10 m-[200px] text-black">
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
