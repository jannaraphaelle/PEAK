const supportCards = [
  { icon: '👤', title: 'My Account', description: 'Create and manage your PEAK account settings.' },
  { icon: '🎮', title: 'Games & Downloads', description: 'Troubleshoot game installs and patch updates.' },
  { icon: '📱', title: 'Mobile Support', description: 'Help with connecting your mobile device to PEAK.' },
  { icon: '💳', title: 'Billing & Payments', description: 'Manage subscriptions and view your transaction history.' },
  { icon: '🛡️', title: 'Security', description: 'Keep your account safe with 2FA and password tips.' },
  { icon: '🚀', title: 'Technical Issues', description: 'Report bugs or performance lag to our tech team.' },
];

export default function SupportPage() {
  return (
    <section className="support-page-container">
      <div className="support-header">
        <h1>We&apos;re here to help</h1>
        <div className="search-container">
          <input type="text" placeholder="Search for help..." />
          <button className="search-btn">🔍</button>
        </div>
      </div>

      <div className="support-grid">
        {supportCards.map((card) => (
          <div className="support-card" key={card.title}>
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
