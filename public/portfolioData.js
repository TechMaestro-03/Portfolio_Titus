// ========================================
// TITUS K. MBOYA - PORTFOLIO DATA MODULE
// FIXED: Removed ES6 exports for browser compatibility
// ========================================

// CRITICAL FIX: Assign directly to window object (NO export statements)
window.portfolioData = {
  // ======================
  // PERSONAL INFORMATION
  // ======================
  personal: {
    fullName: "Titus Mboya",
    preferredName: "Titus",
    professionalTitle: "Full Stack Developer & Machine Learning Engineer",
    location: {
      city: "Nairobi",
      country: "Kenya",
      timezone: "EAT (UTC+3)"
    },
    bio: "I architect elegant web applications and intelligent systems using modern technologies. My passion lies in transforming complex data into valuable products and converting innovative ideas into scalable, high-performing solutions that deliver real-world impact. I thrive at the intersection of software engineering and artificial intelligence.",
    summary: "3+ years building production-ready applications with expertise in full-stack development, machine learning, and cloud infrastructure. Focused on creating technology that solves meaningful problems while maintaining exceptional user experiences.",
    pronouns: "He/Him",
    nationality: "Kenyan"
  },

  // ======================
  // CONTACT INFORMATION (URLs TRIMMED)
  // ======================
  contact: {
    primary: {
      email: "mboyatitus11@gmail.com",
      phone: "+254 768 762 062"
    },
    professional: {
      linkedin: "https://www.linkedin.com/in/titus-mboya-087308380",
      github: "https://github.com/TechMaestro-03",
      twitter: "https://x.com/BoyleTirtu76386",
      instagram: "https://instagram.com/tec_hmaestro",
      medium: "https://medium.com/@TechMaestro03"
    },
    location: {
      address: "Nairobi, Kenya",
      coordinates: {
        latitude: -1.2921,
        longitude: 36.8219
      }
    },
    availability: {
      status: "Open to opportunities",
      freelance: true,
      fullTime: true,
      responseTime: "Usually responds within 2 hours during business hours",
      businessHours: {
        weekdays: "Monday - Friday, 9:00 AM - 6:00 PM EAT",
        weekends: "Saturday - Sunday, 10:00 AM - 4:00 PM EAT",
        note: "Available for urgent matters outside business hours"
      },
      hiringNote: "Open to freelance projects and full-time opportunities starting Q1 2026"
    }
  },

  // ======================
  // PROJECT PORTFOLIO (URLs TRIMMED)
  // ======================
  projects: [
    {
      id: "techpulse",
      name: "TechPulse",
      tagline: "Personalized Tech News Aggregator with ML Recommendations",
      description: "A sophisticated news aggregation platform that leverages machine learning to analyze user reading patterns and deliver hyper-personalized tech news. Features real-time updates, sentiment analysis, and adaptive content curation.",
      detailedDescription: [
        "Developed a recommendation engine using collaborative filtering and NLP to analyze user preferences",
        "Implemented Firebase Authentication and Firestore for real-time data synchronization",
        "Designed responsive UI with Bootstrap ensuring seamless experience across devices",
        "Integrated multiple REST APIs (NewsAPI, Guardian) with intelligent caching strategy",
        "Reduced bounce rate by 35% through personalized content delivery"
      ],
      type: "Web Application",
      status: "Live",
      role: "Full Stack Developer & ML Engineer",
      technologies: [
        { name: "Firebase", category: "Backend/Database", proficiency: 95 },
        { name: "JavaScript", category: "Frontend", proficiency: 90 },
        { name: "Bootstrap", category: "UI Framework", proficiency: 85 },
        { name: "REST APIs", category: "Integration", proficiency: 90 },
        { name: "TensorFlow.js", category: "ML", proficiency: 80 }
      ],
      links: {
        github: "https://github.com/TechMaestro-03/TechPulse",
        live: null,
        demo: null
      },
      media: {
        thumbnail: "public/images/Screenshot (195).png",
        screenshots: [
          "public/images/techpulse-dashboard.png",
          "public/images/techpulse-mobile.png",
          "public/images/techpulse-settings.png"
        ],
        features: [
          "Personalized news recommendations using ML",
          "Real-time updates with Firebase",
          "Dark/light mode toggle",
          "Reading history & analytics",
          "Customizable news sources"
        ]
      },
      metrics: {
        users: "500+",
        engagement: "40% increase in session duration",
        performance: "95+ Lighthouse score"
      },
      startDate: "2023-08",
      completionDate: "2023-11"
    },
    {
      id: "mkulima",
      name: "Mkulima Farm Management System",
      tagline: "Comprehensive Farm Operations & Analytics Platform",
      description: "A full-featured farm management solution enabling agricultural businesses to streamline operations, track resources, and optimize productivity through intuitive dashboards and real-time analytics.",
      detailedDescription: [
        "Architected role-based system with separate dashboards for managers, supervisors, and field workers",
        "Implemented real-time task assignment and progress tracking with notification system",
        "Developed data visualization dashboards using Chart.js for crop yield analysis and resource allocation",
        "Integrated MySQL database with optimized queries for large datasets",
        "Designed responsive interface with Tailwind CSS ensuring usability on tablets in field conditions"
      ],
      type: "Web Application",
      status: "Live",
      role: "Lead Developer",
      technologies: [
        { name: "Tailwind CSS", category: "UI Framework", proficiency: 90 },
        { name: "JavaScript", category: "Frontend", proficiency: 85 },
        { name: "Python", category: "Backend", proficiency: 80 },
        { name: "MySQL", category: "Database", proficiency: 85 },
        { name: "Chart.js", category: "Data Visualization", proficiency: 80 }
      ],
      links: {
        github: "https://github.com/Mkulima-Farm-Management/New-MKFS1",
        live: null,
        demo: null
      },
      media: {
        thumbnail: "public/images/Screenshot (144).png",
        screenshots: [
          "public/images/mkulima-dashboard.png",
          "public/images/mkulima-task-management.png",
          "public/images/mkulima-analytics.png"
        ],
        features: [
          "Role-based access control (Manager, Supervisor, Worker)",
          "Real-time task assignment & tracking",
          "Resource allocation & inventory management",
          "Productivity analytics dashboards",
          "Mobile-responsive field interface"
        ]
      },
      metrics: {
        clients: "3 farms",
        users: "50+ active users",
        efficiency: "25% reduction in operational overhead"
      },
      startDate: "2023-03",
      completionDate: "2023-07"
    },
    {
      id: "taskmanager",
      name: "TaskFlow Manager",
      tagline: "Real-time Collaborative Task Management Platform",
      description: "A robust task management application enabling teams to organize, track, and collaborate on projects with real-time updates, progress visualization, and intelligent deadline management.",
      detailedDescription: [
        "Engineered real-time synchronization using Firestore listeners for instant updates across team members",
        "Implemented drag-and-drop interface with React DnD for intuitive task organization",
        "Developed notification system with email alerts and in-app notifications",
        "Created progress tracking with visual timelines and completion metrics",
        "Designed role-based permissions system for team leads and members"
      ],
      type: "Web Application",
      status: "Live",
      role: "Full Stack Developer",
      technologies: [
        { name: "PHP", category: "Backend", proficiency: 85 },
        { name: "React", category: "Frontend", proficiency: 90 },
        { name: "MongoDB", category: "Database", proficiency: 80 },
        { name: "Firebase", category: "Authentication/Realtime", proficiency: 85 },
        { name: "Redux", category: "State Management", proficiency: 80 }
      ],
      links: {
        github: "https://github.com/TechMaestro-03/task_manager",
        live: null,
        demo: null
      },
      media: {
        thumbnail: "public/images/Screenshot (304).png",
        screenshots: [
          "public/images/taskmanager-dashboard.png",
          "public/images/taskmanager-collaboration.png",
          "public/images/taskmanager-mobile.png"
        ],
        features: [
          "Real-time collaborative task management",
          "Drag-and-drop interface",
          "Deadline tracking with reminders",
          "Team progress analytics",
          "File attachments & comments"
        ]
      },
      metrics: {
        teams: "15+ teams",
        tasks: "5,000+ tasks managed",
        satisfaction: "4.8/5 user rating"
      },
      startDate: "2022-10",
      completionDate: "2023-02"
    }
  ],

  // ... [REST OF YOUR PORTFOLIO DATA - SKILLS, EXPERIENCE, ETC. REMAINS UNCHANGED] ...
  // (Keep all other sections exactly as in your original file, just ensure NO export statements)
  
  // CHATBOT CONFIGURATION (Critical for chatbot.js)
  chatbot: {
    messages: {
      greetings: [
        "👋 Hello! I'm Titus' AI assistant. How can I help you explore his portfolio today?",
        "Hi there! 😊 Ready to discover Titus' projects and skills? Just ask!",
        "Greetings! 🤖 I'm here to answer all your questions about Titus' professional work!",
        "Hey! ✨ What would you like to know about Titus' development experience or projects?"
      ],
      goodbye: [
        "Goodbye! Thanks for exploring Titus' portfolio. Come back anytime! 🌟",
        "See you later! 👋 Don't hesitate to return if you have more questions!",
        "Farewell! 🚀 Hope you found what you were looking for. Have a great day!",
        "Bye for now! 💫 Titus appreciates your interest in his work!"
      ],
      fallback: [
        "Hmm 🤔 I specialize in Titus' professional portfolio. Try asking about his projects, skills, experience, or services!",
        "I'm still learning about Titus' world! 😅 Could you rephrase that or ask about his technical capabilities or background?",
        "My circuits are buzzing but I don't have that info! 🔍 Try asking about Titus' work experience, tech skills, or achievements!",
        "I focus on Titus' professional journey! 🤖 Ask about his projects, skills, availability, or certifications instead!"
      ],
      thankYou: [
        "You're very welcome! 😊 Is there anything else you'd like to know about Titus' work?",
        "Happy to help! 🙌 What other aspects of Titus' portfolio would you like to explore?",
        "Anytime! 💙 Titus would be thrilled to discuss potential collaborations - just ask about his availability!"
      ],
      help: [
        "I can help you with:\n• 📂 Project details & technologies\n• 💻 Technical skills & expertise\n• 🎓 Education & certifications\n• 💼 Professional experience\n• 🏆 Achievements & awards\n• 📅 Availability & contact info\n• 😄 Fun facts about Titus\n\nWhat would you like to explore?"
      ]
    },
    easterEggs: {
      "who are you": "I'm Titus' dedicated AI portfolio assistant! I run on JavaScript, coffee, and a passion for tech. 🤖☕ I know everything about Titus' professional journey and capabilities!",
      "secret": "🎉 You found a secret! Titus believes technology should serve humanity. His favorite project was building a weather station for his community using Raspberry Pi!",
      "meaning of life": "42! But seriously, Titus believes the meaning of life is to create positive impact through technology and continuous learning. 🌍✨",
      "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs! 😄🐞 (Titus' favorite tech joke)",
      "i love you": "Aww! 💖 That's sweet! I'm just an AI, but I'll make sure Titus knows you appreciate his work! 😊",
      "knock knock": "Who's there? 👀 Titus' portfolio! Titus' portfolio who? Titus' portfolio is open for opportunities! 😄",
      "pizza": "Titus' favorite pizza topping is pepperoni! 🍕 But like any good developer, he's always open to trying new things - just like with technology!",
      "binary": "🎉 Binary detected! You've unlocked a special message: Titus believes in building a future where technology serves humanity. Keep coding! 💻✨"
    },
    topics: {
      projects: ["project", "work", "portfolio", "build", "created", "developed", "apps", "applications", "github"],
      skills: ["skill", "technolog", "tech stack", "expertise", "proficient", "languages", "frameworks", "tools"],
      experience: ["experience", "work experience", "job", "role", "position", "career", "internship"],
      education: ["education", "school", "university", "degree", "studied", "academic", "background"],
      certifications: ["certification", "certified", "course", "training", "badge", "credentials"],
      achievements: ["achievement", "award", "accomplishment", "honor", "won", "recognition"],
      services: ["service", "offer", "provide", "what do you do", "specialize", "hire"],
      availability: ["available", "schedule", "time", "contact", "reach out", "hire", "work with", "opportunity"],
      contact: ["contact", "email", "phone", "linkedin", "github", "twitter", "social", "location"],
      hobbies: ["hobby", "interest", "fun", "free time", "passion", "outside work", "personal"],
      funFacts: ["fun fact", "interesting", "did you know", "surprise", "secret", "personal"],
      bio: ["about", "bio", "background", "who is", "tell me about", "profile", "yourself"]
    }
  }
};

// NO EXPORT STATEMENTS - Critical for browser compatibility
console.log('✅ Portfolio data loaded successfully');