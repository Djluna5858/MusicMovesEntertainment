import {
  PromPhoto,
  BirthdayPhoto,
  RogerPhoto,
  RogerPhoto_mobile,
  Djboard4Photo,
  Djboard4Photo_mobile,
  Djboard2Photo,
  Djboard3Photo,
  DjboardPhoto,
  FundraiserPhoto,
  JohnBorbaPhoto,
  MusicPhoto,
  OfficePartyPhoto,
  PartyPhoto,
  PhotoboothPhoto,
  PhotoTakingPhoto,
  SoundnLightingPhoto,
  GradPhoto,
} from "../../Resources/Resources";
import { Link } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import { ServiceSplide } from "../ServicesSplide";
//import { Splide, SplideSlide } from '@splidejs/react-splide';
import { generateSlides } from '../generateSlides/generateSlides';

function Home() {
  return (
    <div id="HomePage">
      <NavBar />
      <div className="mainContainer">
        <div className="Container">
          <div className="grid-rectangle" />
          <div className="DJLuna-wrapper">
            <picture>
              <source media="(min-width:1024px)" srcSet={RogerPhoto} type="image/png" />
              <source media="(min-width:650px)" srcSet={RogerPhoto} type="image/png" />
              <source media="(min-width:450px)" srcSet={RogerPhoto_mobile} type="image/png" />
              <img className="DJLuna" src={RogerPhoto_mobile} alt="RogerPhoto" />
            </picture>
          </div>
          <div className="DJLuna-music">
            <div className="WeMakeText">WE MAKE</div>
            <div className="MusicText">MUSIC</div>
            <div className="MoveText">MOVE</div>
            <div className="RedDivider">
              <Link to="/contact" className="InviteMC"> INVITE MC </Link>
            </div>
          </div>
        </div>
        <div className="RedDivider_mobile">
          <Link to="/contact" className="InviteMC"> INVITE MC </Link>
        </div>
        <div className="WhatWeDoContainer-wrapper">
          <div className="WhatWeDo-title">
            <h1 className="WhatWeDoHead">
              What We Do
            </h1>
          </div>
          <div className="divider"></div>
          <div className="WhatWeDoPhoto">
            <picture >
              <source media="(min-width:1024px)" srcSet={Djboard4Photo_mobile} type="image/png" />
              <source media="(min-width:650px)" srcSet={Djboard4Photo_mobile} type="image/png" />
              <source media="(min-width:450px)" srcSet={Djboard4Photo_mobile} type="image/png" />
              <img className="DjBoard4" src={Djboard4Photo_mobile} />
            </picture>
          </div>
          <div className="WhatWeDoText-wrapper">
          <p className="WhatWeDoText">
            Music Moves Entertainment was founded by Roger Luna, better known as
            DJ Luna, with the goal of bringing a positive atmosphere that only a
            good DJ can infuse into a crowd. <br />
            <br /> Luna had a deep connection with music in his early years
            which followed him into his young adult life. This later blossomed
            into a career as a successful entertainer and music creator.
            Starting as a drummer for a small band, his eagerness led him to
            pick up on a multitude of different instruments. He learned how to
            play bass guitar and percussion, his sound being heavily inspired by
            his Latino roots as well as popular culture.
          </p>
          </div>
          <div className="MoreAboutUsArea" />
          <div className="MoreAboutUs-wrapper">
              <Link to="/about" className="MoreAboutUs">MORE ABOUT US </Link>
          </div>
        </div>
        <div className="ServicesContainer-wrapper">
          <div className="ServicesContainer">
            <h1 className="ServicesHead">
              Our Services
            </h1>
          </div>
          <div className="divider"></div>
        </div>
        <div className="TheSplide big">
          <ServiceSplide />
        </div>
        <div className="TheSplide small">
          <div className="SplideWrapper" >
            <Splide
              options={ {
                perPage: 2,
                rewind : true,
                gap    : '1rem',
              } }
             aria-labelledby="basic-example-heading"
             onMoved={ ( splide, newIndex ) => {
               // eslint-disable-next-line
             console.log( 'moved', newIndex );

             // eslint-disable-next-line
             console.log( 'length', splide.length );
           } }
         >
         { generateSlides().map( slide => (
           <SplideSlide key={ slide.src }>
             <div className={slide.look}>
                <img src={ slide.src } alt={ slide.alt }/>
                <div className='Overlay'>
                    <div className='ServiceText'>
                        <div className='Replace'>No</div>
                    </div>
                </div>
            </div>
          </SplideSlide>
        ) ) }
      </Splide>
    </div>
        </div>
        <div className="DjPackages">
          <div className="Basic">
            <h3 className="PackageHead">Basic Package</h3>
            <h2 className="PackagePrice">$500</h2>
            <ul className="PackageList">
               <li>4 hours of DJ/Host service</li>
               <div className="PackageRedNotes">(extra time can be requested additional cost)</div>
               <li>Sound system</li>
               <li>Basic lighting setup (e.g. 2 LED lights)</li>
               <li>DJ equipment (e.g. laptop, mixer, controller)</li>
               <li>Basic music library with the most popular genres</li>
               <li>One consultation meeting with the client to discuss music preferences</li>
               <li>Set up and tear down of equipment</li>
            </ul>
            <div className="PackageRedNotes">* Photo Booth with operator, Dancing in the Clouds, CO2 Cannon (options for confetti, shirts or smoke) available for event rental at extra cost.</div>
          </div>
          <div className="Standard">
            <h3 className="PackageHead">Standard Package</h3>
            <h2 className="PackagePrice">$750</h2>
            <ul className="PackageList">
              <li>4 hours of DJ/Host service</li>
              <div className="PackageRedNotes">(extra time can be requested additional cost)</div>
              <li>Upgraded sound system</li>
              <li>Upgraded lighting setup</li>
              <li>DJ equipment (e.g. laptop, mixer, controller)</li>
              <li>Extensive music library with a wide range of genres</li>
              <li>One consultation meeting with the client to discuss music preferences and event details</li>
              <li>Set up and tear down of equipment</li>
            </ul>
            <div className="PackageRedNotes">* Photo Booth with operator, Dancing in the Clouds, CO2 Cannon (options for confetti, shirts or smoke) available for event rental at extra cost.</div>
          </div>
          <div className="Premium">
            <h3 className="PackageHead">Premium Package</h3>
            <h2 className="PackagePrice">$1750</h2>
            <ul className="PackageList">
              <li>4 hours of DJ service with additional MC Host</li>
              <div className="PackageRedNotes">(extra time can be requested additional cost)</div>
              <li>High-end sound system</li>
              <li>Customized lighting setup (e.g. LED panels, moving heads, laser lights)</li>
              <li>DJ equipment (e.g. laptop, mixer, controller)</li>
              <li>Extensive music library with a wide range of genres, including rare and hard-to-find tracks</li>
              <li>Two consultation meetings with the client to discuss music preferences, event details, and timeline</li>
              <li>Wireless microphone for announcements and speeches</li>
              <li>Set up and tear down of equipment</li>
              <li>Backup equipment on site in case of technical difficulties</li>
            </ul>
            <div className="PackageRedNotes">* Photo Booth with operator, Dancing in the Clouds, CO2 Cannon (options for confetti, shirts or smoke) available for event rental at extra cost.</div>
          </div>
        </div>
        <div className="HostPhotoContainer-wrapper">
          <div className="HostPhotoHead-wrapper">
            <h1 className="HostPhotoHead">
              We Host Your
            </h1>
          </div>
          <div className="divider"></div>
          <div className="HostPhotoContainer">
            <img className="HostPhoto" id="HP1" src={JohnBorbaPhoto} />
            <img className="HostPhoto" id="HP2" src={GradPhoto} />
            <img className="HostPhoto" id="HP3" src={PromPhoto} />
            <img className="HostPhoto" id="HP4" src={OfficePartyPhoto} />
            <img className="HostPhoto" id="HP5" src={BirthdayPhoto} />
            <img className="HostPhoto" id="HP6" src={MusicPhoto} />
            <img className="HostPhoto" id="HP7" src={FundraiserPhoto} />
            <img className="HostPhoto" id="HP8" src={PartyPhoto} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
