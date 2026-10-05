const events = [
  {
    key: "chronic",
    date: "FEB 16 · 2024",
    title: "Kick-Off with Chronic Cellars",
    place: "Dignowity Meats",
    meta: "Paso Robles · Wine tasting · Food · Live music",
    note: "The first WWC event: Chronic Cellars, Dignowity Meats, and a room full of people willing to see where this went.",
  },
  {
    key: "summer",
    date: "JUN 23 · 2024",
    title: "Summer Sips",
    place: "Vista Brewing San Antonio · Soto Vino",
    meta: "Texas wine · French sparkle · Paired dinner",
    note: "Soto Vino wines, a sparkling reception, and a paired family-style dinner. It sold out.",
  },
  {
    key: "vivo",
    date: "OCT 13 · 2024",
    title: "Vivo Vino",
    place: "Leche de Tigre",
    meta: "Spain + South America · Peruvian food",
    note: "Spanish and South American wines with Peruvian food. Pretty straightforward. Pretty good idea.",
  },
];

function WWCLogo({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? "wwc-logo wwc-logo-compact" : "wwc-logo"}
      viewBox="0 0 440 190"
      role="img"
      aria-label="Wandering Wine Co."
    >
      <rect x="8" y="8" width="424" height="174" rx="28" fill="none" stroke="currentColor" strokeWidth="5" />
      <path
        d="M82 77V39h52v16h47l30-27 57 52 26-24h71v22h25v31h-96v-16h-92l-27 20H95c-9 0-16-7-16-16 0-8 1-14 3-20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m82 77 35-29 36 29 56-51 60 54 26-24"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M95 102h62M122 118h68M181 102h54M210 118h69" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      {!compact && (
        <text x="220" y="160" textAnchor="middle" className="logo-text">
          WANDERING WINE CO.
        </text>
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Wandering Wine Co. home">
          <WWCLogo compact />
          <span>Wandering Wine Co.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-main">
          <p className="eyebrow">San Antonio, Texas</p>
          <h1>Wine.<br />Food.<br />People.</h1>
          <p className="aside">Usually in that order. Sometimes not.</p>
        </div>

        <div className="hero-brand">
          <WWCLogo />
          <p>
            Wandering Wine Co. started as a way to put good bottles, good food,
            and curious people in the same room.
          </p>
          <span>#uncorksomethingnew</span>
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">The idea</p>
        <div className="about-grid">
          <h2>Good wine without making it weird.</h2>
          <div className="copy">
            <p>
              WWC brought San Antonio restaurants, wine professionals, and guests
              together around bottles worth trying.
            </p>
            <p>
              There is plenty to know about wine. Regions. Grapes. Weather.
              Chemistry. History. An unreasonable amount of vocabulary.
            </p>
            <p>
              It matters. It just does not have to get between you and a glass you like.
            </p>
          </div>
        </div>
      </section>

      <section className="events" id="events">
        <div className="events-heading">
          <p className="eyebrow">A few things we did</p>
          <h2>Three nights.<br />Different bottles.</h2>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <article className={"event-card " + event.key} key={event.title}>
              <div className="event-top">
                <span>{event.date}</span>
                <span>WWC</span>
              </div>
              <div className="event-copy">
                <p className="event-meta">{event.meta}</p>
                <h3>{event.title}</h3>
                <p className="event-place">{event.place}</p>
                <p className="event-note">{event.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Still here.</h2>
        </div>
        <div className="contact-copy">
          <p>
            Found your way here from an old event, Yelp, a wine review, or a very
            determined Google search? Hi.
          </p>
          <a className="email" href="mailto:wanderingwinecompany@gmail.com">
            wanderingwinecompany@gmail.com
          </a>
          <div className="socials">
            <a href="https://www.instagram.com/wanderingwinecompany/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/WanderingWineCompany" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/company/wanderingwinecompany" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.vivino.com/users/wanderingwinecompany" target="_blank" rel="noreferrer">Vivino</a>
          </div>
        </div>
      </section>

      <footer>
        <span>Wandering Wine Co. · San Antonio, Texas</span>
        <span>21+ · Please enjoy responsibly.</span>
      </footer>
    </main>
  );
}
