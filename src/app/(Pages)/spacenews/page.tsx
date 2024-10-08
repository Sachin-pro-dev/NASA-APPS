"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Search, Rocket, Satellite } from "lucide-react";
import "@fontsource/orbitron"; // Import Orbitron font

import Image from "next/image";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface Article {
  id: number;
  title: string;
  url: string;
  news_site: string;
  summary: string;
  image_url: string;
}

export default function SpaceNewsPage() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v4/articles/"
        );
        setNews(response.data.results || []);
      } catch (error) {
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  const filteredNews = news.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      article.news_site.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    ...Array.from(
      new Set(news.map((article) => article.news_site.toLowerCase()))
    ),
  ];

  return (
    <div className="min-h-screen text-gray-100 font-semibold text-3xl font-orbitron mt-[100px] tracking-wider">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-7xl font-bold mb-8 text-center text-blue-400 ">
          Space News Explorer
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-500 rounded-xl h-[50px]  "
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px] bg-gray-800 text-gray-100 border-gray-700 h-[50px] rounded-xl">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-gray-100 border-gray-700 ">
              {categories.map((category) => (
                <SelectItem
                  key={category}
                  value={category}
                  className="focus:bg-gray-700"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
          </div>
        ) : error ? (
          <div className="text-center text-red-400">{error}</div>
        ) : (
          <div className="space-y-6 ">
            {filteredNews.map((article) => (
              <Card
                key={article.id}
                className="flex flex-col md:flex-row bg-gray-800 border-gray-700 h-[300px] rounded-2xl"
              >
                <div className="md:w-1/3">
                  <Image
                    src={article.image_url}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="w-full h-48 md:h-full object-cover rounded-tl-2xl rounded-bl-2xl"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-400">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center mb-2">
                      {article.news_site.toLowerCase().includes("rocket") ? (
                        <Rocket className="mr-2 h-4 w-4 text-blue-400" />
                      ) : (
                        <Satellite className="mr-2 h-4 w-4 text-blue-400" />
                      )}
                      <p className="text-sm text-gray-400">
                        {article.news_site}
                      </p>
                    </div>
                    <p className="text-sm text-gray-300">{article.summary}</p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        )}

        {filteredNews.length === 0 && !loading && !error && (
          <div className="text-center text-gray-400">
            No articles found matching your criteria.
          </div>
        )}
      </div>
      {/* <StarsBackground className="-z-10"/>
       */}
      <ShootingStars
        className="-z-10"
        maxSpeed={10}
        minDelay={2000}
        starColor="white"
        trailColor="blue"
        starWidth={60}
      />
    </div>
  );
}
