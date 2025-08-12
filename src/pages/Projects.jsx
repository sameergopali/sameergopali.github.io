import React from 'react';
import { Helmet } from 'react-helmet';

import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projectlist = [
    {
      id: 1,
      title: "ChatWithPDF",
      excerpt: "A desktop PDF reader that lets you read PDFs, and chat with AI about the content. Built with Electron for the desktop shell, React for the UI, and LangChain for RAG.",
      tags: ["React","TypeScript", "Electron","LangChain", "RAG"],
      image: " https://raw.githubusercontent.com/sameergopali/ChatWithPDF/refs/heads/main/demo/demo-pdf.gif",
      link: "https://github.com/sameergopali/ChatWithPDF"
    },
    {
      id: 2,
      title: "ClinicalTextAnnotate",
      excerpt: "A robust tool for creating annotated datasets from patient-provider conversations. This project is designed to assist researchers, data scientists, and NLP engineers in preparing high-quality data for training large language models (LLMs) in the healthcare domain.",
      tags: ["React", "Flask", "Presidio","BERT"],
      image: "https://raw.githubusercontent.com/sameergopali/ClinicalTextAnnotate/refs/heads/main/assets/screenshot.jpeg",
      link:"https://github.com/sameergopali/ClinicalTextAnnotate"
    },
    {
      id: 3,
      title: "TidyTabs",
      excerpt: "A Chrome extension that automatically groups tabs based on URL patterns and domain names with intelligent group management.",
      tags: ["JavaScript", "Chrome Extension", "Tab Grouping"],
      image: "https://raw.githubusercontent.com/sameergopali/TidyTabs/refs/heads/main/assets/demo.gif",
      link: "https://github.com/sameergopali/TidyTabs"
    },
    {
      id: 4,
      title: "Skeleton-Animation",
      excerpt: "A C++ OpenGL application that demonstrates skeleton-based character animation using the Assimp library for 3D model loading and animation playback.",
      tags: ["C++", "OpenGL", "Animation","Shader Programming"],
      image: "https://raw.githubusercontent.com/sameergopali/skeleton-animation/refs/heads/main/demo/demo-anim.gif",
      link: "https://github.com/sameergopali/skeleton-animation"
    },

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
