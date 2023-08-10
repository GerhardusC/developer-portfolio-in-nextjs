import { motion } from "framer-motion";
import { useState } from "react";

// These are cards that have a front and a back.
// When you mouse over them, you can see the back.
const Card = ({ title, subtitle, content, image }) => {
  // State to keep the side of the card to display.
  const [showCardBack, setShowCardBack] = useState(false);
  return (
    // The card container, it animates in when in view.
    // When you mouse over it, it sets the showCardBack to true,
    // and when the mouse leaves, to false.
    <motion.div
      className="single-card-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn", when: "afterParent" }}
      onMouseEnter={() => setShowCardBack(true)}
      onMouseLeave={() => setShowCardBack(false)}
    >
      {/* The back of the card is shown. */}
      {showCardBack && (
        <motion.div
          className="card-back"
          // animates in.
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.2 }}
        >
          <motion.h3 className="card-title">{title}</motion.h3>
          <motion.h5 className="card-subtitle">{subtitle}</motion.h5>
          <motion.p className="card-paragraph">{content}</motion.p>
        </motion.div>
      )}
      {/* The front of the card is shown. */}
      {!showCardBack && (
        <motion.div
          className="card-front"
          // animates in.
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.2 }}
        >
          <motion.img className="card-image" alt={subtitle} src={image} />
        </motion.div>
      )}
    </motion.div>
  );
};
export default Card;
