import { motion } from "framer-motion";

const Tags = ({ tags }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { staggerChildren: 0.2 },
      }}
      className="tag-container"
    >
      {tags.map((tag) => {
        return (
          <motion.div
            key={tag}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                when: "afterParent",
              },
            }}
            className="tag"
          >
            {tag}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Tags;
