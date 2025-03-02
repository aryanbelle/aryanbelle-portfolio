import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Brain,
  Briefcase,
  User2,
  Home,
  Terminal,
  Database,
  Globe,
  ExternalLink,
  ChevronRight,
  Star,
  MessageSquare,
  Download,
  GraduationCap,
  Cpu,
  GitBranch,
  Server,
  LayoutTemplate,
  Type,
  Network,
  Code,
  HardDrive,
  Zap,
  Layers,
} from 'lucide-react';
import StackIcon from 'tech-stack-icons';
import FillUpSS from '../assets/fillupioss.png';
import GMDSS from '../assets/guessmydoodle.png';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSentData, setIsSentData] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showToast = (message, status) => {
    if (status === 'success') {
      toast.success(message, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else if (status === 'error') {
      toast.error(message, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      showToast('Please fill out all fields.', 'error'); // Show error toast
      return; // Stop further execution
    }

    setIsLoading(true);
    setIsSentData(false);
    emailjs
      .send(
        'service_x889ngv',
        'template_4gt1dzt',
        formData,
        'Z0m6udmYvk2GLA6o_'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          // Optionally reset the form
          setIsLoading(false);
          setIsSentData(true);
          showToast('Message sent, Thank you!', 'success');
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  };

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User2 },
    { id: 'skills', label: 'Skills', icon: Brain },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  const showResumeMsg = () => {
    toast.info('Resume will be uploaded very soon..', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div className="min-h-screen bg-dark text-gray-100">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // Enable dark mode
      />
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent-pink z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="#home"
              className="text-lg font-semibold flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <Code2 className="w-7 h-7 text-primary" />
              <span className="text-white tracking-wider">
                AB<span className="text-primary">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-2 text-sm font-medium transition-all ${
                    activeSection === id
                      ? 'text-primary font-bold'
                      : 'text-gray-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 transition-all hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-dark transition-all duration-300 border-b border-gray-800/30 ${
            isMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full px-4 py-3 text-left transition-all ${
                  activeSection === id
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark to-dark-lighter -mt-16"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${Math.random() * 10 + 2}px`,
                    height: `${Math.random() * 10 + 2}px`,
                    background: `rgba(139, 92, 246, ${
                      Math.random() * 0.5 + 0.5
                    })`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${
                      Math.random() * 10 + 10
                    }s linear infinite`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="text-center md:text-left items-center mt-20 space-y-6">
                <div className="space-y-4 mt-16 font-extrabold">
                  <h2 className="text-xl sm:text-2xl text-primary tracking-wider">
                    Hello, I'm
                  </h2>
                  <h1 className="text-4xl sm:text-5xl font-extrabold md:text-5xl text-white tracking-tight">
                    Aryan Belle
                    <span className="text-primary animate-text-shimmer">.</span>
                  </h1>
                </div>

                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  I create efficient and scalable software solutions. Passionate
                  about clean code and modern technologies.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="#contact"
                    className="bg-primary text-white px-6 py-3 rounded-full hover:shadow-neon transition-all duration-300 text-center"
                  >
                    Get in Touch
                  </a>
                  <a
                    // href="/"
                    // download
                    className="bg-dark-card text-white flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-700/50 hover:border-primary/50 transition-all duration-300 text-center tracking-wide shadow-md"
                    onClick={showResumeMsg}
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </div>

                {/* Tech Stack */}
                <div className="pt-8">
                  <p className="text-sm font-medium text-gray-400 mb-4 tracking-wider">
                    TECH STACK
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['React', 'Node.js', 'TypeScript', 'Python', 'AWS'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-dark-card border border-gray-700/30 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 select-none"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side Floating Elements (Hidden on Mobile) */}
              <div className="relative mt-12 hidden md:block">
                <div className="relative w-full h-[400px] md:h-[500px] perspective-1000">
                  {/* Floating Code Windows */}
                  <div className="absolute inset-0">
                    {/* Terminal Window */}
                    <div className="absolute top-4 right-0 w-72 md:w-96 bg-dark-card rounded-lg shadow-xl transform rotate-6 animate-float border border-gray-700/30">
                      <div className="flex items-center px-4 py-2 border-b border-gray-800/50">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-4 font-mono text-sm">
                        <p className="text-green-400 select-none">
                          $ npm install
                        </p>
                        <p className="text-gray-400 select-none">
                          Installing dependencies...
                        </p>
                        <p className="text-green-400 select-none">
                          $ npm run dev
                        </p>
                        <p className="text-white select-none">
                          Ready on http://localhost:3000
                        </p>
                      </div>
                    </div>

                    {/* Code Editor Window */}
                    <div className="absolute bottom-4 left-0 w-72 md:w-96 bg-dark-card rounded-lg shadow-xl transform -rotate-6 animate-float-delayed border border-gray-700/30">
                      <div className="flex items-center px-4 py-2 border-b border-gray-800/50">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-4 font-mono text-sm">
                        <p className="text-blue-400 select-none">function</p>
                        <p className="text-white pl-2 select-none">
                          createSolution() {`{`}
                        </p>
                        <p className="text-gray-400 pl-4 select-none">
                          // Clean code
                        </p>
                        <p className="text-gray-400 pl-4 select-none">
                          // Modern tech
                        </p>
                        <p className="text-white pl-2 select-none">{`}`}</p>
                      </div>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute top-1/4 left-10 animate-spin-slow">
                      <div className="bg-dark-card/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-700/30">
                        <Terminal className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-6 animate-bounce-slow">
                      <div className="bg-dark-card/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-700/30">
                        <Database className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="absolute top-1/3 mt-4 left-2/4 animate-pulse">
                      <div className="bg-dark-card/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-700/30">
                        <Globe className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
            <span className="text-sm text-gray-400 mt-2 tracking-wider">
              SCROLL DOWN
            </span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-dark-lighter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                About Me
              </h2>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-accent-pink mx-auto rounded-full"></div>
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                I'm a passionate developer who loves solving problems and
                building impactful solutions. Here's a little more about me.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side: Summary Section */}
              <div className="space-y-8">
                {/* Introduction */}
                <div className="bg-dark-card p-8 rounded-xl border border-gray-800/30 hover:border-primary/50 transition-all duration-300 hover:shadow-neon">
                  <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                    Who Am I?
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    I'm a{' '}
                    <span className="text-primary">
                      Computer Science Engineer
                    </span>{' '}
                    with a passion for building scalable and efficient software
                    solutions. I specialize in full-stack development,
                    open-source contributions, and solving complex problems. My
                    journey in tech has been driven by curiosity, creativity,
                    and a commitment to continuous learning.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: '5+ Years',
                      subtitle: 'Coding Experience',
                      icon: <Code className="w-6 h-6 text-primary" />,
                    },
                    {
                      title: '10+ Projects',
                      subtitle: 'Completed',
                      icon: <Briefcase className="w-6 h-6 text-primary" />,
                    },
                    {
                      title: 'Open Source',
                      subtitle: 'Contributor',
                      icon: <GitBranch className="w-6 h-6 text-primary" />,
                    },
                    {
                      title: 'Lifelong Learner',
                      subtitle: 'Always Exploring',
                      icon: <GraduationCap className="w-6 h-6 text-primary" />,
                    },
                  ].map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-dark-card p-6 rounded-xl border border-gray-800/30 hover:border-primary/50 transition-all duration-300 hover:shadow-neon"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          {highlight.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">
                            {highlight.title}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {highlight.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Education & Timeline */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white text-center mb-8 tracking-tight">
                  Education & Journey
                </h3>
                {/* Timeline */}
                <div className="space-y-6">
                  {[
                    {
                      year: '2015 - 2020',
                      title: 'Secondary Education',
                      institution: 'R.D High School Chikodi, Karnataka',
                      description:
                        'Achieved academic excellence in mathematics and science, which provided a strong foundation for my future studies',
                    },
       {
                      year: '2020 - 2023',
                      title: 'Diploma in Computer Science',
                      institution:
                        'Sharad Institute of Technology Polytechnic, Maharashtra',
                      description:
                        'Foundation in computer science and programming.',
                    },
      {
                      year: '2023 - 2026',
                      title: 'Bachelor of Engineering in Computer Science',
                      institution:
                        'KLS Gogte Institue of Technology, Karnataka',
                      description:
                        'Foundation in computer science and programming.',
                    },
                  ].map((edu, index) => (
                    <div
                      key={index}
                      className="relative pl-8 border-l-2 border-gray-800/30 hover:border-primary/50 transition-all duration-300 group"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-2.5 top-0 w-5 h-5 bg-dark-lighter rounded-full border-2 border-gray-800/30 group-hover:border-primary/50 transition-all duration-300"></div>
                      {/* Content */}
                      <div className="bg-dark-card p-6 rounded-xl border border-gray-800/30 hover:border-primary/50 transition-all duration-300 hover:shadow-neon">
                        <h4 className="text-lg font-bold text-white">
                          {edu.title}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          {edu.institution} | {edu.year}
                        </p>
                        <p className="text-gray-400 mt-2 text-sm">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Skills & Expertise
              </h2>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-accent-pink mx-auto rounded-full"></div>
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                I specialize in building modern, scalable, and efficient
                solutions. Here's a glimpse of my technical toolkit.
              </p>
            </div>

            {/* Skills Grid with Hover Effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: 'Frontend Development',
                  skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
                  icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
                  color: 'accent-blue',
                },
                {
                  category: 'Backend Development',
                  skills: ['Node.js', 'Express', 'GraphQL', 'REST APIs'],
                  icon: <Server className="w-8 h-8 text-primary" />,
                  color: 'accent-green',
                },
                {
                  category: 'Database & Storage',
                  skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS S3'],
                  icon: <Database className="w-8 h-8 text-primary" />,
                  color: 'accent-pink',
                },
                {
                  category: 'DevOps & Tools',
                  skills: ['Docker', 'Git', 'Postman', 'AWS'],
                  icon: <GitBranch className="w-8 h-8 text-primary" />,
                  color: 'accent-purple',
                },
              ].map((skillCategory, index) => (
                <div
                  key={index}
                  className="bg-dark-card p-8 rounded-xl border border-gray-800/30 hover:border-primary/50 transition-all duration-300 hover:shadow-neon group"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className={`p-4 rounded-full bg-${skillCategory.color}/10 group-hover:bg-${skillCategory.color}/20 transition-all duration-300`}
                    >
                      {skillCategory.icon}
                    </div>
                    {/* Category Title */}
                    <h3 className="text-xl font-semibold text-white mt-6 mb-4 tracking-tight">
                      {skillCategory.category}
                    </h3>
                    {/* Skills List */}
                    <ul className="space-y-2">
                      {skillCategory.skills.map((skill, idx) => (
                        <li
                          key={idx}
                          className="text-gray-400 hover:text-primary transition-all duration-300"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Carousel (Optional) */}
            <div className="mt-16 overflow-hidden">
              <div className="flex gap-6 animate-marquee">
                {[
                  'React',
                  'Next.js',
                  'Node.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'MongoDB',
                  'GraphQL',
                  'Docker',
                  'AWS',
                  'Git',
                  'Firebase',
                  'Express',
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-6 py-3 bg-dark-card rounded-full border border-gray-800/30 transition-all duration-300 "
                  >
                    <span className="text-gray-300 transition-all duration-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-dark-lighter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Projects
              </h2>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-accent-pink mx-auto rounded-full"></div>
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                Here are some of the projects I've worked on. Each one
                represents a unique challenge and a creative solution.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="group relative bg-dark-card rounded-xl overflow-hidden border border-gray-800/30 hover:border-primary/50 transition-all duration-500 hover:shadow-neon flex flex-col">
                {/* Project Content */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    FillUp.io
                  </h3>
                  <p className="text-gray-400 mb-4">
                    FillUp.io is a comprehensive form builder that allows users
                    to create, manage, and analyze forms with ease.
                  </p>
                </div>
                {/* Tech Stack Tags (Aligned to Bottom) */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-dark text-sm text-gray-300 rounded-full border border-gray-700/30 hover:border-primary/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
                {/* View Details Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-dark-card/90">
                  <a
                    href="https://github.com/aryanbelle/fillup-io"
                    className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 flex items-center gap-2"
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative bg-dark-card rounded-xl overflow-hidden border border-gray-800/30 hover:border-primary/50 transition-all duration-500 hover:shadow-neon flex flex-col">
                {/* Project Content */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    Guess My Doodle
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Guess My Doodle is a highly entertaining game built using
                    the MERN stack and Socket.io. In this game, up to 6 players
                    take turns drawing a word assigned to them while others
                    guess the word.
                  </p>
                </div>
                {/* Tech Stack Tags (Aligned to Bottom) */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'].map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-dark text-sm text-gray-300 rounded-full border border-gray-700/30 hover:border-primary/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
                {/* View Details Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-dark-card/90">
                  <a
                    href="https://github.com/aryanbelle/guessmydoodle"
                    className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 flex items-center gap-2"
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative bg-dark-card rounded-xl overflow-hidden border border-gray-800/30 hover:border-primary/50 transition-all duration-500 hover:shadow-neon flex flex-col">
                {/* Project Content */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    CodeFusion
                  </h3>
                  <p className="text-gray-400 mb-4">
                    CodeFusion is a community platform for coders and tech
                    enthusiasts to discuss bugs, issues, and share interesting
                    content.
                  </p>
                </div>
                {/* Tech Stack Tags (Aligned to Bottom) */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Tailwind CSS', 'Framer Motion', 'Vite'].map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-dark text-sm text-gray-300 rounded-full border border-gray-700/30 hover:border-primary/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
                {/* View Details Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-dark-card/90">
                  <a
                    href="https://github.com/aryanbelle/codefusion"
                    className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 flex items-center gap-2"
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Get in Touch
              </h2>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-accent-pink mx-auto rounded-full"></div>
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                Have a question or want to collaborate? Feel free to reach out!
              </p>
            </div>

            {/* Contact Content */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  Send Me a Message
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 tracking-wide"
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 bg-dark border border-gray-700/50 rounded-lg focus:ring-primary text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 tracking-wide"
                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 bg-dark border border-gray-700/50 rounded-lg focus:ring-primary text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 tracking-wide"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 bg-dark border border-gray-700/50 rounded-lg focus:ring-primary text-white"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors hover:shadow-neon"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  Contact Information
                </h3>
                <p className="text-gray-300">
                  Feel free to reach out to me for collaborations, job
                  opportunities, or just a friendly chat!
                </p>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 border-b border-gray-800/30 hover:border-primary/50 transition-all duration-300 group">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-gray-300 hover:text-primary cursor-pointer">
                      aryanbelle692@gmail.com
                    </span>
                  </div>
                  {/* GitHub */}
                  <div className="flex items-center gap-4 p-4 border-b border-gray-800/30 hover:border-primary/50 transition-all duration-300 group">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary"
                    >
                      github.com/aryanbelle
                    </a>
                  </div>
                  {/* LinkedIn */}
                  <div className="flex items-center gap-4 p-4 border-b border-gray-800/30 hover:border-primary/50 transition-all duration-300 group">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/aryan-belle-2564b2261"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary"
                    >
                      linkedin.com/in/aryan-belle
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
