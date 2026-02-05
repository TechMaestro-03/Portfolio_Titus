// ========================================
// TITUS PORTFOLIO - AI CHATBOT
// Author: Titus Mboya
// ========================================

// ======= Portfolio Data ======= 
const portfolioData = {
  name: "Titus K. Mboya",
  title: "Full Stack Developer & Machine Learning Engineer",
  bio: "I build elegant web applications with modern technologies, data pipelines and machine learning models that solve real problems and scale well.",
  
  projects: [
    {
      name: "TechPulse",
      description: "Personalized tech news aggregator built with Firebase and machine learning. It analyzes user preferences to deliver curated, relevant news with a clean, responsive interface.",
      link: "https://github.com/TechMaestro-03/TechPulse",
      technologies: ["Firebase", "JavaScript", "Bootstrap", "REST APIs"]
    },
    {
      name: "Mkulima Farm Management",
      description: "Responsive farm management system for organizing tasks, workers, and operations efficiently. Allows managers to assign and track tasks in real time with productivity dashboards.",
      link: "https://github.com/Mkulima-Farm-Management/New-MKFS1",
      technologies: ["Tailwind", "JavaScript", "Python", "MySQL"]
    },
    {
      name: "Task Manager",
      description: "Real-time task manager for tracking personal and team tasks efficiently. Integrates Firestore for instant updates and real-time collaboration with notifications and progress tracking.",
      link: "https://github.com/TechMaestro-03/task_manager",
      technologies: ["PHP", "React", "MongoDB"]
    }
  ],
  
  skills: [
    "Full-Stack Development (HTML, CSS, JS, Node.js, React.js)",
    "Machine Learning (Python, TensorFlow, scikit-learn, PyTorch)",
    "AI & Automation (LLMs, RPA, NLP)",
    "Data Analysis & Visualization (Pandas, NumPy, D3.js, Tableau)",
    "Database Management (SQL, Firestore, MongoDB, PostgreSQL)",
    "Cloud Services (AWS, Firebase, Vercel)",
    "DevOps & CI/CD (Docker, GitHub Actions)",
    "Cybersecurity Fundamentals"
  ],
  
  hobbies: [
    "Competitive Gaming (Strategy & FPS)",
    "Exploring VR/AR Environments",
    "Chess (Rated 1800+ on Chess.com)",
    "Digital Art & UI/UX Design",
    "Building Raspberry Pi Projects",
    "Meditation & Mindfulness Practices"
  ],
  
  education: [
    { 
      degree: "BSc Computer Science", 
      institution: "Maseno University", 
      year: "Sep 2021 - Nov 2025",
      details: "Focused on algorithms, data structures, software engineering & AI."
    },
    {
      degree: "PDTP Intern",
      institution: "ICT Authority",
      year: "Jan 2026 – Present",
      details: "Contributed to user-friendly digital solutions with seamless functionality and consistent design standards."
    },
    {
      degree: "Freelance Developer",
      institution: "",
      year: "Jan 2022 – Present",
      details: "Designed and delivered modern digital solutions with focus on usability and clean execution."
    }
  ],
  
  certifications: [
    "Google Data Analytics Professional Certificate (2024)",
    "Software Engineering Course - Moringa School (2024)",
    "Machine Learning Specialization - Coursera (Ongoing)"
  ],
  
  achievements: [
    "Built and deployed 20+ projects with scalable architectures",
    "3+ years of professional development experience",
    "Served 15+ clients with custom digital solutions",
    "Winner of local hackathons in Kenya",
    "Published technical articles on Medium"
  ],
  
  languages: [
    { name: "English", proficiency: "Fluent (Professional)" },
    { name: "Swahili", proficiency: "Native" },
    { name: "French", proficiency: "Basic (A2 Level)" }
  ],
  
  contact: {
    email: "mboyatitus11@gmail.com",
    phone: "+254 768 762062",
    location: "Nairobi, Kenya",
    linkedin: "https://www.linkedin.com/in/titus-mboya-087308380",
    github: "https://github.com/TechMaestro-03",
    twitter: "https://x.com/BoyleTirtu76386",
    instagram: "https://instagram.com/tec_hmaestro"
  },
  
  availability: {
    status: "Open to opportunities",
    freelance: "Available for freelance projects",
    responseTime: "Usually responds within 2 hours during availability hours",
    timezone: "EAT (Nairobi, Kenya)",
    note: "Open to freelance projects and full-time opportunities"
  },
  
  services: [
    "Web Development - Custom web applications with modern technologies",
    "Mobile Apps - Cross-platform applications for iOS and Android",
    "AI/ML Solutions - Machine learning models and AI-powered applications",
    "Data Analytics - Data analysis, visualization, and business intelligence"
  ],
  
  greetings: [
    "👋 Hello! I'm Titus' AI assistant. How can I help you today?",
    "Hi there! 😊 Ready to explore Titus' portfolio? Just ask!",
    "Greetings! 🤖 I'm here to answer all your questions about Titus' work!",
    "Hey! ✨ What would you like to know about Titus' projects or skills?"
  ],
  
  goodbye: [
    "Goodbye! Thanks for visiting Titus' portfolio. Come back anytime! 🌟",
    "See you later! 👋 Don't hesitate to return if you have more questions!",
    "Farewell! 🚀 Hope you found what you were looking for. Have a great day!",
    "Bye for now! 💫 Titus appreciates your interest in his work!"
  ],
  
  fallback: [
    "Hmm 🤔 I'm not sure about that. Try asking about Titus' projects, skills, hobbies, education, or achievements!",
    "I'm still learning about Titus' world! 😅 Could you rephrase that or ask about his projects, skills, or background?",
    "My circuits are buzzing but I don't have that info! 🔍 Try asking about Titus' work experience, tech skills, or fun facts!",
    "I specialize in Titus' professional life! 🤖 Ask about his projects, skills, availability, or achievements instead!"
  ],
  
  easterEggs: {
    "who are you": "I'm Titus' AI assistant, created to help you navigate his portfolio! I run on JavaScript, coffee, and a passion for tech. 🤖☕",
    "secret": "🎉 You found a secret! Titus loves building intelligent systems and is passionate about AI that serves humanity!",
    "meaning of life": "42! But seriously, Titus believes the meaning of life is to create positive impact through technology and continuous learning. 🌍✨",
    "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs! 😄🐞",
    "i love you": "Aww! 💖 That's sweet! I'm just an AI, but I'll make sure Titus knows you appreciate his work! 😊",
    "knock knock": "Who's there? 👀 Titus' portfolio! Titus' portfolio who? Titus' portfolio is open for opportunities! 😄"
  },
  
  funFacts: [
    "Titus taught himself to code using free online resources",
    "He's fascinated by the intersection of AI and agriculture for sustainable farming",
    "He once built a Raspberry Pi weather station for his local community",
    "He's learning guitar to balance his tech life with creativity",
    "Chess is his favorite strategy game for mental sharpness"
  ]
};

// ======= Chatbot Elements =======
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("closeChat");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");
const typingIndicator = document.getElementById("typingIndicator");

// ======= Chatbot State =======
let lastMessage = "";
let conversationHistory = [];
let context = {
  lastTopic: null,
  lastProject: null,
  mood: "neutral"
};
let isProcessing = false;

// ======= Event Listeners =======

// Toggle chatbot visibility
chatbotToggle.addEventListener("click", () => {
  chatbot.style.display = "flex";
  chatbotToggle.style.display = "none";
  chatbot.setAttribute("aria-hidden", "false");
  
  // Add welcome message if it's the first time
  if (chatMessages.children.length === 1) {
    setTimeout(() => {
      appendMessage("ai", getRandomResponse(portfolioData.greetings));
    }, 300);
  }
  
  // Scroll to bottom
  setTimeout(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 100);
});

// Close chatbot
closeChat.addEventListener("click", () => {
  chatbot.style.display = "none";
  chatbotToggle.style.display = "flex";
  chatbot.setAttribute("aria-hidden", "true");
});

// Handle form submission
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  
  if (!message || isProcessing) return;
  
  // Add to conversation history
  conversationHistory.push({ role: "user", content: message });
  
  // Show user message
  appendMessage("user", message);
  userInput.value = "";
  
  // Show typing indicator
  typingIndicator.style.display = "block";
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Process the message
  isProcessing = true;
  
  // Check for easter eggs first
  const easterEggResponse = checkEasterEggs(message);
  if (easterEggResponse) {
    setTimeout(() => {
      typingIndicator.style.display = "none";
      typeAIMessage(easterEggResponse);
      isProcessing = false;
    }, 800 + Math.random() * 500);
    return;
  }
  
  // Get AI response
  setTimeout(() => {
    let aiMessage = getAIResponse(message);
    typingIndicator.style.display = "none";
    typeAIMessage(aiMessage);
    isProcessing = false;
    
    // Update context
    updateContext(message);
  }, 800 + Math.random() * 500);
});

// Press Enter to send (without Shift for new line)
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    chatForm.requestSubmit();
  }
});

// ======= Core Functions =======

// Check for Easter Eggs
function checkEasterEggs(message) {
  const normalized = message.toLowerCase().trim();
  
  // Check exact matches
  if (portfolioData.easterEggs[normalized]) {
    return portfolioData.easterEggs[normalized];
  }
  
  // Check partial matches
  for (const [key, response] of Object.entries(portfolioData.easterEggs)) {
    if (normalized.includes(key)) {
      return response;
    }
  }
  
  // Special easter eggs
  if (normalized.includes("pizza")) {
    return "Titus' favorite pizza topping is pepperoni! 🍕 But he's open to trying new things - just like with technology!";
  }
  
  if (normalized.match(/\b(0+1+0+1+)\b/)) {
    return "🎉 Binary detected! You've unlocked a special message: Titus believes in building a future where technology serves humanity. Keep coding! 💻✨";
  }
  
  return null;
}

// Get AI Response (Pattern Matching + Context Awareness)
function getAIResponse(message) {
  const msg = message.toLowerCase().trim();
  
  // Prevent duplicate messages
  if (msg === lastMessage) {
    return "You've just asked that. Try something else!";
  }
  lastMessage = msg;
  
  // Greetings
  if (/(hello|hi|hey|greetings|howdy|^hey$|^hi$)/i.test(msg)) {
    context.mood = "excited";
    return getRandomResponse(portfolioData.greetings);
  }
  
  // Goodbyes
  if (/(bye|goodbye|see you|farewell|exit|close|later)/i.test(msg)) {
    context.mood = "neutral";
    return getRandomResponse(portfolioData.goodbye);
  }
  
  // Thank you
  if (/(thank|thanks|appreciate|cheers)/i.test(msg)) {
    return "You're very welcome! 😊 Is there anything else you'd like to know about Titus' work?";
  }
  
  // Help
  if (/(help|what can you do|commands|features|assist)/i.test(msg)) {
    return `I can help you with:\n• 📂 Project details & links\n• 💻 Technical skills & expertise\n• 🎓 Education & certifications\n• 🏆 Achievements & experience\n• 📅 Availability & contact info\n• 😄 Fun facts & hobbies\n\nJust ask about any of these topics!`;
  }
  
  // Projects
  if (/(project|work|portfolio|build|created|developed|apps|applications)/i.test(msg)) {
    context.lastTopic = "projects";
    context.mood = "excited";
    return getProjectsResponse();
  }
  
  // Skills
  if (/(skill|technolog|tech stack|expertise|proficient|languages|frameworks)/i.test(msg)) {
    context.lastTopic = "skills";
    return `Titus has a diverse skill set across multiple domains:\n\n${portfolioData.skills.map(skill => `• ${skill}`).join('\n')}\n\nHe's particularly passionate about AI/ML and full-stack development!`;
  }
  
  // Hobbies
  if (/(hobby|interest|fun|free time|passion|outside work|personal)/i.test(msg)) {
    context.lastTopic = "hobbies";
    return `When not coding, Titus enjoys:\n\n${portfolioData.hobbies.map(hobby => `• ${hobby}`).join('\n')}\n\nHe believes these hobbies help him stay creative and balanced! 🧘‍♂️🎨`;
  }
  
  // Availability
  if (/(available|schedule|time|contact|reach out|hire|work with|opportunity)/i.test(msg)) {
    context.lastTopic = "availability";
    return `💼 **Availability Status**\n${portfolioData.availability.status}\n\n${portfolioData.availability.freelance}\n\n${portfolioData.availability.responseTime}\n\n${portfolioData.availability.note}\n\n${getContactResponse()}`;
  }
  
  // Education
  if (/(education|school|university|degree|studied|academic|background)/i.test(msg)) {
    context.lastTopic = "education";
    return `🎓 **Titus' Educational Background:**\n\n${portfolioData.education.map(edu => 
      `${edu.degree}${edu.institution ? ' - ' + edu.institution : ''}\n${edu.year}\n${edu.details}\n`
    ).join('\n')}`;
  }
  
  // Certifications
  if (/(certification|certified|course|training|badge|credentials)/i.test(msg)) {
    context.lastTopic = "certifications";
    return `📜 **Certifications:**\n\n${portfolioData.certifications.map(cert => `• ${cert}`).join('\n')}\n\nTitus is committed to continuous learning and professional development! 📚`;
  }
  
  // Achievements
  if (/(achievement|award|accomplishment|honor|won|recognition|experience)/i.test(msg)) {
    context.lastTopic = "achievements";
    return `🏆 **Key Achievements:**\n\n${portfolioData.achievements.map(ach => `• ${ach}`).join('\n')}\n\nTitus is always striving to add more to this list!`;
  }
  
  // Languages
  if (/(language|speak|fluent|communication|multilingual)/i.test(msg)) {
    context.lastTopic = "languages";
    return `🌍 **Languages:**\n\n${portfolioData.languages.map(lang => `• ${lang.name}: ${lang.proficiency}`).join('\n')}\n\nThis helps him collaborate effectively in global teams!`;
  }
  
  // Contact
  if (/(contact|email|phone|linkedin|github|twitter|social|location)/i.test(msg)) {
    context.lastTopic = "contact";
    return getContactResponse();
  }
  
  // Bio/About
  if (/(about|bio|background|who is|tell me about|profile|yourself)/i.test(msg)) {
    context.lastTopic = "bio";
    return `🌟 **${portfolioData.name}**\n${portfolioData.title}\n\n${portfolioData.bio}\n\nHe's passionate about creating technology that makes a difference!`;
  }
  
  // Services
  if (/(service|offer|provide|what do you do|specialize)/i.test(msg)) {
    context.lastTopic = "services";
    return `💼 **Services Offered:**\n\n${portfolioData.services.map(service => `• ${service}`).join('\n')}\n\nInterested in any of these? ${getContactResponse()}`;
  }
  
  // Fun facts
  if (/(fun fact|interesting|did you know|surprise|secret|personal)/i.test(msg)) {
    context.mood = "playful";
    return `✨ **Fun Fact:**\n\n${getRandomResponse(portfolioData.funFacts)}\n\nWant another? Just ask for "another fun fact"! 😄`;
  }
  
  // Project-specific queries
  for (const project of portfolioData.projects) {
    if (msg.includes(project.name.toLowerCase())) {
      context.lastTopic = "project";
      context.lastProject = project.name;
      return getProjectDetails(project);
    }
  }
  
  // Follow-up about last project
  if (context.lastProject && (/(more|details|tell me|how|what.*technolog|link|github|code)/i.test(msg))) {
    const project = portfolioData.projects.find(p => p.name === context.lastProject);
    if (project) {
      return `Here are more details about ${project.name}:\n\n${getProjectDetails(project)}`;
    }
  }
  
  // Default fallback
  return getRandomResponse(portfolioData.fallback);
}

// Get Projects Response
function getProjectsResponse() {
  return `🚀 **Titus' Recent Projects:**\n\n${portfolioData.projects.map(project => 
    `**${project.name}**\n${project.description}\n_Technologies: ${project.technologies.join(', ')}_\n[View on GitHub](${project.link})`
  ).join('\n\n---\n\n')}\n\nWould you like details about a specific project? Just mention the name!`;
}

// Get Project Details
function getProjectDetails(project) {
  return `**${project.name}**\n${project.description}\n\n**Technologies Used:**\n${project.technologies.map(tech => `• ${tech}`).join('\n')}\n\n**GitHub Repository:**\n${project.link}\n\nThis project showcases Titus' ability to build practical, scalable solutions!`;
}

// Get Contact Response
function getContactResponse() {
  return `📧 **Email:** ${portfolioData.contact.email}\n📱 **Phone:** ${portfolioData.contact.phone}\n📍 **Location:** ${portfolioData.contact.location}\n\n**Connect with Titus:**\n• [LinkedIn](${portfolioData.contact.linkedin})\n• [GitHub](${portfolioData.contact.github})\n• [Twitter](${portfolioData.contact.twitter})\n• [Instagram](${portfolioData.contact.instagram})\n\nTitus responds promptly during his availability hours!`;
}

// Update Context
function updateContext(message) {
  const msg = message.toLowerCase();
  
  // Update mood based on user sentiment
  if (/(wow|amazing|impressive|love|great|excellent|awesome)/i.test(msg)) {
    context.mood = "excited";
  } else if (/(help|confused|clarify|explain|understand)/i.test(msg)) {
    context.mood = "helpful";
  } else if (/(hmm|think|consider|maybe|interesting)/i.test(msg)) {
    context.mood = "thoughtful";
  }
}

// Get Random Response
function getRandomResponse(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// ======= Message Display Functions =======

// Append Message
function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  
  // Format markdown-like syntax
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/_(.*?)_/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/•/g, '•');
  
  messageDiv.innerHTML = formattedText;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Type AI Message (with typing effect)
function typeAIMessage(text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", "ai");
  chatMessages.appendChild(messageDiv);
  
  let index = 0;
  const speed = 30 + Math.random() * 20; // Variable typing speed
  
  function typeNextChar() {
    if (index < text.length) {
      // Handle markdown formatting during typing
      let char = text.charAt(index);
      
      // Bold text
      if (char === '*' && text.charAt(index + 1) === '*') {
        messageDiv.innerHTML += '<strong>';
        index += 2;
      } 
      // End bold
      else if (char === '*' && messageDiv.innerHTML.includes('<strong>') && !messageDiv.innerHTML.includes('</strong>')) {
        messageDiv.innerHTML += '</strong>';
        index++;
      }
      // Italic text
      else if (char === '_' && text.charAt(index + 1) === '_') {
        messageDiv.innerHTML += '<em>';
        index += 2;
      }
      // End italic
      else if (char === '_' && messageDiv.innerHTML.includes('<em>') && !messageDiv.innerHTML.includes('</em>')) {
        messageDiv.innerHTML += '</em>';
        index++;
      }
      // Links
      else if (char === '[' && text.substring(index).match(/\[([^\]]+)\]\(([^)]+)\)/)) {
        const match = text.substring(index).match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          messageDiv.innerHTML += `<a href="${match[2]}" target="_blank" rel="noopener noreferrer">${match[1]}</a>`;
          index += match[0].length;
        } else {
          messageDiv.innerHTML += char;
          index++;
        }
      }
      // Regular characters
      else {
        messageDiv.innerHTML += char === '\n' ? '<br>' : char;
        index++;
      }
      
      chatMessages.scrollTop = chatMessages.scrollHeight;
      setTimeout(typeNextChar, speed);
    }
  }
  
  setTimeout(typeNextChar, 100);
}

// ======= Initialize Chatbot =======

// Add initial welcome message after page load
window.addEventListener('load', () => {
  // Pre-load typing indicator styles
  typingIndicator.textContent = "AI is thinking...";
});