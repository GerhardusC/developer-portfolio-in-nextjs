// This component is my about page.

import MyLayout from "../components/MyLayout";
import { AnimatePresence, motion } from "framer-motion";
import Card from "@/components/Card";

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
              I am Gerhardus Cronjé, a web developer who used to be teacher and
              learning designer. I started out my career as a mathematics and
              physics teacher, after which I moved into the learning design
              space where I was responsible for writing educational physical
              science content.
            </p>
            <p>
              My journey with programming started very simply while I was a
              teacher. I used Python to write a little script that was able to
              automatically draft letters to parents based on learners' marks.
              This saved me a lot of time, and I started falling in love with
              programming.
            </p>
            <p>
              Some time later, while I designing the Physical Science matric
              course for the UCT online high school, I started falling in love
              with web development. I had to work with HTML every day while
              developing content on Moodle to make sure the web pages display
              properly.
            </p>
            <p>
              I realised that having access to HTML also allows me to add
              additional interactivity to my lessons if I used some JavaScript
              along with the html. From here I designed simple multiple choice,
              short answer and numerical questions that I could reuse within my
              lessons in a context where Moodle would normally not allow it.
            </p>
            <p>
              I enjoyed web development and programming so much that I decided I
              am going to do a web development bootcamp. I am currently in the
              process of completing my 6 month full stack web development
              bootcamp at Hyperion Dev and am proud to say that I am now
              officially a web developer.
            </p>
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
