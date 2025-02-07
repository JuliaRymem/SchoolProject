// Importerar Swiper och SwiperSlide
import { Swiper, SwiperSlide } from "swiper/react";
import '../styles/projects.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReadMoreButton from "./ReadMoreButton";


function Projects() {
  const projects = [
    { title: "Calculator", tech: "JavaScript ", img: "images/calcu.png", link: "#" },
    { title: "Weather-App", tech: "JavaScript", img: "images/wa.png", link: "#" },
    { title: "Timer", tech: "JavaScript", img: "images/ta.png", link: "#" },
    { title: "Cosmo", tech: "HTML/CSS", img: "images/cosmo.png", link: "#" },
    { title: "More to come", tech: ". . .", img: "images/cmn.png", link: "#" }


  ];

  return (
    <section id="projects-section">
      <h2>Projects</h2>
      
      <Swiper slidesPerView={"auto"} spaceBetween={10} pagination>
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <a href={project.link} target="_blank" className="project-box" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} />
              <h4>{project.title}</h4>
              <h5><em>{project.tech}</em></h5>
            </a>
          </SwiperSlide>
        ))}
  ⟵  ⟶
      </Swiper>
      <ReadMoreButton to="/projects" text="See more projects ->" />

    </section>
  );
}

export default Projects;
