import React from "react";

// Importing assets
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import javascript from '../../../public/javascript.png'
import reactImage from '../../../public/react.png'
import nextjs from '../../../public/nextjs.png'
import graphql from '../../../public/graphql.png'
import github from '../../../public/github.png'
import tailwind from '../../../public/tailwind.png'

// Import StaticImageData type from next/image
import { StaticImageData } from 'next/image';

// Interface for the tech item
interface Tech {
  id: number;
  src: string | StaticImageData;
  title: string;
  style: string;
}

const Experience: React.FC = () => {
  const techs: Tech[] = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next JS",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div className="bg-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={typeof src === 'string' ? src : src.src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
