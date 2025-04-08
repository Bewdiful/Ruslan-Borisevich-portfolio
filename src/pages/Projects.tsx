
import React, { useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const projects = [
    {
      title: "RBVichWebElectronics",
      description: "Developed a full-featured e-commerce platform with customer/admin roles, product management, and secure checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "PayPal", "Cloudinary"],
      githubUrl: "https://github.com/Bewdiful/RBVichWebElectronics-E-Commerce",
      features: [
        "Integrated PayPal payment gateway for secure transactions",
        "Configured Cloudinary for dynamic product image hosting",
        "Designed modern UI with Shadcn-UI components and Tailwind CSS",
        "Managed complex application state using Redux Toolkit",
        "Developed RESTful API with Express.js including JWT authentication"
      ]
    },
    {
      title: "MERN E-Commerce App",
      description: "Developed a full-stack e-commerce application with React frontend, Express.js backend, and MongoDB database.",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "Tailwind CSS"],
      githubUrl: "https://github.com/Bewdiful/MERN-Stack-with-Docker-and-Kubernetes-deployment-Project",
      features: [
        "Implemented containerization with Docker for consistent environments",
        "Configured deployment orchestration using Kubernetes (Minikube)",
        "Designed responsive UI with Tailwind CSS for all screen sizes",
        "Managed application state with React Context API",
        "Set up CI/CD pipeline for automated testing and deployment"
      ]
    },
    {
      title: "WorkoutPartner",
      description: "Developed a platform to find workout partners based on location and fitness goals.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
      githubUrl: "https://github.com/Bewdiful/MERN-Stack-app",
      liveUrl: "#",
      features: [
        "Implemented user authentication and authorization",
        "Developed real-time chat functionality using Socket.io",
        "Created workout tracking and progress visualization",
        "Designed location-based partner matching system",
        "Built responsive UI with Material-UI components"
      ]
    },
    {
      title: "TinDog",
      description: "A fun Tinder-like website for dogs to meet and play. This responsive design showcases front-end skills with Bootstrap components and custom CSS animations.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      githubUrl: "https://github.com/Bewdiful/TinDog-Project",
      liveUrl: "https://bewdiful.github.io/TinDog-Project/",
      features: [
        "Built responsive layouts using Bootstrap framework",
        "Created custom CSS animations for enhanced user experience",
        "Designed mobile-first interface with adaptable components",
        "Implemented interactive elements for user engagement",
        "Applied UI/UX best practices for intuitive navigation"
      ]
    },
    {
      title: "Move With Joy",
      description: "A vibrant moving company website featuring interactive elements and smooth animations. The design focuses on user experience with a clean, joyful aesthetic.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Bewdiful/Move-With-Joy-project",
      liveUrl: "https://bewdiful.github.io/Move-With-Joy-project/",
      features: [
        "Created smooth animations for enhanced user engagement",
        "Implemented interactive UI elements with vanilla JavaScript",
        "Designed responsive layouts for all device sizes",
        "Built user-friendly navigation system",
        "Applied design principles to create clean, accessible interface"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section>
        <div className="container mx-auto max-w-7xl px-6 lg:px-0">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Projects</h1>
            <p className="text-slate max-w-xl mx-auto">
              A showcase of my technical projects, featuring work with various languages, frameworks, and tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                features={project.features}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
