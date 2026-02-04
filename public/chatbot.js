// ======= Portfolio Data ======= 
const portfolioData = {
  projects: [
    {
      name: "Earth Flow",
      description: "Interactive dashboard project with location & weather overview.",
      link: "https://github.com/TechMaestro-03/EarthFlow",
      technologies: ["HTML", "CSS", "JS", "Node.js", "API Integration", "Charts.js"]
    },
    {
      name: "TechPulse",
      description: "Personalized news aggregator using ML to track reading habits.",
      link: "https://github.com/TechMaestro-03/TechPulse",
      technologies: ["Python", "Machine Learning", "Flask", "JavaScript", "Firebase"]
    },
    {
      name: "Mkulima Farm Management",
      description: "Farm management system with dashboards for workers & managers, task allocation, and analytics.",
      link: "https://github.com/TechMaestro-03/MkulimaFarmManagement",
      technologies: ["HTML", "CSS", "JS", "Node.js", "Bootstrap", "Firestore"]
    },
    {
      name: "Portfolio Website",
      description: "Interactive portfolio website showcasing projects, skills, and achievements.",
      link: "https://titusportfolio.vercel.app/",
      technologies: ["HTML", "CSS", "JS", "React.js"]
    }
  ],
  skills: [
    "Full-Stack Development (HTML, CSS, JS, Node.js, React.js)",
    "Machine Learning (Python, TensorFlow, scikit-learn)",
    "AI & Automation",
    "Data Analysis & Visualization",
    "Database Management (SQL, Firestore, MongoDB)",
    "Technical Writing",
    "Version Control (Git/GitHub)",
    "Cybersecurity basics"
  ],
  hobbies: [
    "Gaming",
    "Exploring virtual worlds",
    "Chess (strategic thinking)",
    "Graphic design",
    "Tech side projects",
    "Meditation & self-improvement"
  ],
  education: [
    { degree: "BSc in Computer Science", institution: "Maseno University", year: "2025" },
    { degree: "High School Education", institution: "Kitondo High School", year: "2020" }
  ],
  certifications: [
    "Machine Learning A-Z",
    "Full Stack Web Development",
    "Google IT Support Certificate",
    "AWS Cloud Practitioner",
    "Data Analysis with Python"
  ],
  achievements: [
    "Built multiple full-stack projects deployed online",
    "Developed ML personalization algorithm for TechPulse",
    "Created interactive dashboards for Earth Flow project",
    "Winner of local hackathons in Kenya",
    "Published technical articles on Medium about AI and Web Development"
  ],
  languages: ["English (Fluent)", "Swahili (Fluent)", "French (Basic)"],
  contact: {
    email: "example@mail.com",
    phone: "+254 712 345 678",
    linkedin: "https://linkedin.com/in/TechMaestro-03",
    github: "https://github.com/TechMaestro-03",
    twitter: "https://twitter.com/TechMaestro03"
  },
  availability: {
    weekdays: "Monday - Friday, 9:00 AM - 6:00 PM",
    weekends: "Saturday - Sunday, 10:00 AM - 4:00 PM",
    timezone: "EAT (Nairobi, Kenya)"
  },
  greetings: [
    "Hello! 👋 I'm your portfolio assistant. Ask me about my projects, skills, availability, or fun facts!"
  ],
  goodbye: [
    "Goodbye! Thanks for visiting my portfolio. Come back anytime! 🌟"
  ],
  fallback: [
    "Hmm 🤔 I’m not sure about that. Try asking about my projects, skills, hobbies, availability, education, or achievements!"
  ]
};

// ======= Dynamic AI Chatbot =======

const chatbotToggle = document.getElementById("chatbotToggle");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("closeChat");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");
const typingIndicator = document.getElementById("typingIndicator");

let lastMessage = "";

// -----------------------
// Toggle chatbot visibility
// -----------------------
chatbotToggle.addEventListener("click", () => {
  const isHidden = chatbot.style.display === "flex" || chatbot.style.display === "block";
  chatbot.style.display = isHidden ? "none" : "flex";
  chatbotToggle.setAttribute("aria-expanded", !isHidden);
  chatbot.setAttribute("aria-hidden", isHidden);
});

// Close chatbot
closeChat.addEventListener("click", () => {
  chatbot.style.display = "none";
  chatbotToggle.setAttribute("aria-expanded", "false");
  chatbot.setAttribute("aria-hidden", "true");
});

// -----------------------
// Handle sending messages with typing effect
// -----------------------
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("user", message);
  userInput.value = "";

  typingIndicator.style.display = "block";

  setTimeout(() => {
    const aiMessage = getDynamicAIResponse(message);
    typingIndicator.style.display = "none";
    typeAIMessage(aiMessage); // Smarter AI typing effect
  }, 600);
});

// -----------------------
// Append message to chat
// -----------------------
function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// -----------------------
// AI typing effect
// -----------------------
function typeAIMessage(text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", "ai");
  chatMessages.appendChild(messageDiv);

  let index = 0;
  const interval = setInterval(() => {
    messageDiv.textContent += text.charAt(index);
    index++;
    chatMessages.scrollTop = chatMessages.scrollHeight;
    if (index >= text.length) clearInterval(interval);
  }, 20);
}

// -----------------------
// Smarter AI response
// -----------------------
function getDynamicAIResponse(userMsg) {
  const msg = userMsg.toLowerCase().trim();
  if (!msg) return "Please type something!";
  if (msg === lastMessage) return "You've just asked that. Try something else!";
  lastMessage = msg;

  // Patterns
  const patterns = [
    { regex: /(hello|hi|hey)/, response: portfolioData.greetings[0] },
    { regex: /(bye|goodbye)/, response: portfolioData.goodbye[0] },
    { regex: /(project|work|portfolio)/, response: portfolioData.projects.map(p => `${p.name}: ${p.description}\nTechnologies: ${p.technologies ? p.technologies.join(", ") : ""}\nLink: ${p.link}`).join("\n\n") },
    { regex: /(skill|technologies|tech)/, response: portfolioData.skills.join(", ") },
    { regex: /(hobby|fun|interest)/, response: portfolioData.hobbies.join(", ") },
    { regex: /(available|schedule|time)/, response: `I am available:\nWeekdays: ${portfolioData.availability.weekdays}\nWeekends: ${portfolioData.availability.weekends}\nTimezone: ${portfolioData.availability.timezone}` },
    { regex: /(education|school|university)/, response: portfolioData.education.map(e => `${e.degree}, ${e.institution} (${e.year})`).join("\n") },
    { regex: /(certification|certificates)/, response: portfolioData.certifications.join(", ") },
    { regex: /(achievement|award|honor)/, response: portfolioData.achievements.join("\n") },
    { regex: /(language)/, response: portfolioData.languages.join(", ") },
    { regex: /(contact|reach|email|linkedin|github|twitter)/, response: `Email: ${portfolioData.contact.email}\nPhone: ${portfolioData.contact.phone}\nLinkedIn: ${portfolioData.contact.linkedin}\nGitHub: ${portfolioData.contact.github}\nTwitter: ${portfolioData.contact.twitter}` }
  ];

  for (let pattern of patterns) {
    if (pattern.regex.test(msg)) return pattern.response;
  }

  // Check direct project names
  for (let proj of portfolioData.projects) {
    if (msg.includes(proj.name.toLowerCase())) {
      return `${proj.name}: ${proj.description}\nTechnologies: ${proj.technologies ? proj.technologies.join(", ") : ""}\nLink: ${proj.link}`;
    }
  }

  return portfolioData.fallback[0];
}

// Optional: pressing "Enter" sends the message
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") chatForm.dispatchEvent(new Event("submit"));
});
