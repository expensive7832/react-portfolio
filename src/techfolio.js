
import emoji from "react-easy-emoji";
 
  
const app = {
  title: "Jimoh Yusuf  Portfolio",
  // Note : consider leaving null if you dont have any head icon
  description: "A Mern Stack Web Developer",
  
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/expensive7832",
  linkden: "https://linkedin.com/in/esquire-expensive",
  facebook: "https://web.facebook.com/jumuat",
  twitter: "https://twitter.com/Esquirexpensive"
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Jimoh Yusuf Kayode",
  bannerHeading: "Esq. Yusuf",
  bannerTagLine: emoji(
    "A dynamic graduate highly skilled in web development with and rich design that would make you want to stay on a platform always. contact me now"
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder 
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "myImage.png",
  resumeLink:
    "https://drive.google.com/file/d/1Yh3ZjlNF-9EHghGC0f8ea0lbXd09eGSF/view?usp=sharing",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "esquire yusuf",
  firstCommand: "react-scripts start",
  secondCommand: "npm start || yarn start",
  about:
    "A dynamic Mern Stack Developer. Passionate about solving problems that will benefit others in the area of IT or in real life. start my carrier back in 2019 and i have learn lot of skills and also develop web app that make life easy on our daily basis.",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Excitable towards giving breath to different mockup PSDs and web designs using Html / Css and Scss, material-ui & bootstrap",
    "Love to Build Scalable web and native application using React with the several stacks, packages, and services.",
    "Also Passionate towards other stuff like WordPress development, Expressjs.",
  ],

  
};


/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: "Web Intern",
      experienceDesc:
        "training on powering frontend web page with web language and wordpress",
      // Recommended : don't add full date.
      experienceDuration: "01/10/2020 - 31/01/2021",
      // Recommended : don't add more than 3 tags.
      experienceTags: ["wordpress", "html,css,js", "3 months", "creativity"],
    },
    {
      experienceTitle: "Kwikseller",
      experienceDesc:
        "Expanded knowledge of creating static and responsive sites using WordPress and frontend language.",
      experienceDuration: "10/04/2021 - 31/10/2021",
      experienceTags: ["junior", "6months", "full-time"],
    },
    {
      experienceTitle: "Web Instructor & Web Developer",
      experienceDesc:
        "Instructing Student also manage the company webpage.",
      experienceDuration: "Current",
      experienceTags: ["full-time", "Frontend"],
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "i Am available 24/7",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: [
    {"data": "+2348166398746", "icon": "fa-solid fa-phone"},
    {"data": "jimohyusuf7832@yahoo.com" , "icon": "fa-solid fa-envelope"}
     ],
};


// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  experienceSection,
  contactSection,
};
