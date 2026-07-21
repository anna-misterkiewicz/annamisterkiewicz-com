import { notFound } from "next/navigation";

const projects = {
  mongolia: {
    index: "01",
    eyebrow: "GIS · Landsat · Spatial analysis · Research",
    title: "Landscape analysis in Mongolia",
    summary:
      "Geospatial research supporting the investigation of Zuun Baruun Kherem, an archaeological landscape in Mongolia.",
    facts: [
      ["Role", "GIS and research contributor"],
      ["Data", "Landsat imagery, spatial records and photogrammetric survey data"],
      ["Methods", "Spatial distribution, layout analysis and image interpretation"],
      ["Outcome", "Peer-reviewed publication"],
    ],
    sections: [
      {
        number: "01",
        title: "The question",
        body: "The research investigated the form, setting and interpretation of Zuun Baruun Kherem. Spatial evidence was used alongside archaeological material and features visible in photogrammetric survey data to understand the city and its wider landscape.",
      },
      {
        number: "02",
        title: "My contribution",
        body: "I used GIS, spatial database management and Landsat analysis to support landscape interpretation. I analysed the layout of the city through the spatial distribution of archaeological material and features recorded by photogrammetric survey, bringing multiple forms of evidence into a coherent spatial picture.",
      },
      {
        number: "03",
        title: "What it demonstrates",
        body: "The project demonstrates practical experience with geospatial data, satellite imagery and research communication. It is the foundation I am now developing through programming, remote sensing and geospatial AI.",
      },
    ],
  },
  "geospatial-projects": {
    index: "02",
    eyebrow: "Next · In development",
    title: "New geospatial projects",
    summary:
      "A growing collection of MSc and independent work in remote sensing, Earth observation, spatial analysis and geospatial AI.",
    facts: [
      ["Status", "In development"],
      ["Focus", "Remote sensing and geospatial AI"],
      ["Format", "Evidence-led case studies"],
      ["Updates", "Added as projects are completed"],
    ],
    sections: [
      {
        number: "01",
        title: "What will appear here",
        body: "Each completed project will explain the spatial question, data, methods, tools, results and limitations. Maps and visual evidence will be central rather than decorative.",
      },
      {
        number: "02",
        title: "The standard",
        body: "Projects will only be published when they demonstrate a real capability: building something, analysing a spatial question or producing and communicating research.",
      },
      {
        number: "03",
        title: "Current direction",
        body: "The next work will develop practical skills in Python, Earth observation, machine learning, computer vision and reproducible geospatial workflows.",
      },
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  if (!project) notFound();

  return (
    <main className="project-page">
      <header className="project-header">
        <a className="wordmark" href="/" aria-label="Anna Misterkiewicz, home">
          ANNA MISTERKIEWICZ<span className="wordmark-dot">.</span>
        </a>
        <a className="back-link" href="/#work">&#8592; All work</a>
      </header>

      <section className="project-hero">
        <p className="project-kicker">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="project-summary">{project.summary}</p>
        <span className="project-hero-number" aria-hidden="true">{project.index}</span>
        <div className="project-topography" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
      </section>

      <section className="project-facts" aria-label="Project overview">
        {project.facts.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <p>{value}</p>
          </div>
        ))}
      </section>

      <section className="project-story">
        {project.sections.map((section) => (
          <article key={section.number}>
            <span>{section.number}</span>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      {slug === "mongolia" && (
        <section className="project-result">
          <p>Published research</p>
          <h2>Zuun Baruun Kherem</h2>
          <a href="https://doi.org/10.1007/s41826-025-00113-2" target="_blank" rel="noreferrer">
            Read the peer-reviewed paper <span aria-hidden="true">&#8599;</span>
          </a>
        </section>
      )}

      <footer className="project-footer">
        <a href="/">Anna Misterkiewicz</a>
        <a href="/#work">Return to selected work &#8593;</a>
      </footer>
    </main>
  );
}
