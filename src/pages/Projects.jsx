import React from 'react';
import { Helmet } from 'react-helmet';

import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projectlist = [
    {
      id: 1,
      title: "ClinicalTextAnnotate",
      excerpt: "A robust tool for creating annotated datasets from patient-provider conversations. This project is designed to assist researchers, data scientists, and NLP engineers in preparing high-quality data for training large language models (LLMs) in the healthcare domain.",
      tags: ["React", "Flask", "Presidio","BERT"],
      image: "https://raw.githubusercontent.com/sameergopali/ClinicalTextAnnotate/refs/heads/main/assets/screenshot.jpeg",
      link:"https://github.com/sameergopali/ClinicalTextAnnotate"
    },
    {
      id: 2,
      title: "TidyTabs",
      excerpt: "A Chrome extension that automatically groups tabs based on URL patterns and domain names with intelligent group management.",
      tags: ["JavaScript", "Chrome Extension", "Tab Grouping"],
      image: "https://raw.githubusercontent.com/sameergopali/TidyTabs/refs/heads/main/assets/demo.gif",
      link: "https://github.com/sameergopali/TidyTabs"
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
