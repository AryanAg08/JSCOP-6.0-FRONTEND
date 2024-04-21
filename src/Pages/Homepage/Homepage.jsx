import "./Homepage.css";
import { useEffect, useRef } from "react";
import planet from "../../assets/Homeimages/planet2.jpg";
import Stars from "../../Components/Stars/Stars";
import Timer from "../../Components/Timer/Timer";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Astronaut3update from "../../assets/Homeimages/Astronaut3update.png";
// import jscop6heading from "../../assets/jscop6heading2.png";

const Homepage = () => {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 2;
  };
  const { id } = useParams();

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);
  return (
    <div id="home" className="homepage">
      <Stars speed={0.04} />

      <img src={planet} alt="planet" className="planet" />
      <div className="home-heading">
        {/* <div className="home-heading-inner"> */}
        <div className="home-heading1">JIIT OPTICA</div>
        <div className="home-break">{/* <br /> */}</div>
        <div className="home-heading2">Presents</div>
        <div className="home-break">{/* <br /> */}</div>
        <div className="home-heading3">
          {/* <img src={jscop6heading} alt="" className="homeLogo" />{" "} */}
          JSCOP
          <span className="six-point-zero"> 6.0</span>
        </div>
        <div className="home-heading-inner2">
          JIIT STUDENTS CONFERENCE ON OPTICS AND PHOTONICS
        </div>
        <div className="home-break">
          <br />
        </div>
        <Timer />
        <div className="home-break">
          <br />
        </div>
        <div className="home-register-btn-div">
          {/* <Link to="/register"> */}
          <button className="home-register-btn">
            Registrations Starting Soon
          </button>
          {/* </Link> */}
        </div>
        {/* </div> */}
      </div>
      <div className="astro"></div>

      <div className="spacestation"></div>
      <div className="home-gradient"></div>
      <div className="home-gradient"></div>
      <div className="home-gradient"></div>
    </div>
  );
};

export default Homepage;
