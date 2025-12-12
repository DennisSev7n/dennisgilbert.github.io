// Change this file to get your personal Portfolio

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dennis Gilbert",
  title: "Application Security Tester | Cybersecurity Engineer",
  subTitle: emoji(
    "Passionate about Application Development & Security, specializing in Web Application Penetration Testing, Secure Coding, and Offensive Security. Experienced in building robust mobile applications with Flutter and automating cybersecurity workflows with Python."
  ),
  resumeLink: "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DennisSev7n",
  linkedin: "https://www.linkedin.com/in/dennis-gilbert-393aa6198",
  x: "https://x.com/Iamsev77n",
  gmail: "gilbertdennis3@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Securing Applications and Innovating in Cybersecurity",
  skills: [
    emoji("⚡ Conduct comprehensive Web Application Penetration Testing and Vulnerability Assessments"),
    emoji("⚡ Exploit vulnerabilities like SQL Injection, IDOR, and Insecure File Uploads"),
    emoji("⚡ Develop secure code and implement Offensive Security strategies"),
    emoji("⚡ Automate threat detection with Python, including real-time email analysis and SIEM integration"),
    emoji("⚡ Analyze network traffic and logs using tools like Wireshark and Splunk"),
    emoji("⚡ Build production-grade mobile applications with Flutter and Firebase")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Application Security",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Web Penetration Testing",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "Secure Coding",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "OWASP ZAP",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Burp Suite",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "Wireshark",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Splunk",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "VirusTotal",
      fontAwesomeClassname: "fas fa-virus"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cisco Networking Academy",
      logo: require("./assets/images/cisco_logo.jpg"),
      subHeader: "Cybersecurity, Network Security",
      duration: "January 2025 – April 2025",
      desc: "Completed specialized training in cybersecurity essentials and network security fundamentals."
    },
    {
      schoolName: "University of Nigeria, Nsukka",
      logo: require("./assets/images/unn-logo.png"),
      subHeader: "B.Sc. Computer Science",
      duration: "2018 – 2023",
      desc: "Earned a Bachelor's degree in Computer Science with a focus on software development and systems."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cybersecurity & Penetration Testing",
      progressPercentage: "90%"
    },
    {
      Stack: "Software Development (Flutter/Python)",
      progressPercentage: "85%"
    },
    {
      Stack: "Automation & Threat Analysis",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cyber Security Analyst",
      company: "BNS CyberLab Limited",
      companylogo: require("./assets/images/BNS02.png"),
      date: "July 2025 – Present",
      desc: "Conduct cybersecurity analysis, security research, and application testing remotely.",
      descBullets: [
        "Perform vulnerability assessments and exploitations",
        "Develop automation scripts for enhanced threat visibility"
      ]
    },
    {
      role: "Cyber Security Analyst (Internship)",
      company: "JD INFOTECH",
      companylogo: require("./assets/images/JD info logo.png"),
      date: "June 2025 – July 2025",
      desc: "Hands-on security testing on web applications with a focus on exploitation techniques.",
      descBullets: [
        "Executed SQL Injection (SQLi) and IDOR exploitation",
        "Built real-time dashboards for threat visibility",
        "Generated reports to improve web app security awareness"
      ]
    },
    {
      role: "Flutter Developer",
      company: "Freelance",
      companylogo: require("./assets/images/seven_logo.jpg"),
      date: "April 2020 – May 2025",
      desc: "Developed mobile applications for clients, managing projects from conception to deployment.",
      descBullets: [
        "Built production-grade apps using Flutter and Firebase",
        "Handled project management and troubleshooting"
      ]
    },
    {
      role: "Software Developer",
      company: "Ministry of Information, Akwa Ibom State",
      companylogo: require("./assets/images/AKS-Logo-2 (1).png"),
      date: "January 2024 – February 2025",
      desc: "Developed a full E-Library mobile application with advanced features.",
      descBullets: [
        "Implemented real-time Firebase syncing",
        "Designed advanced search and sorting functionalities",
        "Modernized documentation systems for the ministry"
      ]
    },
    {
      role: "Software Developer (Internship)",
      company: "Digital Dreams Limited",
      companylogo: require("./assets/images/digital_dreams_logo.jpg"),
      date: "January 2022 – July 2022",
      desc: "Contributed to software development and system improvements.",
      descBullets: [
        "Wrote maintainable software code",
        "Conducted software feasibility analysis",
        "Trained users on new systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Key Cybersecurity and Software Security Projects",
  projects: [
    {
      image: require("./assets/images/github-logo.png"),
      projectName: "SentraSec",
      projectDesc: "A comprehensive web application security scanning tool for identifying vulnerabilities.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/DennisSev7n/SentraSec"
        }
      ]
    },
    {
      image: require("./assets/images/github-logo.png"),
      projectName: "DeepGuard AI",
      projectDesc: "AI-powered system for real-time cybersecurity threat detection and response.",
      footerLink: [
        {
          name: "View App",
          url: "https://deep-guard-ai.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/github-logo.png"),
      projectName: "Block Report",
      projectDesc: "Digital investigation tool for network traffic analysis and reporting.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/DennisSev7n/Block-Report"
        }
      ]
    },
    {
      image: require("./assets/images/github-logo.png"),
      projectName: "Cybersecurity Automation Project",
      projectDesc: "Real-time email threat detection with SIEM integration using Splunk HEC.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/DennisSev7n/Cybersecurity-Automation-Project-Real-Time-Email"
        }
      ]
    },
    {
      image: require("./assets/images/github-logo.png"),
      projectName: "Automated Phishing Email Analyzer",
      projectDesc: "Automated analysis of phishing emails using threat intelligence tools like VirusTotal.",
      footerLink: [
        {
          name: "View App",
          url: "https://phishing-email-checker.streamlit.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Professional Certifications in Cybersecurity and Networking",

  achievementsCards: [
    {
      title: "Python Essentials 1",
      subtitle: "Cisco (2025)",
      image: require("./assets/images/cisco_logo.jpg"),
      imageAlt: "Cisco Certification",
      footerLink: []
    },
    {
      title: "Multicloud Network Associate",
      subtitle: "Aviatrix (2025)",
      image: require("./assets/images/Orange_Disk.png"),
      imageAlt: "Aviatrix Certification",
      footerLink: []
    },
    {
      title: "Cyber Threat Management",
      subtitle: "Cisco (2025)",
      image: require("./assets/images/cisco_logo.jpg"),
      imageAlt: "Cisco Certification",
      footerLink: []
    },
    {
      title: "Junior Cybersecurity Analyst Career Path",
      subtitle: "Cisco (2025)",
      image: require("./assets/images/cisco_logo.jpg"),
      imageAlt: "Cisco Certification",
      footerLink: []
    },
    {
      title: "Network Defense",
      subtitle: "Cisco (2025)",
      image: require("./assets/images/cisco_logo.jpg"),
      imageAlt: "Cisco Certification",
      footerLink: []
    },
    {
      title: "Endpoint Security",
      subtitle: "Cisco (2025)",
      image: require("./assets/images/cisco_logo.jpg"),
      imageAlt: "Cisco Certification",
      footerLink: []
    },
    {
      title: "Introduction to Cybersecurity",
      subtitle: "Cisco (2025)",
      image: require("./assets/images/cisco_logo.jpg"),
      imageAlt: "Cisco Certification",
      footerLink: []
    },
    {
      title: "Networking Basics",
      subtitle: "Cisco (2025)",
      image: require("./assets/images/cisco_logo.jpg"),
      imageAlt: "Cisco Certification",
      footerLink: []
    },
    {
      title: "Networking Devices & Initial Configuration",
      subtitle: "Cisco (2025)",
      image: require("./assets/images/cisco_logo.jpg"),
      imageAlt: "Cisco Certification",
      footerLink: []
    },
    {
      title: "Cyber Security Internship Certificate",
      subtitle: "JD Infotech (2024)",
      image: require("./assets/images/JD info logo.png"),
      imageAlt: "JD Infotech Certificate",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing insights on cybersecurity and development.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("Sharing knowledge in cybersecurity"),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Discussions on tech and security",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "gilbertdennis3@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Iamsev77n", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to contact me for resume details",
  display: true // Set false to hide this section, defaults to true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
