import React from "react";

const AboutMeSection = () => {
    const aboutlist = [
        {
            icon: "🌍",
            text: "Based in Texas, USA"
        },
        {
            icon: "🏢",
            text: "Software Development Engineer"
        },
        {
            icon: "🎓",
            text: "Masters in Computer Science, University of Alabama in Huntsville (2022-2024)"
        },
        {
            icon: "🎓",
            text: "Bachelors in Electronics Engineering, IOE, Pulchowk Campus, Nepal (2013-2017)"
        }
    ];

    return (
    <section className="mb-8">
        <h2 className="text-2xl  text-white mb-4">About Me</h2>
        <ul>
            {aboutlist.map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                    <span className="text-blue-400">{item.icon}</span>
                    <span className="ml-2">{item.text}</span>
                </li>
            ))}
        </ul>
    </section>
    );
};

export default AboutMeSection;
