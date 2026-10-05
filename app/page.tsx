const events = [
  {
    key: "chronic",
    date: "FEB 16 · 2024",
    title: "Kick-Off with Chronic Cellars",
    place: "Dignowity Meats",
  },
  {
    key: "summer",
    date: "JUN 23 · 2024",
    title: "Summer Sips",
    place: "Vista Brewing · Soto Vino",
  },
  {
    key: "vivo",
    date: "OCT 13 · 2024",
    title: "Vivo Vino",
    place: "Leche de Tigre",
  },
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/wanderingwinecompany/"],
  ["Facebook", "https://www.facebook.com/WanderingWineCompany"],
  ["LinkedIn", "https://www.linkedin.com/company/wanderingwinecompany"],
  ["Vivino", "https://www.vivino.com/users/wanderingwinecompany"],
] as const;

function CircleLogo({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? "circle-logo circle-logo-compact" : "circle-logo"}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Wandering Wine Co."
    >
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="4" />
      <path
        d="M88 37h24v28l9 11v78c0 7-6 13-13 13H92c-7 0-13-6-13-13V76l9-11V37Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="m80 92 21-20 20 20M80 122l16-15 23 22-17 16 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Wandering Wine Co. home">
          <CircleLogo compact />
          <span>Wandering Wine Co.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#events">Large-scale events</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-statement">
          <h1>
            WWC brought San Antonio restaurants, wine professionals, and guests
            together around bottles worth trying.
          </h1>
        </div>

        <div className="hero-brand">
          <p className="location">San Antonio, Texas</p>
          <CircleLogo />
          <div className="hero-socials">
            {socialLinks.map(([label, href]) => (
              <a href={href} target="_blank" rel="noreferrer" key={label}>
                {label}
              </a>
            ))}
          </div>
          <span>#uncorksomethingnew</span>
        </div>
      </section>

      <section className="events" id="events">
        <div className="events-heading">
          <p className="eyebrow">Large-scale events</p>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <article className={"event-card " + event.key} key={event.title}>
              <div className="event-top">
                <span>{event.date}</span>
                <span>WWC</span>
              </div>

              <div className="event-copy">
                <h2>{event.title}</h2>
                <p>{event.place}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-grid">
          <p className="lead">Good bottles and curious people.</p>

          <div className="copy">
            <p>There is plenty to know about wine.</p>
            <p>And an unreasonable amount of vocabulary.</p>
            <p>It matters. It just does not have to get between you and a glass you like.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="contact-title">Contact</p>

        <div className="contact-copy">
          <a className="email" href="mailto:wanderingwinecompany@gmail.com">
            wanderingwinecompany@gmail.com
          </a>
        </div>
      </section>

      <footer>
        <span>Wandering Wine Co. · San Antonio, Texas</span>
        <span>21+ · Please enjoy responsibly.</span>
      </footer>
    </main>
  );
}
