
import { useEffect, useState } from "react";
import "./App.css";

const EVENTS = [
  {
    id: 1,
    icon: "💡",
    category: "HACKATHON",
    title: "AI Innovation Challenge",
    date: "18 OCT 2026",
    time: "09:00 AM",
    venue: "Innovation Lab",
    description:
      "Build creative AI-powered solutions and turn your ideas into reality.",
    color: "green",
    tag: "FEATURED",
  },
  {
    id: 2,
    icon: "💻",
    category: "TECHNOLOGY",
    title: "CodeCraft Contest",
    date: "24 OCT 2026",
    time: "10:00 AM",
    venue: "Computer Lab 2",
    description:
      "Solve coding challenges and showcase your programming skills.",
    color: "blue",
  },
  {
    id: 3,
    icon: "🚀",
    category: "PROJECT EXPO",
    title: "FutureTech Expo",
    date: "02 NOV 2026",
    time: "11:00 AM",
    venue: "Main Auditorium",
    description:
      "Present your projects and explore the next generation of technology.",
    color: "purple",
  },
  {
    id: 4,
    icon: "🎤",
    category: "WORKSHOP",
    title: "Tech Talk 2026",
    date: "10 NOV 2026",
    time: "02:00 PM",
    venue: "Seminar Hall",
    description:
      "Learn from technology experts and discover new career possibilities.",
    color: "orange",
  },
  {
    id: 5,
    icon: "🏆",
    category: "COMPETITION",
    title: "Campus Battle",
    date: "18 NOV 2026",
    time: "09:30 AM",
    venue: "College Ground",
    description:
      "Bring your talent, meet new people, and compete for campus glory.",
    color: "pink",
  },
  {
    id: 6,
    icon: "🎨",
    category: "CREATIVE",
    title: "Design Sprint",
    date: "25 NOV 2026",
    time: "01:00 PM",
    venue: "Design Studio",
    description:
      "Transform your ideas into creative designs through teamwork.",
    color: "cyan",
  },
];

const INITIAL_FORM = {
  name: "",
  email: "",
  department: "",
  year: "",
};

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);

  // Reveal sections and cards as they enter the viewport.
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Allow closing the registration modal with Escape.
  useEffect(() => {
    if (!selectedEvent) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedEvent(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEvent]);

  const openRegistration = (event) => {
    setForm({ ...INITIAL_FORM });
    setSelectedEvent(event);
  };

  const closeRegistration = () => {
    setSelectedEvent(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedEvent) return;

    alert(
      `Registration successful!\n\nEvent: ${selectedEvent.title}\nName: ${form.name}\nEmail: ${form.email}`
    );

    closeRegistration();
    setForm({ ...INITIAL_FORM });
  };

  return (
    <div className="app">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="brand" aria-label="Eventora home">
          <div className="brand-mark">E<span>.</span></div>
          <div className="brand-copy">
            <h2>EVENTORA</h2>
            <span>COLLEGE EVENT HUB</span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
          <a href="#events" className="nav-cta">
            Explore Events <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-left">
            <div className="live-label reveal">
              <span className="live-dot" />
              YOUR CAMPUS. YOUR MOMENTS.
            </div>

            <h1 className="hero-title reveal delay-1">
              Make your
              <br />
              campus life
              <br />
              <span className="neon-text">legendary.</span>
            </h1>

            <p className="hero-description reveal delay-2">
              Discover events. Connect with creators. Build memories.
              Your next great campus experience starts here.
            </p>

            <div className="hero-actions reveal delay-3">
              <a className="button-primary" href="#events">
                Discover Events <span>↗</span>
              </a>
              <a className="button-secondary" href="#about">
                Explore Eventora
              </a>
            </div>

            <div className="hero-stats reveal delay-3">
              <div>
                <strong>25<span>+</span></strong>
                <small>Campus Events</small>
              </div>
              <div>
                <strong>1K<span>+</span></strong>
                <small>Student Community</small>
              </div>
              <div>
                <strong>15<span>+</span></strong>
                <small>Active Clubs</small>
              </div>
            </div>
          </div>

          {/* Animated Hero Visual */}
          <div className="hero-right" aria-label="Eventora event illustration">
            <div className="visual-grid" />
            <div className="visual-ring ring-one" />
            <div className="visual-ring ring-two" />
            <div className="neon-orb" />

            <div className="hero-panel">
              <div className="panel-top">
                <span className="panel-brand">
                  <span className="mini-dot" /> EVENTORA
                </span>
                <span className="panel-index">EVT_026</span>
              </div>

              <div className="hero-symbol">✳</div>

              <span className="panel-kicker">YOUR NEXT CHAPTER</span>
              <h2>
                Ideas
                <br />
                become
                <br />
                <span>impact.</span>
              </h2>

              <div className="panel-bottom">
                <span>CONNECT / CREATE / COMPETE</span>
                <span>↗</span>
              </div>
            </div>

            <div className="floating-card floating-feature">
              <div className="floating-icon">⚡</div>
              <div>
                <small>UP NEXT</small>
                <strong>AI Innovation</strong>
                <span>18 OCT · 09:00 AM</span>
              </div>
              <span className="feature-dot" />
            </div>

            <div className="floating-card floating-community">
              <div className="avatar-stack">
                <span>S</span>
                <span>C</span>
                <span>T</span>
              </div>
              <div>
                <strong>Campus Community</strong>
                <small>Find your people.</small>
              </div>
            </div>

            <span className="spark spark-one">✦</span>
            <span className="spark spark-two">+</span>
            <span className="spark spark-three">✳</span>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee" aria-label="Discover, participate, create">
          <div className="marquee-track">
            {Array.from({ length: 2 }, (_, group) => (
              <div className="marquee-group" key={group} aria-hidden={group === 1}>
                <span>DISCOVER</span><i>✳</i>
                <span>PARTICIPATE</span><i>✳</i>
                <span>COLLABORATE</span><i>✳</i>
                <span>CREATE</span><i>✳</i>
                <span>MAKE IT HAPPEN</span><i>✳</i>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <section className="events-section section-space" id="events">
          <div className="section-heading scroll-reveal">
            <div>
              <span className="eyebrow"><span /> THE CAMPUS CALENDAR</span>
              <h2>
                Find your next
                <br />
                <span className="neon-text">big moment.</span>
              </h2>
            </div>

            <p>
              From high-energy hackathons to creative workshops,
              there is something for every curious mind.
            </p>
          </div>

          <div className="event-grid">
            {EVENTS.map((event, index) => (
              <article
                className={`event-card scroll-reveal ${event.color}`}
                key={event.id}
                style={{ "--card-delay": `${(index % 3) * 100}ms` }}
              >
                <div className="event-card-header">
                  <div className="event-icon">{event.icon}</div>
                  {event.tag ? (
                    <span className="featured-tag">
                      <span /> {event.tag}
                    </span>
                  ) : (
                    <span className="event-number">
                      EVT / {String(event.id).padStart(2, "0")}
                    </span>
                  )}
                </div>

                <span className="event-category">{event.category}</span>
                <h3>{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-details">
                  <div><span>◷</span>{event.date} · {event.time}</div>
                  <div><span>⌖</span>{event.venue}</div>
                </div>

                <button
                  type="button"
                  className="event-button"
                  onClick={() => openRegistration(event)}
                >
                  Register Now <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="about-section section-space" id="about">
          <div className="about-layout">
            <div className="about-label scroll-reveal">
              <span className="eyebrow"><span /> WHY EVENTORA?</span>
              <div className="about-code">01 / ABOUT US</div>
            </div>

            <div className="about-content scroll-reveal">
              <h2>
                Not just events.
                <br />
                <span className="neon-text">A whole new energy.</span>
              </h2>

              <p>
                Eventora brings your college community together in one place.
                Discover opportunities, meet like-minded people, and turn
                your campus days into experiences worth remembering.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <span className="feature-index">01</span>
                  <span className="feature-symbol">⌕</span>
                  <h3>Discover</h3>
                  <p>Find events that match your interests.</p>
                </div>

                <div className="about-feature">
                  <span className="feature-index">02</span>
                  <span className="feature-symbol">↗</span>
                  <h3>Register</h3>
                  <p>Join your favourite events with ease.</p>
                </div>

                <div className="about-feature">
                  <span className="feature-index">03</span>
                  <span className="feature-symbol">✳</span>
                  <h3>Experience</h3>
                  <p>Learn, collaborate, and make memories.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* College */}
        <section className="college-section scroll-reveal">
          <div className="college-glow" />
          <div className="college-copy">
            <span className="eyebrow"><span /> BUILT FOR OUR CAMPUS</span>
            <h2>One campus. Endless possibilities.</h2>
            <p>Mahendra College of Engineering</p>
            <span className="college-department">
              Department of Information Technology
            </span>
          </div>

          <div className="college-badge">
            <div className="badge-symbol">E<span>.</span></div>
            <div>
              <strong>EVENTORA</strong>
              <small>THE CAMPUS EVENT HUB</small>
            </div>
            <span className="badge-arrow">↗</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="brand footer-brand">
            <div className="brand-mark">E<span>.</span></div>
            <div className="brand-copy">
              <h2>EVENTORA</h2>
              <span>EVERY EVENT TELLS A STORY.</span>
            </div>
          </a>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#about">About</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Eventora. All rights reserved.</span>
          <span>BUILT FOR THE NEXT GENERATION <b>✳</b></span>
        </div>
      </footer>

      {/* Registration Modal */}
      {selectedEvent && (
        <div
          className="modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeRegistration();
            }
          }}
        >
          <div
            className="registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-title"
          >
            <button
              type="button"
              className="close-button"
              onClick={closeRegistration}
              aria-label="Close registration"
            >
              ×
            </button>

            <div className="modal-topline">
              <span className="live-dot" /> EVENT REGISTRATION
            </div>

            <div className="modal-icon">{selectedEvent.icon}</div>
            <span className="event-category">{selectedEvent.category}</span>
            <h2 id="registration-title">Save your spot.</h2>
            <p className="modal-event-name">{selectedEvent.title}</p>

            <div className="modal-event-info">
              <span>◷ {selectedEvent.date} · {selectedEvent.time}</span>
              <span>⌖ {selectedEvent.venue}</span>
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={form.department}
                onChange={handleChange}
                required
              >
                <option value="">Select your department</option>
                <option>Information Technology</option>
                <option>Computer Science Engineering</option>
                <option>Electronics & Communication</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
              </select>

              <label htmlFor="year">Year of Study</label>
              <select
                id="year"
                name="year"
                value={form.year}
                onChange={handleChange}
                required
              >
                <option value="">Select your year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>

              <button type="submit" className="modal-submit">
                Confirm Registration <span>↗</span>
              </button>
            </form>

            <p className="modal-note">
              Your next campus experience is one step away.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
