import ImageRandom from "../../Components/imgRandom"
import AboutUs from "../../Components/AboutUs"
import Contact from "../../Components/Contact"
import Footer from "../../Components/Footer"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contactSection') {
      scroller.scrollTo('contactSection', {
        smooth: true,
        duration: 500,
      });
    } else if (location.hash === '#aboutSection') {
      scroller.scrollTo('aboutSection', {
        smooth: true,
        duration: 500,
      });
    }
  }, [location]);


  return (
    <>

      <div className="">

        <ImageRandom />
        <AboutUs />
        <Contact />
        <Footer />

      </div>

    </>
  )
}

export default Home