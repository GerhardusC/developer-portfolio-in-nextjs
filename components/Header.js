import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useScroll, useTransform, useSpring } from "framer-motion";

// This array just holds the link paths and their descriptions.
const links = [
  //[path, description]
  ["/about", "About"],
  ["/contact", "Contact"],
  ["/projects", "Projects"],
];

// The navigation bar component.
const Header = () => {
  // Using scrollprogress from motion to shrink and hide navbar. Also tweaking some settings.
  const { scrollYProgress } = useScroll();
  const scrollTransform = useTransform(scrollYProgress, [1, 0], [0, 1]);
  const smoothScroll = useSpring(scrollTransform, {
    stiffness: 400,
    damping: 15,
  });
  // Keeping track of the path name to differenciate the active path in the navigation bar.
  const pathName = usePathname();

  return (
    <motion.div
      style={{ scaleY: smoothScroll, opacity: smoothScroll }}
      className="navigation-bar-container"
    >
      {/* Navigation bar with all the links. */}
      <nav>
        <ul>
          {/* The home page link */}
          <li>
            <Link
              style={{
                fontWeight: "bold",
                fontSize: "xxx-large",
                color: "#9bc63f",
              }}
              href="/"
            >
              GCS
            </Link>
          </li>
          <li>
            {/* All the other links. To add links, I can now add them to the array at the top. */}
            {links.map((link) => {
              // If the path name matches the link name, we return an active link, otherwise we return and inactive link.
              // Remember, link[0] is the path, and link[1] is its description.
              return (
                <Link
                  key={link[0]}
                  href={link[0]}
                  className={
                    // If the link path is equal to the current path, make nav link active, otherwise, inactive.
                    link[0] === pathName
                      ? "active-nav-link"
                      : "inactive-nav-link"
                  }
                >
                  {link[1]}
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Header;
