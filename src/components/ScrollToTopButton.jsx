import React from "react";
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = ({ onClick }) => (
  <div className="fixed bottom-8 right-8">
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 transform"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className="text-white" />
    </button>
  </div>
);

export default ScrollToTopButton;
