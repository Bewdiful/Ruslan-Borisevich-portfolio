import React, { useEffect, useState } from 'react';
import SocialLinks from '@/components/SocialLinks';
import SkillSection from '@/components/SkillSection';
import ContactSection from '@/components/ContactSection';
import { ArrowRight, Award, GraduationCap, Languages, X } from 'lucide-react';

const Index = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal');
    sections.forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const toggleCertificate = () => {
    setShowCertificate(!showCertificate);
  };

  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex flex-col justify-center pt-16 pb-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 px-6 lg:px-0">
              <p className="text-green font-mono">Hi, my name is</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-tight">
                Ruslan Borisevich
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate leading-tight">
                Full-Stack Web Developer
              </h2>
              <p className="text-slate max-w-xl leading-relaxed">
                I specialize in building exceptional digital experiences. Currently, I'm focused on creating accessible, 
                user-friendly applications with modern web technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-navy text-white-custom rounded-md flex items-center justify-center space-x-2 hover:bg-navy-light transition-colors"
                >
                  <span>View Projects</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-green text-green rounded-md flex items-center justify-center hover:bg-green/10 transition-colors"
                >
                  Get In Touch
                </a>
                <button
                  onClick={toggleCertificate}
                  className="px-8 py-4 bg-green text-white font-medium rounded-md flex items-center justify-center hover:bg-green/90 transition-colors"
                >
                  <span>View Certificate</span>
                  <Award size={16} className="ml-2" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex justify-center reveal">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-green to-blue-400 absolute inset-0 blur-2xl opacity-20"></div>
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                  <img 
                    src="/lovable-uploads/00402ef1-9586-4d3c-af67-bc3c4e49ecd9.png" 
                    alt="Ruslan Borisevich" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-lightest reveal" id="about">
        <div className="container mx-auto max-w-7xl px-6 lg:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate leading-relaxed">
                I am a passionate Full-Stack Web Developer with a strong foundation in modern web technologies. 
                As a recent graduate with a B.Sc. in Software Engineering from Sami Shamoon College of Engineering, 
                I bring both academic knowledge and practical experience in developing robust web applications.
              </p>
              <p className="text-slate leading-relaxed">
                My journey in web development has equipped me with expertise in JavaScript, TypeScript, 
                React.js, Node.js, and various other technologies that enable me to build end-to-end solutions. 
                I'm passionate about creating intuitive user interfaces and efficient backend systems.
              </p>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-navy mb-4">Languages I Speak</h3>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center space-x-2">
                    <Languages size={20} className="text-green" />
                    <span className="text-slate font-medium">English (Fluent)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Languages size={20} className="text-green" />
                    <span className="text-slate font-medium">Russian (Fluent)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Languages size={20} className="text-green" />
                    <span className="text-slate font-medium">Hebrew (Fluent)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-navy text-white-custom mt-1">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-1">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-navy">B.Sc. Software Engineering</h4>
                        <p className="text-sm text-slate">Sami Shamoon College of Engineering (SCE), Israel</p>
                        <p className="text-sm text-slate">2019 - 2023</p>
                        <button 
                          onClick={toggleCertificate}
                          className="mt-2 text-sm text-green hover:underline flex items-center"
                        >
                          <span>View Certificate</span>
                          <ArrowRight size={12} className="ml-1" />
                        </button>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy">Full High School Diploma (Bagrut)</h4>
                        <p className="text-sm text-slate">Makif Z High School, Ashdod, Israel</p>
                        <p className="text-sm text-slate">2009 - 2015</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-navy text-white-custom mt-1">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-1">Certifications</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-navy">The Complete Full-Stack Web Development Bootcamp</h4>
                        <p className="text-sm text-slate">Dr. Angela Yu</p>
                        <p className="text-sm text-slate">2025</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-navy">Docker & Kubernetes: The Practical Guide</h4>
                        <p className="text-sm text-slate">Academind by Maximilian Schwarzmüller</p>
                        <p className="text-sm text-slate">2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {showCertificate && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl relative overflow-hidden animate-fade-in">
            <button 
              onClick={toggleCertificate}
              className="absolute right-4 top-4 p-2 bg-white rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
              aria-label="Close certificate view"
            >
              <X size={20} className="text-gray-700" />
            </button>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy mb-4">B.Sc. Software Engineering Certificate</h3>
              <div className="flex justify-center">
                <div className="max-h-[70vh] overflow-hidden">
                  <img 
                    src="/lovable-uploads/e3764b9e-0025-4928-80aa-f709fbe25d6b.png" 
                    alt="B.Sc. Software Engineering Certificate" 
                    className="object-contain max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <button 
                  onClick={toggleCertificate}
                  className="px-6 py-2 bg-navy text-white rounded-md hover:bg-navy-light transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <section className="py-20 reveal">
        <div className="container mx-auto max-w-7xl px-6 lg:px-0">
          <SkillSection />
        </div>
      </section>
      
      <section className="py-20 bg-slate-lightest reveal" id="projects">
        <div className="container mx-auto max-w-7xl px-6 lg:px-0">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Featured Projects</h2>
            <p className="text-slate max-w-xl mx-auto">
              A glimpse of my recent work. Check out my complete portfolio for more projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] animate-fade-in">
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-navy tracking-tight">RBVichWebElectronics</h3>
                
                <p className="text-slate text-sm leading-relaxed">
                  A full-featured e-commerce platform with customer/admin roles, product management, and secure checkout.
                </p>
                
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-navy mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-slate space-y-1 ml-2">
                    <li>PayPal payment gateway integration</li>
                    <li>Cloudinary for product image hosting</li>
                    <li>Modern UI with Shadcn-UI & Tailwind CSS</li>
                    <li>Complex state management with Redux Toolkit</li>
                    <li>RESTful API with Express.js & JWT authentication</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {["React", "Node.js", "MongoDB", "Express", "Redux", "PayPal", "Cloudinary"].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-slate-light text-navy font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4">
                  <a 
                    href="https://github.com/Bewdiful/RBVichWebElectronics-E-Commerce" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-navy text-white-custom rounded hover:bg-navy-light transition-colors text-sm font-medium"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-navy tracking-tight">MERN E-Commerce App</h3>
                
                <p className="text-slate text-sm leading-relaxed">
                  A full-stack e-commerce application with a modern tech stack and containerized deployment.
                </p>
                
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-navy mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-slate space-y-1 ml-2">
                    <li>Docker containerization for consistent environments</li>
                    <li>Kubernetes orchestration with Minikube</li>
                    <li>Responsive UI with Tailwind CSS</li>
                    <li>State management with React Context API</li>
                    <li>Configured CI/CD pipeline for automated deployment</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "Tailwind CSS"].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-slate-light text-navy font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4">
                  <a 
                    href="https://github.com/Bewdiful/MERN-Stack-with-Docker-and-Kubernetes-deployment-Project" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-navy text-white-custom rounded hover:bg-navy-light transition-colors text-sm font-medium"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/projects" 
              className="inline-flex items-center space-x-2 text-green hover:text-navy transition-colors font-medium"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </div>
  );
};

export default Index;
