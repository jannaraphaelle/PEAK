const rows = [
  {
    title: 'POPULAR',
    className: 'popular-label',
    items: ['STC.jpg', 'PTR.jpg', 'RDR2.jpg', 'DBH.jpg', 'CODMW.jpg', 'DS2.jpg', 'AH.jpg', 'HORIZONposter.jpg', 'ASO.jpg', 'MHW.jpg'],
  },
  {
    title: 'RECOMMENDED',
    className: 'popular-label',
    items: ['HADESposter.jpg', 'GOYposter.jpg', 'GOWposter.jpg', 'BMWposter.jpg', 'BAYONETTA.jpg', 'LOP.jpg'],
  },
  {
    title: 'INDIE GEMS',
    className: 'indie-label',
    items: ['HK.jpg', 'SV.jpg', 'HKSS.jpg', 'HADES2.jpg', 'BALATRO.jpg', 'DEADCELLS.jpg', 'ETG.jpg', 'SIFU.jpg', 'KZ.jpg', 'CH.jpg'],
  },
  {
    title: 'MULTIPLAYER',
    className: 'multiplayer-label',
    items: ['CS2.jpg', 'MR.jpg', 'DBD.jpg', '2K26.jpg', 'BG3.jpg'],
  },
];

export default function GamesPage() {
  return (
    <section className="games-page">
      {rows.map((row) => (
        <div key={row.title}>
          <h3 className={`row-title ${row.className}`}>{row.title}</h3>
          <div className="carousel-container">
            <div className="carousel-track">
              {[...row.items, ...row.items].map((image, index) => (
                <img key={`${row.title}-${index}`} src={`/assets/${image}`} alt={`${row.title} game ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
