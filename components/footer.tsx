'use client';

export default function Footer() {
  return (
    <footer style={{ background: '#05111F', fontFamily: "'Crimson Pro', Georgia, serif", overflow: 'hidden' }} id="#contactus">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap');

        .footer-card { background: #0D1F38; border: 1px solid rgba(255,184,28,0.35); border-radius: 14px; padding: 22px 24px; flex: 1; min-width: 240px; }
        .footer-card h4 { font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: 0.15em; color: #FFB81C; text-transform: uppercase; margin: 0 0 10px; font-weight: 700; }
        .footer-card p { font-size: 15px; color: #C8D8F0; margin: 0; line-height: 1.7; font-weight: 400; }

        .footer-link { font-size: 13px; color: #7A99BB; text-decoration: none; font-weight: 400; transition: color 0.2s; }
        .footer-link:hover { color: #FFB81C; }

        .cards-row { display: flex; gap: 18px; padding: 36px 40px 30px; flex-wrap: wrap; }
        .blue-strip { background: linear-gradient(90deg, #003D7A 0%, #0056C7 100%); padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; border-top: 2px solid #FFB81C; }
        .bottom-bar { background: #020C18; padding: 18px 40px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        .bottom-links { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .cards-row { padding: 24px 20px 20px; gap: 12px; }
          .footer-card { min-width: 100%; }
          .blue-strip { padding: 16px 20px; flex-direction: column; align-items: flex-start; gap: 8px; }
          .bottom-bar { padding: 16px 20px; flex-direction: column; align-items: flex-start; gap: 10px; }
        }

        @media (max-width: 480px) {
          .footer-card { padding: 16px; }
          .footer-card p { font-size: 14px; }
          .bottom-links { gap: 12px; }
          .footer-link { font-size: 12px; }
        }
      `}</style>

      {/* 3 Cards */}
      <div className="cards-row">
        <div className="footer-card">
          <h4>Conference</h4>
          <p>Vision 2047: Prosperous and Great Bharat 2.0</p>
        </div>
        <div className="footer-card">
          <h4>Venue &amp; Date</h4>
          <p>
            📅 April 24 – April 26, 2026 <br />
            📍 Indian Institute of Technology Roorkee, Roorkee, Uttarakhand
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,184,28,0.25)', margin: '0 40px' }} />

      {/* Blue Strip */}
      <div className="blue-strip">
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: 14, color: '#FFD966', letterSpacing: '0.07em', fontWeight: 600 }}>
          "For a Prosperous and Great Bharat 2.0"
        </span>
        <span style={{ fontSize: 14, color: '#A8C4E8', fontWeight: 400, fontStyle: 'italic' }}>
          IIT Roorkee &nbsp;×&nbsp; Swadeshi Shodh Sansthan
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <div>
          <p style={{ fontSize: 14, color: '#7A99BB', fontWeight: 400, margin: 0 }}>
            © {new Date().getFullYear()} Vision 2047 International Conference. All rights reserved.
          </p>
         
        </div>
        <div className="bottom-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <span style={{ color: 'rgba(255,184,28,0.3)', fontSize: 10 }}>•</span>
          <a href="#" className="footer-link">Terms &amp; Conditions</a>
          <span style={{ color: 'rgba(255,184,28,0.3)', fontSize: 10 }}>•</span>
          <a href="#" className="footer-link">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}