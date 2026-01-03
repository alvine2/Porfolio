/* Change this file to get your personal Portfolio */

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
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
      duration: "JAN 2024 - DEC 2026",
      desc: "Focused on building strong foundations in software engineering, problem-solving, and modern application development.",
      descBullets: [
        "Developed and maintained web and software applications using modern programming languages and frameworks",
        "Gained hands-on experience in algorithms, databases, version control, and collaborative software development"
      ]
    },
    {
      schoolName: "BYUPATHWAY WORLDWIDE",
      logo: require("./assets/images/path.png"),
      subHeader: "Certificate in Software Development",
      duration: "Jan 2024 - Aug 2024",
      desc: "Faith-centered academic program integrating spiritual growth, leadership, and professional development with technical education.",
      descBullets: [
  "Developed software development skills while applying gospel principles such as integrity, accountability, and service",
  "Participated in devotionals, institute courses, and peer leadership activities to strengthen faith and character",
  "Balanced rigorous academic work with personal spiritual development and service-oriented learning"
]
    },
    {
      schoolName: "The International University OF East Africa (IUEA)",
      logo: require("./assets/images/IUEA.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "Jan 2024 - DEC 2026",
      desc: "Ranked top 10% in the program. Took courses about IT, Web Security, Operating Systems, ...",
      descBullets: ["Worked with Git, databases, APIs, and full-stack development tools in team-based environments"]
    },
    {
      schoolName: "Sai Pali Institute of Technology and management",
      logo: require("./assets/images/SAI.png"),
      subHeader: "Diploma in Software Engineering",
      duration: "Jan 2020 - DEC 2022",
      desc: "Built full-stack web applications using HTML, CSS, JavaScript, Python, and modern frameworks",
      descBullets: ["Applied software engineering best practices including code reviews, testing, and Agile collaboration"]
    },
    {
      schoolName: "ALX Africa",
      logo: require("./assets/images/alx.png"),
      subHeader: "Certificate in Full Stack Development",
      duration: "Jan 2020 - DEC 2024",
      desc: "An intensive, project-based bootcamp focused on building scalable full-stack applications and strong problem-solving skills.",
      descBullets: ["Applied software engineering best practices including code reviews, testing, and Agile collaboration"]
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Engineer",
      company: "Faibanet UG",
      companylogo: require("./assets/images/fai.png"),
      date: "June 2023 – march 2024",
      desc: "Contributed to the development and maintenance of software solutions, supporting internal systems and client-facing applications.",
      descBullets: [
        "Assisted in developing, testing, and debugging web and software applications",
        "Worked with databases, APIs, and version control systems in a team environment"
      ]
    },
    
    {
      role: "Freelance Software Engineer",
      company: "Upwork",
      companylogo: require("./assets/images/up.png"),
      date: "October 2024 – Current",
      desc: "Worked as a freelance software engineer delivering web and software solutions for clients across different industries via Upwork.",
      descBullets: [
        "Designed, developed, and deployed web applications based on client requirements",
        "Built frontend and backend features using modern programming languages and frameworks",
        "Integrated APIs, databases, and third-party services into client applications",
        "Collaborated remotely with clients, gathering requirements and delivering solutions on time"
      ]
    },
    {
      role: "Freelancer",
      company: "Replit",
      companylogo: require("./assets/images/Rep.png"),
      date: "oct 2023 – Sep 2025",
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
      image: require("./assets/images/fai.png"),
      projectName: "Faibanet UG",
      projectDesc: "Worked on software solutions supporting Faibanet Uganda’s internal operations, including system maintenance, feature development, and performance improvements.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://faibanet.co.ug/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/maze.png"),
      projectName: "The Maze",
      projectDesc: "The Maze is a 3D Maze game that uses ray casting to render a 2D map into a 3D navigable world! The Maze was written was written in C ussing SDL2 library. Deveploment was performed using Ubuntu 14.04 LTS - gcc (Ubuntu 4.8.4-2ubuntu1~14.04) 4.8.4",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/alvine2/The-Maze"
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
      title: "ALX Code-In Finalist",
      subtitle:
        "Kinyera Alvine was recognized as a standout participant in ALX, becoming one of the first Ugandan students to be selected as a finalist for exceptional contributions to open-source software and project-based learning.",
      image: require("./assets/images/lx.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Tafgwyp8CuobFKgYcsa7JtKkyYTqz3Rj/view?usp=sharing"
        },
        {
          name: "ALX Code-in Blog",
          url: "https://medium.com/@alvinekinyera/the-maze-project-blog-post-d6aa921abfe7"
        }
      ]
    },
    {
      title: "Replit Ai Action",
      subtitle:
        "Developed a Ai Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/Rep.png"),
      imageAlt: " Action Logo",
      footerLink: [
        {
          name: "View Assistant Action",
          url: "https://replit.com/ai"
        }
      ]
    },

    {
      title: "BYU I",
      subtitle: "Web App Development",
      image: require("./assets/images/byu.png"),
      imageAlt: "BYU Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1Tafgwyp8CuobFKgYcsa7JtKkyYTqz3Rj/view?usp=sharing"},
        {
          name: "Final Project",
          url: "https://github.com/alvine2/CSE340-project"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@alvinekinyera/the-maze-project-blog-post-d6aa921abfe7",
      title: "The Maze Project",
      description:
        "Our project was created for gaming enthusiasts who enjoy puzzle and maze games. We wanted to provide a challenging yet enjoyable experience for players of all ages."
    },
    {
      url: "https://medium.com/@alvinekinyera/what-happens-when-you-type-google-com-in-your-browser-and-press-enter-b05803e2f727",
      title: "Why REACT is The Best?",
      description:
        "What happens when you type google.com in your browser and press Enter?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFesT Kampala 2023",
      slides_url: "https://docs.google.com/presentation/d/1hC8qschDMhtq0rwl7h3TdeXOruk8caGx/edit?usp=sharing&ouid=116090724519779764822&rtpof=true&sd=true",
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      embedUrl: "https://www.youtube.com/embed/oX7OduG1YmI",
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+256778235910 | +256726154776",
  email_address: "alvinekinyera@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "https://twitter.com/AlvineKinyera", //Replace "twitter" with your twitter username without @
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
