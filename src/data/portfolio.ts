// Single source of truth for portfolio copy. Every claim here comes from the
// project READMEs or Dheeraj's own published profile — keep it that way.

export const PROFILE = {
  name: "Dheeraj Kumar",
  role: "AI Engineer",
  location: "Karachi, Pakistan",
  email: "mr.rathi047@gmail.com",
  github: "https://github.com/dheerajkumar47",
  linkedin: "https://www.linkedin.com/in/dheeraj-kumar-b21a741a2/",
  resume: "/resume.pdf",
  heroVideo:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
};

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROOF = [
  { value: "6", label: "in-depth case studies" },
  { value: "2", label: "published AI research papers" },
  { value: "7", label: "live public deployments" },
  { value: "2023", label: "shipping in industry since" },
];

export type Capability = {
  title: string;
  summary: string;
  tools: string[];
  proof: string[];
};

export const CAPABILITIES: Capability[] = [
  {
    title: "LLM apps & AI agents",
    summary:
      "RAG chatbots grounded in your own documents, and multi-agent workflows that read, route, score and act — with guardrails so they don't make things up.",
    tools: ["LangGraph", "LangChain", "CrewAI", "OpenAI", "Claude", "Gemini", "Groq", "Pinecone", "FAISS", "pgvector"],
    proof: ["BidSmith", "Interview Pilot", "AI Tutor", "RAG Course Advisor"],
  },
  {
    title: "Conversational & voice AI",
    summary:
      "Assistants that answer customers 24/7 on WhatsApp, Instagram, Messenger and X, book real appointments and reply with natural voice notes in English or Urdu.",
    tools: ["Azure OpenAI", "Azure AI Speech", "Whisper", "WhatsApp Cloud API", "Meta Graph API", "Microsoft Graph", "n8n"],
    proof: ["AI Receptionist", "Meeting Intelligence", "Telegram AI Bot"],
  },
  {
    title: "Computer vision & applied ML",
    summary:
      "Real-time detection and tracking on live camera feeds, emotion recognition and time-series anomaly detection — evaluated properly, not eyeballed.",
    tools: ["YOLO", "OpenCV", "CUDA", "PyTorch", "TensorFlow", "Keras", "scikit-learn", "Prophet"],
    proof: ["Factory CCTV Tracking", "Face Emotion Detection", "Anomaly Detection"],
  },
  {
    title: "Production engineering",
    summary:
      "Clean backends and interfaces that ship: tested, containerised, deployed with CI/CD and documented so you own everything at handover.",
    tools: ["FastAPI", "C# / .NET", "Next.js", "React", "TypeScript", "PostgreSQL", "MongoDB", "Docker", "Azure", "GitHub Actions"],
    proof: ["PSX Market Intelligence", "AI Receptionist", "Shop Ledger"],
  },
];

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  problem: string;
  outcome: string;
  features: string[];
  flow: string[];
  stack: string[];
  fit: string;
  code?: string;
  live?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ai-receptionist",
    index: "01",
    title: "AI Receptionist",
    category: "Conversational AI · Voice · Booking",
    year: "2026",
    problem:
      "Small businesses miss messages and bookings outside working hours, and staff lose time answering the same questions across four different apps.",
    outcome:
      "One assistant answers WhatsApp, Messenger, Instagram and X around the clock, books into Outlook and replies by voice — while the owner steers everything from a dashboard.",
    features: [
      "Azure OpenAI picks the business's own intent, drafts the reply and extracts time, name and email",
      "Offers real free slots from Outlook free/busy and re-checks before booking",
      "Neural voice notes out, transcription in — Urdu/English auto-detected",
      "Follow-ups inside Meta's 24-hour window and reminders 15 minutes before each meeting",
      "Human takeover, approval mode and a built-in customer simulator",
      "Every push to main is tested and deployed to Azure by GitHub Actions",
    ],
    flow: ["Customer DM", "Rules + Azure OpenAI", "Outlook booking", "Voice / text reply", "Blazor dashboard"],
    stack: [".NET 10", "ASP.NET Core", "Blazor Server", "EF Core", "Azure OpenAI", "Azure AI Speech", "Microsoft Graph", "Meta Graph API", "xUnit"],
    fit: "Clinics, salons, agencies, shops and restaurants that take bookings over chat.",
    code: "https://github.com/dheerajkumar47/AI-receptionist",
    image: {
      src: "/work/ai-receptionist-dashboard.png",
      alt: "AI Receptionist dashboard showing live channels, services and a booking conversation",
      width: 1366,
      height: 820,
    },
  },
  {
    id: "bidsmith",
    index: "02",
    title: "BidSmith",
    category: "AI Agent · RAG · Automation",
    year: "2026",
    problem:
      "Freelancers lose hours scanning job boards and writing proposals that either sound generic or overclaim experience they don't have.",
    outcome:
      "A personal bid agent that finds matching Freelancer.com projects, scores fit, writes a proposal grounded in the real portfolio and only bids after a tap on WhatsApp.",
    features: [
      "Official Freelancer API only — no browser bots, every bid approved by default",
      "Fit score 0–100, portfolio retrieval (RAG) and a pricing engine with currency handling",
      "Quality gate blocks clichés, invented numbers and links not in the profile",
      "Detects hidden client instructions in the brief and enforces them",
      "Writer runs on Gemini, OpenAI or Claude with a template fallback",
      "Covered by a 20-test pytest suite; Dockerised",
    ],
    flow: ["Freelancer API", "Filter + fit score", "Portfolio RAG", "AI draft + quality gate", "Approve on WhatsApp"],
    stack: ["Python", "FastAPI", "Gemini", "OpenAI", "Claude", "WhatsApp Cloud API", "SQLite", "Docker", "pytest"],
    fit: "Any workflow where an AI drafts and a human approves: sales outreach, support replies, lead qualification.",
    code: "https://github.com/dheerajkumar47/Code-debug-hub",
  },
  {
    id: "factory-vision",
    index: "03",
    title: "Factory CCTV Tracking",
    category: "Computer Vision · Real-time",
    year: "2026",
    problem:
      "A factory wanted to know where each employee is and how people move across the floor — using the CCTV cameras it already had.",
    outcome:
      "A real-time vision pipeline that identifies employees on live RTSP feeds, records their movement trails and surfaces it all on a live dashboard.",
    features: [
      "Threaded multi-camera RTSP capture",
      "Batched YOLO person detection on CUDA",
      "ArUco marker matched to each detected person for employee identity",
      "Movement trails and one MP4 recording per employee",
      "Heatmaps, camera-coverage maps and JSON/CSV logs",
      "Live dashboard with CPU / RAM / GPU telemetry",
    ],
    flow: ["RTSP feeds", "YOLO detection", "ArUco identity", "Tracking + trails", "Heatmaps + dashboard"],
    stack: ["Python", "YOLOv8", "PyTorch", "OpenCV (ArUco)", "CUDA", "RTSP"],
    fit: "Factories, warehouses, retail and offices — people counting, zone monitoring and time-on-task analytics.",
    code: "https://github.com/dheerajkumar47/Gumcorp",
  },
  {
    id: "psx-intelligence",
    index: "04",
    title: "PSX Market Intelligence",
    category: "FinTech · LLM Insights",
    year: "2026",
    problem:
      "Investors in Pakistan have no single place that combines live PSX market data with clear, readable analysis of each company.",
    outcome:
      "A live investor dashboard that pairs real-time market data with AI-written daily summaries and per-company SWOT reports.",
    features: [
      "Live price and volume tracking with USD/PKR monitoring",
      "Sector heatmaps across Cement, Textiles, Banks and more",
      "“Market Pulse”: daily AI summaries in plain language",
      "Automated SWOT report for each listed company",
      "Watchlists, sector/ticker filtering and OAuth + JWT login",
    ],
    flow: ["Market data", "Async FastAPI + MongoDB", "Gemini summaries + SWOT", "React dashboard"],
    stack: ["FastAPI", "MongoDB", "Google Gemini", "React", "Vite", "Tailwind CSS", "OAuth", "JWT"],
    fit: "Fintech dashboards and research tools that turn raw data into AI-written insight.",
    code: "https://github.com/dheerajkumar47/PAK_Industry_Insight",
    live: "https://pak-industry-insight.vercel.app/",
  },
  {
    id: "interview-pilot",
    index: "05",
    title: "Interview Pilot",
    category: "Multi-agent · HR Tech",
    year: "2026",
    problem:
      "Candidates need realistic interview practice and honest feedback before they apply — generic question lists don't prepare them.",
    outcome:
      "Four specialised AI agents run a full mock hiring process and finish with a scored readiness verdict.",
    features: [
      "Resume Analyst, Technical Interviewer, Knowledge Assessor and HR Coach agents",
      "ATS scoring of the resume against a specific job description",
      "Coding challenges, multiple-choice and behavioural rounds",
      "Real-time interview flow over Socket.io",
      "Gemini as primary model with automatic fallback to Groq (Llama 3.3)",
    ],
    flow: ["Resume + JD", "ATS scoring", "Technical + knowledge rounds", "HR round", "Readiness report"],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "Socket.io", "Gemini", "Groq", "Supabase", "Clerk"],
    fit: "HR-tech, recruitment agencies, bootcamps and universities.",
    code: "https://github.com/dheerajkumar47/Interview-Pilot",
    live: "https://interview-pilot-phi.vercel.app/",
  },
  {
    id: "ai-tutor",
    index: "06",
    title: "AI Tutor",
    category: "RAG · Full Stack",
    year: "2026",
    problem:
      "Generic chatbots forget the learner between sessions and can't turn study material into practice.",
    outcome:
      "A personal tutor with long-term per-user memory that answers from your material and generates quizzes, summaries and diagrams.",
    features: [
      "Per-user FAISS vector memory for long-term context",
      "Multimodal input: text, voice, images and documents",
      "LangChain agent tools for quizzes, summaries and diagrams",
      "Real-time streaming responses over SSE",
      "JWT auth; Dockerised and deployed on Render",
    ],
    flow: ["Learner input", "Per-user FAISS memory", "LangChain agent + tools", "Streamed answer"],
    stack: ["FastAPI", "LangChain", "OpenAI", "FAISS", "Python", "Docker"],
    fit: "EdTech, onboarding and internal training assistants.",
    code: "https://github.com/dheerajkumar47/AI-Tutor",
    live: "https://ai-tutor-ndzy.onrender.com",
  },
];

export type MoreWorkItem = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  code?: string;
  live?: string;
  download?: { href: string; filename: string; label: string };
  note?: string;
};

export const MORE_WORK: MoreWorkItem[] = [
  {
    title: "RAG Course Advisor",
    category: "RAG · LangGraph",
    description:
      "LangGraph router sends each question to a Pinecone retriever or Tavily web search; Gemini answers from the retrieved context.",
    stack: ["LangGraph", "Pinecone", "Gemini", "FastAPI"],
    code: "https://github.com/dheerajkumar47/IntelliCourse",
  },
  {
    title: "Meeting Intelligence",
    category: "Speech · RAG",
    description:
      "Whisper transcribes meeting recordings and grounded RAG answers “What did we decide about pricing?” from the actual transcripts.",
    stack: ["Whisper", "Python", "FastAPI"],
    note: "Private repository",
  },
  {
    title: "AI QA Platform",
    category: "Multi-agent · Testing",
    description:
      "Agents turn tickets and screenshots into test cases, run UI and API tests and report what passed, failed and why.",
    stack: ["Python", "LLM agents", "UI/API automation"],
    note: "Private repository",
  },
  {
    title: "Time-Series Anomaly Detection",
    category: "Machine Learning",
    description:
      "Prophet and Isolation Forest with Precision/Recall/F1/AUC evaluation, a FastAPI backend and Streamlit dashboard.",
    stack: ["Prophet", "scikit-learn", "FastAPI", "Streamlit", "Docker"],
    code: "https://github.com/dheerajkumar47/Time-Series-Anomaly-Detection",
    live: "https://time-series-anomaly-detection-6sdvf5vvcvzngp2fj48nvv.streamlit.app/",
  },
  {
    title: "Face Emotion Detection",
    category: "Deep Learning",
    description: "CNN trained on FER classifies 7 emotions in real time from facial expressions, with a live Streamlit demo.",
    stack: ["TensorFlow", "Keras", "OpenCV", "Streamlit"],
    code: "https://github.com/dheerajkumar47/Face_Emtion_Detection",
    live: "https://faceemtiondetection-2zspy3bypfz99z6vt8waca.streamlit.app/",
  },
  {
    title: "NeuroSync AI Coach",
    category: "Voice AI · Team project",
    description:
      "Wellness coach that analyses voice check-ins for emotion and mood, then suggests workouts, music and habits.",
    stack: ["React", "TypeScript", "Gemini", "Hugging Face", "Supabase"],
    code: "https://github.com/dheerajkumar47/NeuroSync-AI-PC",
    live: "https://neuro-sync-ai-pc.vercel.app",
  },
  {
    title: "Thar Threads Catalog Swap",
    category: "Image AI · Client tool",
    description:
      "Upload a blank catalog template and model photos; backgrounds are removed and finished catalog PNGs come back in seconds.",
    stack: ["FastAPI", "remove.bg API", "Docker", "Render"],
    code: "https://github.com/dheerajkumar47/tharthreads-app",
  },
  {
    title: "Shop Ledger",
    category: "Web App · SMB",
    description: "Customer and supplier ledger for small shops with daily entries, directories and PDF statements.",
    stack: ["React", "Vite", "jsPDF"],
    code: "https://github.com/dheerajkumar47/Shop-ledger",
    live: "https://shop-ledger-nu.vercel.app",
  },
  {
    title: "Mera Hisab",
    category: "Offline PWA · Sindhi",
    description: "Installable, offline-first daily money tracker written entirely in Sindhi, with PDF export.",
    stack: ["PWA", "Service Worker", "JavaScript"],
    code: "https://github.com/dheerajkumar47/mera-hisab",
  },
  {
    title: "Telegram AI Bot",
    category: "Automation · n8n",
    description:
      "n8n workflow that turns a Telegram bot into a Gemini 2.5 Flash assistant with /flux image generation via Pollinations.",
    stack: ["n8n", "Gemini 2.5 Flash", "Telegram Bot API"],
    live: "https://ncmb.neurochain.io",
    download: {
      href: "/NeurochainAI Basic API Integration.json",
      filename: "Gemini-AI-Telegram-Bot.json",
      label: "Workflow JSON",
    },
  },
  {
    title: "IQRAversity VR",
    category: "AR/VR · Final year project",
    description: "Immersive VR tour of the Iqra University campus with AI-powered guides and interactive zones.",
    stack: ["Unity", "C#", "Blender", "Oculus SDK"],
    code: "https://github.com/sameerstg/Iqraversity",
  },
  {
    title: "3D Work & Designs",
    category: "3D · Blender",
    description: "Models, environments and interactive scenes published on Sketchfab as D3D_Engineer.",
    stack: ["Blender", "Sketchfab"],
    live: "https://sketchfab.com/D3D_Engineer",
  },
];

export const RESEARCH = [
  {
    title: "Explainable AI in Medical Imaging: Visual Explanation Techniques",
    venue: "Published 2025",
    takeaway:
      "Applies Grad-CAM and SHAP to tasks like tumour detection so clinicians can see why a model made its call — and trust it.",
    link: "https://thesesjournal.com/index.php/1/article/view/1482",
  },
  {
    title: "Multi-Modal and Green Computing for Advanced Computer Vision",
    venue: "Published 2025",
    takeaway:
      "Shows how compact models like TinyLLaVA-Med cut the energy cost of healthcare AI without giving up accuracy.",
    link: "https://thesesjournal.com/index.php/1/article/view/1110",
  },
];

export const EXPERIENCE = [
  {
    period: "Jan 2026 — Present",
    title: "Independent AI Engineer",
    org: "Freelance · Karachi",
    description:
      "Designing and shipping AI and backend systems end to end for business clients: a multi-channel AI receptionist, real-time CCTV employee tracking and AI workflow automation.",
  },
  {
    period: "Oct 2025 — Nov 2025",
    title: "Quality Assurance Intern",
    org: "Systems Limited",
    description:
      "Tested enterprise applications with manual and automated methods, building the habits that now go into every AI system's test suite.",
  },
  {
    period: "Aug 2025 — Oct 2025",
    title: "AI Intern",
    org: "Bits Collision",
    description:
      "Built LLM features with multi-agent, tool-using workflows (LangGraph, CrewAI) for message classification and routing, RAG conversational pipelines and FastAPI microservices on Docker.",
  },
  {
    period: "Jan 2024 — Jan 2025",
    title: "UI/UX Designer",
    org: "NASS Enterprises",
    description:
      "Designed web and mobile interfaces in Figma and worked with developers to ship them faithfully.",
  },
  {
    period: "May 2023 — Dec 2023",
    title: "Front-End Developer Intern",
    org: "Mind Digital",
    description: "Built responsive React and Tailwind sites, tuning performance and cross-browser compatibility.",
  },
  {
    period: "2021 — 2025",
    title: "BS Software Engineering",
    org: "Iqra University",
    description: "Published two papers on Explainable and Green AI. Final year project: IQRAversity, a VR campus tour.",
  },
];

export const PROCESS = [
  { step: "01", title: "Scope", body: "A short call to agree the problem, the data and what success looks like." },
  { step: "02", title: "Early demo", body: "A working prototype in days, not weeks, so you see progress immediately." },
  { step: "03", title: "Prove it", body: "Tested on your real data, measured and hardened with guardrails." },
  { step: "04", title: "Hand over", body: "Clean code, deployment and documentation — you own everything." },
];
