import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navbar
    about: 'About',
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    hireMe: 'Hire Me',
    
    // Hero
    mtCodeSystem: 'MT_CODE_SYSTEM',
    available: 'AVAILABLE',
    getInTouch: 'Get In Touch',
    viewProjects: 'View Projects',
    scroll: 'SCROLL',
    location: 'location',
    focus: 'focus',
    status: 'status',
    openToWork: 'Open to Work',
    systemProfile: 'SYSTEM PROFILE',
    name: 'Mohamed Tharwat',
    role: 'Full Stack Dev',
    stack: 'React · Node · MongoDB',
    phone: '01013791517',
    gmail: 'Gmail',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    heroSummary: 'Information Technology graduate with experience building responsive, full-stack web applications using React.js, Node.js, and MongoDB. Based in Damietta, Egypt.',
    locationVal: 'Damietta, Egypt',
    focusVal: 'React.js & Node.js',
    roles: ['Full Stack Developer', 'React.js Engineer', 'Node.js Developer', 'Problem Solver'],
    
    // About
    aboutTag: 'about.me',
    aboutTitle: 'Developer Profile',
    aboutSubtitle: 'Building experiences at the intersection of software engineering and digital design.',
    developerBio: '> DEVELOPER BIO',
    
    // Skills
    techSkills: 'tech.skills',
    technicalArsenal: 'Technical Arsenal',
    skillsSubtitle: 'A curated stack built through hands-on project work and continuous learning.',
    allTechnologies: '// All Technologies',
    
    // Projects
    engineeringPortfolio: 'ENGINEERING_PORTFOLIO',
    featuredProjects: 'FEATURED PROJECTS',
    projectsSubtitle: 'Full-stack web applications and responsive software platforms engineered using modern web technologies.',
    filterByTech: '// FILTER_BY_TECH:',
    all: 'All',
    coreFunctionality: '// CORE_FUNCTIONALITY',
    viewLiveApp: 'View Live Application',
    demoComingSoon: 'Demo Link Coming Soon',
    
    // Education
    educationHistory: 'education.history',
    academicBackground: 'Academic Background',
    educationSubtitle: 'Formal training in Information Technology provides the theoretical foundation for practical development work.',
    
    // Experience
    workHistory: 'work.history',
    professionalExperience: 'Professional Experience',
    experienceSubtitle: 'Real-world application of technical skills across development and IT operations.',
    
    // Contact
    contactMe: 'contact.me',
    initializeConnection: 'Initialize Connection',
    contactSubtitle: 'Currently open to new opportunities. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!',
    letsBuild: 'Let\'s build something together.',
    contactText: 'I\'m currently looking for full-time opportunities as a Full Stack Developer. If you think I\'d be a good fit for your team, let\'s talk.',
    sayHello: 'Say Hello',
    downloadCV: 'Download CV',
    emailLabel: 'Email:',
    phoneLabel: 'Phone:',
    
    // Process
    workflowSteps: 'workflow.steps',
    developmentProcess: 'Development Process',
    processSubtitle: 'A systematic approach to building reliable software.',
    discovery: 'Discovery',
    development: 'Development',
    testing: 'Testing',
    deployment: 'Deployment',
    discoveryDesc: 'Understanding requirements and planning architecture.',
    developmentDesc: 'Writing clean, scalable code for frontend and backend.',
    testingDesc: 'Ensuring quality, security, and performance.',
    deploymentDesc: 'Launching the application and providing support.',
    
    // Philosophy
    coreValues: 'core.values',
    engineeringPhilosophy: 'Engineering Philosophy',
    philosophySubtitle: 'Principles that guide my development process.',
    philosophyQuote: '"Code is read much more often than it is written. Therefore, readability and maintainability are paramount."',
    philosophyAuthor: '- Engineering Mindset',
    
    // Certifications
    verifiedCertificates: 'VERIFIED_CERTIFICATES',
    certificationsTitle: 'CERTIFICATIONS & TRAINING',
    certificationsSubtitle: 'Official completion certificates earned across full-stack development, UI/UX design, and IT internships.',
    issuer: 'ISSUER:',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
  },
  ar: {
    // Navbar
    about: 'عني',
    education: 'التعليم',
    skills: 'المهارات',
    projects: 'المشاريع',
    experience: 'الخبرة',
    contact: 'تواصل معي',
    hireMe: 'وظفني',
    
    // Hero
    mtCodeSystem: 'MT_CODE_SYSTEM',
    available: 'متاح',
    getInTouch: 'تواصل معي',
    viewProjects: 'عرض المشاريع',
    scroll: 'تمرير',
    location: 'الموقع',
    focus: 'التركيز',
    status: 'الحالة',
    openToWork: 'متاح للعمل',
    systemProfile: 'ملف النظام',
    name: 'محمد ثروت',
    role: 'مطور Full Stack',
    stack: 'React · Node · MongoDB',
    phone: '01013791517',
    gmail: 'Gmail',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    heroSummary: 'خريج تكنولوجيا المعلومات بخبرة في بناء تطبيقات ويب متجاوبة كاملة باستخدام React.js و Node.js و MongoDB. مقيم في دمياط، مصر.',
    locationVal: 'دمياط، مصر',
    focusVal: 'React.js & Node.js',
    roles: ['مطور Full Stack', 'مهندس React.js', 'مطور Node.js', 'حل المشكلات'],
    
    // About
    aboutTag: 'عني',
    aboutTitle: 'ملف المطور',
    aboutSubtitle: 'بناء التجارب عند تقاطع هندسة البرمجيات والتصميم الرقمي.',
    developerBio: '> سيرة المطور',
    
    // Skills
    techSkills: 'المهارات التقنية',
    technicalArsenal: 'المهارات التقنية',
    skillsSubtitle: 'مجموعة مختارة تم بناؤها من خلال العمل العملي والمشاريع والتعلم المستمر.',
    allTechnologies: '// جميع التقنيات',
    
    // Projects
    engineeringPortfolio: 'معرض الأعمال',
    featuredProjects: 'المشاريع المميزة',
    projectsSubtitle: 'تطبيقات ويب كاملة ومنصات برمجيات متجاوبة هندستها باستخدام تقنيات الويب الحديثة.',
    filterByTech: '// تصفية حسب التقنية:',
    all: 'الكل',
    coreFunctionality: '// الوظائف الأساسية',
    viewLiveApp: 'عرض التطبيق المباشر',
    demoComingSoon: 'رابط العرض قريباً',
    
    // Education
    educationHistory: 'التعليم',
    academicBackground: 'الخلفية الأكاديمية',
    educationSubtitle: 'التدريب الرسمي في تكنولوجيا المعلومات يوفر الأساس النظري للعمل التطويري العملي.',
    
    // Experience
    workHistory: 'العمل',
    professionalExperience: 'الخبرة المهنية',
    experienceSubtitle: 'التطبيق العملي للمهارات التقنية عبر التطوير وعمليات تكنولوجيا المعلومات.',
    
    // Contact
    contactMe: 'تواصل معي',
    initializeConnection: 'ابدأ التواصل',
    contactSubtitle: 'متاح حالياً لفرص جديدة. سواء كان لديك سؤال أو تريد فقط أن تقول مرحباً، سأبذل قصارى جهدي للرد عليك!',
    letsBuild: 'لنبنِ شيئاً معاً.',
    contactText: 'أبحث حالياً عن فرص عمل بدوام كامل كمطور Full Stack. إذا كنت تعتقد أنني مناسب لفريقك، لنتحدث.',
    sayHello: 'قل مرحباً',
    downloadCV: 'تحميل السيرة الذاتية',
    emailLabel: 'البريد الإلكتروني:',
    phoneLabel: 'الهاتف:',
    
    // Process
    workflowSteps: 'خطوات العمل',
    developmentProcess: 'عملية التطوير',
    processSubtitle: 'نهج منهجي لبناء برمجيات موثوقة.',
    discovery: 'الاكتشاف',
    development: 'التطوير',
    testing: 'الاختبار',
    deployment: 'النشر',
    discoveryDesc: 'فهم المتطلبات وتخطيط البنية.',
    developmentDesc: 'كتابة كود نظيف وقابل للتوسع للواجهة الأمامية والخلفية.',
    testingDesc: 'ضمان الجودة والأمان والأداء.',
    deploymentDesc: 'إطلاق التطبيق وتقديم الدعم.',
    
    // Philosophy
    coreValues: 'القيم الأساسية',
    engineeringPhilosophy: 'فلسفة الهندسة',
    philosophySubtitle: 'المبادئ التي توجه عملية التطوير الخاصة بي.',
    philosophyQuote: '"يتم قراءة الكود أكثر بكثير من كتابته. لذلك، قابلية القراءة والصيانة هي الأهم."',
    philosophyAuthor: '- عقلية هندسية',
    
    // Certifications
    verifiedCertificates: 'شهادات موثقة',
    certificationsTitle: 'الشهادات والتدريب',
    certificationsSubtitle: 'شهادات إتمام رسمية مكتسبة في تطوير Full Stack وتصميم UI/UX والتدريب في تكنولوجيا المعلومات.',
    issuer: 'الجهة المصدرة:',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة.',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
