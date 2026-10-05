const events = [
  {
    year: "2024",
    title: "Kick-Off with Chronic Cellars",
    place: "Dignowity Meats",
    detail: "Paso Robles wines, barbecue, live music, and the first proper WWC night out.",
  },
  {
    year: "2024",
    title: "Summer Sips",
    place: "Vista Brewing · Soto Vino",
    detail: "Texas wine, French bubbles, summer food, and a room full of people willing to try something different.",
  },
  {
    year: "2024",
    title: "Vivo Vino",
    place: "Leche de Tigre",
    detail: "Spanish and South American wines alongside Peruvian food in one of San Antonio's best dining rooms.",
  },
];

function BottleMark() {
  return (
    <svg
      className="bottle-mark"
      viewBox="0 0 120 160"
      role="img"
      aria-label="Wandering Wine Co. bottle mark"
    >
      <circle cx="60" cy="80" r="54" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M49 26h22v19l7 8v69c0 7-5 12-12 12H54c-7 0-12-5-12-12V53l7-8V26Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M45 73 61 58l17 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m45 98 13-12 19 18-14 13 11 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
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
        <a href="#top" className="brand-lockup" aria-label="Wandering Wine Co. home">
          <BottleMark />
          <span>Wandering Wine Co.</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">San Antonio, Texas</p>
          <h1>
            Wine.
            <br />
            Food.
            <br />
            People.
          </h1>
          <p className="hero-note">Usually in that order. Sometimes not.</p>
        </div>

        <div className="hero-side">
          <BottleMark />
          <p className="hero-side-copy">
            Wandering Wine Co. creates thoughtful wine experiences around local tables,
            interesting bottles, and people who are curious enough to try them.
          </p>
          <span className="hashtag">#uncorksomethingnew</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-index">01</div>
        <div className="section-body split">
          <div>
            <p className="eyebrow">What it is</p>
            <h2>Good wine without making it weird.</h2>
          </div>
          <div className="prose">
            <p>
              Wandering Wine Co. started in San Antonio as a way to connect local
              restaurants, wine professionals, and guests around something simple:
              trying bottles worth talking about.
            </p>
            <p>
              The point was never to make wine feel exclusive. It was to make discovery
              feel easy, thoughtful, and tied to a place worth being.
            </p>
          </div>
        </div>
      </section>

      <section className="events section" id="events">
        <div className="section-index">02</div>
        <div className="section-body">
          <div className="section-heading">
            <p className="eyebrow">A few things we did</p>
            <h2>Past events.</h2>
          </div>

          <div className="event-list">
            {events.map((event) => (
              <article className="event-row" key={event.title}>
                <span className="event-year">{event.year}</span>
                <div className="event-main">
                  <h3>{event.title}</h3>
                  <p className="event-place">{event.place}</p>
                </div>
                <p className="event-detail">{event.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy section">
        <div className="section-index">03</div>
        <div className="section-body split">
          <div>
            <p className="eyebrow">The general idea</p>
            <h2>Know enough to care. Not enough to be annoying about it.</h2>
          </div>
          <div className="prose compact">
            <p>
              Wine has regions, grapes, producers, chemistry, weather, history, service,
              pricing, and a frankly unreasonable amount of terminology.
            </p>
            <p>
              That stuff matters. It just does not have to be the first thing between
              you and a glass you like.
            </p>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="section-index">04</div>
        <div className="section-body contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Still here.</h2>
          </div>

          <div className="contact-card">
            <p>
              If you found your way here from an old event, a bottle, Yelp, or somewhere
              else on the internet — hi.
            </p>
            <a href="mailto:wanderingwinecompany@gmail.com">
              wanderingwinecompany@gmail.com
            </a>
            <p className="fine-print">
              San Antonio, Texas · 21+ · Please enjoy responsibly.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <span>Wandering Wine Co.</span>
        <span>San Antonio, Texas</span>
        <span>#uncorksomethingnew</span>
      </footer>
    </main>
  );
}
