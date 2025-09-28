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
  username: "UDM",
  title: "Hi all, I'm UDM",
  subTitle: emoji(
    "A passionate Frontend Web Developer 🚀 having an experience of building Websites  with JavaScript / Reactjs / Nodejs / e and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true// Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/UDM2202",
  linkedin: "https://www.linkedin.com/in/ulokaji-daniel-412546233/",
  gmail: "ulokajidaniel@gmail.com",
  twitter: "https://x.com/UlokajiD",
  facebook: "https://www.facebook.com/ulokajidaniel",
  medium: "https://medium.com/@ulokajidaniel",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FRONTEND DEVELOPER CREATING ENGAGING WEB EXPERIENCES WITH MODERN TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Build responsive and visually appealing websites using HTML5, CSS3, and JavaScript"
    ),
    emoji("⚡ Develop dynamic, component-based user interfaces with React.js"),
    emoji(
      "⚡Focus on user-friendly design, performance optimization, and clean, maintainable code"
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
      // skillName: "swift",
      // fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      // skillName: "sql-database",
      // fontAwesomeClassname: "fas fa-database"
    },
    {
      // skillName: "aws",
      // fontAwesomeClassname: "fab fa-aws"
    },
    {
      // skillName: "firebase",
      // fontAwesomeClassname: "fas fa-fire"
    },
    {
      // skillName: "python",
      // fontAwesomeClassname: "fab fa-python"
    },
    {
      // skillName: "docker",
      // fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CSS",
      progressPercentage: "90%"
    },
    {
      Stack: "React js",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "TechNova Solutions ",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Feb 2023 – Present – Present",
      desc: "Building and maintaining responsive, user-focused web interfaces for client projects using React.js, HTML5, CSS3, and JavaScript.",
      descBullets: [
        "Developed and deployed multiple interactive landing pages and dashboards with optimized performance",
        "Collaborated with backend teams to integrate REST APIs and improve user experience"
      ]
    },
    {
      role: "Front-End Development Intern",
      company: "ByteWorks Studio",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "Oct 2022 – May 2023",
      desc: ["Implemented UI components with HTML, CSS, and JavaScript under senior developer guidance",
        "Contributed to testing, debugging, and code documentation for ongoing projects"
      ]
      
    },
    {
      role: "Junior Frontend Developer",
      company: "CodeSpark Digital",
      companylogo: require("./assets/images/airbnbLogo.png"),

      date: "Jun 2023 – Jan 2024",
      desc: [
    "Built reusable React components and implemented client-side routing",
    "Improved website loading speed and SEO through code optimization"
  ]
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
      title: "FreeCode Camp",
      subtitle:
        "Responsive Web Design Developer Certification on October 20, 2022 representing approximately 300 hours of work",
      image: require("./assets/images/freecodecamp.png"),
      imageAlt: "FreeCode Camp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://freecodecamp.org/certification/fcc4a421688-55d8-4917-9197-eed40ba4af31/responsive-web-design"
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
      title: "JavaScript for Beginners",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru.",
      image: require("./assets/images/coursera-logo.png"),
      imageAlt: "Cousera Logo",
      footerLink: [
        {
          name: "Certifcation",
          url: "https://hulkofknowledge.github.io/portfolio/assets/img/certificates/c16.jpg"
        }
      ]
    },

    {
      title: "Full Website With Wordpress",
      subtitle: "Completed Certifcation from Coursera for  Website Development with Wordpress",
      image: require("./assets/images/coursera-logo.png"),
      imageAlt: "Cousera Logo",
      footerLink: [
        {name: "Certification", 
          url: "https://hulkofknowledge.github.io/portfolio/assets/img/certificates/C7.PNG"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+23408071245348",
  email_address: "ulokajidaniel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "UlokajiD", //Replace "twitter" with your twitter username without @
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
