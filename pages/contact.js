import MyLayout from "@/components/MyLayout";
import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  return (
    <MyLayout>
      {/* A simple animate in for a block that says contact me. */}
      <motion.div
        className="para-container"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1>Contact</h1>
        <p>If you would like to contact me you can reach me via email:</p>
        {/* An email link to mail me. */}
        <Link className="contact-link" href="mailto:hardus.cronje@gmail.com">
          hardus.cronje@gmail.com
        </Link>
      </motion.div>
    </MyLayout>
  );
};

export default Contact;
