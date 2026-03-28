/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  BarChart3, 
  Globe, 
  Database, 
  Download, 
  ChevronRight, 
  Award, 
  GraduationCap,
  Briefcase,
  User,
  Cpu,
  Layers,
  Send,
  CheckCircle2
} from "lucide-react";

// --- Types & Data ---

interface Project {
  title: string;
  description: string;
  problem: string;
  contribution: string;
  impact?: string;
  tech: string[];
  link?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Movie Recommendation System",
    description: "A smart, web-based application that suggests movies based on user preferences and search criteria.",
    problem: "Users often struggle to find relevant movies in vast libraries. This system simplifies discovery through dynamic filtering.",
    contribution: "Architected the frontend using React, integrated third-party APIs for real-time data, and implemented advanced search algorithms.",
    impact: "Delivered a seamless, responsive user experience with sub-second search results.",
    tech: ["React", "REST APIs", "Tailwind CSS", "Vercel"],
    link: "https://movie-recommendation-application-five.vercel.app"
  },
  {
    title: "Sales Performance Dashboard",
    description: "An enterprise-grade data visualization tool for tracking key business metrics and growth trends.",
    problem: "Raw sales data is difficult to interpret. This dashboard transforms it into actionable business intelligence.",
    contribution: "Engineered data cleaning pipelines using Power Query and designed interactive KPIs for revenue and profit analysis.",
    impact: "Enabled data-driven decision making by highlighting underperforming regions and growth opportunities.",
    tech: ["Power BI", "Power Query", "Data Analysis", "Excel"]
  },
  {
    title: "Interactive Web Suite",
    description: "A collection of high-performance web utilities including a Calculator and classic games like Tic-Tac-Toe.",
    problem: "Demonstrating core programming logic and UI/UX principles through functional, responsive web components.",
    contribution: "Developed modular JavaScript logic and focused on pixel-perfect responsive design using modern CSS frameworks.",
    tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"]
  }
];

const SKILLS = [
  { category: "Programming", items: ["Python", "C++", "JavaScript", "SQL"], icon: <Code2 className="w-5 h-5" /> },
  { category: "Data Science", items: ["Pandas", "NumPy", "Data Cleaning", "Statistics"], icon: <BarChart3 className="w-5 h-5" /> },
  { category: "Web Development", items: ["React", "Tailwind CSS", "Bootstrap", "HTML/CSS"], icon: <Globe className="w-5 h-5" /> },
  { category: "Tools & DB", items: ["MongoDB", "DBMS", "Git/GitHub", "Power BI", "Tableau"], icon: <Database className="w-5 h-5" /> }
];

const CERTIFICATIONS = [
  { title: "Generative AI", issuer: "Google Cloud", date: "2024" },
  { title: "Software Engineering Simulation", issuer: "JPMorgan Chase & Co.", date: "2024" },
  { title: "Data Analytics Simulation", issuer: "Deloitte", date: "2024" },
  { title: "Business Certification", issuer: "Nestlé", date: "2024" }
];

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-white mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "60px" }}
      viewport={{ once: true }}
      className="h-1 bg-orange-500 mt-4 rounded-full"
    />
  </div>
);

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-orange-500/30 selection:text-orange-500">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-white tracking-tighter"
          >
            SATYAM<span className="text-orange-500">.</span>MISHRA
          </motion.div>
          <div className="hidden md:flex gap-8 items-center">
            {["About", "Skills", "Projects"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 bg-orange-500 text-black text-sm font-bold rounded-full hover:bg-orange-400 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-orange-500 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Available for Internships
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Bridging Data Insights with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
              Scalable Software.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I'm a Computer Science student specializing in AI/ML and Data Science. 
            I transform complex datasets into actionable intelligence and build intuitive, 
            high-performance web applications.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#projects" 
              className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all"
            >
              View My Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/satyammishra4049-eng" target="_blank" className="p-4 rounded-full bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/satyam-mishra-73182b343" target="_blank" className="p-4 rounded-full bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-orange-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <img 
                  src="https://picsum.photos/seed/satyam/800/800" 
                  alt="Satyam Mishra" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-orange-500 rounded-2xl text-black">
                <div className="text-4xl font-bold">2029</div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-80">Expected B.Tech</div>
              </div>
            </motion.div>
            
            <div>
              <SectionHeading subtitle="My journey is defined by a relentless curiosity for how data shapes our world and how software can solve human problems.">
                The Story Behind the Code
              </SectionHeading>
              
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  Currently pursuing a B.Tech in Computer Science with a focus on AI/ML and Data Science, 
                  I've built a strong foundation in Python, SQL, and modern web technologies. 
                  I don't just write code; I build solutions that bridge the gap between raw data and 
                  meaningful human experiences.
                </p>
                <p>
                  My approach combines analytical thinking with creative problem-solving. Whether it's 
                  optimizing a movie recommendation algorithm or designing an interactive sales dashboard, 
                  I focus on performance, scalability, and exceptional UI/UX.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">AI/ML Focused</h4>
                      <p className="text-xs">Exploring the future of intelligent systems.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Full-Stack Ready</h4>
                      <p className="text-xs">Building end-to-end web applications.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="A comprehensive toolkit designed for the modern data-driven software landscape.">
            Technical Skills
          </SectionHeading>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Selected works that demonstrate my ability to solve complex problems through code and data.">
            Featured Projects
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 transition-all group flex flex-col h-full"
              >
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <div className="mt-1 shrink-0"><CheckCircle2 className="w-4 h-4 text-orange-500" /></div>
                    <div>
                      <span className="text-white font-bold text-xs block mb-1">Challenge</span>
                      <p className="text-xs text-zinc-500 line-clamp-2">{project.problem}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1 shrink-0"><CheckCircle2 className="w-4 h-4 text-orange-500" /></div>
                    <div>
                      <span className="text-white font-bold text-xs block mb-1">Contribution</span>
                      <p className="text-xs text-zinc-500 line-clamp-2">{project.contribution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-800 flex gap-4">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank"
                      className="flex-1 py-3 bg-white text-black font-bold rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all"
                    >
                      Demo <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <button className="flex-1 py-3 bg-zinc-950 border border-zinc-800 text-white font-bold rounded-xl text-xs hover:border-zinc-600 transition-all">
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Experience & Education --- */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <SectionHeading>Education</SectionHeading>
              <div className="relative border-l border-zinc-800 pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-orange-500 border-4 border-zinc-950" />
                  <div className="text-orange-500 font-bold text-sm mb-2">2025 — 2029 (Expected)</div>
                  <h3 className="text-xl font-bold text-white mb-1">B.Tech in Computer Science</h3>
                  <p className="text-zinc-400 font-medium mb-4">AI/ML & Data Science Specialization</p>
                  <p className="text-sm text-zinc-500">NxtWave Institute of Advanced Technologies, Pune</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionHeading>Certifications</SectionHeading>
              <div className="grid gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-between group hover:border-orange-500/30 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-zinc-800 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                        <p className="text-xs text-zinc-500">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-zinc-600">{cert.date}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Hire Me CTA --- */}
      <section className="py-24 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-orange-600 to-orange-400 text-black text-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
              Ready to bring a <br />
              data-driven edge to your team?
            </h2>
            <p className="text-lg md:text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto relative z-10">
              I'm currently seeking internship opportunities where I can apply my 
              analytical mindset and software engineering skills to real-world challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a 
                href="#contact" 
                className="px-10 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-2xl flex items-center justify-center"
              >
                Let's Talk
              </a>
              <a 
                href="https://drive.google.com/file/d/18T8suxTtPnDN6M3fe1Y4t0cOoMlhxmZD/view?usp=sharing" 
                download="Satyam_Mishra_Resume.pdf"
                className="px-10 py-5 bg-white/20 backdrop-blur-md text-black font-bold rounded-full border border-black/10 flex items-center justify-center gap-2 hover:bg-white/30 transition-all"
              >
                Download Resume <Download className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-12">
            <div>
              <SectionHeading subtitle="Have a question or want to discuss a potential collaboration? My inbox is always open.">
                Get In Touch
              </SectionHeading>
              
              <div className="flex flex-wrap items-center gap-8 sm:gap-16">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Email Me</p>
                    <a 
                      href="mailto:satyammishra4049@gmail.com"
                      className="text-xl font-bold text-white hover:text-orange-500 transition-colors inline-block"
                    >
                      Click Me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">LinkedIn</p>
                    <button 
                      onClick={() => window.open("https://linkedin.com/in/satyam-mishra-73182b343", "_blank")}
                      className="text-xl font-bold text-white hover:text-orange-500 transition-colors cursor-pointer"
                    >
                      Click Me
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">GitHub</p>
                    <button 
                      onClick={() => window.open("https://github.com/satyammishra4049-eng", "_blank")}
                      className="text-xl font-bold text-white hover:text-orange-500 transition-colors cursor-pointer"
                    >
                      Click Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-zinc-500">
            © 2026 Satyam Mishra.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
