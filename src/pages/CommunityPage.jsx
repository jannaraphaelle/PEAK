const messages = [
  { avatar: '🛡️', name: 'Sir Alistair', rank: 'LEVEL 99', text: "The grind never stops. I've been guarding this bridge for 3,000 years.", className: 'npc-knight' },
  { avatar: '✨', name: 'Lady Elara', rank: 'HEALER', text: "Stay hydrated, adventurers! I can't keep reviving you if you don't care.", className: 'npc-healer' },
  { avatar: '👾', name: 'Error_404', rank: 'GLITCH', text: 'I found a way under the map... it\'s just endless purple void down here.', className: 'npc-glitch' },
  { avatar: '📜', name: 'Old Man Jenkins', rank: 'QUEST GIVER', text: "It's dangerous to go alone! Take this... wait, I lost it. Go find it.", className: 'npc-quest' },
  { avatar: '💰', name: 'Barnaby', rank: 'MERCHANT', text: 'New stock! Buy a wooden sword for 50,000 gold. No lowballers.', className: 'npc-merchant' },
  { avatar: '💀', name: 'Vex the Void-Walker', rank: 'BOSS', text: 'Who dares enter my domain? Oh, it\'s just a chat room. Carry on.', className: 'npc-boss' },
];

export default function CommunityPage() {
  return (
    <section className="community-container">
      <h1 className="row-title popular-label">
        COMMUNITY CHAT <span className="blink">● LIVE</span>
      </h1>

      <div className="feed-box">
        <div className="chat-track">
          {[...messages, messages[0]].map((message, index) => (
            <div className={`comment ${message.className}`} key={`${message.name}-${index}`}>
              <div className="npc-avatar">{message.avatar}</div>
              <div className="comment-content">
                <h4>
                  {message.name} <span className="rank">{message.rank}</span>
                </h4>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="player-input">
        <input type="text" placeholder="Send a message to the community..." />
        <button className="send-btn">SEND</button>
      </div>
    </section>
  );
}
