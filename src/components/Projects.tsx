"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Project Data with Media & Layout Configuration
const projects = [
  {
    id: "pak-industry-insight",
    title: "PAK Industry Insight",
    category: "Data Analysis",
    description: "Data-driven platform for Pakistani industrial sector insights.",
    longDescription: "A comprehensive data platform providing insights into Pakistan's industrial sector. Features interactive charts, data visualization, and reporting tools to aid stakeholders in decision-making.",
    techStack: ["Next.js", "TypeScript", "Vercel", "Charts.js"],
    repo: "https://github.com/dheerajkumar47/PAK_Industry_Insight",
    demo: "https://pak-industry-insight.vercel.app/",
    color: "from-green-600/20 to-emerald-500/20",
    hoverColor: "group-hover:from-green-600/40 group-hover:to-emerald-500/40",
    span: "md:col-span-2 md:row-span-2",
    mediaType: "image",
    mediaUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "face-emotion-detection",
    title: "Face Emotion Detection",
    category: "Deep Learning",
    description: "Real-time facial emotion recognition using CNN with a live Streamlit web app.",
    longDescription: "A deep learning project that detects human emotions in real time from facial expressions. Trained a CNN model (emotion_model.h5) on the FER dataset to classify 7 emotions: Happy, Sad, Angry, Surprise, Fear, Disgust, and Neutral. Built with OpenCV for face detection and Streamlit for a live interactive demo.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
    repo: "https://github.com/dheerajkumar47/Face_Emtion_Detection",
    demo: "https://faceemtiondetection-2zspy3bypfz99z6vt8waca.streamlit.app/",
    color: "from-pink-600/20 to-rose-500/20",
    hoverColor: "group-hover:from-pink-600/40 group-hover:to-rose-500/40",
    span: "md:col-span-1 md:row-span-2",
    mediaType: "image",
    mediaUrl: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "anomaly-detection",
    title: "Anomaly Detection",
    category: "Machine Learning",
    description: "Time-series anomaly detection using Prophet & Isolation Forest.",
    longDescription: "A Streamlit-based application for detecting anomalies in time-series data. Features an interactive dashboard to visualize trends and outliers using advanced ML models.",
    techStack: ["Python", "FastAPI", "Streamlit", "Prophet", "Scikit-learn"],
    repo: "https://github.com/dheerajkumar47/Time-Series-Anomaly-Detection",
    demo: "https://time-series-anomaly-detection-6sdvf5vvcvzngp2fj48nvv.streamlit.app/",
    color: "from-orange-500/20 to-red-500/20",
    hoverColor: "group-hover:from-orange-500/40 group-hover:to-red-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    mediaUrl: "https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl: "https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "iqraversity",
    title: "IQRAversity (VR)",
    category: "AR/VR & AI",
    description: "Virtual 3D campus tour with AI guides and interactivity.",
    longDescription: "A Final Year Project created in Unity and Blender, offering an immersive VR tour of the Iqra University campus. Includes AI-powered guides and interactive zones.",
    techStack: ["Unity", "Blender", "Oculus SDK", "C#"],
    repo: "https://github.com/sameerstg/Iqraversity",
    demo: "#",
    color: "from-purple-600/20 to-pink-500/20",
    hoverColor: "group-hover:from-purple-600/40 group-hover:to-pink-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    mediaUrl: "https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl: "https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "3d-work",
    title: "3D Work & Designs",
    category: "3D / Blender",
    description: "Collection of 3D models, environments & designs published on Sketchfab.",
    longDescription: "A curated portfolio of 3D models and digital environments crafted in Blender and published on Sketchfab under the alias D3D_Engineer. Includes architectural renders, character designs, and interactive 3D scenes — showcasing skills in modeling, texturing, lighting, and 3D storytelling.",
    techStack: ["Blender", "Sketchfab", "3D Modeling", "Texturing"],
    repo: "https://sketchfab.com/D3D_Engineer",
    demo: "https://sketchfab.com/D3D_Engineer",
    color: "from-amber-500/20 to-orange-500/20",
    hoverColor: "group-hover:from-amber-500/40 group-hover:to-orange-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    mediaUrl: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "cpu-scheduling",
    title: "CPU Scheduling Simulator",
    category: "Java / JavaFX",
    description: "Visual JavaFX simulator for SJF, FCFS, Round Robin & Priority scheduling with Gantt charts.",
    longDescription: "A CPU scheduling simulator built with JavaFX that visually demonstrates four major algorithms: Shortest Job First (SJF), First-Come-First-Served (FCFS), Round Robin, and Priority-based scheduling. Users can input custom data or use dummy datasets, then view auto-generated Gantt charts along with average turnaround and waiting times.",
    techStack: ["Java", "JavaFX", "CSS", "Gantt Chart"],
    repo: "https://github.com/dheerajkumar47/Cpu-Scheduling-Algorithms",
    demo: "https://github.com/dheerajkumar47/Cpu-Scheduling-Algorithms",
    color: "from-cyan-600/20 to-teal-500/20",
    hoverColor: "group-hover:from-cyan-600/40 group-hover:to-teal-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    mediaUrl: "https://raw.githubusercontent.com/dheerajkumar47/Cpu-Scheduling-Algorithms/main/welcome.jpg",
    demoUrl: "https://raw.githubusercontent.com/dheerajkumar47/Cpu-Scheduling-Algorithms/main/hi.jpg"
  },
  {
    id: "neurochain-ai-bot",
    title: "AI Telegram Bot (Gemini 2.5)",
    category: "AI Automation / n8n",
    description: "n8n workflow powering a Telegram bot with LLM chat + AI image generation via Gemini 2.5 & Pollinations.",
    longDescription: "An end-to-end n8n automation workflow that turns a Telegram bot into a powerful AI assistant. Users can chat naturally with Gemini 2.5 Flash for highly contextual responses, or trigger AI image generation using the /flux command powered by Pollinations.ai. The workflow handles routing logic, error states, and auto-cleanup of intermediate loading messages — all without writing a single backend server.",
    techStack: ["n8n", "Gemini 2.5 Flash", "Telegram Bot API", "Pollinations AI", "Automation"],
    repo: "https://github.com/dheerajkumar47",
    demo: "https://ncmb.neurochain.io",
    color: "from-violet-600/20 to-indigo-500/20",
    hoverColor: "group-hover:from-violet-600/40 group-hover:to-indigo-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    mediaUrl: "/n8n-workflow.png",
    demoUrl: "/n8n-workflow.png"
  },
];

const INITIAL_VISIBLE_COUNT = 5;

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [workflowJson, setWorkflowJson] = useState<string | null>(null);

  useEffect(() => {
    if (selectedId === "neurochain-ai-bot") {
      fetch("/NeurochainAI Basic API Integration.json")
        .then(res => res.text())
        .then(text => setWorkflowJson(text))
        .catch(err => console.error(err));
    } else {
      setWorkflowJson(null);
    }
  }, [selectedId]);

  const selectedProject = projects.find((p) => p.id === selectedId);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="projects">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
             A curated selection of projects demonstrating full-stack capabilities, 
             microservices architecture, and modern interface design.
          </p>
        </motion.div>

        {/* Compact Card Grid — 4 columns, fixed height cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={project.id}
                onClick={() => setSelectedId(project.id)}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-md h-[200px]"
                whileHover={{ scale: 1.03, y: -4 }}
              >
                {/* Image */}
                <img
                  src={project.mediaUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-all duration-500 mix-blend-overlay`} />

                {/* Dark scrim — stronger at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                  {/* Top — category badge */}
                  <span className="self-start px-2 py-0.5 rounded-full bg-black/50 border border-white/10 text-[10px] font-mono text-blue-300 backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Bottom — title + tags */}
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug mb-1 drop-shadow">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      {project.techStack.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[9px] uppercase tracking-wider text-white/70 bg-black/50 px-1.5 py-0.5 rounded border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white -rotate-45">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Buttons */}
        <motion.div layout className="flex justify-center mt-12">
            {hasMore ? (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setVisibleCount(prev => prev + 6)}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                >
                    View More Projects
                    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.button>
            ) : projects.length > INITIAL_VISIBLE_COUNT && (
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const projectsSection = document.getElementById('projects');
                        if (projectsSection) {
                            projectsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                        setVisibleCount(INITIAL_VISIBLE_COUNT);
                    }}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                 >
                    Show Less
                    <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                 </motion.button>
            )}
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
            {selectedId && selectedProject && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-60"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-70 pointer-events-auto p-4 md:p-8">
                        <motion.div
                           layoutId={selectedId}
                           className="bg-[#121212] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-4xl border border-white/10 shadow-2xl relative scrollbar-hide"
                        >
                           <button 
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                           </button>

                           <div className="flex flex-col md:flex-row h-full">
                                { /* Visual Side - Prioritize 'demoUrl', fallback to 'mediaUrl' */ }
                                <div className={`w-full md:w-2/5 min-h-[300px] relative overflow-hidden flex flex-col justify-end p-8`}>
                                    <img 
                                        src={selectedProject.demoUrl || selectedProject.mediaUrl}
                                        alt={selectedProject.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80" 
                                    />
                                   <div className={`absolute inset-0 bg-linear-to-b ${selectedProject.color} mix-blend-overlay opacity-80`} />
                                   <div className="absolute inset-0 bg-black/20" />
                                   
                                   <motion.span 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.2 }}
                                     className="relative z-10 inline-block px-3 py-1 rounded-full bg-black/40 text-xs font-mono text-white mb-4 w-fit border border-white/10 backdrop-blur-md"
                                   >
                                     {selectedProject.category}
                                   </motion.span>
                                   <motion.h3 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.3 }}
                                     className="relative z-10 text-4xl font-bold text-white leading-none tracking-tight drop-shadow-xl"
                                   >
                                     {selectedProject.title}
                                   </motion.h3>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#121212]">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">About the project</h4>
                                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                            {selectedProject.longDescription}
                                        </p>

                                        <div className="mb-10">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Core Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.techStack.map((tech, i) => (
                                                    <motion.span 
                                                        key={tech} 
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.5 + (i * 0.05) }}
                                                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-200 border border-white/5 transition-colors cursor-default"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                                            <div className="flex gap-3">
                                                <a 
                                                    href={selectedProject.repo} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="flex-1 py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                    View Code
                                                </a>
                                                <a 
                                                    href={selectedProject.demo} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="flex-1 py-4 rounded-xl bg-white/5 text-white font-bold text-center hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2"
                                                >
                                                    Live Demo
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                </a>
                                            </div>
                                            {/* Download Workflow button — only for the n8n project */}
                                            {selectedProject.id === "neurochain-ai-bot" && (
                                                <div className="flex flex-col gap-4">
                                                    <a
                                                        href="/NeurochainAI Basic API Integration.json"
                                                        download="Gemini-AI-Telegram-Bot.json"
                                                        className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600/30 to-indigo-500/30 hover:from-violet-600/50 hover:to-indigo-500/50 text-white font-semibold text-center transition-all duration-300 border border-violet-500/30 flex items-center justify-center gap-2 text-sm"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                                        Download n8n Workflow JSON
                                                    </a>
                                                    
                                                    {workflowJson && (
                                                        <div className="mt-2">
                                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Workflow Source (JSON)</h4>
                                                            <div className="w-full h-64 overflow-y-auto bg-black/60 border border-white/10 rounded-xl p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
                                                                <pre className="text-xs text-blue-300/80 font-mono whitespace-pre-wrap">
                                                                    {workflowJson}
                                                                </pre>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>
                           </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
