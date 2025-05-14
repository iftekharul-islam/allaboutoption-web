import AboutSection from "../components/AboutSection";
import Challenges from "../components/Challenges";
import ContactSection from "../components/ContactSection";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import JourneyTimeline from "../components/JourneyTimeline";
import Partners from "../components/Partners";
import PricingSection from "../components/PricingSection";
import Testimonial from "../components/Testimonial";
import Transform from "../components/Transform";
import WhoCanJoin from "../components/WhoCanJoin";

const Home = () => {
  return (
    <div>
        <section id="home" className="px-20 pt-5">
            <HeroSection />
        </section>  
        
        <section>
            <Partners />
        </section> 
        <section>
            <Challenges />
        </section>  
        <section>
            <Transform />
        </section>  
        
        <section id="about">
            <AboutSection />
        </section>  
        <section>
            <Experience />
        </section> 
        <section id="pricing">
            <PricingSection />
        </section>  
        <section id="contact">
            <ContactSection />
        </section> 
        <section>
            <JourneyTimeline />
        </section> 
        <section>
            <Testimonial />
        </section> 
        <section>
            <WhoCanJoin />
        </section> 
        <section>
            <Footer />
        </section>
    </div>
  );
}

export default Home;