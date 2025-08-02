import React from 'react';
import { Helmet } from 'react-helmet';

import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projectlist = [
    {
      id: 1,
      title: "How to Build a Powerful Stock Analysis MCP Server: 4 Advanced Features",
      excerpt: "Welcome to my guide on building an advanced MCP stock analysis server! In Part 1, we laid the foundation for [...]",
      tags: ["Generative AI", "MCP"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Building a Real-Time Chat Application with React and Firebase",
      excerpt: "In this tutorial, we'll build a real-time chat application using React and Firebase. You'll learn how to set up Firebase, create a chat UI, and implement real-time messaging.",
      tags: ["React", "Firebase", "Chat"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop&auto=format",
    }
  ];

    return (
      <>
        <Helmet>
          <title>Projects | Sameer Gopali</title>
        </Helmet>
        <div className="mx-auto px-4 py-8 min-h-screen bg-gray-900 text-gray-100">
          <h2 className="text-2xl text-white mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectlist.map((post) => (
              <ProjectCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </>
    );
};


export default Projects;
