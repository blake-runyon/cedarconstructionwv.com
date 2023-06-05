import { IconDefinition, faHome, faHammer, faBrush } from "@fortawesome/free-solid-svg-icons";


interface Service {
  name: string;
  description: string;
  icon: IconDefinition;
}

export const services: Service[] = [
  {
    name: "Remodeling",
    description: "Whether it's framing, tile, demo, or whatever it may be start to finish we can do it.",
    icon: faHome
  },
  {
    name: "Roofing",
    description: "We can help you with your roofing project.",
    icon: faHammer
  },
  {
    name: "Painting",
    description: "We can help you with any kind of painting project.",
    icon: faBrush
  }
];