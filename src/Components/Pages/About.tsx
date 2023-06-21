import {
  DJLunaEdit,
  DJLunaEdit_mobile
} from "../../Resources/Resources";

import "../../index.css";
import NavBar from "../Layout/NavBar";

const About = () => {   
  return (
    <div id="About">
      <NavBar />
      <div className="mainContainer">
        <div className="Container">
          <div className="AboutUsContainer">
            <div className="AboutUsPhoto">
              <picture>
                <source media="(min-width:1024px)" srcSet={DJLunaEdit} type="image/png" />
                <source media="(min-width:650px)" srcSet={DJLunaEdit} type="image/png" />
                <source media="(min-width:450px)" srcSet={DJLunaEdit_mobile} type="image/png" />
                <img className="HostPhoto" id="HP1" src={DJLunaEdit_mobile} />
              </picture>
            </div>
            <div className="AboutUsText">
              <div className="pageTitle">
                <h1 className="AboutUsHead">
                  About Us
                </h1> 
              <div className="divider"></div>
            </div>
            <div className="aboutText">       
              <p className="topPart">
Music Moves Entertainment was founded by Roger Luna, better known as DJ Luna, with the goal of bringing a positive atmosphere that only a good DJ can infuse into a crowd. </p>
<p className="secondPart">Luna had a deep connection with music in his early years which followed him into his young adult life. This later blossomed into a career as a successful entertainer and music creator. Starting as a drummer for a small band, his eagerness led him to pick up on a multitude of different instruments. He learned how to play bass guitar and percussion, his sound being heavily inspired by his Latino roots as well as popular culture. </p><p className="secondPart">Music Moves aspires to create opportunities for up-and-coming talent to share their love for music and the energy, community and passion that comes with it.
              </p></div>
            </div>
          </div>
          <div className="AboutUsInstam">
             Follow us on Instam
             <div className="divider"></div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default About;
