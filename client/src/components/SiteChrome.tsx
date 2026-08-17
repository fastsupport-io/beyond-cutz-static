/**
 * Precision Landscape Studio: Site chrome uses the mowline mark, field-plan labels,
 * and high-contrast utility navigation to keep conversion routes decisive and local.
 */
import { Menu, ArrowUpRight, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

const logoUrl = "/manus-storage/beyond-cutz-logo_7bcee758.png";

const navItems = [
  { label: "Residential", href: "/residential-lawn-care/" },
  { label: "Commercial", href: "/commercial-lawn-care/" },
  { label: "Service areas", href: "/service-areas/midlothian-va/" },
  { label: "Field notes", href: "/resources/" },
];

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`wordmark ${light ? "wordmark--light" : ""}`} aria-label="Beyond Cutz home">
      <img src={logoUrl} alt="Beyond Cutz mowline mark" />
      <span>
        <strong>BEYOND</strong>
        <em>CUTZ</em>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const isContact = location === "/contact/";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={location === item.href ? "active" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/contact/" className="header-cta">
            {isContact ? "Quote planning" : "Plan your service"}
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </Link>
          <button className="mobile-menu-trigger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{item.label}<ArrowUpRight size={17} />
            </Link>
          ))}
          <Link href="/contact/" onClick={() => setOpen(false)} className="mobile-nav__cta">Request a tailored quote</Link>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-topline" />
      <div className="site-footer__grid">
        <div className="footer-brand">
          <Wordmark light />
          <p>Precise lawn and grounds care for Central Virginia properties that deserve a more considered standard.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Explore</span>
          <Link href="/residential-lawn-care/">Residential care</Link>
          <Link href="/commercial-lawn-care/">Commercial care</Link>
          <Link href="/lawn-mowing/">Lawn mowing</Link>
          <Link href="/landscape-maintenance/">Landscape maintenance</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Local focus</span>
          <Link href="/service-areas/midlothian-va/">Midlothian, VA</Link>
          <Link href="/service-areas/chesterfield-va/">Chesterfield, VA</Link>
          <Link href="/resources/">Field notes</Link>
          <Link href="/contact/">Contact + booking</Link>
        </div>
        <div className="footer-column footer-column--status">
          <span className="footer-label">Service desk</span>
          <p>Booking, calls, text updates, and payment follow-through stay coordinated through one connected service desk.</p>
          <Link href="/contact/" className="footer-inline-link">Plan your service <ArrowUpRight size={14} /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Beyond Cutz. All rights reserved.</span>
        <span>Midlothian · Chesterfield · Central Virginia</span>
      </div>
    </footer>
  );
}
