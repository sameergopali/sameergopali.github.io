import React from "react";

const skills = [
    {
        category: "Programming Languages",
        items: ["Python", "JavaScript", "Java", "Go", "React"],
    },
    {
        category: "AI/ML/LLM Implementation",
        items: ["Agents","RAG","Integration", "Evaluations", "Model Training"],
    },
    {
        category: "Data Pipeline Engineering",
        items: ["ETL", "Data Processing", "Stream Processing"],
    },
    {
        category: "Performance Optimization",
        items: ["System Performance", "Caching", "Load Balancing"],
    },
    {
        category: "API Engineering",
        items: ["REST", "GraphQL", "gRPC", "Microservices", "MCP"],
    },
    {
        category: "Database Design",
        items: ["SQL", "NoSQL", "Data Modeling"],
    },
    {
        category: "Software Architecture",
        items: ["System Design", "Design Patterns"],
    },
    {
        category: "Cloud Computing",
        items: ["AWS", "Azure", "Docker", "Kubernetes"],
    },
];

const SkillsSection = () => (
    <section className="mb-8">
        <h2 className="text-2xl text-white mb-4">Skills</h2>
        <ul className="space-y-1 text-gray-300 list-disc list-inside">
            {skills.map((skill) => (
                <li key={skill.category}>
                    <span className="font-medium text-white">{skill.category}:</span>{" "}
                    {skill.items.join(", ")}
                </li>
            ))}
        </ul>
    </section>
);

export default SkillsSection;
