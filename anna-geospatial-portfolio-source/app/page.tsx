import ParallaxMap from "./parallax-map";

const Arrow = () => <span aria-hidden="true">&#8599;</span>;

const focusAreas = [
  "Geospatial AI",
  "Remote sensing",
  "Earth observation",
  "Spatial analysis",
  "Python workflows",
];

const skills = [
  {
    number: "01",
    title: "Geospatial",
    items: "ArcGIS · QGIS · Spatial analysis · Landscape analysis · Spatial data management",
  },
  {
    number: "02",
    title: "Remote sensing",
    items: "Landsat imagery · Satellite image interpretation",
  },
  {
    number: "03",
    title: "Development",
    items: "Python · Git · GitHub",
    note: "Currently developing",
  },
  {
    number: "04",
    title: "Research",
    items: "Data interpretation · Academic research · Field data collection · Scientific communication",
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
        <div className="eyebrow"><span /> Incoming MSc Geospatial Artificial Intelligence student</div>
        <h1>
          Spatial thinking,
          <br />built into <em>evidence.</em>
        </h1>
        <div className="hero-lower">
          <p>
            I use GIS, remote sensing and spatial data to investigate landscapes
            and communicate evidence clearly. This portfolio documents my work
            and technical development as I move into geospatial AI.
          </p>
          <a className="circle-link" href="#work" aria-label="View selected work">
            <span>View work</span>
            <span aria-hidden="true">&#8595;</span>
          </a>
        </div>
        <ParallaxMap />
      </section>

      <section className="section" id="work">
        <div className="section-heading">
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
          <div className="project-copy">
            <div>
              <p className="project-meta">GIS · LANDSAT · SPATIAL ANALYSIS · RESEARCH</p>
              <h3>Landscape analysis in Mongolia</h3>
              <p>
                I contributed to research investigating Zuun Baruun Kherem, an
                archaeological landscape in Mongolia. My work supported GIS,
                spatial database management, Landsat analysis, landscape
                interpretation and the interpretation of geophysical evidence.
              </p>
            </div>
            <div className="project-outcome">
              <p><strong>Outcome</strong></p>
              <p>The work contributed to a peer-reviewed research publication.</p>
              <a className="project-page-link" href="/projects/mongolia">
                Explore project <span aria-hidden="true">&#8594;</span>
              </a>
              <a className="publication-link" href="https://doi.org/10.1007/s41826-025-00113-2" target="_blank" rel="noreferrer">
                View publication <Arrow />
              </a>
            </div>
          </div>
        </article>

        <a className="next-project" href="/projects/geospatial-projects" aria-label="Open new geospatial projects page">
          <span className="next-number">02</span>
          <div>
            <p className="project-meta">NEXT / IN DEVELOPMENT</p>
            <h3>New geospatial projects</h3>
          </div>
          <p>
            Future MSc and independent projects will document the question,
            data, methods, results, limitations and code.
          </p>
          <span className="status"><i /> Building</span>
        </a>
      </section>

      <section className="focus-band" aria-label="Current focus areas">
        <p>Current focus</p>
        <div>
          {focusAreas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <span className="section-index">02 / ABOUT</span>
          <h2>From spatial foundations<br />to intelligent systems.</h2>
        </div>
        <div className="about-grid">
          <p className="lead">
            I am preparing to begin an MSc in Geospatial Artificial Intelligence
            at Newcastle University.
          </p>
          <div className="about-copy">
            <p>
              My interests include remote sensing, Earth observation, GIS,
              machine learning and the use of spatial data to investigate
              environmental and landscape questions.
            </p>
            <p>
              My foundation in geospatial technology developed through
              archaeology. During previous study and research, I used GIS,
              satellite imagery and spatial databases to examine landscapes and
              support evidence-based interpretation.
            </p>
            <p>
              I am now building on that experience through programming, data
              analysis and geospatial AI.
            </p>
          </div>
        </div>
        <div className="education">
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
        <div className="section-heading">
          <span className="section-index">03 / SKILLS</span>
          <h2>Tools, methods,<br />and practice.</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.title}>
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
        <h2>Let&apos;s explore what<br />spatial data can show.</h2>
        <p className="footer-intro">
          I am interested in opportunities, collaborations and conversations
          related to geospatial technology, remote sensing and spatial data.
        </p>
        <div className="contact-row">
          <span>Contact links will be added here.</span>
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
