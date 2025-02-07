import SocialLinks from "./SocialLinks";
import ReadMoreButton from "./ReadMoreButton";
import '../styles/hero.css';

function Hero() {
  return (
    <section id="about-section">
      <h2>Hi, I&apos;m Julia!</h2>
      <ReadMoreButton to="/about" text="Want to know more about me? ->" />

      
      <div className="headshot">
        <picture>
          <source srcSet="images/webp/headshot.webp" type="image/webp" />
          <img src="images/headshot.png" alt="ProfilePic" />
        </picture>
      </div>

      <div className="bio">
        <p>
          I am a Front end Developer student with a passion for creating
          innovative and user-friendly websites.
        </p>
        <p>Outside of career and academics, I enjoy running, reading books, and traveling!</p>
      </div>

      <SocialLinks />
    </section>
  );
}

export default Hero;
