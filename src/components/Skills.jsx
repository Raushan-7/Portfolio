import { motion } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbLetterC } from "react-icons/tb";

const iconMap = {
  SiPython: SiPython,
  SiC: TbLetterC,
  SiCplusplus: SiCplusplus,
  SiOpenjdk: FaJava,
  SiJavascript: SiJavascript,
  SiNodedotjs: SiNodedotjs,
  SiReact: SiReact,
  SiNumpy: SiNumpy,
  SiPandas: SiPandas,
  SiScikitlearn: SiScikitlearn,
  SiTensorflow: SiTensorflow,
  SiMysql: SiMysql,
  SiGit: SiGit,
  SiGithub: SiGithub,
};

const Skills = () => {
  return (
    <section className="section-wrapper" id="skills">
      <div className="container">
        <motion.p
          className="section-subtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I know
        </motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: "48px" }}
        >
          Tech Stack
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="tech-grid">
            {Object.entries(iconMap).map(([key, Icon], index) => {
              const name = key
                .replace("Si", "")
                .replace("Fa", "")
                .replace("Tb", "")
                .replace("Letter", "");
              const displayNames = {
                Python: "Python",
                C: "C",
                Cplusplus: "C++",
                Openjdk: "Java",
                Javascript: "JavaScript",
                Nodedotjs: "Node.js",
                React: "React",
                Numpy: "NumPy",
                Pandas: "Pandas",
                Scikitlearn: "Scikit-learn",
                Tensorflow: "TensorFlow",
                Mysql: "MySQL",
                Git: "Git",
                Github: "GitHub",
                Java: "Java",
              };
              return (
                <motion.div
                  key={key}
                  className="tech-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  whileHover={{ y: -8 }}
                >
                  <Icon />
                  <span>{displayNames[name] || name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
