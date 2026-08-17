/**
 * Precision Landscape Studio: Contact is a high-clarity service-planning page, presenting a calm
 * customer route from property details to a tailored next step without exposing back-office mechanics.
 */
import { ArrowUpRight, CalendarCheck, Check, MessageCircleMore, PhoneCall, Route, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export function ContactPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="contact-hero">
          <div><div className="eyebrow"><span>START</span> Service planning</div><h1>Tell us about the property. We’ll map the next cut.</h1><p>Whether the property needs a more dependable home routine or a commercial grounds plan, the first step is simple: share the location, the priority, and the standard you want to see when the work is complete.</p></div>
          <div className="contact-hero__route"><span>THE ROUTE</span><div><i>01</i><p>Choose a residential quote or commercial site walk-through.</p></div><div><i>02</i><p>Share the property type, address, and service priority.</p></div><div><i>03</i><p>Receive a clear next step and a service path built around the property.</p></div></div>
        </section>
        <section className="booking-section" id="booking">
          <div className="booking-section__intro"><div className="eyebrow"><span>BOOK</span> Choose a service path</div><h2>Start with the property. We’ll take care of the route.</h2><p>Tell us what needs attention and choose the service path that fits. A thoughtful request gives the team the detail needed to schedule the right conversation from the beginning.</p></div>
          <div className="booking-panel">
            <div className="booking-panel__top"><CalendarCheck size={24} /><span>SERVICE REQUEST</span></div>
            <h3>Choose your next step</h3>
            <p>Residential and commercial properties move through different conversations. Start in the route that gives the property the right attention.</p>
            <div className="booking-options"><div><span>01</span><strong>Residential quote</strong><small>Home lawn and recurring-care planning</small></div><div><span>02</span><strong>Commercial walk-through</strong><small>Grounds proposal and property review</small></div></div>
            <Link href="/residential-lawn-care/" className="booking-panel__link">Explore the home-care standard <ArrowUpRight size={16} /></Link>
          </div>
        </section>
        <section className="contact-readiness">
          <div className="contact-readiness__head"><span className="tag">WHAT A BETTER REQUEST LOOKS LIKE</span><h2>The details that help a service plan arrive prepared.</h2></div>
          <div className="readiness-grid"><article><PhoneCall size={22} /><h3>Property details</h3><p>Start with the address, property type, and a straightforward description of the work you want handled.</p></article><article><MessageCircleMore size={22} /><h3>Service priority</h3><p>Name what matters most: a weekly reset, lawn edges, beds, seasonal cleanup, or a commercial standard.</p></article><article><Route size={22} /><h3>Preferred route</h3><p>Choose the time and contact method that make the next conversation easiest for your schedule.</p></article><article><ShieldCheck size={22} /><h3>Clear expectations</h3><p>Use the first conversation to confirm the service area, scope, timing, and the condition of the property.</p></article></div>
        </section>
        <section className="contact-final"><div><span className="tag">THE RIGHT FIRST PASS</span><h2>A property-focused conversation that leads to a clear, practical plan.</h2></div><Link href="/commercial-lawn-care/" className="btn btn--dark">View commercial care <ArrowUpRight size={17} /></Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}
