export const projectsData = [
  {
    id: "proj-01",
    number: "01",
    title: "Laptop Service Management System",
    technologies: ["React.js", "Node.js", "Express.js", "Supabase"],
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
      { step: "03", name: "Supabase Database", type: "Data Layer" },
      { step: "04", name: "Admin Dashboard", type: "Management" }
    ],
    liveUrl: "https://laptop-service-weld.vercel.app/",
    codeUrl: ""
  },
  {
    id: "proj-02",
    number: "02",
    title: "yas-portfolio",
    technologies: ["React.js", "JavaScript", "CSS", "HTML5"],
    categories: ["All", "React", "JavaScript"],
    description: "Responsive corporate website for YAS - authorized Hikvision distributor featuring multi-language support, product showcase, and service information.",
    functionality: [
      "Multi-language support (Arabic, English, German, Chinese)",
      "Product catalog with detailed specifications",
      "Department-based product categorization",
      "Responsive corporate design",
      "Contact form and WhatsApp integration",
      "FAQ system with comprehensive answers",
      "Maintenance service information",
      "Brand showcase and company profile"
    ],
    architecture: [
      { step: "01", name: "Multi-language Interface", type: "Frontend" },
      { step: "02", name: "Product Sections", type: "Content" },
      { step: "03", name: "Service Pages", type: "Information" },
      { step: "04", name: "Contact Integration", type: "External" }
    ],
    liveUrl: "https://yas-portfolio-eta.vercel.app/",
    codeUrl: ""
  },
  {
    id: "proj-03",
    number: "03",
    title: "nada-teacher-dashboard",
    technologies: ["React.js", "Node.js", "Supabase", "Express.js", "JavaScript", "CSS"],
    categories: ["All", "React", "JavaScript", "Full Stack"],
    description: "Full-stack educational tracking platform for a science teacher featuring student search system, grade level support, and parent communication tools with database management.",
    functionality: [
      "Student search by name and grade level",
      "Multi-grade level support (Primary to Secondary)",
      "Teacher profile and information display",
      "WhatsApp integration for parent communication",
      "Responsive educational design",
      "Academic tracking information",
      "Privacy-focused student data handling",
      "Database management with Supabase"
    ],
    architecture: [
      { step: "01", name: "Student Database", type: "Supabase Store" },
      { step: "02", name: "Search System", type: "API Layer" },
      { step: "03", name: "Teacher Dashboard", type: "Management" },
      { step: "04", name: "Parent Portal", type: "User Interface" }
    ],
    liveUrl: "https://nada-teacher-dashboard.vercel.app/",
    codeUrl: ""
  },
  {
    id: "proj-04",
    number: "04",
    title: "YAS Help Desk",
    technologies: ["React.js", "Node.js", "Supabase", "Express.js", "JavaScript", "CSS", "HTML5"],
    categories: ["All", "React", "JavaScript", "Full Stack"],
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
