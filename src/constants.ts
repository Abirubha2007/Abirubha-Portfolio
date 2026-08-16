import profileImg from './assets/profile.jpg';

export const PERSONAL_INFO = {
  name: 'Abirubha P',
  profileImage: profileImg,
  email: 'abirubhaabi@gmail.com',
  phone: '+91 9342430190',
  location: 'Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/abirubha-ponnusamy',
  github: 'https://github.com/Abirubha2007',
  leetcode: 'https://leetcode.com/u/ABIRUBHA_P',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/abirubf658',
  resume: 'https://drive.google.com/drive/folders/1R6Mh-dxjEts33x-fuArummsr9cwJHyGW?usp=sharing',
  profileSummary:
    'Information Technology student with hands-on experience in software development and building responsive web applications. Strong problem-solving and analytical skills with experience working on real-world projects. Eager to apply technical knowledge, learn new technologies, and contribute effectively to innovative software solutions.'
};

export const EDUCATION = [
  {
    degree: 'Bachelor of Technology – Information Technology',
    institution: 'VSB Engineering College, Karur',
    period: '2024 – 2028',
    details: 'CGPA: 8.3 / 10'
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Sindhu Matric Higher Secondary School',
    period: '2022 – 2024',
    details: 'Percentage: 89%'
  }
];

export const TECHNICAL_SKILLS = [
  {
    name: 'Programming Languages',
    skills: ['Java', 'Python', 'C']
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL']
  },
  {
    name: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Canva']
  }
];

import salesforceLogo from './assets/salesforce-logo.svg';
import pythonLogo from './assets/python-logo.svg';
import ciscoLogo from './assets/cisco-logo.svg';

export const CERTIFICATIONS = [
  {
    title: 'Salesforce Administrator Explorer',
    issuer: 'Salesforce Trailhead',
    year: '2025',
    logo: salesforceLogo,
    link: 'https://drive.google.com/file/d/1mcZXQvaLjbfR-P3WHytupTVa3mcApC6m/view?usp=drive_link'
  },
  {
    title: 'Python Foundation Certification',
    issuer: 'Python Institute',
    year: '2026',
    logo: pythonLogo,
    link: 'https://drive.google.com/file/d/16E5kX8RVwNUfRcA6bhfdScSzn47yQ2Ng/view?usp=drive_link-'
  },
  {
    title: 'Introduction to IoT and Digital Transformation',
    issuer: 'EdCreate Foundation (Cisco Networking Academy)',
    year: '2025',
    logo: ciscoLogo,
    link: 'https://drive.google.com/file/d/1-bbGR2sxj78EoWUDKnxjDwocTs2ksnza/view?usp=drive_link'
  }
];

export const PROJECTS = [
  {
    title: 'Alumni Portal',
    category: 'WEB APPLICATION',
    icon: 'Users',
    description:
      'Developed a centralized digital platform for alumni data management and engagement using Java 17, Spring Boot 3.3, PostgreSQL, and Thymeleaf. Implemented role-based authentication and access control for Admin, Alumni, and Student users using Spring Security. Built Alumni approval workflow, Alumni Directory search, Event Management and Registration, and Job Portal features for posting and applying to jobs.',
    date: '2026',
    githubLink: 'https://github.com/Abirubha2007/Alumni-Portal',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Thymeleaf', 'Spring Security']
  },
  {
    title: 'VidyaLink - Offline Learning Platform',
    category: 'EDTECH PLATFORM',
    icon: 'Laptop',
    description:
      'Built an offline-first educational platform for rural schools with limited internet access, featuring Student Dashboard, Teacher Dashboard, and offline NCERT content delivery. Designed local Wi-Fi server architecture with cloud synchronization workflow for a team of 6, enabling seamless learning without active internet connectivity.',
    date: '2025',
    githubLink: 'https://github.com/Abirubha2007/VidyaLink---Offline-Learning-Platform',
    tags: ['React', 'Node.js', 'HTML', 'CSS', 'Offline First']
  }
];

export const LEADERSHIP = [
  {
    title: 'Full Stack Development Intern',
    organization: 'Neura Global',
    period: 'Jun 2026',
    type: '', // Empty or omitted, user didn't specify type for Neura Global
    logo: '/assets/neura-global-logo.png', // We'll place the logo here
    link: 'https://drive.google.com/file/d/1-yv10wd28jLoHQ6FHr9-mLEOIbX72B8G/view?usp=drive_link',
    description: 'Built CampusConnect, a full-featured placement portal for a college\'s TPO cell, rolled out to 500+ students.',
    contributions: [
      'Built CampusConnect using React, Node.js, TypeScript, and Supabase.',
      'Added real-time status updates using Socket.IO.',
      'Added a secure document vault using Cloudinary.',
      'Reduced manual paperwork by 80% and helped resolve interview scheduling clashes.'
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'Supabase', 'Socket.IO', 'Cloudinary']
  },
  {
    title: 'Frontend Developer Intern',
    organization: 'Infosys Springboard',
    period: 'Feb 2026 – Apr 2026',
    type: 'Remote Virtual Internship',
    logo: '/assets/infosys-springboard-logo.png', // We'll place the logo here
    link: 'https://drive.google.com/file/d/1RP2MrCu4AI6dI9SwOxdFWr_XKkW73JKd/view?usp=drive_link',
    description: 'Built a real-time water quality monitoring dashboard with responsive UI modules and React components.',
    contributions: [
      'Built a real-time water quality monitoring dashboard.',
      'Developed responsive UI modules including Authentication, Reports, Alerts, and Profile Management.',
      'Collaborated with the development team in agile meetings.',
      'Improved UI design and user experience.',
      'Developed and integrated responsive React components.'
    ],
    tags: ['React', 'HTML5', 'CSS3']
  }
];

export const ACHIEVEMENTS = [
  {
    title: 'Top 50 Team Selection',
    organization: 'Smart India Hackathon 2025',
    year: '2025',
    description: 'Selected among the Top 50 teams in Smart India Hackathon 2025 for innovative problem-solving and project development.',
    icon: 'Trophy',
    metrics: [
      { icon: 'Users', label: 'Top 50 Teams', sublabel: 'NATIONAL RECOGNITION' },
      { icon: 'Code', label: 'Innovation', sublabel: 'CREATIVE SOLUTIONS' },
      { icon: 'Star', label: 'Excellence', sublabel: 'COLLABORATIVE IMPACT' }
    ]
  },
  {
    title: 'NPTEL Certification',
    organization: 'NPTEL (IITs & IISc)',
    year: '2025',
    description: 'Successfully completed NPTEL course on Data Science for Engineers.',
    icon: 'GraduationCap',
    metrics: [
      { icon: 'Tablet', label: 'NPTEL Course', sublabel: 'IITS & IISC INITIATIVE' },
      { icon: 'BarChart2', label: 'Data Science', sublabel: 'FOR ENGINEERS' },
      { icon: 'BadgeCheck', label: 'Certified', sublabel: 'VERIFIED ACHIEVEMENT' }
    ]
  }
];
