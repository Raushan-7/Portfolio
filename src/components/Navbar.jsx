import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navLinks, personalInfo } from "../data/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link
            to="hero"
            smooth
            duration={500}
            className="nav-logo"
            style={{ cursor: "pointer" }}
          >
            {personalInfo.name}
          </Link>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navLinks.map(({ id, title }) => (
              <Link
                key={id}
                to={id}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="active"
                onClick={closeMenu}
              >
                {title}
              </Link>
            ))}
          </div>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-overlay" onClick={closeMenu} />
      )}
    </>
  );
};

export default Navbar;
