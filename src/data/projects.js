export const projectsData = [
  {
    id: "proj-01",
    number: "01",
    title: "Laptop Service Management System",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    categories: ["All", "React", "Full Stack"],
    description: "Developed a full-stack web application for managing laptop maintenance requests and customer information.",
    functionality: [
      "Laptop maintenance request management",
      "Customer information tracking",
      "Admin dashboard analytics & controls",
      "Real-time repair status tracking",
      "Service operations workflow"
    ],
    architecture: [
      { step: "01", name: "Customer", type: "Client" },
      { step: "02", name: "Maintenance Request", type: "Payload" },
      { step: "03", name: "Application", type: "API / Server" },
      { step: "04", name: "Admin Dashboard", type: "Management" }
    ],
    liveUrl: "https://laptop-service-weld.vercel.app/",
    codeUrl: ""
  },
  {
    id: "proj-02",
    number: "02",
    title: "YAS City Website",
    technologies: ["React.js", "JavaScript", "CSS"],
    categories: ["All", "React", "JavaScript"],
    description: "Designed and developed a responsive corporate website with a modern user interface.",
    functionality: [
      "Responsive layout engineering",
      "Modern editorial user interface",
      "Performance optimization",
      "Cross-device & multi-resolution compatibility"
    ],
    architecture: [
      { step: "01", name: "Header", type: "Nav Module" },
      { step: "02", name: "Hero", type: "Primary Banner" },
      { step: "03", name: "Content", type: "Core Grid" },
      { step: "04", name: "Sections", type: "Feature Blocks" },
      { step: "05", name: "Footer", type: "System Links" }
    ],
    liveUrl: "https://yas-portfolio-eta.vercel.app/",
    codeUrl: ""
  },
  {
    id: "proj-03",
    number: "03",
    title: "Online Lessons Platform",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    categories: ["All", "JavaScript"],
    description: "Developed a responsive educational platform for online learning.",
    functionality: [
      "Responsive educational interface",
      "Clean user-friendly portal design",
      "Cross-device compatibility",
      "Structured learning presentation"
    ],
    architecture: [
      { step: "01", name: "Student", type: "Learner" },
      { step: "02", name: "Lessons", type: "Curriculum" },
      { step: "03", name: "Learning Content", type: "Media Stream" },
      { step: "04", name: "Platform Interface", type: "Portal View" }
    ],
    liveUrl: "https://nada-teacher-dashboard.vercel.app/",
    codeUrl: ""
  },
  {
    id: "proj-04",
    number: "04",
    title: "YAS Help Desk",
    technologies: ["React.js", "JavaScript", "CSS", "HTML5"],
    categories: ["All", "React", "JavaScript"],
    description: "Professional technical support and customer service platform for YAS company with comprehensive ticket management and real-time tracking.",
    functionality: [
      "Technical support request registration",
      "Real-time ticket tracking with unique IDs",
      "24/7 service availability",
      "Multi-device support tracking",
      "WhatsApp integration for direct support",
      "Comprehensive FAQ system",
      "Automated status notifications"
    ],
    architecture: [
      { step: "01", name: "User Request", type: "Client Input" },
      { step: "02", name: "Ticket Generation", type: "Processing" },
      { step: "03", name: "Support Team", type: "Management" },
      { step: "04", name: "Resolution", type: "Output" }
    ],
    liveUrl: "https://yas-help-desk.vercel.app/",
    codeUrl: ""
  }
];

export const projectFilterCategories = ["All", "React", "JavaScript", "Full Stack"];
