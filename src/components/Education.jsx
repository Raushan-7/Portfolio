import { motion } from "framer-motion";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { education } from "../data/constants";

const Education = () => {
  return (
    <section className="section-wrapper" id="education">
      <div className="container">
        <motion.p
          className="section-subtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Educational Journey
        </motion.h2>

        <div className="timeline">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <div className="timeline-dot" />
              <div className="glass-card timeline-content">
                <h3>{item.school}</h3>
                <p className="degree">{item.degree}</p>
                <div className="meta">
                  <span>
                    <FiCalendar /> {item.period}
                  </span>
                  <span>
                    <FiMapPin /> {item.location}
                  </span>
                </div>
                <p className="description">{item.description}</p>
                <span className="grade">{item.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
