import React from "react";

const AboutMeSection = () => (
    <section className="mb-8">
        <h2 className="text-2xl  text-white mb-4">About Me</h2>
        <ul>
            <li className="flex items-center text-gray-300">
                <span className="text-blue-400">🌍</span>
                <span className="ml-2">Based in Texas, USA</span>
            </li>
            <li className="flex items-center text-gray-300">
                <span className="text-blue-400">🏢</span>
                <span className="ml-2">Software Developement Engineer</span>
            </li>
            <li className="flex items-center text-gray-300">
                <span className="text-blue-400">🎓</span>
                <span className="ml-2">Masters in Computer Science (2022-2024)</span>
            </li>
        </ul>
    </section>
);

export default AboutMeSection;
