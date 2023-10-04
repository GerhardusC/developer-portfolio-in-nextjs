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
  "Node.js",
  "Next.js",
  "SQL",
  "PHP",
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
              I am Gerhardus Cronjé, a full stack web developer, trained to
              develop web applications using the MERN (MongoDB, Express.js,
              React.js, Node.js) stack.
            </p>
            <p>
              I started my career as a teacher, teaching mathematics and physics
              at an FET level for two years. In this role, I learnt how to work
              in a team to deliver content to learners effectively.
            </p>
            <p>
              My interest in programming started when I was a teacher, and I
              wrote simple scripts to automate the drafting of letters to
              parents.
            </p>
            <p>
              My interest in technology grew, which led me to pursue an
              opportunity to create online learning content as a learning
              designer. In this position, I analysed curriculum documents to
              create learning plans, which I then used to turn curriculum
              content into meaningful learning experiences. In this position, I
              also learnt how to work in high pressure environments and using
              Agile methodologies.
            </p>
            <p>
              While creating content at the online high school, my interest in
              programming grew even more when I found out I could write HTML,
              CSS, and JavaScript in Moodle to make my content more engaging.
            </p>
            <p>
              It was at this time that I decided to complete a part-time,
              six-month, full stack web development bootcamp. During the
              bootcamp I learnt how to build interactive full stack web
              applications and thoroughly enjoy solving problems by building web
              applications.
            </p>
            <p>
              <b>My skillset:</b>
            </p>
            <Tags tags={techSkills} />
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
        </motion.div>
      </AnimatePresence>
    </MyLayout>
  );
};

export default About;
