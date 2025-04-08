
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  features,
  delay = 0 
}: ProjectProps) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] animate-fade-in"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-navy tracking-tight">{title}</h3>
        
        <p className="text-slate text-sm leading-relaxed">{description}</p>
        
        <div className="pt-2">
          <h4 className="text-sm font-semibold text-navy mb-2">Key Features:</h4>
          <ul className="list-disc list-inside text-sm text-slate space-y-1 ml-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm">{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-slate-lightest text-navy font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center space-x-4 pt-4">
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-navy hover:text-green transition-colors text-sm font-medium"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-navy hover:text-green transition-colors text-sm font-medium"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
