import { faBook, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

interface Socials {
  icon: any;
  header: string;
  description: string;
  button: string;
  link: string;
}

export const socials: Socials[] = [
  {
    icon: faEnvelope,
    header: "Email",
    description: "Email us with any questions, concerns, or billing inquiries.",
    button: "Email Us",
    link: "emailto:test@gmail.com"
  },
  {
    icon: faPhone,
    header: "Call",
    description: "Need help now? Call or text us!",
    button: "Call Us",
    link: "call:3047777777"
  },
  {
    icon: faBook,
    header: "Facebook",
    description: "Want to see what we are up to? Check us out on facebook.",
    button: "FB Page",
    link: "emailto:test@gmail.com"
  }
]