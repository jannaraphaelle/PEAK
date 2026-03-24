import React, { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Do you have any questions?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const updated = [...messages, { text: input, sender: "user" }];

    let reply = "Thank you for using PEAK GAMING!";

    if (input.toLowerCase().includes("home")) {
      reply = "Check out the featured and recommended games on our Home Page.";
    } else if (input.toLowerCase().includes("about")) {
      reply = "Get to know more about us by clicking our About page.";
    } else if (input.toLowerCase().includes("games")) {
      reply = "Sorted out games based on your liking!";
    } else if (input.toLowerCase().includes("community")) {
      reply = "Want to talk to other gamers? Click Community.";
    } else if (input.toLowerCase().includes("support")) {
      reply = "Please click Support. We're here to help.";
    }

    updated.push({ text: reply, sender: "bot" });

    setMessages(updated);
    setInput("");
  };

  return (
    <>
      <button
        className={`chatbot-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open chatbot"
      >
        💬
      </button>

      <div className={`chatbot-window ${open ? "show" : ""}`}>
        <div className="chatbot-header">
          <div>
            <h3>PEAK Assistant</h3>
            <p>Ask about home, games, community, support</p>
          </div>

          <button
            className="chatbot-close"
            onClick={() => setOpen(false)}
            aria-label="Close chatbot"
          >
            ✕
          </button>
        </div>

        <div className="chatbot-body">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chatbot-message-row ${msg.sender === "user" ? "user" : "bot"}`}
            >
              <div className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="chatbot-input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your question..."
          />
          <button onClick={handleSend} className="chatbot-send">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Chatbot;