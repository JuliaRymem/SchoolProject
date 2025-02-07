import '../styles/projects.css';
import BackToHomeButton from "../components/BackToHomeButton";

function ProjectsPage() {
  return (
    <section>
      <h1>Projekt</h1>
      <p>Här är några fler av mina project</p>

      <div className="project-images">
  <div className="image-container">
    <img src="images/solaris.png" alt="Bild på projekt" />
    <h4>Projekt - Solaris</h4><br />
    <p>En interaktiv webbplats om vårt solsystem, <br />byggd med HTML, 
      CSS och vanilla JavaScript. <br /><br />Webbplatsen låter användaren söka 
      efter planeter med hjälp av en textsökfunktion.</p> <br /><br />

       {/* Extern länk till GitHub */}
       <a className="link-button-github" href="https://github.com/JuliaRymem/SchoolProject/tree/012ccc419cb69a5ca0206173dfbb6f5bc9d7d38c/JavaScript/Solaris/examination" 
         target="_blank" 
         rel="noopener noreferrer">
        Länk till mitt projekt på GitHub!
      </a>
  </div>
  <div className="image-container">
    <img src="images/torre.png" alt="Bild på projekt" />
    <h4>Väder - App</h4><br />
    <p>En väder-app där jag hämtat data via API. <br /> 
    🔍 Sök efter din favoritstad och få <br /> reda på vädret direkt i appen! <br />
    ⚡ Enkel design, snabb och responsiv.</p> <br /><br />

       {/* Extern länk till GitHub */}
       <a className="link-button-github" href="#" 
         target="_blank" 
         rel="noopener noreferrer">
        .              .             .
      </a>
  </div>
  <div className="image-container">
    <img src="images/theme2.png" alt="Bild på projekt" />
    <h4>Temaväxlare</h4><br />
    <p>En övning i JavaScript där appen byter mellan färgerna blå och rosa</p> <br />
     <br /><br />
<br /> 
       {/* Extern länk till GitHub */}
       <a className="link-button-github" href="https://github.com/JuliaRymem/SchoolProject/tree/02a9fcc174947c1d01786ff9c2cfa06b4f4ca1fb/JavaScript/colortheme" 
         target="_blank" 
         rel="noopener noreferrer">
        Länk till mitt projekt på GitHub!
      </a>
  </div>

</div>


      <BackToHomeButton />
    </section>
  );
}

export default ProjectsPage;