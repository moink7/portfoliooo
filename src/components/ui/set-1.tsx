import Image from "next/image";
import { HoverEffect } from "./card-hover-effect"

import typescript from "../../../public/typescript.png"

export function CardStack() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "TypeScript",
    description:
      "A syntactic superset of JavaScript which adds static typing.",
    link: "",
  },
  {
    title: "C++",
    description:
      "An object-oriented programming language which gives a clear structure to programs.",
    link: "",
  },
  {
    title: "React JS",
    description:
      "A open-source front-end JavaScript library for building user interfaces based on components.",
    link: "",
  },
  {
    title: "Node JS",
    description:
      "A runtime enviornment that developers use JavaScript to write command line tools and for server-side scripting.",
    link: "",
  },
  {
    title: "Express JS",
    description:
      "A back end web application framework for building RESTful APIs with Node.js.",
    link: "",
  },
  {
    title: "MongoDB/ PostgreSQL",
    description:
      "A database used to store, maintain, and access data, and they can be used for a wide range of activities.",
    link: "",
  },
  
];
