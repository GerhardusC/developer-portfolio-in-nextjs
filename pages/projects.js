import MyLayout from "@/components/MyLayout";
import { motion } from "framer-motion";

// This is a list of my projects that I completed so far.
const projects = [
  {
    title: "Learning management system",
    description:
      "a lightweight simplified Learning Management System, which allows the creation of short lessons that include videos, explanations and quiz questions.",
    link: "https://explain-in-5-like-im-5.vercel.app/",
    githubLink:
      "https://github.com/GerhardusC/learning-management-system-frontend-ei5li5",
    image: "/learningmanagementsystem.png",
    tools: ["JavaScript", "Express", "HTML", "React", "Next", "CSS", "MongoDB"],
  },
  {
    title: "Recipe finder",
    description:
      "This app is a recipe searcher app. You can search for a type of food, for example 'curry', and get an index of a variety of curries. If you click on any of the curries, you will be presented with some more details about the curry.",
    link: "https://recipe-finder-themealdb.vercel.app/",
    githubLink: "https://github.com/GerhardusC/recipe-finder",
    image: "/recipefinder.png",
    tools: ["JavaScript", "HTML", "React", "Next", "CSS"],
  },
  {
    title: "Hangman",
    description:
      "This app is a hangman game like any other hangman game. I built this app in React using Create React App. The game state is also managed by Redux.",
    link: "https://hangman-single-player.netlify.app/",
    githubLink: "https://github.com/GerhardusC/hangman",
    image: "/hangmanapp.png",
    tools: ["JavaScript", "HTML", "React", "Redux", "Framer motion", "CSS"],
  },
  {
    title: "Full stack todo list",
    description:
      "This is a todo list that allows you to create an account and log in to add your own personal todos. ",
    link: "https://full-stack-todo-list.netlify.app/",
    githubLink: "https://github.com/GerhardusC/full-stack-todo-list",
    image: "/fullstacktodolist.png",
    tools: ["JavaScript", "HTML", "React", "CSS", "Express", "MongoDB"],
  },
  {
    title: "Spotify clone",
    description:
      "This is a clone of the Spotify landing page. The clone is non-functional.",
    link: "https://spotify-landing-clone.netlify.app/",
    githubLink: "https://github.com/GerhardusC/spotify-clone",
    image: "/spotifyclone.png",
    tools: ["JavaScript", "React", "CSS"],
  },
  {
    title: "Itunes searcher",
    description:
      "This app connects to the Itunes store and searches for the key term. This app uses express to make the API calls, and then contacts express from the React frontend.",
    link: "https://itunes-searcher-app.netlify.app/",
    githubLink: "https://github.com/GerhardusC/itunes-searcher-backend",
    image: "/itunessearcher.png",
    tools: ["JavaScript", "React", "Redux", "Express", "HTML", "CSS"],
  },
  {
    title: "Front end todo list",
    description: "A todo list with only a front end built in React.",
    link: "https://just-another-to-do-list23.netlify.app/",
    githubLink: "https://github.com/GerhardusC/just-another-todo-list",
    image: "/todolist.png",
    tools: ["JavaScript", "React", "Redux", "HTML", "CSS"],
  },
  {
    title: "Nationality guesser",
    description:
      "This small app calls the names API to determine the country code that a person's name originates from and uses the countries API to retrieve the relevant country full name, and thus its flag. This app works best with uncommon names, try my name for example, Gerhardus.",
    link: "https://nationality-by-name.netlify.app/",
    githubLink: "https://github.com/GerhardusC/nationality-by-name",
    image: "/countryguesser.png",
    tools: ["JavaScript", "React", "HTML", "CSS"],
  },
];
// A framer motion variant.
const projectsContainerAnimation = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.2,
    },
  },
  hidden: {
    x: -40,
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
// Another framer motion variant.
const projectAnimation = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -40 },
};

const Projects = () => {
  return (
    <MyLayout>
      {/* Animate in the projects container when it loads. */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="projects-container"
        variants={projectsContainerAnimation}
      >
        {/* Return each project in a motion element with the projectAnimation variant. */}
        {projects.map((project) => {
          return (
            <motion.div
              className="project"
              initial="hidden"
              whileInView="visible"
              key={project.link}
              variants={projectAnimation}
            >
              <motion.img
                initial="hidden"
                whileInView="visible"
                variants={projectAnimation}
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={projectAnimation}
              >
                {project.title}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={projectAnimation}
              >
                {project.description}
              </motion.p>
              <motion.div className="project-links">
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                  variants={projectAnimation}
                  href={project.link}
                  target="_blank"
                >
                  <motion.img
                    initial="hidden"
                    whileInView="visible"
                    variants={projectAnimation}
                    src="/netlifyicon.png"
                    className="brand-icon"
                  />
                  <p style={{ fontWeight: "400" }}>Live</p>
                </motion.a>
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                  variants={projectAnimation}
                  href={project.githubLink}
                  target="_blank"
                >
                  <motion.img
                    initial="hidden"
                    whileInView="visible"
                    variants={projectAnimation}
                    src="/githublogo.png"
                    className="brand-icon"
                  />
                  <p style={{ fontWeight: "400" }}>Code</p>
                </motion.a>
              </motion.div>
              <motion.div
                className="tools"
                initial="hidden"
                whileInView="visible"
                variants={projectAnimation}
              >
                {/* Mapping over the array of tools that each project uses and returning a tool */}
                {project.tools.map((tool) => {
                  return (
                    <motion.div className="tool" key={tool}>
                      {tool}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </MyLayout>
  );
};

export default Projects;
