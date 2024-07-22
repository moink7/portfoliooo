import React from "react";

// Importing assets
import Dicee from "../../../public/portfolio/Dicee.png";
import dashboardd from "../../../public/portfolio/Dashboardd.png";
import installNode from "../../../public/portfolio/installNode.jpg";
import navbar from "../../../public/portfolio/navbar.jpg";
import reactParallax from "../../../public/portfolio/reactParallax.jpg";
import reactSmooth from "../../../public/portfolio/reactSmooth.jpg";
import reactWeather from "../../../public/portfolio/reactWeather.jpg";

// Import StaticImageData type from next/image
import { StaticImageData } from 'next/image';
import { url } from "inspector";

// Interface for the portfolio item
interface PortfolioItem {
  id: number;
  src: string | StaticImageData;
  url1: string
  url2: string

}

const Portfolio: React.FC = () => {
  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      src: dashboardd,
      url1: 'https://admin-dashboard-flame-kappa-34.vercel.app/',
      url2: 'https://github.com/moink7/admin-dashboard'
    },
    {
      id: 2,
      src: Dicee,
      url1: "",
      url2: 'https:'
    },
    {
      id: 3,
      src: navbar,
      url1: "",
      url2: 'https:'
    },
  ];

  return (
    <div className="bg-black w-full md:h-screen text-white">
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
  {portfolios.map(({ id, src, url1, url2 }) => (
    <div key={id} className="shadow-md shadow-primary rounded-lg">
      <img
        src={typeof src === 'string' ? src : src.src}
        alt="Portfolio Item"
        className="rounded-md duration-200 hover:scale-105"
      />
      <div className="flex items-center justify-center">
        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
          Demo
        </button>
        <button
        onClick={() => window.location.href = url1}
        className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105"
        >Demo</button>

        <button
        onClick={() => window.location.href = url2}
        className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105"
        >Code</button>
        
      </div>
    </div>
  ))}
</div>
</div>
    </div>
  );
};

export default Portfolio;
