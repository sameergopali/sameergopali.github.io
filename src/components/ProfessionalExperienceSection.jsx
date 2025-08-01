import React from "react";

const experiences = [
    {
        title: "Backend Engineer, Fetch Rewards",
        period: "2025-present",
    },
    {
        title: "Research Associate at Yale",
        period: "2024-2025",
    },
    {
        title: "Software Engineer Internship, EBSCO Information Services",
        period: "Summer Internship,2023",
    },
    {
        title: "Software Engineer at LogPoint",
        period: "2017-2022",
    },
];

const ProfessionalExperienceSection = () => (
    <section className="mb-8">
        <h2 className="text-2xl text-white mb-4">Professional Experience</h2>
        <ul className="space-y-1 list-disc list-inside">
            {experiences.map((exp, idx) => (
                <li className="text-gray-300" key={idx}>
                    <span className="font-medium">
                        {exp.title} ({exp.period})
                    </span>
                </li>
            ))}
        </ul>
    </section>
);

export default ProfessionalExperienceSection;
