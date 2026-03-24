import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section-wrapper about" id="about">
      <div className="container">
        <motion.p
          className="section-subtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Introduction
        </motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About Me
        </motion.h2>

        <div
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {/* Left Column: Text Content */}
          <motion.div
            style={{ flex: "1 1 400px" }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-text" style={{ maxWidth: "100%" }}>
              Driven by a deep curiosity for technology and a passion for problem-solving, I specialize in the intersection of Artificial Intelligence and practical software engineering. I don’t just write scripts; I build systems that think. With expertise spanning from architecting full-stack web platforms using the MERN stack to training high-accuracy predictive models, I bring a data-centric approach to everything I create. My focus is on turning complex datasets into smart, scalable applications that solve real-world problems through clean and efficient code. I thrive on the challenge of modern frameworks and constantly push myself to ensure my work doesn't just function—it learns, adapts, and meets the needs of the future.
            </p>
          </motion.div>

          {/* Right Column: Creative Side Space */}
          <motion.div
            style={{ flex: "1 1 400px", position: "relative" }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className="about-visual"
              style={{
                position: "relative",
                width: "100%",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Glowing Background Orb */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(145, 94, 255, 0.15), transparent 70%)",
                  position: "absolute",
                }}
              />

              {/* Floating Glass Code Card */}
              <motion.div
                className="glass-card"
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  padding: "24px",
                  width: "280px",
                  position: "relative",
                  zIndex: 1,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                  background: "rgba(21, 16, 48, 0.7)",
                }}
              >
                {/* Mock Mac Window Controls */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#ff5f56",
                    }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#ffbd2e",
                    }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#27c93f",
                    }}
                  />
                </div>
                {/* Mock Code Segment */}
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.9rem",
                    color: "var(--accent-cyan)",
                    lineHeight: 1.7,
                  }}
                >
                  <p>
                    <span style={{ color: "var(--accent-purple)" }}>const</span>{" "}
                    developer = {"{"}
                  </p>
                  <p style={{ paddingLeft: "16px" }}>
                    name:{" "}
                    <span style={{ color: "var(--text-primary)" }}>
                      "Raushan Raj"
                    </span>
                    ,
                  </p>
                  <p style={{ paddingLeft: "16px" }}>
                    role:{" "}
                    <span style={{ color: "var(--text-primary)" }}>
                      "Full Stack"
                    </span>
                    ,
                  </p>
                  <p style={{ paddingLeft: "16px" }}>
                    passion:{" "}
                    <span style={{ color: "var(--text-primary)" }}>
                      "Problem Solving"
                    </span>
                  </p>
                  <p>{"};"}</p>
                </div>
              </motion.div>

              {/* Accent Floating Shape 1 */}
              <motion.div
                animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [45, 90, 45] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: "15%",
                  right: "15%",
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "var(--accent-gradient)",
                  opacity: 0.5,
                }}
              />

              {/* Accent Floating Shape 2 */}
              <motion.div
                animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, 180, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  bottom: "15%",
                  left: "15%",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "2px solid var(--accent-cyan)",
                  opacity: 0.3,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
