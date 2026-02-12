// src/components/Sidebar/index.jsx
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <aside className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink activeclassname="active" className="skill-link" to="/skill">
          <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faMessage} />
        </NavLink>
      </nav>

      <ul className="socials">
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/usmanbelloa">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/engrusmanbelloa">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </aside>
  );
}