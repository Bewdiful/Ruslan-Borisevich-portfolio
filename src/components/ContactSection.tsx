
import React from 'react';
import SocialLinks from './SocialLinks';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Get In Touch</h2>
          <p className="text-slate max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 rounded-full bg-slate-lightest text-green">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-1">Email</h3>
                <a href="mailto:ruslanbori@gmail.com" className="text-slate hover:text-green transition-colors">
                  ruslanbori@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 rounded-full bg-slate-lightest text-green">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-1">Phone</h3>
                <a href="tel:+972508145254" className="text-slate hover:text-green transition-colors">
                  050-8145254
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 rounded-full bg-slate-lightest text-green">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-1">Location</h3>
                <p className="text-slate">Israel</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 rounded-full bg-slate-lightest text-green">
                <Calendar size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-1">Date of Birth</h3>
                <p className="text-slate">26/12/1996</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-navy mb-4">Connect with me</h3>
              <SocialLinks />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-slide-in-right">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border border-slate-light focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-slate-light focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-slate-light focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-slate-light focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-navy text-white-custom font-medium rounded-md hover:bg-navy-light transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
