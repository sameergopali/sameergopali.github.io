import React from "react";
import { Github, Linkedin } from "lucide-react";

const SocialLinks = () => (
  <section className="flex justify-center gap-6 mb-8">
   
   
    <a 
      href="https://github.com/sameergopali" 
      className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300 hover:scale-110 transform"
      aria-label="GitHub"
    >
      <Github className="text-gray-400 hover:text-white transition-colors duration-300" size={16} />
    </a>
    <a 
      href="https://www.linkedin.com/in/sameergopali/" 
      className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300 hover:scale-110 transform"
      aria-label="LinkedIn"
    >
      <Linkedin className="text-gray-400 hover:text-white transition-colors duration-300" size={16} />
    </a>
  </section>
);

export default SocialLinks;
