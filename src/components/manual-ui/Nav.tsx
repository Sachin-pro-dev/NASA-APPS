"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";



export function Nav() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Show the navbar if the cursor is near the top 50px of the window
      if (e.clientY < 430) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed max-w-xl mx-auto z-10 transition-transform duration-500",
        isVisible ? "translate-y-1" : "-translate-y-20", // Hides/shows the navbar
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Cosmic Navigator">
          <ProductItem
      title="Cosmic Navigator"
      href="/main"
      src="/image.png"
      description="A celestial gateway guiding you through the wonders of space, from distant galaxies to near-Earth asteroids."
    />
        </MenuItem>
        <Link href={"/"}>
          <Image src={"/PLOREX.png"} alt="PLOREX logo" width={30} height={40}/>
        </Link>
        <MenuItem setActive={setActive} active={active} item="X-plore">
  <div className="text-sm grid grid-cols-3 gap-6 p-2">
    <ProductItem
      title="Solar System"
      href="/solarsystem"
      src="https://c4.wallpaperflare.com/wallpaper/486/410/394/5bd3321100531-wallpaper-preview.jpg"
      description="Explore detailed 3D models of the solar system's planets and moons."
    />
    <ProductItem
      title="Constellations"
      href="/constellations"
      src="https://wallpapers.com/images/hd/4k-ultra-hd-galaxy-star-constellation-xeesy5birtn1pv0u.jpg"
      description="Discover the night sky and learn about various constellations visible from Earth."
    />
    <ProductItem
      title="Constellations Info"
      href="/constellationsinfo"
      src="https://c4.wallpaperflare.com/wallpaper/80/655/797/space-wallpaper-preview.jpg"
      description="Get detailed information about constellations, their history, and mythology."
    />
    <ProductItem
      title="Asteroids"
      href="/asteroids"
      src="https://wallpapercave.com/wp/wp2682938.jpg"
      description="Learn about the asteroids in our solar system and their potential impact on Earth."
    />
    <ProductItem
      title="Satellites"
      href="/satellites"
      src="https://images7.alphacoders.com/807/thumb-1920-807182.jpg"
      description="Explore the groundbreaking satellites that enhance our understanding of Earth and the universe."
     />
    <ProductItem
      title="Cosmic Quiz"
      href="/spacequiz"
      src="https://cdn.wallpapersafari.com/18/9/uRQOg4.png"
      description="Challenge yourself with fun quizzes about the cosmos and test your space knowledge!"
    />
  </div>
</MenuItem>

      </Menu>
    </div>
  );
}
