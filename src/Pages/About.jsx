import { FaInstagram, FaGoogle } from "react-icons/fa";
import "./about.css";
import Bcs from "../img/bcs.jpg";

function About() {
  return (
    <div className="about-container">
      <div>
        <img src={Bcs} className="bcs-img" />
      </div>
      <div className="text-container">
        <div className="name-text">Balazs Csada</div>
        <div>
          <p className="text">
            Hello, I'm Balazs, a passionate photographer based in Budapest City.
            Photography has been my lifelong love affair, capturing moments and
            emotions in frames that transcend time. From the bustling streets of
            Miskolc to the serene landscapes of upstate Budapest, I find
            inspiration in every corner. <br /> My journey with photography
            began at a young age when I received my first camera as a birthday
            gift. Since then, I've immersed myself in the art, constantly
            refining my skills and exploring new techniques. Specializing in
            portrait and lifestyle photography, I thrive on capturing the
            essence of my subjects – their laughter, their vulnerabilities,
            their stories. Whether it's a candid street shot or a meticulously
            planned studio session, I strive to create images that resonate with
            authenticity and emotion. <br />
            Collaboration is at the heart of my work. I love connecting with
            clients, understanding their vision, and bringing it to life through
            my lens. Every shoot is a unique opportunity to create something
            beautiful together. In addition to my client work, I'm also deeply
            involved in personal projects that explore themes of identity,
            culture, and social issues. Photography, for me, is not just about
            capturing beauty; it's about telling meaningful stories and sparking
            conversations.
          </p>
          <p>
            Gear List: <br />
            Sony A1 <br />
            Sony a7RIV <br />
            Tamron 24 f/2.8 <br />
            Tamron 28-75 f/2.8 <br />
            Tamron 70-180 f/2.8 <br />
            Tamron 150-500 f/5 <br />
            Sony 14mm f/1.8 <br />
            Sony 35mm f/1.4 <br />
            Sony 50mm f/1.2 <br />
          </p>
        </div>
        <div>Follow Me</div>
        <div className="socials">
          <a
            href="https://www.instagram.com/balazscsada/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="instagram" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <FaGoogle className="google" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
