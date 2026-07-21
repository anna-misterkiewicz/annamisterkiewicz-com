import ParallaxMap from "./parallax-map";
import HeroParallax from "./hero-parallax";

const Arrow = () => <span aria-hidden="true">&#8599;</span>;

const focusAreas = [
  "Environmental change",
  "Urban analysis",
  "Landscape analysis",
  "Remote sensing",
  "Geospatial AI",
];

const skills = [
  {
    number: "01",
    title: "Geospatial",
    items: "QGIS · ArcGIS · Spatial analysis · Landscape analysis · Spatial data management",
    note: "Confident",
  },
  {
    number: "02",
    title: "Remote sensing",
    items: "Satellite image interpretation · Environmental change analysis · SNAP",
    note: "SNAP familiar · developing through projects",
  },
  {
    number: "03",
    title: "Survey & photogrammetry",
    items: "Photogrammetric survey · Survey planning · Surface models · Hillshade visualisation",
    note: "Confident",
  },
  {
    number: "04",
    title: "Programming",
    items: "Programming fundamentals",
    note: "Beginner",
  },
  {
    number: "05",
    title: "Research",
    items: "Spatial interpretation · Artefact documentation · Academic research · Scientific communication",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Anna Misterkiewicz, home">
          ANNA MISTERKIEWICZ<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <HeroParallax>
          <div className="eyebrow"><span /> Geospatial analysis · Remote sensing · Spatial research</div>
          <h1>
            Spatial thinking,
            <br />built into <em>evidence.</em>
          </h1>
          <div className="hero-lower">
            <p>
              I use GIS, remote sensing and spatial data to reveal patterns in
              landscapes and turn complex evidence into clear, defensible insight.
              I am now extending that foundation into geospatial AI.
            </p>
            <a className="circle-link" href="#work" aria-label="View selected work">
              <span>View work</span>
              <span aria-hidden="true">&#8595;</span>
            </a>
          </div>
        </HeroParallax>
        <ParallaxMap />
      </section>

      <section className="section" id="work">
        <div className="section-heading" data-depth="0.035">
          <span className="section-index">01 / SELECTED WORK</span>
          <h2>Evidence over claims.</h2>
        </div>

        <article className="project-feature">
          <div className="project-visual" aria-label="Abstract topographic representation of Mongolia landscape analysis">
            <span className="project-label">MONGOLIA / LANDSCAPE RESEARCH</span>
            <div className="survey-line line-a" />
            <div className="survey-line line-b" />
            <div className="survey-line line-c" />
            <div className="survey-line line-d" />
            <span className="visual-number">01</span>
          </div>
          <div className="project-copy" data-depth="0.055">
            <div>
              <p className="project-meta">GIS · SATELLITE IMAGERY · SPATIAL ANALYSIS · RESEARCH</p>
              <h3>Landscape analysis in Mongolia</h3>
              <p>
                I contributed to research investigating Zuun Baruun Kherem, an
                archaeological landscape in Mongolia. Using QGIS, I interpreted
                city spaces through artefact distributions, examined satellite
                imagery for environmental change—including former riverbed
                movement—and produced hillshade views from photogrammetric
                surface models.
              </p>
            </div>
            <div className="project-outcome">
              <p><strong>Outcome</strong></p>
              <p>
                The spatial interpretation and my pottery documentation were
                incorporated into a peer-reviewed research publication.
              </p>
              <a className="project-page-link" href="/projects/mongolia">
                Explore project <span aria-hidden="true">&#8594;</span>
              </a>
              <a className="publication-link" href="https://doi.org/10.1007/s41826-025-00113-2" target="_blank" rel="noreferrer">
                View publication <Arrow />
              </a>
            </div>
          </div>
        </article>

        <div className="next-project portfolio-note" data-depth="0.025">
          <span className="next-number">02</span>
          <div>
            <p className="project-meta">PORTFOLIO / GROWING</p>
            <h3>New work, added with evidence.</h3>
          </div>
          <p>
            Future work will be added when it demonstrates a clear question,
            method, result and reflection.
          </p>
          <span className="status"><i /> In progress</span>
        </div>
      </section>

      <section className="focus-band" aria-label="Current focus areas">
        <p data-depth="0.025">Current focus</p>
        <div data-depth="0.045">
          {focusAreas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading" data-depth="0.035">
          <span className="section-index">02 / ABOUT</span>
          <h2>Spatial foundations.<br />A clear technical direction.</h2>
        </div>
        <div className="about-grid" data-depth="0.04">
          <p className="lead">
            I bring a research foundation in GIS, remote sensing and spatial
            analysis to the next stage of my work in geospatial AI.
          </p>
          <div className="about-copy">
            <p>
              I focus on using remote sensing, Earth observation and GIS to
              identify meaningful spatial patterns and communicate how the
              evidence supports an interpretation. I am particularly interested
              in environmental change, urban space and landscape-scale analysis.
            </p>
            <p>
              My foundation in geospatial technology developed through
              archaeology. During previous study and research, I used GIS,
              satellite imagery and spatial databases to examine landscapes and
              support evidence-based interpretation.
            </p>
            <p>
              I am building on that experience through programming, data
              analysis and geospatial AI, with an emphasis on rigorous methods
              and work that can be clearly explained and reproduced. Programming
              is currently a beginner skill that I am developing deliberately.
            </p>
          </div>
        </div>
        <div className="education" data-depth="0.025">
          <div>
            <span>2026 / FORWARD</span>
            <h3>MSc Geospatial Artificial Intelligence</h3>
            <p>Newcastle University</p>
          </div>
          <div>
            <span>FOUNDATION</span>
            <h3>Archaeology</h3>
            <p>University of Aberdeen · Undergraduate and postgraduate study</p>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading" data-depth="0.035">
          <span className="section-index">03 / SKILLS</span>
          <h2>Tools, methods,<br />and practice.</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.title} data-depth="0.018">
              <span>{skill.number}</span>
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
              {skill.note ? <small>{skill.note}</small> : <small />}
            </div>
          ))}
        </div>
        <p className="skills-note">
          Every skill listed here is supported by practical use or is clearly
          marked as developing.
        </p>
      </section>

      <footer id="contact">
        <p className="section-index">04 / CONTACT</p>
        <h2 data-depth="0.045">Let&apos;s explore what<br />spatial data can show.</h2>
        <p className="footer-intro" data-depth="0.03">
          I am interested in opportunities, collaborations and conversations
          related to geospatial technology, remote sensing and spatial data.
        </p>
        <div className="contact-row" data-depth="0.02">
          <div className="contact-links">
            <a href="https://github.com/anna-misterkiewicz" target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <a href="https://doi.org/10.1007/s41826-025-00113-2" target="_blank" rel="noreferrer">
              Publication <Arrow />
            </a>
          </div>
          <a href="#top">Back to top <span aria-hidden="true">&#8593;</span></a>
        </div>
        <div className="footer-base">
          <strong>ANNA MISTERKIEWICZ<span>.</span></strong>
          <p>Geospatial AI portfolio · 2026</p>
        </div>
      </footer>
    </main>
  );
}
