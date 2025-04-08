
import React from 'react';
import SocialLinks from './SocialLinks';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white-custom py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-playfair mb-4 text-white-custom">Ruslan Borisevich</h3>
            <p className="text-slate-light mb-6 text-sm">
              Full-stack developer passionate about creating robust and user-friendly web applications.
            </p>
            <SocialLinks />
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair mb-4 text-white-custom">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-slate-light hover:text-green transition-colors">Home</a>
              </li>
              <li>
                <a href="/projects" className="text-slate-light hover:text-green transition-colors">Projects</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-playfair mb-4 text-white-custom">Stay Updated</h3>
            <p className="text-slate-light mb-4 text-sm">Subscribe for the latest updates on my projects and articles.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 flex-grow bg-navy-light text-white-custom text-sm rounded-l focus:outline-none focus:ring-1 focus:ring-green"
                required
              />
              <button
                type="submit"
                className="bg-green text-navy-light px-4 py-2 rounded-r hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-navy-light"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-navy-light text-center text-sm text-slate">
          <p>© {currentYear} Ruslan Borisevich. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
