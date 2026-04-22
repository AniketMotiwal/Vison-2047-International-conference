



'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { NAV_ITEMS, NavItem, DropdownSection } from '@/lib/navigation-data';

/* ─── Chevron icon ───────────────────────────────────────── */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 10 10"
      fill="none"
      style={{
        flexShrink: 0,
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: open ? 'rotate(180deg) translateY(-1px)' : 'rotate(0deg)',
      }}
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Desktop dropdown panel ─────────────────────────────── */
function DropdownPanel({
  sections,
  onSelect,
}: {
  sections: DropdownSection[];
  onSelect: (href: string) => void;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 12px)',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 0 1px rgba(0,0,0,0.1)',
        border: '1px solid rgba(107,33,168,0.08)',
        minWidth: '220px',
        maxWidth: '300px',
        zIndex: 9999,
        overflow: 'hidden',
        animation: 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(4px)',
      }}
    >
      {sections.map((section, si) => (
        <div key={si}>
          {si > 0 && (
            <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, #E9D5FF 25%, #E9D5FF 75%, transparent)', margin: '6px 10px' }} />
          )}
          <div style={{ padding: '6px 0' }}>
            {section.label && (
              <p style={{
                margin: 0,
                padding: '12px 18px 6px',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#7C3AED',
                fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                backgroundImage: 'linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {section.label}
              </p>
            )}
            {section.items.map((item) => (
              <button
                key={item.href}
                onClick={() => onSelect(item.href)}
                className={item.featured ? 'featured-nav-item' : undefined}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 18px',
                  fontSize: '17px',
                  fontWeight: item.featured ? 800 : 600,
                  color: item.featured ? '#DC2626' : '#333333',
                  background: item.featured ? '#FFF1F2' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderLeft: `4px solid ${item.featured ? '#DC2626' : 'transparent'}`,
                  fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  letterSpacing: '0.3px',
                  lineHeight: '1.6',
                  animation: 'none',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = item.featured ? '#FEE2E2' : '#F5F0FF';
                  el.style.color = item.featured ? '#B91C1C' : '#7C3AED';
                  el.style.paddingLeft = '22px';
                  if (item.featured) {
                    el.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.18), inset 0 0 12px rgba(220, 38, 38, 0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = item.featured ? '#FFF1F2' : 'transparent';
                  el.style.color = item.featured ? '#DC2626' : '#333333';
                  el.style.paddingLeft = '18px';
                  if (item.featured) {
                    el.style.boxShadow = 'none';
                  }
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span className={item.featured ? 'featured-nav-label' : undefined}>{item.label}</span>
                  {item.featured && (
                    <span className="featured-nav-icon" aria-hidden="true">
                      <span className="featured-nav-arrow">➜</span>
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Desktop nav item ───────────────────────────────────── */
function DesktopNavItem({
  item,
  isActive,
  onNavigate,
}: {
  item: NavItem;
  isActive: boolean;
  onNavigate: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick);
  }, []);

  const hasDropdown = !!item.sections;

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => {
          if (hasDropdown) {
            setOpen((v) => !v);
            if (item.href) onNavigate(item.href); // ← jump to #people when clicking "People"
          } else if (item.href) {
            onNavigate(item.href);
          }
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: item.isAction ? '9px 20px' : '8px 16px',
          borderRadius: item.isAction ? '20px' : '8px',
          background: item.isAction
            ? '#ffffff'
            : (isActive || open ? 'rgba(255,255,255,0.22)' : 'transparent'),
          border: 'none',
          cursor: 'pointer',
          color: item.isAction ? '#6B21A8' : '#ffffff',
          fontSize: item.isAction ? '20px' : '20px',
          fontWeight: item.isAction ? 700 : 600,
          whiteSpace: 'nowrap',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
          letterSpacing: '0.4px',
          lineHeight: '1.6',
          boxShadow: item.isAction ? '0 4px 12px rgba(255,255,255,0.2)' : 'none',
        }}
        onMouseEnter={(e) => {
          const btn = e.currentTarget as HTMLButtonElement;
          if (item.isAction) {
            btn.style.transform = 'translateY(-2px)';
            btn.style.boxShadow = '0 8px 20px rgba(255,255,255,0.3)';
          } else if (!isActive && !open) {
            btn.style.background = 'rgba(255,255,255,0.2)';
            btn.style.transform = 'translateY(-2px)';
            btn.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
          }
        }}
        onMouseLeave={(e) => {
          const btn = e.currentTarget as HTMLButtonElement;
          if (item.isAction) {
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '0 4px 12px rgba(255,255,255,0.2)';
          } else if (!isActive && !open) {
            btn.style.background = 'transparent';
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = 'none';
          }
        }}
      >
        {item.label}
        {hasDropdown && <Chevron open={open} />}
      </button>

      {hasDropdown && open && (
        <DropdownPanel
          sections={item.sections!}
          onSelect={(href) => {
            setOpen(false);
            onNavigate(href);
          }}
        />
      )}
    </div>
  );
}

/* ─── Mobile accordion item ──────────────────────────────── */
function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.sections) {
    return (
      <button
        onClick={() => onNavigate(item.href!)}
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left',
          padding: '12px 14px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.95)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
          letterSpacing: '0.3px',
          lineHeight: '1.6',
        }}
      >
        {item.label}
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '12px 14px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.95)',
          background: open ? 'rgba(255,255,255,0.12)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
          letterSpacing: '0.3px',
          lineHeight: '1.6',
        }}
      >
        {item.label}
        <Chevron open={open} />
      </button>

          {open && (
        <div style={{
          marginLeft: '10px',
          paddingLeft: '10px',
          borderLeft: '1.5px solid rgba(255,255,255,0.2)',
          paddingBottom: '2px',
          marginBottom: '1px',
        }}>
          {item.sections.flatMap((section) =>
            section.items.map((sub) => (
              <button
                key={sub.href}
                onClick={() => onNavigate(sub.href)}
                className={sub.featured ? 'featured-nav-item' : undefined}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 10px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: sub.featured ? 800 : 600,
                  color: sub.featured ? '#FCA5A5' : 'rgba(255,255,255,0.80)',
                  background: sub.featured ? 'rgba(127, 29, 29, 0.25)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  letterSpacing: '0.2px',
                  lineHeight: '1.5',
                  animation: 'none',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = sub.featured ? 'rgba(220, 38, 38, 0.35)' : 'rgba(255,255,255,0.15)';
                  el.style.paddingLeft = '14px';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = sub.featured ? 'rgba(127, 29, 29, 0.25)' : 'transparent';
                  el.style.paddingLeft = '10px';
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span className={sub.featured ? 'featured-nav-label' : undefined}>{sub.label}</span>
                  {sub.featured && (
                    <span className="featured-nav-icon" aria-hidden="true">
                      <span className="featured-nav-arrow">➜</span>
                    </span>
                  )}
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Main Navbar ────────────────────────────────────────── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const router = useRouter();
  const registrationLink =
    NAV_ITEMS.flatMap((item) => item.sections?.flatMap((section) => section.items) ?? [])
      .find((entry) => entry.featured && entry.label.toLowerCase().includes('register'))?.href ??
    'https://docs.google.com/forms/d/e/1FAIpQLSe9mnu68W-dQDofoEX9qR_qFh4dlJd3WuLyMEKBXxzu5ixoqA/viewform';
  const attendeeFormLink =
    NAV_ITEMS.flatMap((item) => item.sections?.flatMap((section) => section.items) ?? [])
      .find((entry) => entry.label.toLowerCase().includes('only for attendee'))?.href ??
    'https://forms.gle/er6bf4gKrA2JMAvy8';

  useEffect(() => {
    const allHrefs = NAV_ITEMS.flatMap((item) =>
      item.sections
        ? item.sections.flatMap((s) => s.items.map((i) => i.href))
        : [item.href ?? '']
    ).filter(Boolean);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 130;
      for (const href of allHrefs) {
        // Only process hash-style hrefs for scroll detection
        if (!href.startsWith('#')) continue;
        
        const el = document.querySelector(href) as HTMLElement | null;
        if (!el) continue;
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(href);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const handleNavigate = (href: string) => {
  const isPdfLink = /\.pdf($|[?#])/i.test(href);

  // Open PDFs in a new tab so homepage state is preserved.
  if (isPdfLink) {
    window.open(href, '_blank', 'noopener,noreferrer');
    setMobileOpen(false);
    return;
  }

  // Handle external URLs (e.g., https://example.com)
  if (href.startsWith('http://') || href.startsWith('https://')) {
    window.open(href, '_blank');
    setMobileOpen(false);
    return;
  }

  // Handle route + hash (e.g., /patrons#patrons)
  if (href.startsWith('/') && href.includes('#')) {
    const [path, hash] = href.split('#');
    router.push(href); // navigate to page
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300); // wait for page to load
    setMobileOpen(false);
    return;
  }

  // Handle plain route (e.g., /overview)
  if (href.startsWith('/')) {
    router.push(href);
    setMobileOpen(false);
    return;
  }

  // Handle hash-only (e.g., #patrons) — same page scroll
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', href);
  }
  setMobileOpen(false);
};
  return (
    <>
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        background: 'linear-gradient(135deg, #6B21A8 0%, #7C3AED 100%)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      }}
    >
      <div className="registration-marquee" role="region" aria-label="Attendee form announcement">
        <div className="registration-marquee-track">
          <a
            href={attendeeFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="registration-marquee-item"
          >
            <span>Please</span>
            <span className="registration-marquee-highlight">Registration Form (Only for Attendee)</span>
            <span>- Click here to fill the Google Form</span>
            <span className="registration-marquee-icon" aria-hidden="true">
              ➜
            </span>
          </a>
          <a
            href={attendeeFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="registration-marquee-item"
            aria-hidden="true"
          >
            <span>Please</span>
            <span className="registration-marquee-highlight">Registration Form (Only for Attendee)</span>
            <span>- Click here to fill the Google Form</span>
            <span className="registration-marquee-icon" aria-hidden="true">
              ➜
            </span>
          </a>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div
        className="hidden lg:flex"
        style={{
          height: '56px',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '0 16px',
          gap: '8px',
        }}
      >
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'space-evenly' }}>
          {NAV_ITEMS.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              isActive={
                item.href === activeSection ||
                (item.sections?.some((s) =>
                  s.items.some((i) => i.href === activeSection)
                ) ?? false)
              }
              onNavigate={handleNavigate}
            />
          ))}
        </nav>
      </div>

      {/* ── Mobile bar ── */}
      <div
        className="flex lg:hidden"
        style={{
          height: '56px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
        }}
      >
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '16px', fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif', letterSpacing: '0.4px' }}>
          Vision 2047
        </span>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            padding: '7px',
            borderRadius: '8px',
            background: mobileOpen ? 'rgba(255,255,255,0.15)' : 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 5L17 17M17 5L5 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 7h16M3 11h16M3 15h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <nav
          className="lg:hidden"
          style={{
            background: 'rgba(91, 24, 152, 0.98)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '6px 12px 16px',
            maxHeight: 'calc(100vh - 56px)',
            overflowY: 'auto',
            backdropFilter: 'blur(8px)',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <MobileNavItem key={item.label} item={item} onNavigate={handleNavigate} />
          ))}
        </nav>
      )}
    </header>
    <style jsx>{`
      .registration-marquee {
        width: 100%;
        overflow: hidden;
        border-bottom: 1px solid rgba(220, 38, 38, 0.28);
        background: linear-gradient(90deg, #fff8f8 0%, #fff2f2 50%, #fff8f8 100%);
      }

      .registration-marquee-track {
        display: flex;
        width: max-content;
        animation: registrationMarqueeScroll 20s linear infinite;
      }

      .registration-marquee-item {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #7f1d1d;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.2px;
        white-space: nowrap;
        padding: 9px 34px;
        line-height: 1.35;
      }

      .registration-marquee-highlight {
        color: #dc2626;
        font-weight: 900;
        font-size: 18px;
        animation: registrationHighlightPulse 1.9s ease-in-out infinite;
      }

      .registration-marquee-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        border-radius: 999px;
        background: #ffffff;
        color: #dc2626;
        font-size: 14px;
        font-weight: 800;
        box-shadow: 0 2px 8px rgba(220, 38, 38, 0.24);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      .registration-marquee-item:hover .registration-marquee-icon {
        transform: translateX(2px) scale(1.08);
        box-shadow: 0 4px 12px rgba(220, 38, 38, 0.32);
      }

      .registration-marquee-item:hover .registration-marquee-highlight {
        color: #b91c1c;
      }

      @media (max-width: 768px) {
        .registration-marquee-item {
          font-size: 14px;
          padding: 8px 24px;
        }

        .registration-marquee-highlight {
          font-size: 16px;
        }
      }

      .featured-nav-item {
        position: relative;
        border-radius: 8px;
      }

      .featured-nav-label {
        font-weight: 800;
        color: #dc2626;
        text-shadow: 0 0 0 rgba(220, 38, 38, 0.15);
      }

      .featured-nav-icon {
        width: 20px;
        height: 20px;
        border-radius: 999px;
        background: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);
        animation: featuredIconPulse 1.9s ease-in-out infinite;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      .featured-nav-arrow {
        display: inline-block;
        font-size: 12px;
        color: #dc2626;
        font-weight: 800;
        line-height: 1;
        animation: featuredArrowBounce 1.4s ease-in-out infinite;
        transition: transform 0.25s ease, color 0.25s ease;
      }

      .featured-nav-item:hover .featured-nav-icon {
        transform: translateX(2px) scale(1.08);
        box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
      }

      .featured-nav-item:hover .featured-nav-arrow {
        transform: translateX(3px);
        color: #b91c1c;
      }

      @keyframes featuredArrowBounce {
        0%,
        100% {
          transform: translateX(0);
          opacity: 0.9;
        }
        40% {
          transform: translateX(2px);
        }
        60% {
          transform: translateX(2px);
          opacity: 1;
        }
      }

      @keyframes featuredIconPulse {
        0%,
        100% {
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);
        }
        50% {
          box-shadow: 0 2px 14px rgba(220, 38, 38, 0.4);
        }
      }

      @keyframes registrationMarqueeScroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      @keyframes registrationHighlightPulse {
        0%,
        100% {
          opacity: 1;
          text-shadow: 0 0 0 rgba(220, 38, 38, 0.35);
        }
        50% {
          opacity: 0.9;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.28);
        }
      }
    `}</style>
    </>
  );
};

export default Navbar;