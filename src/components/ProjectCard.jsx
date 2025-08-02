import React from "react";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ post }) => (
  <a href={post.link} target="_blank" rel="noopener noreferrer" className="group block">
  <article 
    className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 relative"
  >
    {/* Image Section */}
    <div className="relative h-48 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br opacity-90`}></div>
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Floating Tags */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    {/* Content Section */}
    <div className="p-6">
      {/* Title */}
      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
        {post.title}
      </h2>
      {/* Excerpt */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
        {post.excerpt}
      </p>
     
    </div>
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none"></div>
  </article>
  </a>
);

export default ProjectCard;
