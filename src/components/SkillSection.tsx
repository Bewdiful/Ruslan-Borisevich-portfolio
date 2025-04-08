
import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-navy mb-3">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full bg-slate-lightest text-navy hover:bg-navy hover:text-white-custom transition-colors duration-300 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL", "Python"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Redux", "Redux Toolkit", "Shadcn-UI", "Tailwind CSS", "Bootstrap", "Vite"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Mongoose ODM"]
    },
    {
      title: "DevOps & Deployment",
      skills: ["Docker", "Kubernetes", "CI/CD", "Git", "GitHub"]
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-10 text-navy text-center">Technical Skills</h2>
      <div>
        {skillCategories.map((category, index) => (
          <SkillCategory 
            key={index} 
            title={category.title} 
            skills={category.skills} 
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
