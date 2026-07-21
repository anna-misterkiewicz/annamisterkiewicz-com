import { notFound } from "next/navigation";

const projects = {
  mongolia: {
    index: "01",
    eyebrow: "GIS · Satellite imagery · Spatial analysis · Research",
    title: "Landscape analysis in Mongolia",
    summary:
      "Geospatial research using artefact distributions, satellite imagery and photogrammetric survey data to interpret Zuun Baruun Kherem and its changing landscape.",
    facts: [
      ["Role", "Spatial analysis, interpretation and research documentation"],
      ["Data", "Artefact distributions, satellite imagery and photogrammetric surface models"],
      ["Methods", "QGIS, spatial proxy analysis and hillshade visualisation"],
      ["Outcome", "Peer-reviewed publication"],
    ],
    sections: [
      {
        number: "01",
        title: "The question",
        body: "The research investigated how Zuun Baruun Kherem was organised, how different city spaces may have functioned and how its surrounding environment changed. Artefact distributions, satellite imagery and features captured by photogrammetric survey provided complementary forms of spatial evidence.",
      },
      {
        number: "02",
        title: "My contribution",
        body: "Using QGIS, I interpreted the function of spaces within the city by treating the spatial distribution of artefacts as a proxy for activity. I examined satellite imagery to identify environmental change, including the movement of former riverbeds, and created hillshade views from photogrammetric surface models to make the landscape form legible.",
      },
      {
        number: "03",
        title: "What it demonstrates",
        body: "The project demonstrates confident GIS practice, spatial reasoning, satellite-image interpretation and photogrammetric documentation. I also produced pottery drawings used in the publication, showing how careful visual documentation supported the wider research argument.",
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
