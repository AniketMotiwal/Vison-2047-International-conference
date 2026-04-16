



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
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 18px',
                  fontSize: '20px',
                  fontWeight: item.featured ? 700 : 600,
                  color: item.featured ? '#6B21A8' : '#333333',
                  background: item.featured ? '#FAF7FF' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderLeft: `4px solid ${item.featured ? '#7C3AED' : 'transparent'}`,
                  fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  letterSpacing: '0.3px',
                  lineHeight: '1.6',
                  animation: item.featured ? 'flicker 3s ease-in-out infinite' : 'none',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = item.featured ? '#F3E8FF' : '#F5F0FF';
                  el.style.color = '#7C3AED';
                  el.style.paddingLeft = '22px';
                  if (item.featured) {
                    el.style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.4), inset 0 0 15px rgba(124, 58, 237, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = item.featured ? '#FAF7FF' : 'transparent';
                  el.style.color = item.featured ? '#6B21A8' : '#333333';
                  el.style.paddingLeft = '18px';
                  if (item.featured) {
                    el.style.boxShadow = 'none';
                  }
                }}
              >
                {item.label}
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
          fontSize: item.isAction ? '14px' : '14px',
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
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 10px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: sub.featured ? 700 : 600,
                  color: sub.featured ? '#FFE082' : 'rgba(255,255,255,0.80)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  letterSpacing: '0.2px',
                  lineHeight: '1.5',
                  animation: sub.featured ? 'flicker 3s ease-in-out infinite' : 'none',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'rgba(255,255,255,0.15)';
                  el.style.paddingLeft = '14px';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'transparent';
                  el.style.paddingLeft = '10px';
                }}
              >
                {sub.label}
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
  );
};

export default Navbar;