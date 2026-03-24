const aboutSlides = ['GAMEOVER.png', 'gaming.png', 'rpg-game.png', 'trophy.png', 'joystick.png'];

export default function AboutPage() {
  return (
    <section className="about-section">
      <div className="content-wrapper about-layout">
        <div className="main-info">
          <h1 className="about-title">
            WE ARE <span className="highlight">PEAK</span>
          </h1>
          <p className="description">
            Building worlds isn&apos;t just our job; it&apos;s our obsession. PEAK was founded on the idea
            that the community is the heartbeat of every game. From the code to the characters,
            everything we do is for the players.
          </p>
          <div className="stats-row">
            <div className="stat"><h3>10M+</h3><p>PLAYERS</p></div>
            <div className="stat"><h3>50+</h3><p>WORLDS</p></div>
          </div>
        </div>

        <div className="sidebar-slider">
          <div className="slider-box">
            <div className="slider-track">
              {[...aboutSlides, ...aboutSlides].map((image, index) => (
                <div className="slide" key={`${image}-${index}`}>
                  <img src={`/assets/${image}`} alt={`About visual ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
