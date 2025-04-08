
import React from 'react';
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';

interface SocialProps {
  vertical?: boolean;
  className?: string;
}

const SocialLinks = ({ vertical = false, className = '' }: SocialProps) => {
  return (
    <div 
      className={`flex ${vertical ? 'flex-col space-y-5' : 'space-x-5'} ${className}`}
    >
      <a 
        href="mailto:ruslanbori@gmail.com" 
        className="text-slate hover:text-green transition-colors"
        aria-label="Email"
        title="Email: ruslanbori@gmail.com"
      >
        <Mail size={20} />
      </a>
      <a 
        href="tel:+972508145254" 
        className="text-slate hover:text-green transition-colors"
        aria-label="Phone"
        title="Phone: 050-8145254"
      >
        <Phone size={20} />
      </a>
      <a 
        href="https://linkedin.com/in/ruslanbori" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate hover:text-green transition-colors"
        aria-label="LinkedIn"
        title="LinkedIn: linkedin.com/in/ruslanbori"
      >
        <Linkedin size={20} />
      </a>
      <a 
        href="https://github.com/Bewdiful" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate hover:text-green transition-colors"
        aria-label="GitHub"
        title="GitHub: github.com/Bewdiful"
      >
        <Github size={20} />
      </a>
      <a 
        href="https://bewdiful.github.io/Ruslan-Borisevich-portfolio/index.html" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate hover:text-green transition-colors"
        aria-label="Portfolio"
        title="Portfolio: bewdiful.github.io/Ruslan-Borisevich-portfolio"
      >
        <Globe size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
