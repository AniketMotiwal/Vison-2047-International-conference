"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [visits, setVisits] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const namespace = "vision2047-iitr-" + window.location.hostname;

    fetch(`https://api.countapi.xyz/hit/${namespace}/visits`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.value) {
          setVisits(data.value);
        }
      })
      .catch(() => setVisits(0));
  }, []);

  // 🔥 Smooth animation (count up effect)
  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation time
    const increment = visits / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= visits) {
        setDisplayCount(visits);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [visits]);

  return (
    <footer
      style={{
        background: "#05111F",
        fontFamily: "'Crimson Pro', Georgia, serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Pro:wght@400;600&display=swap');

        .footer-card {
          background: #0D1F38;
          border: 1px solid rgba(255,184,28,0.35);
          border-radius: 14px;
          padding: 22px;
          flex: 1;
          min-width: 240px;
          transition: transform 0.3s;
        }

        .footer-card:hover {
          transform: translateY(-5px);
        }

        .footer-card h4 {
          font-family: 'Cinzel', serif;
          font-size: 12px;
          letter-spacing: 0.15em;
          color: #FFB81C;
          margin-bottom: 10px;
        }

        .footer-card p {
          color: #C8D8F0;
          line-height: 1.6;
        }

        .cards-row {
          display: flex;
          gap: 18px;
          padding: 36px 40px;
          flex-wrap: wrap;
        }

        .blue-strip {
          background: linear-gradient(90deg, #003D7A, #0056C7);
          padding: 18px 40px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          border-top: 2px solid #FFB81C;
        }

        .bottom-bar {
          background: #020C18;
          padding: 18px 40px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .counter {
          font-size: 18px;
          font-weight: 700;
          color: #FFB81C;
          letter-spacing: 1px;
        }

        .footer-link {
          color: #7A99BB;
          text-decoration: none;
          font-size: 13px;
        }

        .footer-link:hover {
          color: #FFB81C;
        }

        @media (max-width: 768px) {
          .cards-row, .blue-strip, .bottom-bar {
            padding: 20px;
          }
          .footer-card {
            min-width: 100%;
          }
        }
      `}</style>

      {/* TOP CARDS */}
      <div className="cards-row">
        <div className="footer-card">
          <h4>Conference</h4>
          <p>Vision 2047: Prosperous and Great Bharat 2.0</p>
        </div>

        <div className="footer-card">
          <h4>Venue & Date</h4>
          <p>
            📅 April 24 – April 26, 2026 <br />
            📍 IIT Roorkee, Uttarakhand
          </p>
        </div>
      </div>

      {/* BLUE STRIP */}
      <div className="blue-strip">
        <span style={{ color: "#FFD966", fontWeight: 600 }}>
          "For a Prosperous and Great Bharat 2.0"
        </span>

        <span style={{ color: "#A8C4E8" }}>
          IIT Roorkee × Swadeshi Shodh Sansthan
        </span>
      </div>

      {/* BOTTOM */}
      <div className="bottom-bar">
        <p style={{ color: "#7A99BB", margin: 0 }}>
          © {new Date().getFullYear()} Vision 2047 Conference
        </p>

        {/* 🔥 ANIMATED COUNTER */}
        <div>
          👀 Visitors: <span className="counter">{displayCount}</span>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}