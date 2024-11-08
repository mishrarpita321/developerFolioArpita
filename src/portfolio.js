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
  username: "Arpita Mishra",
  title: "Hello all, I'm Arpita",
  subTitle: [
    emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."),
    "I am a Master's student👩🏼 at SRH University of Applied Sciences, majoring in Usability Engineering and UX Design, currently in my final semester writing thesis on large language models in VUIs.",
    " I am originally from India🏠, currently living in Heidelberg, Germany.",
  ],  
  resumeLink:
    "https://drive.google.com/file/d/1x0XxnTSCiNrmX_LAiwP6Qe6UYY8rfmaj/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mishrarpita321",
  linkedin: "https://www.linkedin.com/in/arpita-mishra-396bb9168/",
  gmail: "arpitamishra1497@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
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
      "⚡ Develop interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Converting designs into reusable components in Frameworks like Reactjs and Nextjs"),
    emoji(
      "⚡ Bug fixing , debugging, maintaining and optimizing the code following DRY principle"
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SRH University of Applied Sciences",
      logo: require("./assets/images/srh_logo.png"),
      subHeader: "Master of Science in Applied Computer Science",
      duration: "Arpril 2023 - March 2025",
      grades: "1.4 (ECTS)",
      descBullets: [
        "Major in Usability Engineering and UX Design",
        "Thesis Implementation of a voice-controlled intake form using LLM for entity recognition.",
        "Project Management - Agile Methodologies",
        "Software Development Practice and Software Architecture Development",
        "Fundamentals of UX, UX Design and Implementation and UX Testing",
        "Advanced Computer Science and Advanced Database"
      ]
    },
    {
      schoolName: "Odisha University of Technology and Research",
      logo: require("./assets/images/Odisha_University_of_Technology_and_Research_Logo.png"),
      subHeader: "Bachelor of Technology",
      duration: "September 2015 - April 2019",
      desc: "Ranked top 3 in the programme. Took courses about Software Engineering, Web Development",
      descBullets: ["Organisational Behaviour", "Mathematics", "C/C++", "Databases"]
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
    },
    {
      Stack: "Debugging and Bug Fixing",
      progressPercentage: "90%"
    },
    {
      Stack: "Documentation",
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
      role: "Frontend Developer (part-time)",
      company: "Bosch Digital",
      companylogo: require("./assets/images/boschdigital_logo.jpeg"),
      date: "June 2023 – Present",
      desc: "Working on an internal back-office application, built in React-admin, to support our e-commerce platform.",
      descBullets: [
        "Developing new features and maintaining the existing codebase.",
        "Working closely with the product owner and other stakeholders for requirement.",
        "Ensuring resuable components, code quality and test cases."
      ]
    },
    {
      role: "Software Engineer",
      company: "IBM India Pvt. Ltd.",
      companylogo: require("./assets/images/IBM.png"),
      date: "Oct 2021 – Feb 2023",
      desc: "Worked on a CRM application for Indian Oil Pvt Ltd's retail outlets, developed using Siebel CRM.",
      descBullets: [
        "Developed new features, bug fixing and maintaining the existing codebase.",
        "Worked closely with the client and buisness analyst for requirement gathering and understanding.",
        "Production support for major releases and immediate bug fixes.",
        "Reponsible for assisting L1 and L2 support team for any technical issues."
      ]
    },
    {
      role: "Assosiate Software Engineer",
      company: "Tech Mahindra",
      companylogo: require("./assets/images/TechM.png"),
      date: "Nov 2019 – Oct 2021",
      desc: "Worked on application development for Openreach owned by British Telecom, developed using Oracle Siebel CRM.",
      descBullets: [
        "Supported in product configuration for application upgrade from Siebel IPV 8.1 to 19.8.",
        "Did CSS to SCSS conversion for the application to achieve single CSS file to enhance performance.",
        "Development of custom JavaScript and Business Services for the application.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Oracle Certified Foundations Associate",
      image: require("./assets/images/01a_Database_Foundations_Associate.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1kW-T-FHJj3Zb1D8fJWKA2g0P-S-qUAKH/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "IBM Think Like a Hacker",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/thinkLikeAHacker.jpeg"),
      imageAlt: "Think like a hacker Logo",
      footerLink: [
        {
          name: "Cetification",
          url: "https://drive.google.com/file/d/1GKxcAmcZiO_qrBNHxWRyzs_Q8aVQRW3k/view?usp=sharing"
        }
      ]
    },

    {
      title: "Tech Mahindra Bravo Award",
      subtitle: "Awarded for the contribution in the project",
      image: require("./assets/images/bravo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1wVgDnjhbhua2ZaIlLMHJHqVIzdsLUREE/view?usp=sharing"},
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
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
  number: "+49 176 34553853",
  email_address: "arpitamishra1497@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
