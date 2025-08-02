import React from 'react';
import { Helmet } from 'react-helmet';

import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projectlist = [
    {
      id: 1,
      title: "Lorem Ipsum",
      excerpt: "Lorem Ipsum",
      tags: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      excerpt: "Lorem Ipsum",
      tags: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
            {projectlist.map((post) => (
              <ProjectCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </>
    );
};


export default Projects;
