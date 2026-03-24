import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { personalInfo } from "../data/constants";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="dot"></span>
            Welcome to my digital space
          </motion.div>

          <h1>
            Hi, I&apos;m{" "}
            <motion.span
              className="name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {personalInfo.name}
            </motion.span>
          </h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="btn btn-primary">
                <FiArrowDown /> View My Work
              </button>
            </Link>
            <a
              href={personalInfo.resumeLink}
              download="Raushan Specialised CV.pdf"
            >
              <button className="btn btn-outline">
                <FiDownload /> Download CV
              </button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-orb">
            <span className="hero-orb-inner">RR</span>
          </div>
        </motion.div>
      </div>

      <Link to="about" smooth={true} duration={500} offset={-80}>
        <div className="scroll-indicator">
          <div className="scroll-mouse" />
          <span>SCROLL</span>
        </div>
      </Link>
    </section>
  );
};

export default Hero;
