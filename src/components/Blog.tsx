"use client";

import { motion } from "framer-motion";

const ARTICLES = [
  {
    title: "Explainable AI in Medical Imaging: Visual Explanation Techniques",
    excerpt: "Explainable AI (XAI) is changing medical imaging by making deep learning methods easier to understand. This study uses XAI methods like Grad-CAM and SHAP in tasks like tumor detection to help clinicians trust AI systems.",
    category: "AI Research",
    readTime: "Published 2025",
    color: "from-blue-500 to-cyan-500",
    link: "https://thesesjournal.com/index.php/1/article/view/1482",
  },
  {
    title: "Multi-Modal and Green Computing for Advanced Computer Vision",
    excerpt: "Exploring green computing in AI systems, focusing on energy-efficient models like TinyLLaVA-Med. Discusses reducing power usage in healthcare AI without losing accuracy, ensuring sustainable AI solutions.",
    category: "Green AI",
    readTime: "Published 2025",
    color: "from-green-500 to-emerald-500",
    link: "https://thesesjournal.com/index.php/1/article/view/1110",
  },
];

export default function Blog() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="blog">
       {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-16 text-center tracking-tight"
        >
          Insights
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {ARTICLES.map((article, index) => (
            <motion.a
                key={index}
                href={article.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative block h-full w-full md:w-[45%] lg:w-[30%]"
            >
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col">
                    {/* Header Gradient */}
                    <div className={`h-2 bg-linear-to-r ${article.color}`} />
                    
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white`}>
                                {article.category}
                            </span>
                            <span className="text-xs text-gray-500 font-mono">
                                {article.readTime}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                            {article.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                            {article.excerpt}
                        </p>

                        <div className="flex items-center text-blue-400 font-bold text-sm group-hover:translate-x-2 transition-transform">
                            View Paper <span className="ml-2">→</span>
                        </div>
                    </div>
                </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
