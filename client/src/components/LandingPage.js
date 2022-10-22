import Navbar from "./navbar/Navbar";
import FirstSlide from "./first-slide/FirstSlide";
import ImageSlider from "./carousel/ImageSlider";
import AboutUs from "./AboutUs/AboutUs";
import OurTeam from "./OurTeam/OurTeam";
import Footer from "./Footer/Footer";
import "../App.css";
import { SliderData } from "./carousel/SliderData.js";
import Contacts from "./Contacts/Contact"

const styles = {
  zIndex: 10000,
  backgroundColor: "black",
};

export default function LandingPage() {
  return (
    <div>
      <div className='first'>
        <Navbar />
      </div>
      <div className='landing-image-container'>
        <FirstSlide />
      </div>
      <section>
        <AboutUs />
      </section>
      <section>
     <div>
        <Contacts />
     </div>
     </section>
        <OurTeam />
      </section>
      <ImageSlider slides={SliderData} />;
      <div>
        <Footer />
      </div>
    </div>
  );
}
