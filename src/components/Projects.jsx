import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects, certificates } from "../data/constants";
import { HiOutlineAcademicCap } from "react-icons/hi";

const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <div className="container">
        <motion.p
          className="section-subtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Work
        </motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <div className="project-body">
                <ul>
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="project-footer">
                <div className="tech-pills">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          style={{ marginTop: "64px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3
            className="section-heading"
            style={{ fontSize: "1.6rem", marginBottom: "24px" }}
          >
            Certificates
          </h3>
          <div className="cert-grid">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-card cert-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {cert.image && (
                  <div className="cert-image-container">
                    <img src={cert.image} alt={cert.title} className="cert-image" />
                  </div>
                )}
                <div className="cert-content">
                  <HiOutlineAcademicCap className="cert-icon" />
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
