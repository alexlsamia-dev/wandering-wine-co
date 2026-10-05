const experiences = [
  {
    eyebrow: "Past Experience",
    title: "Kick-off with Chronic Cellars",
    detail:
      "A come-and-go evening pairing Chronic Cellars wines with food from Dignowity Meats.",
  },
  {
    eyebrow: "Past Experience",
    title: "Vivo Vino",
    detail:
      "A collaborative wine experience with Leche de Tigre centered on discovery, food, and conversation.",
  },
  {
    eyebrow: "Past Experience",
    title: "Vista Brewing San Antonio",
    detail:
      "A local hospitality collaboration bringing guests together around thoughtfully selected pours.",
  },
];

const principles = [
  "Come curious. Leave with a new favorite.",
  "Great wine should feel welcoming, not intimidating.",
  "The best experiences connect the pour, the plate, the people, and the place.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Wandering Wine Co. home">
          <span className="brand-mark">W</span>
          <span>
            Wandering Wine Co.
            <small>San Antonio, Texas</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experiences">Experiences</a>
          <a href="#about">About</a>
          <a href="#partners">Partners</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">San Antonio · Wine · Food · Discovery</p>
          <h1>
            Uncork
            <br />
            something <em>new.</em>
          </h1>
          <p className="lede">
            Wandering Wine Co. brings together local hospitality, beverage
            producers, and curious guests for welcoming experiences built around
            thoughtful pours, good food, and better conversation.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#experiences">
              Explore the story
            </a>
            <a className="button button-secondary" href="#partners">
              Partner with WWC
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="glass-shape">
            <span>WWC</span>
          </div>
          <p>#uncorksomethingnew</p>
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="section-label">What we believe</p>
        <div className="manifesto-grid">
          <h2>Wine knowledge not required. Curiosity encouraged.</h2>
          <div>
            {principles.map((principle) => (
              <p key={principle}>{principle}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="experiences" id="experiences">
        <div className="section-heading">
          <div>
            <p className="section-label">From the archive</p>
            <h2>Where we&apos;ve wandered.</h2>
          </div>
          <p>
            WWC began by partnering with San Antonio venues and beverage
            professionals to create approachable tasting experiences. This
            archive will grow as we rebuild the full story.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <article className="experience-card" key={experience.title}>
              <span className="card-number">0{index + 1}</span>
              <div>
                <p className="eyebrow">{experience.eyebrow}</p>
                <h3>{experience.title}</h3>
                <p>{experience.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-section" id="partners">
        <div className="partner-copy">
          <p className="section-label">Restaurants · Wineries · Distributors · Distilleries</p>
          <h2>Good pours are better with the right people around the table.</h2>
        </div>
        <div className="partner-panel">
          <p>
            Wandering Wine Co. is rebuilding. The focus remains the same:
            thoughtful collaborations between hospitality spaces, beverage
            partners, and people who want to discover something worth sharing.
          </p>
          <a className="text-link" href="mailto:hello@wanderingwinecompany.com">
            Start a conversation <span>↗</span>
          </a>
        </div>
      </section>

      <section className="closing">
        <p className="section-label">Wandering Wine Co.</p>
        <h2>Curated pours. Local tables. Better stories.</h2>
        <p>San Antonio, Texas · 21+ · Please enjoy responsibly.</p>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Wandering Wine Co.</span>
        <span>#uncorksomethingnew</span>
      </footer>
    </main>
  );
}
