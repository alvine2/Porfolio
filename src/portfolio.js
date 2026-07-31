/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {sassTrue} from "sass";

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
  username: "Kinyera Alvine",
  title: "Hi all, I'm Kinyera Alvine",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1izPtuc4YhasbXVSZ98PvSIBiWYqxJ5MS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alvine2",
  linkedin: "https://www.linkedin.com/in/kinyera-alvine-8a0a10219/",
  gmail: "avinekinyera@gmail.com",
  gitlab: "https://gitlab.com/avine2",
  facebook: "https://www.facebook.com/kinyera.macus",
  medium: "https://medium.com/@alvinekinyera",
  stackoverflow: "https://stackoverflow.com/",
  whatsapp:
    "https://wa.me/256778235910?text=Hello%2C%20I%20want%20to%20work%20with%20you%21",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Know",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ JavaScript, React.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive UI, Frontend Development"
    ),
    emoji(
      "⚡ Progressive Web Apps (PWA), Single Page Applications (SPA), REST APIs, Client-Side Routing"
    ),
    emoji(
      "⚡ Firebase, AWS, DigitalOcean, Node.js, Express.js, MongoDB, MySQL, Git, GitHub"
    ),
    emoji(
      "⚡ IT Support, Hardware & Software Installation, System Troubleshooting, Networking Basics, Linux, Windows"
    ),
    emoji(
      "⚡ Videography, Video Editing, Adobe Premiere Pro, DaVinci Resolve, After Effects, OBS Studio, Live Streaming"
    ),
    emoji(
      "⚡ Agile, Scrum, SDLC, Version Control, CI/CD, Deployment, Cloud Hosting"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brigham Young University",
      logo: require("./assets/images/byu.png"),
      subHeader: "Bachelor of Science in Software Development",
      duration: "Dec 2024 - Dec 2026",
      desc: "Comprehensive program focused on software engineering, full-stack application development, database systems, cloud technologies, and industry best practices for designing and delivering scalable software solutions.",
      descBullets: [
        "Designed and developed full-stack web applications using JavaScript, React, Node.js, .NET, SQL, and modern software development frameworks",
        "Applied software engineering principles, object-oriented programming, version control with Git, database design, testing, Agile methodologies, and collaborative development practices."
      ]
    },

    {
      schoolName: "The International University OF East Africa (IUEA)",
      logo: require("./assets/images/IUEA.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "Jan 2024 - Dec 2026",
      desc: "Ranked top 10% in the program. Took courses about IT, Web Security, Operating Systems, ...",
      descBullets: [
        "Built practical skills in networking, database management, web technologies, cybersecurity, and systems administration through hands-on projects and coursework.",
        "Collaborated on team-based software projects using Git, APIs, SQL databases, and modern development tools while applying software engineering best practices."
      ]
    },
    {
      schoolName: "Sai Pali Institute of Technology and management",
      logo: require("./assets/images/SAI.png"),
      subHeader: "Diploma in Software Engineering",
      duration: "Nov 2021 - Dec 2023",
      desc: "Built full-stack web applications using HTML, CSS, JavaScript, Python, and modern frameworks",
      descBullets: [
        "Applied software engineering best practices including code reviews, testing, and Agile collaboration"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT-Domestic Taxes Department",
      company: "URA",
      companylogo: require("./assets/images/URA-logo.png"),
      date: "June 2026 – Present",
      desc: " Administered Active Directory accounts and configured Windows and Microsoft 365 environments."
    },
    {
      role: "Freelance Software Engineer",
      company: "Upwork",
      companylogo: require("./assets/images/up.png"),
      desc: "Worked as a freelance software engineer delivering web and software solutions for clients across different industries via Upwork."
    },
    {
      role: "ICT & Innovation Intern",
      company: "URSB",
      companylogo: require("./assets/images/ur.png"),
      date: " April 2026 – June 2026",
      desc: "Managed hardware and software configuration, ensuring optimal performance and user satisfaction."
    },
    {
      role: "Researcher",
      company: "Gallup",
      companylogo: require("./assets/images/gal.png"),
      date: "Feb 2024 – May 2024",
      desc: "Conducted face-to-face interviews with marginalized communities across East Africa to gather high-quality survey data."
    },
    {
      role: "Junior Software Engineer",
      company: "Faibanet UG",
      companylogo: require("./assets/images/fai.png"),
      date: "June 2022 – August 2023",
      desc: "Contributed to the development and maintenance of software solutions, supporting internal systems and client-facing applications."
    },
    {
      role: "Customer Care & Sales Representative",
      company: "Jumia Uganda",
      companylogo: require("./assets/images/jumia.png"),
      date: "March 2020 – Nov 2021",
      desc: "Managed end-to-end support and sales queries using CRM ticketing systems."
    },
    {
      role: "IT Support & System Maintenance",
      company: "HSEF",
      companylogo: require("./assets/images/hsef.png"),
      date: "July 2024 – Present",
      desc: " Provided comprehensive IT support and system maintenance To BYUPATHWAY Students."
    },
    {
      role: "Freelancer-Backend",
      company: "Replit",
      companylogo: require("./assets/images/Rep.png"),
      desc: "Performed code reviews, bug fixes, and basic system optimization tasks"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("./assets/images/fai.png"),
      projectName: "Faibanet UG",
      projectDesc: "ISP-faiba website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://faibanet.co.ug/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/maze.png"),
      projectName: "ENVIBE",
      projectDesc: "Digital music and reading environment ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lively-medovik-d93bb9.netlify.app/"
        }
      ]
    },
    {
      //image: require("./assets/images/maze.png"),
      projectName: "The Maze Game",
      projectDesc: "3D Maze game",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/alvine2/The-Maze"
        }
      ]
    },
    {
      //image: require("./assets/images/maze.png"),
      projectName: "The Griffins Electronic Store",
      projectDesc: "E-commerce website for electronics",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://glistening-daffodil-cf3549.netlify.app/"
        }
      ]
    },

    {
      //image: require("./assets/images/maze.png"),
      projectName: "Grade Calculator",
      //projectDesc: "The Maze is a 3D Maze game that uses ray casting to render a 2D map into a 3D navigable world! The Maze was written was written in C ussing SDL2 library. Deveploment was performed using Ubuntu 14.04 LTS - gcc (Ubuntu 4.8.4-2ubuntu1~14.04) 4.8.4",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/alvine2/GradeCalculator"
        }
      ]
    },
    {
      //image: require("./assets/images/maze.png"),
      projectName: "School Management System",
      //projectDesc: "The Maze is a 3D Maze game that uses ray casting to render a 2D map into a 3D navigable world! The Maze was written was written in C ussing SDL2 library. Deveploment was performed using Ubuntu 14.04 LTS - gcc (Ubuntu 4.8.4-2ubuntu1~14.04) 4.8.4",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/alvine2/alvine-international"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Communicating with Confidence",
      image: require("./assets/images/confidence.png"),
      imageAlt: "Google",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NEvuAliDoRSx32gV9UjV462ZtC7ZGP_X/view?usp=sharing"
        }
      ]
    },
    {
      title: "IT Service Desk Service Management",
      image: require("./assets/images/IT Service Desk Service Management.png"),
      imageAlt: " Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1YRya94hosql49Z8CSWukt3E5sfCCXQGd/view?usp=sharing"
        }
      ]
    },

    {
      title: "Alx Backend Specialization",
      image: require("./assets/images/et.png"),
      imageAlt: "BYU Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://intranet.alxswe.com/certificates/Tzehr5C2RM"
        },
        {
          name: "Final Project",
          url: "https://github.com/alvine2/The-Maze"
        }
      ]
    },
    {
      title: "System Administration by Microsoft and LinkedIn",
      image: require("./assets/images/System Administration by Microsoft and LinkedIn.png"),
      imageAlt: "BYU Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15g_QKH077TJzspmZb_1-wKK6QOnet6VT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Web & Computer Programming BYUI",
      image: require("./assets/images/web&.png"),
      imageAlt: "BYU Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1pXECwfr_si82AEAI6g5S_WuyfL3dQNLT/view?usp=sharing"
        },
        {
          name: "Final Project",
          url: "https://github.com/Marianaeiterer/handcraftheavel"
        }
      ]
    },
    {
      title: "Leading with a Growth Mindset",
      image: require("./assets/images/Growth.png"),
      imageAlt: "BYU Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_jzz-T4pGPwwNse4gOtKnMf1rjKfPBK2/view?usp=sharing"
        }
      ]
    },
    {
      title: "Web Development BYUI",
      image: require("./assets/images/dev.png"),
      imageAlt: "BYU Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_jzz-T4pGPwwNse4gOtKnMf1rjKfPBK2/view?usp=sharing"
        },
        {
          name: "Final Project",
          url: "https://github.com/camilamoyac/ENVibe"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "My services",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      //url: "https://medium.com/@alvinekinyera/the-maze-project-blog-post-d6aa921abfe7",
      title: "Software Development 💻",
      description:
        "Building and maintaining software applications, dashboards, and systems tailored to client needs."
    },
    {
      //url: "https://medium.com/@alvinekinyera/the-maze-project-blog-post-d6aa921abfe7",
      title: "IT Support & Technical Assistance 🛠️",
      description:
        "Computer setup, troubleshooting, system installation, and general IT support."
    },
    {
      //url: "https://medium.com/@alvinekinyera",
      title: "Community out reach & Consultation 📘",
      description:
        "Training and consultation in IT skills, software tools, and digital solutions."
    },
    {
      //url: "https://medium.com/@alvinekinyera/the-maze-project-blog-post-d6aa921abfe7",
      title: "Digital Branding & Media Support 🎨",
      description:
        "Helping individuals and organizations build a strong online presence using technology and media."
    },
    {
      //url: "https://medium.com/@alvinekinyera/the-maze-project-blog-post-d6aa921abfe7",
      title: "Tech Training & Consultation 📘",
      description:
        "Basic training in IT skills, software usage, and guidance on digital tools and technology."
    },
    {
      //url: "https://medium.com/@alvinekinyera/what-happens-when-you-type-google-com-in-your-browser-and-press-enter-b05803e2f727",
      title: "Website Development 🌐",
      description:
        "Design and development of responsive websites using modern technologies like React, HTML, CSS, and JavaScript."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "My Apps and Games",
  subtitle: emoji(
    "Feel free to play my games and explore my working hosted applications 🚀"
  ),

  talks: [
    {
      title: "Envibe Music",
      subtitle: "A music web application built for streaming and discovery.",
      slides_url: "https://YOUR_ENVIBE_MUSIC_LIVE_LINK_HERE" // Replace with your live app link
      // If the template supports github/code links, you can check its original keys,
      // but 'slides_url' or 'url' is typically used by templates to open the project in a new tab.
    },
    {
      title: "PoryDrive-2.0",
      subtitle: "Just a car game, with Porygon!",
      slides_url: "https://YOUR_SECOND_APP_LINK_HERE"
    }
  ],

  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO Listen To Tech Podcasts AND SHARE MY KNOWLEDGE",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    {
      title: "Tech Podcast Example",
      // YouTube embed link
      embedUrl: "https://www.youtube.com/embed/oX7OduG1YmI"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  resumeLink:
    "https://drive.google.com/file/d/1izPtuc4YhasbXVSZ98PvSIBiWYqxJ5MS/view?usp=sharing",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+256778235910 | +256726154776",
  email_address: "alvinekinyera@gmail.com",
  whatsapp_link:
    "https://wa.me/256778235910?text=Hello%2C%20I%20want%20to%20work%20with%20you%21" // WhatsApp link
};

// Twitter Section

const twitterDetails = {
  userName: "AlvineKinyera", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
