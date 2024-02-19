import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Balance",
    href: "/projects",
    tags: ["Logo design and Mockup"],
    image: {
      LIGHT: "/images/projects/noora/can.png",
      DARK: "/images/projects/noora/can.png",
    },
  },
  {
    index: 1,
    title: "Anime app",
    href: "/projects",
    tags: ["Front End for anime app"],
    image: {
      LIGHT: "/images/projects/noora/app1.png",
      DARK: "/images/projects/noora/app1.png",
    },
  },
  {
    index: 2,
    title: "Billig",
    href: "/projects",
    tags: ["Front End for billing app"],
    image: {
      LIGHT: "/images/projects/noora/app2.png",
      DARK: "/images/projects/noora/app2.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Balance",
    favicon: "",
    imageUrl: ["/images/projects/noora/can.png"],
    description: "Logo design and Mockup for an imaginary Brand.",
    sourceCodeHref: "",
  },
  {
    name: "Anime app",
    favicon: "",
    imageUrl: ["/images/projects/noora/app1.png"],
    description: "Front End for anime app",
    sourceCodeHref:
      "https://www.figma.com/file/w2xneowSdYOlgHoeKguC6v/Untitled?type=design&node-id=0-1&mode=design&t=CFBO6hGoRmxarCDy-0",
  },
  {
    name: "Billig",
    favicon: "",
    imageUrl: ["/images/projects/noora/app2.png"],
    description: "Front End for billing app",
    sourceCodeHref:
      "https://www.figma.com/file/0AHtqoB0C2BsVE9lWX37eu/Untitled?type=design&node-id=0-1&mode=design&t=bEkS8wSrToRV1xcR-0",
  },
  {
    name: "Pet App",
    favicon: "",
    imageUrl: ["/images/projects/noora/app3.png"],
    description: "Front End for pet app",
    sourceCodeHref:
      "https://www.figma.com/file/woljapNubGsBlnB3fa5P57/Untitled?type=design&node-id=0-1&mode=design&t=csaCb4VXdG0Sdgel-0",
  },
];
