import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div>Created by: Katona Bálint</div>
        <div className="socials">
          <a
            href="https://github.com/katonabalint13"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/b%C3%A1lint-katona-8505312b4/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
