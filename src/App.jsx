import { useState } from "react";
import "./App.css";

const tutorials = [
  {
    id: 1,
    category: "MAKEUP BASICS",
    title: "Your First Makeup Look",
    description: "Learn the basics to create a beautiful, natural everyday look.",
    emoji: "🌸",
    time: "10 min",
    level: "Beginner",
  },
  {
    id: 2,
    category: "SKINCARE",
    title: "The Perfect Skin Prep",
    description: "Prepare your skin before makeup for a smooth, fresh finish.",
    emoji: "🧴",
    time: "5 min",
    level: "Easy",
  },
  {
    id: 3,
    category: "EYE MAKEUP",
    title: "Soft & Pretty Eyes",
    description: "Create a soft eye look with simple, beginner-friendly steps.",
    emoji: "👁️",
    time: "8 min",
    level: "Beginner",
  },
  {
    id: 4,
    category: "LIP CARE",
    title: "Your Perfect Lip Look",
    description: "Learn lip preparation, lip liner, lipstick and gloss basics.",
    emoji: "💋",
    time: "5 min",
    level: "Easy",
  },
];

const makeupSteps = [
  "Clean your face with a gentle face wash.",
  "Apply moisturizer suitable for your skin.",
  "Apply broad-spectrum SPF 30+ sunscreen during the day.",
  "Apply a little BB cream or foundation and blend evenly.",
  "Use concealer on areas where you want extra coverage.",
  "Apply a small amount of compact powder if needed.",
  "Gently fill your eyebrows and apply mascara.",
  "Add blush to your cheeks.",
  "Finish with your favourite lipstick or lip tint.",
];

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [completed, setCompleted] = useState([]);
  const [search, setSearch] = useState("");

  const filteredTutorials = tutorials.filter((tutorial) => {
    const query = search.toLowerCase();

    return (
      tutorial.title.toLowerCase().includes(query) ||
      tutorial.category.toLowerCase().includes(query) ||
      tutorial.description.toLowerCase().includes(query)
    );
  });

  function toggleStep(index) {
    setCompleted((previous) =>
      previous.includes(index)
        ? previous.filter((step) => step !== index)
        : [...previous, index]
    );
  }

  function navigate(tab) {
    setActiveTab(tab);

    if (tab === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(tab.toLowerCase())?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home" onClick={() => setActiveTab("Home")}>
          <span className="brand-icon">✿</span>
          BlushBloom<span className="brand-dot">.</span>
        </a>

        <nav className="nav-links">
          {["Home", "Tutorials", "Routine", "About"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "nav-link active" : "nav-link"}
              onClick={() => navigate(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <button
          className="nav-cta"
          onClick={() => navigate("Tutorials")}
        >
          Explore beauty ↗
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              ✨ YOUR LITTLE CORNER OF BEAUTY
            </span>

            <h1>
              A little blush,
              <br />
              a lot of <span>bloom.</span>
            </h1>

            <p className="hero-description">
              Discover makeup that feels like you. Simple tutorials,
              lovely beauty tips and a little everyday glow — all in one place.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => navigate("Tutorials")}
              >
                Explore tutorials <span>→</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => navigate("Routine")}
              >
                Start my routine
              </button>
            </div>

            <div className="hero-note">
              <span className="note-stars">★★★★★</span>
              <span>Beauty made simple, just for you.</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle"></div>
            <div className="floating-label label-top">your glow era ✨</div>

            <div className="beauty-card">
              <div className="beauty-illustration">
                <div className="flower flower-one">✿</div>
                <div className="flower flower-two">✿</div>
                <div className="cosmetic cosmetic-one">
                  <div className="cosmetic-cap"></div>
                  <div className="cosmetic-body">BB</div>
                </div>
                <div className="cosmetic cosmetic-two">
                  <div className="powder-top">BLUSH</div>
                  <div className="powder-body"></div>
                </div>
                <div className="cosmetic cosmetic-three">
                  <div className="lipstick-top"></div>
                  <div className="lipstick-body"></div>
                </div>
                <div className="sparkle sparkle-one">✦</div>
                <div className="sparkle sparkle-two">✧</div>
                <div className="sparkle sparkle-three">✦</div>
              </div>

              <div className="art-caption">
                <span>YOUR DAILY REMINDER</span>
                <p>You are already beautiful. 💗</p>
              </div>
            </div>

            <div className="floating-label label-bottom">
              made with love ♡
            </div>
          </div>
        </section>

        <section className="features">
          <div>
            <span>🌷</span>
            <div>
              <h3>Beginner friendly</h3>
              <p>Easy steps for everyone</p>
            </div>
          </div>

          <div>
            <span>♡</span>
            <div>
              <h3>Your kind of beauty</h3>
              <p>Feel good in your own skin</p>
            </div>
          </div>

          <div>
            <span>✨</span>
            <div>
              <h3>Simple & practical</h3>
              <p>Beauty without the confusion</p>
            </div>
          </div>
        </section>

        <section className="tutorial-section" id="tutorials">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR BEAUTY PLAYGROUND</span>
              <h2>Find your <span>glow.</span></h2>
              <p>Little lessons, lovely results. Pick what you want to learn.</p>
            </div>

            <div className="search-box">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search beauty tips..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search tutorials"
              />
            </div>
          </div>

          <div className="tutorial-grid">
            {filteredTutorials.map((tutorial) => (
              <article className="tutorial-card" key={tutorial.id}>
                <div className={`tutorial-art art-${tutorial.id}`}>
                  <span className="tutorial-emoji">{tutorial.emoji}</span>
                  <span className="art-number">
                    0{tutorial.id}
                  </span>
                </div>

                <div className="tutorial-info">
                  <span className="category">{tutorial.category}</span>
                  <h3>{tutorial.title}</h3>
                  <p>{tutorial.description}</p>

                  <div className="tutorial-footer">
                    <span>◷ {tutorial.time}</span>
                    <span>{tutorial.level}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredTutorials.length === 0 && (
            <p className="empty-message">
              No tutorials found. Try another search! 🌸
            </p>
          )}
        </section>

        <section className="routine-section" id="routine">
          <div className="routine-intro">
            <span className="eyebrow">YOUR FIRST BEAUTY ROUTINE</span>
            <h2>Let's get ready, <span>beautiful.</span></h2>
            <p>
              Follow these simple steps and tick each one as you go.
              Take your time — there is no rush.
            </p>

            <div className="progress-card">
              <div className="progress-text">
                <span>Your progress</span>
                <strong>
                  {completed.length}/{makeupSteps.length}
                </strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(completed.length / makeupSteps.length) * 100}%`,
                  }}
                ></div>
              </div>

              <p>
                {completed.length === makeupSteps.length
                  ? "You've completed your routine! Amazing! 💗"
                  : "One little step at a time. ✨"}
              </p>
            </div>
          </div>

          <div className="routine-list">
            {makeupSteps.map((step, index) => (
              <label
                className={
                  completed.includes(index)
                    ? "routine-step completed"
                    : "routine-step"
                }
                key={step}
              >
                <input
                  type="checkbox"
                  checked={completed.includes(index)}
                  onChange={() => toggleStep(index)}
                />

                <span className="step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="step-text">{step}</span>
              </label>
            ))}

            <button
              className="reset-button"
              onClick={() => setCompleted([])}
            >
              ↺ Reset routine
            </button>
          </div>
        </section>

        <section className="about-section" id="about">
          <span className="about-flower">✿</span>
          <span className="eyebrow">A LITTLE NOTE FROM US</span>
          <h2>Beauty is not about changing yourself.</h2>
          <p>
            It is about exploring, expressing and celebrating the person
            you already are. BlushBloom is here to make your beauty journey
            feel a little easier, a little sweeter and a lot more you.
          </p>
          <span className="about-signature">With love, BlushBloom ♡</span>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon">✿</span>
          BlushBloom<span className="brand-dot">.</span>
        </a>

        <p>A little blush, a lot of bloom. 🌸</p>
        <span>Made with ♡ for your beauty journey.</span>
      </footer>
    </div>
  );
}

export default App;