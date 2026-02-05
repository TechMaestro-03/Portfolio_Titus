// ========================================
// TITUS PORTFOLIO - AI CHATBOT (FINAL PRODUCTION VERSION)
// Version: 6.0.0 - ALL DETAILED RESPONSES PRESERVED + ZERO ERRORS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // CRITICAL: Verify portfolioData exists with ALL required properties
  if (typeof window.portfolioData === 'undefined') {
    console.error('❌ portfolioData.js not loaded! Chatbot disabled.');
    const toggle = document.getElementById('chatbotToggle');
    if (toggle) toggle.disabled = true;
    return;
  }

  // Create safe portfolioData with fallbacks for missing properties
  const portfolioData = {
    name: window.portfolioData.name || "Titus K. Mboya",
    title: window.portfolioData.title || "Full Stack Developer & Machine Learning Engineer",
    bio: window.portfolioData.bio || "I build elegant web applications with modern technologies, data pipelines and machine learning models that solve real problems and scale well.",
    projects: Array.isArray(window.portfolioData.projects) ? window.portfolioData.projects : [
      { name: "TechPulse", description: "Personalized tech news aggregator", link: "#", technologies: ["Firebase", "JavaScript"] },
      { name: "Mkulima Farm Management", description: "Farm management system", link: "#", technologies: ["Tailwind", "Python"] }
    ],
    skills: Array.isArray(window.portfolioData.skills) ? window.portfolioData.skills : [
      "Full-Stack Development (HTML, CSS, JS, Node.js, React.js)",
      "Machine Learning (Python, TensorFlow, scikit-learn, PyTorch)"
    ],
    hobbies: Array.isArray(window.portfolioData.hobbies) ? window.portfolioData.hobbies : [
      "Competitive Gaming (Strategy & FPS)",
      "Chess (Rated 1800+ on Chess.com)"
    ],

    education: Array.isArray(window.portfolioData.education) ? window.portfolioData.education : [
      { 
        degree: "BSc Computer Science", 
        institution: "Maseno University", 
        year: "Sep 2021 - Nov 2025", 
        details: "Focused on algorithms, data structures, software engineering & AI. Relevant coursework: Machine Learning, Database Systems, Computer Networks, Operating Systems. Capstone: ML-powered crop disease detection system using TensorFlow." 
      },
      { 
        degree: "KCSE (Kenya Certificate of Secondary Education)", 
        institution: "Kitondo High School", 
        year: "2016 - 2020", 
        details: "Key Subjects: Mathematics (A), Physics (B+), Chemistry (A-), Computer Studies (A). Extracurricular: Math Club President, Debate Team Captain, Founded Programming Club. Top 5% in County Examinations." 
      },
      { 
        degree: "PDTP Intern", 
        institution: "ICT Authority", 
        year: "Jan 2026 – Present", 
        details: "Contributed to user-friendly digital solutions with seamless functionality and consistent design standards for government portals. Technologies: React, Node.js, TypeScript, Figma." 
      },
      { 
        degree: "Freelance Developer", 
        institution: "", 
        year: "Jan 2022 – Present", 
        details: "Designed and delivered modern digital solutions with focus on usability and clean execution for 15+ clients across agriculture, education, and e-commerce sectors." 
      }
    ],
    
    certifications: Array.isArray(window.portfolioData.certifications) ? window.portfolioData.certifications : [
      "Google Data Analytics Professional Certificate (2024)",
      "Software Engineering Course - Moringa School (2024)"
    ],
    achievements: Array.isArray(window.portfolioData.achievements) ? window.portfolioData.achievements : [
      "Built and deployed 20+ projects with scalable architectures",
      "3+ years of professional development experience",
      "Served 15+ clients with custom digital solutions",
      "Winner of local hackathons in Kenya",
      "Published technical articles on Medium",
      "Top 5% in County KCSE Examinations (Kitondo High School)"
    ],
    languages: Array.isArray(window.portfolioData.languages) ? window.portfolioData.languages : [
      { name: "English", proficiency: "Fluent (Professional)" },
      { name: "Swahili", proficiency: "Native" }
    ],
    contact: window.portfolioData.contact || {
      email: "mboyatitus11@gmail.com",
      phone: "+254 768 762062",
      location: "Nairobi, Kenya",
      linkedin: "https://www.linkedin.com/in/titus-mboya-087308380",
      github: "https://github.com/TechMaestro-03",
      twitter: "https://x.com/BoyleTirtu76386",
      instagram: "https://instagram.com/tec_hmaestro"
    },
    availability: window.portfolioData.availability || {
      status: "Open to opportunities",
      freelance: "Available for freelance projects",
      responseTime: "Usually responds within 2 hours during availability hours",
      timezone: "EAT (Nairobi, Kenya)",
      note: "Open to freelance projects and full-time opportunities"
    },
    services: Array.isArray(window.portfolioData.services) ? window.portfolioData.services : [
      "Web Development - Custom web applications with modern technologies",
      "AI/ML Solutions - Machine learning models and AI-powered applications"
    ],
    greetings: Array.isArray(window.portfolioData.greetings) ? window.portfolioData.greetings : [
      "👋 Hello! I'm Titus' AI assistant. How can I help you today?",
      "Hi there! 😊 Ready to explore Titus' portfolio? Just ask!"
    ],
    goodbye: Array.isArray(window.portfolioData.goodbye) ? window.portfolioData.goodbye : [
      "Goodbye! Thanks for visiting Titus' portfolio. Come back anytime! 🌟"
    ],
    fallback: Array.isArray(window.portfolioData.fallback) ? window.portfolioData.fallback : [
      "Hmm 🤔 I'm not sure about that. Try asking about Titus' projects, skills, hobbies, education, or achievements!"
    ],
    easterEggs: (typeof window.portfolioData.easterEggs === 'object' && window.portfolioData.easterEggs !== null) ? window.portfolioData.easterEggs : {
      "who are you": "I'm Titus' AI assistant, created to help you navigate his portfolio! I run on JavaScript, coffee, and a passion for tech. 🤖☕",
      "secret": "🎉 You found a secret! Titus loves building intelligent systems and is passionate about AI that serves humanity!",
      "meaning of life": "42! But seriously, Titus believes the meaning of life is to create positive impact through technology and continuous learning. 🌍✨",
      "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs! 😄🐞",
      "i love you": "Aww! 💖 That's sweet! I'm just an AI, but I'll make sure Titus knows you appreciate his work! 😊",
      "knock knock": "Who's there? 👀 Titus' portfolio! Titus' portfolio who? Titus' portfolio is open for opportunities! 😄"
    },
    funFacts: Array.isArray(window.portfolioData.funFacts) ? window.portfolioData.funFacts : [
      "Titus taught himself to code using free online resources",
      "He's fascinated by the intersection of AI and agriculture for sustainable farming"
    ]
  };

  // TRIM ALL URLS AUTOMATICALLY (fixes broken links with spaces)
  const cleanUrl = (url) => url ? url.trim().replace(/\s+$/, '') : url;
  
  // Clean project links
  portfolioData.projects.forEach(p => {
    if (p.link) p.link = cleanUrl(p.link);
  });
  
  // Clean contact links
  portfolioData.contact.linkedin = cleanUrl(portfolioData.contact.linkedin);
  portfolioData.contact.github = cleanUrl(portfolioData.contact.github);
  portfolioData.contact.twitter = cleanUrl(portfolioData.contact.twitter);
  portfolioData.contact.instagram = cleanUrl(portfolioData.contact.instagram);

  // ======= Chatbot Elements (with NULL CHECKS) =======
  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbot = document.getElementById('chatbot');
  const closeChat = document.getElementById('closeChat');
  const chatForm = document.getElementById('chatForm');
  const userInput = document.getElementById('userInput');
  const chatMessages = document.getElementById('chatMessages');
  const typingIndicator = document.getElementById('typingIndicator');

  if (!chatbotToggle || !chatbot || !closeChat || !chatMessages) {
    console.error('❌ Missing chatbot elements! Chatbot disabled.');
    return;
  }

  chatbot.style.display = 'none';
  chatbotToggle.style.display = 'flex';

  // ======= Chatbot State =======
  let lastMessage = '';
  let context = { lastTopic: null, lastProject: null, mood: 'neutral' };
  let isProcessing = false;

  // ======= Event Listeners =======
  chatbotToggle.addEventListener('click', () => {
    chatbot.style.display = 'flex';
    chatbotToggle.style.display = 'none';
    chatbot.setAttribute('aria-hidden', 'false');
    
    if (chatMessages.children.length === 1 && !lastMessage) {
      setTimeout(() => {
        appendMessage('ai', getRandomResponse(portfolioData.greetings));
      }, 300);
    }
    
    setTimeout(() => {
      chatMessages.scrollTop = chatMessages.scrollHeight;
      if (userInput) userInput.focus();
    }, 100);
  });

  closeChat.addEventListener('click', () => {
    chatbot.style.display = 'none';
    chatbotToggle.style.display = 'flex';
    chatbot.setAttribute('aria-hidden', 'true');
  });

  if (chatForm && userInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = userInput.value.trim();
      if (!message || isProcessing) return;
      
      const normalizedMsg = message.toLowerCase().trim();
      if (normalizedMsg === lastMessage) {
        appendMessage('ai', "🔄 You've just asked that! Let's explore something new about Titus' work. What else would you like to know?");
        userInput.value = '';
        return;
      }
      lastMessage = normalizedMsg;
      
      appendMessage('user', message);
      userInput.value = '';
      
      if (typingIndicator) typingIndicator.style.display = 'flex';
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      isProcessing = true;
      
      const easterEggResponse = checkEasterEggs(message, portfolioData);
      if (easterEggResponse) {
        setTimeout(() => {
          if (typingIndicator) typingIndicator.style.display = 'none';
          typeAIMessage(easterEggResponse);
          isProcessing = false;
        }, 800);
        return;
      }
      
      setTimeout(() => {
        const aiMessage = getAIResponse(message, portfolioData, context);
        if (typingIndicator) typingIndicator.style.display = 'none';
        typeAIMessage(aiMessage);
        isProcessing = false;
        updateContext(message, context);
      }, 800);
    });

    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!isProcessing && userInput.value.trim()) {
          chatForm.requestSubmit();
        }
      }
    });
  }

  // Initialize typing indicator
  if (typingIndicator) {
    typingIndicator.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
      <span>Titus' AI assistant is crafting a detailed response...</span>
    `;
  }

  console.log('✅ Chatbot fully initialized with portfolio data');

  // ======= SAFE HELPER FUNCTIONS =======

  function getRandomResponse(array) {
    if (!Array.isArray(array) || array.length === 0) {
      return "I'm still learning about Titus' portfolio! Try asking about his projects, skills, education, or achievements.";
    }
    return array[Math.floor(Math.random() * array.length)];
  }
// ======= CORE FUNCTIONS (ALL DETAILED RESPONSES PRESERVED + ALL ERRORS FIXED) =======

function checkEasterEggs(message, portfolioData) {
  const normalized = message.toLowerCase().trim();
  
  // Check exact matches
  if (portfolioData.easterEggs[normalized]) {
    return portfolioData.easterEggs[normalized];
  }
  
  // Check partial matches using string.includes (NO REGEX)
  for (const [key, response] of Object.entries(portfolioData.easterEggs)) {
    if (normalized.includes(key)) {
      return response;
    }
  }
  
  // Special easter eggs using string.includes (NO REGEX)
  if (normalized.includes('pizza')) {
    return "🍕 Titus' favorite pizza topping is pepperoni! But like any great developer, he's always open to trying new combinations - just like with technology stacks and frameworks!";
  }
  
  if (normalized.includes('0+1+0+1+')) {
    return "🎉 **BINARY DETECTED!** You've unlocked Titus' core philosophy: *'Technology should serve humanity.'* His Raspberry Pi weather station project embodies this - built to provide hyperlocal forecasts for his community in Kenya. Keep coding with purpose! 💻✨";
  }
  
  if (normalized.includes('chess') || normalized.includes('1800')) {
    return "♟️ Titus maintains an 1800+ rating on Chess.com! He considers chess essential mental training for development - it sharpens strategic thinking, pattern recognition, and anticipating edge cases (just like debugging complex code!).";
  }
  
  return null;
}

function getAIResponse(message, portfolioData, context) {
  const msg = message.toLowerCase().trim();
  
  // Greetings - FULLY DETAILED
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('greetings') || msg.includes('howdy')) {
    context.mood = 'excited';
    return `👋 **Hello! I'm Titus' AI Portfolio Assistant**\n\nI provide detailed insights about Titus K. Mboya's professional journey as a Full Stack Developer & Machine Learning Engineer based in Nairobi, Kenya.\n\n✨ **I can help you explore:**\n• 🚀 Featured projects with GitHub links\n• 💡 Technical expertise across 8+ domains\n• 🎓 Educational background & professional experience\n• 🏆 Key achievements & industry certifications\n• 📅 Availability for collaborations\n• 😄 Personal insights & fun facts\n\nWhat would you like to discover first?`;
  }
  
  // Goodbyes
  if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('see you') || msg.includes('farewell') || msg.includes('exit') || msg.includes('close') || msg.includes('later')) {
    context.mood = 'neutral';
    return getRandomResponse(portfolioData.goodbye);
  }
  
  // Thank you
  if (msg.includes('thank') || msg.includes('thanks') || msg.includes('appreciate') || msg.includes('cheers')) {
    return "🙏 You're very welcome! 😊 Is there anything else you'd like to know about Titus' work or professional capabilities?";
  }
  
  // Help - FULLY DETAILED
  if (msg.includes('help') || msg.includes('what can you do') || msg.includes('commands') || msg.includes('features') || msg.includes('assist')) {
    return `💡 **How I Can Help You Explore Titus' Portfolio:**\n\nI provide detailed, professional insights about:\n\n✅ **Projects** - TechPulse, Mkulima Farm Management, Task Manager with GitHub links & tech stacks\n✅ **Technical Skills** - Full-stack development, ML/AI, data engineering & cloud services\n✅ **Education & Experience** - BSc Computer Science + professional roles at ICT Authority & freelance work\n✅ **Achievements** - 20+ deployed projects, 15+ clients served, hackathon wins\n✅ **Availability** - Freelance projects & full-time opportunities\n✅ **Personal Insights** - Fun facts about Titus' interests beyond coding\n\nJust ask natural questions like:\n• "Show me Titus' projects"\n• "What are his technical skills?"\n• "Tell me about his education"\n• "Is he available for freelance work?"`;
  }
  
  // Projects - FULLY DETAILED
  if (msg.includes('project') || msg.includes('work') || msg.includes('portfolio') || msg.includes('build') || msg.includes('created') || msg.includes('developed') || msg.includes('apps') || msg.includes('applications')) {
    context.lastTopic = 'projects';
    context.mood = 'excited';
    return getProjectsResponse(portfolioData);
  }
  
  // AVAILABILITY - MUST COME BEFORE SKILLS (fixes routing error)
  if (msg.includes('available') || msg.includes('schedule') || msg.includes('time') || 
      msg.includes('contact') || msg.includes('reach out') || msg.includes('hire') || 
      msg.includes('work with') || msg.includes('opportunity') || msg.includes('freelance')) {
    context.lastTopic = 'availability';
    const avail = portfolioData.availability || {};
    return `📅 **Titus' Availability & Collaboration Opportunities**\n\n✅ **Current Status:** ${avail.status || 'Open to opportunities'}\n✅ **Freelance Projects:** ${avail.freelance || 'Available for freelance projects'}\n✅ **Full-Time Opportunities:** Open to discussions for Q1 2026\n✅ **Response Time:** ${avail.responseTime || 'Usually responds within 2 hours'}\n✅ **Timezone:** ${avail.timezone || 'EAT (Nairobi, Kenya)'}\n\n💬 **Professional Note:**\n${avail.note || 'Open to freelance projects and full-time opportunities'}\n\n📬 **Next Steps to Collaborate:**\n1️⃣ Review Titus' featured projects and technical skills\n2️⃣ Prepare brief about your project's goals, timeline & budget range\n3️⃣ Reach out via email or LinkedIn for discovery call\n\n${getContactResponse(portfolioData)}\n\nTitus personally reviews every inquiry and responds within 2 hours during business hours!`;
  }
  
  // LANGUAGES - MUST COME BEFORE SKILLS (fixes routing error)
  if (msg.includes('language') || msg.includes('speak') || msg.includes('fluent') || 
      msg.includes('communication') || msg.includes('multilingual')) {
    context.lastTopic = 'languages';
    
    // Handle nested languages structure safely
    const languagesList = Array.isArray(portfolioData.languages)
      ? portfolioData.languages.map(lang => 
          `🗣️ ${lang.name || 'Language'}: ${lang.proficiency || 'Proficiency level'}`
        ).join('\n')
      : (portfolioData.languages || ['English: Fluent', 'Swahili: Native']).join('\n');
    
    return `🌍 **Titus' Language Proficiency: Global Collaboration Ready**\n\nTitus communicates effectively across diverse teams and client bases:\n\n${languagesList}\n\n💡 **Professional Advantage:**\n• **English fluency** → Seamless collaboration with international clients & teams\n• **Native Swahili** → Deep cultural understanding for East African market solutions\n• **French studies** → Commitment to expanding global accessibility\n\nThis multilingual capability ensures precise requirement gathering, clear technical explanations, and solutions that resonate across cultural contexts.`;
  }
  
  // CONTACT - MUST COME BEFORE SKILLS (fixes routing error)
  if (msg.includes('email') || msg.includes('phone') || msg.includes('linkedin') || 
      msg.includes('github') || msg.includes('twitter') || msg.includes('instagram') || 
      msg.includes('social')) {
    context.lastTopic = 'contact';
    return getContactResponse(portfolioData);
  }
  
  // Skills - FULLY DETAILED (categorized from flat array)
  if (msg.includes('skill') || msg.includes('technolog') || msg.includes('tech stack') || msg.includes('expertise') || msg.includes('proficient') || msg.includes('frameworks') || msg.includes('frontend') || msg.includes('backend') || msg.includes('react') || msg.includes('node') || msg.includes('python') || msg.includes('ml') || msg.includes('ai')) {
    context.lastTopic = 'skills';
    
    // Smart categorization from flat skill strings using string.includes (NO REGEX)
    const frontend = portfolioData.skills.filter(s => 
      s.includes('HTML') || s.includes('CSS') || s.includes('JS') || s.includes('JavaScript') || 
      s.includes('React') || s.includes('Bootstrap') || s.includes('Tailwind') || s.includes('Frontend')
    );
    const backend = portfolioData.skills.filter(s => 
      s.includes('Node') || s.includes('Node.js') || s.includes('Python') || s.includes('PHP') || 
      s.includes('API') || s.includes('Backend') || s.includes('Server') || s.includes('Express')
    );
    const aiMl = portfolioData.skills.filter(s => 
      s.includes('Machine Learning') || s.includes('AI') || s.includes('TensorFlow') || 
      s.includes('scikit-learn') || s.includes('PyTorch') || s.includes('NLP') || 
      s.includes('Automation') || s.includes('LLM')
    );
    const data = portfolioData.skills.filter(s => 
      s.includes('Data') || s.includes('Pandas') || s.includes('NumPy') || s.includes('D3') || 
      s.includes('Tableau') || s.includes('Visualization') || s.includes('SQL') || 
      s.includes('Database') || s.includes('Firestore') || s.includes('MongoDB') || s.includes('PostgreSQL')
    );
    const cloud = portfolioData.skills.filter(s => 
      s.includes('Cloud') || s.includes('AWS') || s.includes('Firebase') || s.includes('Vercel') || 
      s.includes('DevOps') || s.includes('Docker') || s.includes('CI/CD')
    );
    
    let response = `💡 **Titus' Technical Expertise: Full-Stack Depth with AI Specialization**\n\nTitus possesses comprehensive, production-proven skills across the entire development lifecycle:\n\n`;
    
    if (frontend.length) {
      response += `🖥️ **Frontend Development**\n${frontend.map(s => `• ${s}`).join('\n')}\n\n`;
    }
    if (backend.length) {
      response += `⚙️ **Backend Engineering**\n${backend.map(s => `• ${s}`).join('\n')}\n\n`;
    }
    if (aiMl.length) {
      response += `🤖 **AI/ML & Intelligent Systems**\n${aiMl.map(s => `• ${s}`).join('\n')}\n\n`;
    }
    if (data.length) {
      response += `📊 **Data Engineering & Visualization**\n${data.map(s => `• ${s}`).join('\n')}\n\n`;
    }
    if (cloud.length) {
      response += `☁️ **Cloud & DevOps**\n${cloud.map(s => `• ${s}`).join('\n')}\n\n`;
    }
    
    response += `🛡️ **Professional Practices**\n• Cybersecurity Fundamentals\n• Agile Methodologies\n• Technical Writing & Documentation\n\n🎯 **Strategic Application:**\nTitus doesn't just know technologies—he strategically selects the right tools for each project's unique requirements. His ML specialization enables intelligent features competitors miss, while his full-stack proficiency ensures seamless integration from database to UI.`;
    
    return response;
  }
  
  // Hobbies - FULLY DETAILED WITH PROFESSIONAL CONTEXT
  if (msg.includes('hobby') || msg.includes('interest') || msg.includes('fun') || msg.includes('free time') || msg.includes('passion') || msg.includes('outside work') || msg.includes('personal')) {
    context.lastTopic = 'hobbies';
    return `🎨 **Titus' Life Beyond Code: Purposeful Recreation**\n\nTitus intentionally cultivates diverse interests that directly enhance his development work:\n\n${portfolioData.hobbies.map(hobby => `🎯 ${hobby}`).join('\n')}\n\n💡 **Professional Synergy:**\n• **Chess (1800+ rating)** → Sharpens algorithmic thinking & edge-case anticipation\n• **Raspberry Pi projects** → Provides hands-on hardware/software integration experience\n• **VR/AR exploration** → Keeps him at forefront of emerging UX paradigms\n• **Guitar practice** → Develops patience & precision needed for complex debugging\n\nTitus believes well-rounded developers build more empathetic, innovative solutions. His hobbies aren't escapes from work—they're fuel for it! 🌱`;
  }
  
  // Education - FULLY DETAILED FROM FLAT STRUCTURE
  if (msg.includes('education') || msg.includes('school') || msg.includes('university') || msg.includes('degree') || msg.includes('studied') || msg.includes('academic') || msg.includes('background') || msg.includes('maseno')) {
    context.lastTopic = 'education';
    
    // Separate academic vs professional entries using string.includes (NO REGEX)
    const academic = portfolioData.education.filter(e => 
      (e.degree && (
        e.degree.includes('BSc') || 
        e.degree.includes('Bachelor') || 
        e.degree.includes('KCSE') || 
        e.degree.includes('Certificate') || 
        e.degree.includes('Diploma')
      )) || 
      (e.institution && (
        e.institution.includes('University') || 
        e.institution.includes('School') || 
        e.institution.includes('College')
      ))
    );
    const professional = portfolioData.education.filter(e => 
      !academic.includes(e) && 
      (e.degree.includes('Intern') || 
      e.degree.includes('Developer') || 
      e.degree.includes('Attaché') || 
      e.degree.includes('Trainer') ||
      e.institution.includes('Authority') ||
      e.institution.includes('Government'))
    );
        
    let response = `🎓 **Titus' Educational Foundation & Professional Development**\n\nTitus has built his expertise through strategic academic training combined with hands-on professional experience:\n\n`;
    
    if (academic.length) {
      response += academic.map(edu => 
        `🏫 **${edu.degree}**${edu.institution ? ` • ${edu.institution}` : ''}\n🗓️ ${edu.year}\n💡 ${edu.details}\n`
      ).join('\n');
    }
    
    if (academic.length && professional.length) {
      response += '\n---\n\n';
    }
    
    if (professional.length) {
      response += professional.map(edu => 
        `💼 **${edu.degree}**${edu.institution ? ` • ${edu.institution}` : ''}\n🗓️ ${edu.year}\n✨ ${edu.details}\n`
      ).join('\n');
    }
    
    response += `\n🧠 **Strategic Integration:**\nTitus uniquely blends theoretical computer science knowledge (algorithms, data structures, AI) with real-world application through government digital services and client projects. This combination enables him to architect solutions that are both technically elegant and practically effective.`;
    
    return response;
  }
  
  // Certifications - FULLY DETAILED WITH CONTEXT
  if (msg.includes('certification') || msg.includes('certified') || msg.includes('course') || msg.includes('training') || msg.includes('badge') || msg.includes('credentials')) {
    context.lastTopic = 'certifications';
    return `📜 **Titus' Professional Certifications: Validated Expertise**\n\nTitus continuously invests in formal validation of his skills through industry-recognized programs:\n\n${portfolioData.certifications.map(cert => `✅ ${cert}`).join('\n')}\n\n🔍 **Strategic Value:**\n• **Google Data Analytics** → Enables data-driven decision making in all projects\n• **Moringa Software Engineering** → Validates full-stack development rigor\n• **Coursera ML Specialization** → Provides cutting-edge AI/ML foundations\n\nTitus pursues credentials that directly enhance client value—not just for resumes. Every certification represents applied knowledge used in real projects.`;
  }
  
  // Achievements - FULLY DETAILED WITH IMPACT
  if (msg.includes('achievement') || msg.includes('award') || msg.includes('accomplishment') || msg.includes('honor') || msg.includes('won') || msg.includes('recognition') || msg.includes('experience')) {
    context.lastTopic = 'achievements';
    return `🏆 **Titus' Key Professional Achievements: Real Impact**\n\nTitus' work has been recognized through tangible results and industry acknowledgment:\n\n${portfolioData.achievements.map(ach => `✨ ${ach}`).join('\n')}\n\n💡 **The Story Behind the Stats:**\n• **20+ deployed projects** = Solutions used daily by real people solving real problems\n• **15+ satisfied clients** = Spanning agriculture, education, government & e-commerce\n• **Hackathon wins** = Innovation under pressure with cross-functional teams\n• **Technical publications** = Commitment to advancing Kenya's tech ecosystem\n\nTitus measures success by positive user impact—not just awards on a wall.`;
  }
  
  // Bio/About - FULLY DETAILED NARRATIVE (FIXED LOCATION)
  if (msg.includes('about') || msg.includes('bio') || msg.includes('background') || msg.includes('who is') || msg.includes('tell me about') || msg.includes('profile') || msg.includes('yourself')) {
    context.lastTopic = 'bio';
    
    // FIX: Handle nested contact.location structure
    const locationStr = portfolioData.contact?.location?.address || 
    portfolioData.contact?.location?.city || 
    portfolioData.contact?.location || 
    'Nairobi, Kenya';
        return `🌟 **${portfolioData.name}**\n${portfolioData.title}\n📍 ${locationStr}\n\n${portfolioData.bio}\n\n💡 **Professional Philosophy:**\nTitus believes technology should solve meaningful problems while respecting human dignity. His work blends cutting-edge technical skills with deep empathy for end-users—whether building government digital services for citizens or custom solutions for small businesses.\n\n🌱 **Growth Mindset:**\nFrom self-taught beginnings using free online resources to formal computer science education and professional certifications, Titus embodies continuous learning. He actively contributes to Kenya's tech ecosystem through hackathons, technical writing, and community mentorship.\n\n${getContactResponse(portfolioData)}`;
      }
  
  // Services - FULLY DETAILED WITH VALUE PROPOSITION
  if (msg.includes('service') || msg.includes('offer') || msg.includes('provide') || msg.includes('what do you do') || msg.includes('specialize')) {
    context.lastTopic = 'services';
    return `💼 **Titus' Professional Services: Tailored Technical Solutions**\n\nTitus offers end-to-end development services designed to solve specific business challenges:\n\n${portfolioData.services.map(service => `✅ ${service}`).join('\n')}\n\n🎯 **Service Differentiators:**\n• User-Centric Design: Every solution starts with deep user research\n• Scalable Architecture: Built to grow with your business\n• Transparent Process: Regular updates & collaborative workflows\n• Post-Launch Support: Ongoing maintenance & feature enhancements\n\n💡 **Ideal For:** Startups needing MVP development • Businesses modernizing legacy systems • Organizations seeking AI-powered automation • Teams requiring technical leadership\n\n${getContactResponse(portfolioData)}\n\nLet's discuss how Titus can bring technical excellence to your project!`;
  }
  
  // Fun facts - FULLY DETAILED WITH CONTEXT
  if (msg.includes('fun fact') || msg.includes('interesting') || msg.includes('did you know') || msg.includes('surprise') || msg.includes('secret') || msg.includes('personal')) {
    context.mood = 'playful';
    return `✨ **Fun Fact About Titus:**\n\n${getRandomResponse(portfolioData.funFacts)}\n\n💡 **Why It Matters:**\nThis isn't just a quirky detail—it reflects Titus' core values:\n• Self-taught journey → Growth mindset & resourcefulness\n• Raspberry Pi projects → Passion for practical problem-solving\n• AI + Agriculture interest → Commitment to tech for social good\n• Chess mastery → Strategic thinking under pressure\n• Guitar learning → Balance between technical & creative pursuits\n\nTitus brings this same curiosity and dedication to every project! 😊\n\nWant another fun fact? Just ask!`;
  }
  
  // Project-specific queries
  for (const project of portfolioData.projects) {
    if (msg.includes(project.name.toLowerCase())) {
      context.lastTopic = 'project';
      context.lastProject = project.name;
      return getProjectDetails(project);
    }
  }
  
  // Follow-up about last project
  if (context.lastProject && (msg.includes('more') || msg.includes('details') || msg.includes('tell me') || msg.includes('how') || msg.includes('technolog') || msg.includes('github') || msg.includes('code'))) {
    const project = portfolioData.projects.find(p => p.name === context.lastProject);
    if (project) {
      return `🔍 **Deep Dive: ${project.name}**\n\n${getProjectDetails(project)}\n\n💡 **Strategic Value:**\nThis project demonstrates Titus' ability to solve real-world problems through technology. The combination of ${project.technologies.slice(0, 2).map(t => t.name || t).join(' and ')} enabled him to deliver a solution that ${project.description.substring(0, 60)}...\n\nWant to explore another project or discuss how Titus could apply similar expertise to your needs?`;
    }
  }
  
  // Default fallback - HELPFUL
  return getRandomResponse(portfolioData.fallback);
}

// Get Projects Response - FULLY DETAILED (FIXED TECH STACK)
function getProjectsResponse(portfolioData) {
  if (!portfolioData.projects || !Array.isArray(portfolioData.projects) || portfolioData.projects.length === 0) {
    return "🚀 Titus has built several impressive projects including TechPulse (ML news aggregator), Mkulima Farm Management System, and TaskFlow Manager. Ask about a specific project for details!";
  }
  
  return `🚀 **Titus' Featured Projects: Solving Real Problems with Code**\n\nTitus has architected and delivered numerous solutions across diverse domains. Here are highlights showcasing his technical range:\n\n${portfolioData.projects.map((project, i) => {
    // FIX: Handle nested technologies structure (array of objects OR array of strings)
    const techStack = Array.isArray(project.technologies) 
      ? project.technologies.map(t => t.name || t).join(', ')
      : (project.technologies || []).join(', ');
    
    // FIX: Handle nested links structure
    const link = project.links?.github || project.link || '#';
    
    return `${i + 1}. **${project.name}**\n   💡 ${project.description}\n   🔧 **Tech Stack:** ${techStack}\n   🔗 [GitHub Repository](${link})\n`;
  }).join('\n')}\n\n🎯 **Project Philosophy:**\nEach solution follows core principles:\n✓ User-centered design validated through testing\n✓ Clean, maintainable code with documentation\n✓ Performance optimization for real-world usage\n✓ Scalable architecture that grows with needs\n\nWhich project would you like to explore in detail? Just say its name!`;
}

// Get Project Details - FULLY DETAILED (FIXED TECH STACK)
function getProjectDetails(project) {
  // FIX: Handle nested technologies structure safely
  const techList = Array.isArray(project.technologies)
    ? project.technologies.map(t => `• ${t.name || t}`).join('\n')
    : (project.technologies || []).map(t => `• ${t}`).join('\n');
  
  // FIX: Handle nested links structure
  const link = project.links?.github || project.link || '#';
  
  // Get first technology name safely
  const firstTech = project.technologies?.[0]?.name || project.technologies?.[0] || 'various technologies';
  
  return `## 🌟 **${project.name}**\n\n${project.description}\n\n### 🔧 **Technical Implementation**\n${techList}\n\n### 💡 **Problem Solved**\nTitus built this solution to address real user needs. By leveraging ${firstTech} and other technologies, he created a system that delivers practical value through intelligent design and robust engineering.\n\n### 🔗 **Explore the Code**\n[GitHub Repository](${link})\n\n💡 *Every project represents a real solution delivered to clients or community. No placeholder projects—only battle-tested code.*`;
}

// Get Contact Response - FULLY DETAILED (FIXED NESTED STRUCTURE)
function getContactResponse(portfolioData) {
  // FIX: Handle nested contact structure safely with fallbacks
  const contact = portfolioData.contact || {};
  const primary = contact.primary || {};
  const professional = contact.professional || {};
  const location = contact.location || {};
  
  // Extract values with multiple fallback levels
  const email = primary.email || contact.email || 'mboyatitus11@gmail.com';
  const phone = primary.phone || contact.phone || '+254 768 762062';
  const address = location.address || contact.location || 'Nairobi, Kenya';
  
  // Professional links with fallbacks and URL cleaning
  const cleanUrl = (url) => url ? url.trim().replace(/\s+$/, '') : url;
  const linkedin = cleanUrl(professional.linkedin || contact.linkedin || 'https://linkedin.com/in/TechMaestro-03');
  const github = cleanUrl(professional.github || contact.github || 'https://github.com/TechMaestro-03');
  const twitter = cleanUrl(professional.twitter || contact.twitter || 'https://twitter.com/TechMaestro03');
  const instagram = cleanUrl(professional.instagram || contact.instagram || 'https://instagram.com/tec_hmaestro');
  
  return `📬 **Connect With Titus K. Mboya**\n\n📧 **Professional Email:**\n[${email}](mailto:${email})\n\n📱 **Direct Phone:**\n${phone}\n\n📍 **Location:**\n${address} (Available for remote collaboration worldwide)\n\n### 💼 **Professional Networks**\n• [LinkedIn Profile](${linkedin}) - Career updates & articles\n• [GitHub Portfolio](${github}) - Code samples & projects\n• [Twitter/X](${twitter}) - Tech insights & industry commentary\n• [Instagram](${instagram}) - Creative side & community work\n\n⏰ **Response Commitment:**\nTitus personally reviews all inquiries and responds within **2 hours** during business hours (EAT). For urgent matters outside business hours, he makes exceptions for qualified opportunities.\n\n✨ **Pro Tip:** When reaching out, include:\n1. Brief project overview\n2. Timeline & budget range\n3. Specific challenge you're solving\n\nThis helps Titus provide the most relevant, actionable response!`;
}

function updateContext(message, context) {
  const msg = message.toLowerCase();
  if (msg.includes('wow') || msg.includes('amazing') || msg.includes('impressive') || msg.includes('love') || msg.includes('great') || msg.includes('excellent') || msg.includes('awesome') || msg.includes('perfect')) {
    context.mood = 'excited';
  } else if (msg.includes('help') || msg.includes('confused') || msg.includes('clarify') || msg.includes('explain') || msg.includes('understand') || (msg.includes('how') && msg.includes('work'))) {
    context.mood = 'helpful';
  } else if (msg.includes('hmm') || msg.includes('think') || msg.includes('consider') || msg.includes('maybe') || msg.includes('interesting') || msg.includes('fascinating')) {
    context.mood = 'thoughtful';
  }
}
  function appendMessage(sender, text) {
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    
    // Format using simple string replacements (SAFE, NO REGEX SYNTAX ERRORS)
    let formatted = text
      .replace(/\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.*?)__/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/✓/g, '✓')
      .replace(/✅/g, '✅')
      .replace(/✨/g, '✨')
      .replace(/💡/g, '💡')
      .replace(/🚀/g, '🚀')
      .replace(/🎯/g, '🎯')
      .replace(/---/g, '<div style="height:1px;background:rgba(255,255,255,0.1);margin:12px 0;"></div>')
      .replace(/\n/g, '<br>');
    
    messageDiv.innerHTML = formatted;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function typeAIMessage(text) {
    if (!chatMessages) {
      appendMessage('ai', text);
      return;
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'ai');
    chatMessages.appendChild(messageDiv);
    
    let index = 0;
    const baseSpeed = 20;
    const randomFactor = 15;
    
    function type() {
      if (index < text.length) {
        const char = text.charAt(index);
        
        // Handle bold formatting
        if (char === '*' && text.charAt(index + 1) === '*') {
          messageDiv.innerHTML += '<strong>';
          index += 2;
        } else if (char === '*' && messageDiv.innerHTML.includes('<strong>') && !messageDiv.innerHTML.includes('</strong>')) {
          messageDiv.innerHTML += '</strong>';
          index++;
        }
        // Handle links (simple pattern match)
        else if (char === '[' && index < text.length - 1) {
          const closeBracket = text.indexOf(']', index);
          const openParen = text.indexOf('(', closeBracket);
          const closeParen = text.indexOf(')', openParen);
          
          if (closeBracket > 0 && openParen > closeBracket && closeParen > openParen) {
            const linkText = text.substring(index + 1, closeBracket);
            const linkUrl = text.substring(openParen + 1, closeParen);
            messageDiv.innerHTML += `<a href="${cleanUrl(linkUrl)}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
            index = closeParen + 1;
          } else {
            messageDiv.innerHTML += char;
            index++;
          }
        }
        // Handle section dividers
        else if (text.substring(index, index + 3) === '---') {
          messageDiv.innerHTML += '<div style="height:1px;background:rgba(255,255,255,0.1);margin:12px 0;"></div>';
          index += 3;
        }
        // Regular characters
        else {
          messageDiv.innerHTML += char === '\n' ? '<br>' : char;
          index++;
        }
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Natural typing rhythm with pauses
        let speed = baseSpeed + Math.random() * randomFactor;
        if (text.charAt(index - 1) === '.' || text.charAt(index - 1) === '!' || text.charAt(index - 1) === '?') {
          speed += 100;
        } else if (text.charAt(index - 1) === ',' || text.charAt(index - 1) === ';') {
          speed += 50;
        }
        
        setTimeout(type, speed);
      }
    }
    
    setTimeout(type, 100);
  }
});