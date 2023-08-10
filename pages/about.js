// This component is my about page.

import MyLayout from "../components/MyLayout";
import { AnimatePresence, motion } from "framer-motion";
import Card from "@/components/Card";
import Tags from "@/components/Tags";

// An array of my education items.
const educationList = [
  {
    title: "High school",
    subtitle: "Westerford High School",
    content: "NSC Senior Certificate 2012",
    image: "/westerfordbadge.png",
  },
  {
    title: "College",
    subtitle: "City Varsity",
    content: "Diploma in Sound Engineering 2015",
    image: "/cityvarsitylogo.png",
  },
  {
    title: "University",
    subtitle: "Cape Peninsula University Of Technology",
    content:
      "Bachelor of education FET phase majoring in Mathematics and Physics 2019",
    image: "/cputlogo.png",
  },
  {
    title: "Bootcamp",
    subtitle: "Hyperion Dev",
    content:
      "Full stack web development bootcamp in association with Stellenbosch University 2023",
    image: "/hyperiondevlogo.png",
  },
];
// An array of my work experience.
const workExperienceList = [
  {
    title: "Teacher",
    subtitle: "Rosebank progress college",
    content:
      "Taught physical science and mathematics grade 10-12 here for one year.",
    image: "/rosebankprogresscollegelogo.jpg",
  },
  {
    title: "Teacher",
    subtitle: "Norman Henshilwood High School",
    content: "Taught mathematics grade 8-11 here for one year.",
    image: "/normanhenshilwoodlogo.png",
  },
  {
    title: "Learning Designer",
    subtitle: "The Valenture Institute",
    content:
      "Wrote Physical Science content for the UCT Online High School for 2 years.",
    image: "/vilogo.jpg",
  },
];

const techSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Express",
  "MongoDB",
  "Next.js",
  "DaVinci Resolve",
  "Blender",
  "OpenToonz",
];

// These are used for framer motion to animate when things are hidden and shown.
const paraBlocks = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -40,
  },
};

const para = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -40,
  },
  transition: {
    ease: "easeInOut",
  },
};

const About = () => {
  return (
    <MyLayout>
      <AnimatePresence>
        {/* Assigning the motion properties using variants. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={paraBlocks}
        >
          <motion.div
            variants={para}
            initial="hidden"
            whileInView="visible"
            className="para-container"
          >
            <h1>About me</h1>
            <p>
              I am Gerhardus Cronjé, a web developer with a background that
              includes teaching and learning design. My professional journey
              began in the field of education, where I served as a mathematics
              and physics teacher. Later, I transitioned to the realm of
              learning design, where my responsibilities included creating
              educational content for physical science courses.
            </p>
            <p>
              My introduction to programming occurred during my time as a
              teacher. I harnessed the power of Python to create a streamlined
              script that automated the process of generating letters to parents
              based on student performance. This endeavor not only saved me
              valuable time but also ignited a genuine passion for programming.
            </p>
            <p>
              My appreciation for web development blossomed further when I was
              tasked with designing the Physical Science matric course for the
              UCT online high school. Working extensively with HTML while
              developing content on Moodle, I gained a profound understanding of
              web page presentation.
            </p>
            <p>
              I discovered that combining HTML with JavaScript allowed me to
              infuse interactivity into my lessons. I devised a range of
              interactive elements, such as multiple-choice, short answer, and
              numerical questions, enabling me to enhance the learning
              experience in some areas where the constraints of the Moodle
              platform didn't allow for this interactivity.
            </p>
            <p>
              My enthusiasm for web development led me to pursue a comprehensive
              web development bootcamp. I am currently immersed in a 6-month
              full-stack web development program at Hyperion Dev in partnership
              with Stellenbosch University. I take immense pride in now
              officially being recognized as a web developer.
            </p>
            <p>
              My skillset encompasses a diverse array of technologies, including
              but not limited to:
            </p>
            <Tags tags={techSkills} />
          </motion.div>
          <motion.div
            variants={para}
            className="para-container"
            initial="hidden"
            whileInView="visible"
          >
            <h2>Education</h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              className="cards-container"
            >
              {/* Making cards for each education item, and passing education down as props. */}
              {educationList.map((eduItem) => {
                return (
                  <Card
                    key={eduItem.content}
                    title={eduItem.title}
                    subtitle={eduItem.subtitle}
                    content={eduItem.content}
                    image={eduItem.image}
                  />
                );
              })}
            </motion.div>
          </motion.div>
          <motion.div
            variants={para}
            className="para-container"
            initial="hidden"
            whileInView="visible"
          >
            <h2>Work experience</h2>
            <div className="cards-container">
              {/* Making cards for each work experience item and passing work experience down as props. */}
              {workExperienceList.map((workItem) => {
                return (
                  <Card
                    key={workItem.content}
                    title={workItem.title}
                    subtitle={workItem.subtitle}
                    content={workItem.content}
                    image={workItem.image}
                  />
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </MyLayout>
  );
};

export default About;
