/**
 * Precision Landscape Studio: The home page follows a field-plan narrative with an asymmetric
 * left index rail, Mowline Green decision points, and proof-oriented local service messaging.
 */
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleCheck, MapPin, MoveRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const heroImage = "/manus-storage/beyond-cutz-hero_bdfe15be.jpg";
const commercialImage = "/manus-storage/beyond-cutz-commercial_44a5a731.jpg";
const residentialImage = "/manus-storage/beyond-cutz-residential_3ec6b3ab.jpg";
const seasonalImage = "/manus-storage/beyond-cutz-seasonal_9034faa2.jpg";

const services = [
  { index: "01", name: "Residential lawn care", note: "A reliable weekly reset for the home exterior.", href: "/residential-lawn-care/", image: residentialImage },
  { index: "02", name: "Commercial grounds", note: "A clear maintenance path for managed properties.", href: "/commercial-lawn-care/", image: commercialImage },
  { index: "03", name: "Recurring mowing", note: "Cut, edge, finish—built around a defined standard.", href: "/lawn-mowing/", image: seasonalImage },
  { index: "04", name: "Landscape maintenance", note: "The seasonal care that keeps the whole exterior considered.", href: "/landscape-maintenance/", image: residentialImage },
];

const facts = [
  ["01", "Property first", "Every good plan begins with the property: access, priorities, desired finish, and a realistic recurring scope."],
  ["02", "Scope made clear", "Customers should know what the routine includes, what happens with weather, and when seasonal work becomes its own line item."],
  ["03", "Service connected", "Calls, booking, text updates, scheduling, and payment follow-through move through one clear customer route."],
];

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="home-hero__image"><img src={heroImage} alt="Freshly striped Central Virginia suburban lawn in early morning light" /><div className="home-hero__wash" /></div>
          <div className="home-hero__copy">
            <div className="eyebrow eyebrow--light"><span>01</span> Midlothian · Chesterfield · Central Virginia</div>
            <h1>A better cut for the way you <em>live</em> &amp; work.</h1>
            <p>Beyond Cutz brings a clearer standard to recurring lawn and grounds care—built for homeowners, property managers, and the properties people notice first.</p>
            <div className="hero-actions"><Link href="/contact/" className="btn btn--green">Request a tailored quote <ArrowUpRight size={17} /></Link><Link href="#services" className="text-link text-link--light">Explore the standards <ArrowDownRight size={17} /></Link></div>
          </div>
          <div className="hero-index"><span>FIELD PLAN / 2026</span><i /><span>NOTHING GENERIC. NOTHING MISSED.</span></div>
          <div className="hero-footer"><div><span>DESIGNED FOR</span><p>Homes + managed grounds</p></div><div><span>OPERATIONS</span><p>Booking, calls &amp; service updates</p></div><div><span>LOCAL FOCUS</span><p>Midlothian + Chesterfield, VA</p></div></div>
        </section>

        <section className="intro-section layout-rail">
          <aside className="rail-label"><span>02</span><p>THE APPROACH</p></aside>
          <div className="intro-section__content"><p className="section-kicker">Not another task list</p><h2>Property care gets easier when the standard is visible.</h2><div className="intro-section__split"><p className="body-large">The strongest lawn-care experience is not a long service list. It is a plan that tells customers what happens next—before, during, and after every visit.</p><div className="check-cluster"><div><Check size={17} /><span>Defined recurring scope</span></div><div><Check size={17} /><span>Direct local answers</span></div><div><Check size={17} /><span>HighLevel-powered handoff</span></div></div></div></div>
        </section>

        <section className="service-section" id="services">
          <div className="section-head"><div className="eyebrow"><span>03</span> The work, organized</div><h2>Choose the path that fits the property.</h2><p>Each service page is built to answer the question behind the search, explain a useful next step, and route the right request into your operating system.</p></div>
          <div className="service-list">{services.map((service) => <Link href={service.href} className="service-row" key={service.href}><span className="service-row__index">{service.index}</span><div className="service-row__photo"><img src={service.image} alt="" /></div><div className="service-row__title"><h3>{service.name}</h3><p>{service.note}</p></div><span className="service-row__arrow"><MoveRight size={23} /></span></Link>)}</div>
        </section>

        <section className="proof-section">
          <div className="proof-section__image"><img src={commercialImage} alt="A well-maintained Central Virginia commercial landscape" /></div>
          <div className="proof-section__copy"><div className="eyebrow"><span>04</span> Care that carries through</div><h2>One property. One clear operating rhythm.</h2><p>A smart service site should help a homeowner decide quickly and give a property manager the detail they need to request a serious proposal. That means direct answers, real local proof, and a booking path that does not lose the lead.</p><Link href="/commercial-lawn-care/" className="text-link">See the commercial standard <ArrowRight size={17} /></Link></div>
          <div className="proof-section__marker"><Sparkles size={15} /><span>BUILD PROOF, NOT PROMISES</span></div>
        </section>

        <section className="principle-section"><div className="principle-section__headline"><div className="eyebrow eyebrow--light"><span>05</span> A service standard with substance</div><h2>Built to make the next decision <em>easy.</em></h2></div><div className="principle-list">{facts.map(([num, title, copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

        <section className="areas-section layout-rail"><aside className="rail-label"><span>06</span><p>WHERE WE WORK</p></aside><div className="areas-section__body"><div><p className="section-kicker">Central Virginia, deliberately</p><h2>Local enough to understand the property. Structured enough to keep it moving.</h2></div><div className="area-links"><Link href="/service-areas/midlothian-va/"><MapPin size={16} /><span>Midlothian, VA</span><ArrowUpRight size={18} /></Link><Link href="/service-areas/chesterfield-va/"><MapPin size={16} /><span>Chesterfield, VA</span><ArrowUpRight size={18} /></Link></div><p className="area-note">Expand only where Beyond Cutz can provide the same service quality and original project evidence. Strong local pages are useful because they are specific—not because they repeat city names.</p></div></section>

        <section className="field-notes-section"><div className="field-notes__head"><div><div className="eyebrow"><span>07</span> Field notes</div><h2>Local questions deserve more than generic answers.</h2></div><Link href="/resources/" className="text-link">View the editorial plan <ArrowRight size={17} /></Link></div><div className="note-grid"><article className="note-card note-card--image"><img src={seasonalImage} alt="Early autumn lawn in Central Virginia" /><div><span>SEASONAL</span><h3>When should you aerate and overseed in Midlothian?</h3><p>A high-value local topic to publish with true timing, local context, and your actual service availability.</p></div></article><article className="note-card"><span>COMMERCIAL</span><h3>What should a Richmond grounds-maintenance proposal include?</h3><p>Lead property managers through scope, cadence, communication, access, and seasonal priorities.</p><Link href="/resources/">Read the brief <ArrowRight size={17} /></Link></article><article className="note-card note-card--green"><span>HOMEOWNER</span><h3>What does a weekly lawn-care visit include?</h3><p>Explain the service standard in language a homeowner can use to compare options with confidence.</p><Link href="/resources/">Read the brief <ArrowRight size={17} /></Link></article></div></section>

        <section className="home-cta"><div><div className="eyebrow"><span>08</span> Begin at the property</div><h2>Tell us what the grounds need. We’ll map the next cut.</h2></div><Link href="/contact/" className="circle-link" aria-label="Plan your service"><ArrowDownRight size={38} /></Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}
