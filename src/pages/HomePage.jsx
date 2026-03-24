import { useState } from 'react';

const featuredGames = [
  { title: 'Little Nightmares 2', status: 'Now Available', price: 'FREE', image: 'LN2.jpg' },
  { title: 'God of War', status: 'Order Now', price: '$49.99', image: 'GOW.jpg' },
  { title: 'DOOM The Dark Ages', status: 'Order Now', price: '$59.99', image: 'DOOMTDA.jpg' },
  { title: 'Monster Hunter Wilds', status: 'Now Available', price: '$29.99', image: 'MHW.jpg' },
  { title: 'Spider Man Miles Morales', status: 'Order Now', price: '$20.99', image: 'SMMM.jpg' },
  { title: 'GTA 5', status: 'Order Now', price: '$26.95', image: 'GTA5.jpg' },
];

const genres = [
  { name: 'RPG', image: 'e33.jpg' },
  { name: 'FIGHTING', image: 'MK11.jpg' },
  { name: 'HORROR', image: 'L4D2.jpg' },
  { name: 'FPS', image: 'OW2.jpg' },
  { name: 'RACING', image: 'NFSMW.jpg' },
  { name: 'SPORTS', image: 'RL.jpg' },
  { name: 'INDIE', image: 'LIS.jpg' },
  { name: 'STRATEGY', image: 'AOE.jpg' },
];

export default function HomePage() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [genrePage, setGenrePage] = useState(0);

  const visibleGenres = genres.slice(genrePage * 4, genrePage * 4 + 4);

  return (
    <section className="home-container">
      <h2 className="section-title">FEATURED &amp; RECOMMENDED</h2>

      <div className="featured-wrapper react-slider">
        <div className="featured-card">
          <div className="main-hero">
            <img src={`/assets/${featuredGames[featuredIndex].image}`} alt={featuredGames[featuredIndex].title} />
          </div>
          <div className="side-info">
            <h2>{featuredGames[featuredIndex].title}</h2>
            <p>{featuredGames[featuredIndex].status}</p>
            <div className="price">{featuredGames[featuredIndex].price}</div>
          </div>
        </div>

        <button
          className="arrow left"
          onClick={() => setFeaturedIndex((prev) => Math.max(prev - 1, 0))}
          disabled={featuredIndex === 0}
        >
          &#10094;
        </button>
        <button
          className="arrow right"
          onClick={() => setFeaturedIndex((prev) => Math.min(prev + 1, featuredGames.length - 1))}
          disabled={featuredIndex === featuredGames.length - 1}
        >
          &#10095;
        </button>
      </div>

      <h2 className="section-title section-gap">BROWSE BY GENRE</h2>

      <div className="genre-wrapper react-slider">
        <div className="genre-grid">
          {visibleGenres.map((genre) => (
            <div
              key={genre.name}
              className="genre-card"
              style={{ backgroundImage: `url(/assets/${genre.image})` }}
            >
              <span>{genre.name}</span>
            </div>
          ))}
        </div>

        <button
          className="g-arrow left"
          onClick={() => setGenrePage(0)}
          disabled={genrePage === 0}
        >
          &#10094;
        </button>
        <button
          className="g-arrow right"
          onClick={() => setGenrePage(1)}
          disabled={genrePage === 1}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
