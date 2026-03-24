import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <section className="landing-page">
      <div className="landing-overlay">
        <div className="content-wrapper">
          <div className="title">
            <h1>PEAK GAMING</h1>
          </div>

          <div className="button-container">
            <a href="/home" className="btn">JOIN NOW</a>
            <a href="/about" className="btn">LEARN MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
}