import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpCircle, ExternalLink, Code, Sun, Moon, Download, X } from 'lucide-react';
import { siteContent } from './content';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showHireModal, setShowHireModal] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        cursorDotRef.current.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;

        // Create particle
        if (Math.random() > 0.8) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.width = '4px';
          particle.style.height = '4px';
          particle.style.left = `${e.clientX}px`;
          particle.style.top = `${e.clientY}px`;
          document.body.appendChild(particle);

          setTimeout(() => particle.remove(), 500);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen font-inter ${
      isDark 
        ? 'bg-[#121212] text-white'
        : 'bg-[#F5F5F7] text-gray-900'
    }`}>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="cursor-dot" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className={`absolute inset-0 hero-gradient ${
          isDark
            ? 'hero-gradient-dark'
            : 'hero-gradient-light'
        }`} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold animate-glitch">
              {siteContent.name} | Creative Technologist
            </h1>
            <p className={`text-xl md:text-2xl ${isDark ? 'text-[#B3B3B3]' : 'text-gray-700'} animate-fade-in`}>
              {siteContent.hero.description}
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-[#5E3AEE] text-white hover:bg-[#5E3AEE]/80 animate-neon'
                    : 'bg-[#9575CD] text-white hover:bg-[#9575CD]/80'
                }`}
              >
                View Projects
              </button>
              <button 
                onClick={() => setShowHireModal(true)}
                className={`px-6 py-3 border rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'border-[#5E3AEE] hover:border-[#C56BF0]'
                    : 'border-[#9575CD] hover:border-[#F48FB1]'
                }`}
              >
                Hire Me
              </button>
              <a
                href="/sample-resume.pdf"
                download
                className={`px-6 py-3 text-white rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                  isDark
                    ? 'bg-[#C56BF0] hover:bg-[#C56BF0]/80'
                    : 'bg-[#F48FB1] hover:bg-[#F48FB1]/80'
                }`}
              >
                <Download size={20} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="container mx-auto">
          <h2 className="font-orbitron text-4xl font-bold mb-8 text-center animate-glitch">Featured Projects</h2>
          
          {/* Category Filters */}
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'Web Design', 'AI Projects', 'Open Source'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat.toLowerCase())}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  category === cat.toLowerCase()
                    ? 'bg-[#5E3AEE] text-white animate-neon'
                    : 'border border-[#5E3AEE] hover:border-[#C56BF0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.projects
              .filter(project => category === 'all' || project.category.toLowerCase() === category)
              .map((project, index) => (
              <div
                key={index}
                className={`group rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-200 ${
                  isDark
                    ? 'bg-[#1E1E1E] border-[#2D2D2D]'
                    : 'bg-white border-gray-200'
                } border hover:border-[#5E3AEE]`}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.preview}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.demoLink}
                      className={`p-2 rounded-full hover:scale-110 transition-transform ${isDark ? 'animate-neon' : ''} bg-[#5E3AEE]`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      className={`p-2 rounded-full hover:scale-110 transition-transform ${isDark ? 'animate-neon' : ''} bg-[#5E3AEE]`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`font-orbitron text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={isDark ? 'text-[#B3B3B3] mb-4' : 'text-gray-600 mb-4'}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark
                            ? 'bg-[#5E3AEE]/20 text-[#C56BF0]'
                            : 'bg-[#5E3AEE]/10 text-[#5E3AEE]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800/50" id="about">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <img
                src={siteContent.about.profileImage}
                alt="Profile"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold">{siteContent.about.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {siteContent.about.description}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {siteContent.about.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary-light/10 dark:bg-primary-dark/20 rounded-lg text-primary-light dark:text-accent-dark hover:bg-primary-light/20 dark:hover:bg-primary-dark/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{siteContent.contact.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{siteContent.contact.subtitle}</p>
          </div>
          <form
            action={`https://formsubmit.co/${siteContent.contact.email}`}
            method="POST"
            className="space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-primary-light dark:focus:border-primary-dark focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-primary-light dark:focus:border-primary-dark focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-primary-light dark:focus:border-primary-dark focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-primary-light/80 dark:hover:bg-primary-dark/80 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-gray-500 dark:text-gray-400">© {siteContent.currentYear} {siteContent.name} | Built with ❤️</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Template by <a href="https://shahdeep.ca" target="_blank" rel="noopener noreferrer" className="text-[#5E3AEE] hover:text-[#C56BF0] transition-colors">Deep Shah</a>
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href={siteContent.contact.social.github}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={siteContent.contact.social.linkedin}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteContent.contact.social.email}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-8 right-8 p-2 bg-white dark:bg-gray-800 rounded-full hover:scale-110 transition-transform shadow-lg"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={24} className="text-primary-dark" /> : <Moon size={24} className="text-primary-light" />}
      </button>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-2 bg-primary-light dark:bg-primary-dark text-white rounded-full hover:scale-110 transition-transform"
        aria-label="Back to top"
      >
        <ArrowUpCircle size={24} />
      </button>

      {/* Hire Me Modal */}
      {showHireModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`relative w-full max-w-md rounded-2xl p-8 ${
            isDark 
              ? 'bg-[#1E1E1E] border border-[#2D2D2D]'
              : 'bg-white border border-gray-200'
          }`}>
            <button
              onClick={() => setShowHireModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-6 font-orbitron">Let's Work Together</h2>
            <form
              action={`https://formsubmit.co/${siteContent.contact.email}`}
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="hire-name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="hire-name"
                  name="name"
                  required
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 focus:ring-[#5E3AEE]'
                      : 'bg-white border-gray-300 focus:ring-[#5E3AEE]/50'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="hire-email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="hire-email"
                  name="email"
                  required
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 focus:ring-[#5E3AEE]'
                      : 'bg-white border-gray-300 focus:ring-[#5E3AEE]/50'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="hire-project" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="hire-project"
                  name="project"
                  rows={4}
                  required
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 focus:ring-[#5E3AEE]'
                      : 'bg-white border-gray-300 focus:ring-[#5E3AEE]/50'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="hire-budget" className="block text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  id="hire-budget"
                  name="budget"
                  required
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 focus:ring-[#5E3AEE]'
                      : 'bg-white border-gray-300 focus:ring-[#5E3AEE]/50'
                  }`}
                >
                  <option value="">Select a range</option>
                  <option value="< $1000">Less than $1,000</option>
                  <option value="$1000-$5000">$1,000 - $5,000</option>
                  <option value="$5000-$10000">$5,000 - $10,000</option>
                  <option value="> $10000">More than $10,000</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#5E3AEE] text-white rounded-lg hover:bg-[#5E3AEE]/80 transition-all duration-300"
              >
                Send Proposal
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
