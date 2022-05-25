import { Link, NavLink } from "react-router-dom";
import "./index.scss"
import LogoS from "../../assets/images/logo-s.png"
import LogoSub from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faMessage} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSub} alt="logosub" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#A64B2A" />
            </NavLink>
            <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} color="#A64B2A" />
            </NavLink>
            <NavLink exact="true" className="skill-link" activeclassname="active" to="/skill">
                <FontAwesomeIcon icon={faBriefcase} color="#A64B2A" />
            </NavLink>
            <NavLink exact="true" className="contact-link" activeclassname="active" to="/contact">
                <FontAwesomeIcon icon={faMessage} color="#A64B2A" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/usmanbelloa"
                >
                <FontAwesomeIcon icon={faLinkedin} color="#A64B2A" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/engrusmanbelloa"
                >
                <FontAwesomeIcon icon={faGithub} color="#A64B2A" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/engrusmanbelloa"
                >
                <FontAwesomeIcon icon={faTwitter} color="#A64B2A" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/usman.belloa/"
                >
                <FontAwesomeIcon icon={faFacebook} color="#A64B2A" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar;