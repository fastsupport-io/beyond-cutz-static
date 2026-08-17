/**
 * Precision Landscape Studio: Resources function as a field journal—useful local answers with
 * a measured editorial hierarchy, never a thin keyword archive or generic blog-card collection.
 */
import { ArrowRight, CalendarDays, MapPin, Search } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const seasonalImage = "/manus-storage/beyond-cutz-seasonal_9034faa2.jpg";
const topics = [
  ["01", "Fall", "When Should You Aerate and Overseed a Lawn in Midlothian?", "Build this with actual scheduling availability, your local field experience, and a clear distinction between general guidance and a property-specific recommendation."],
  ["02", "Mowing", "What Does Weekly Lawn Care Include in Chesterfield?", "Explain the real recurring scope, the service cadence, weather communication, property-access requirements, and how customers can ask about exclusions."],
  ["03", "Commercial", "A Grounds-Maintenance Checklist for Richmond Property Managers", "Create a practical walk-through guide that covers property priorities, scope, seasonal needs, response expectations, and the proposal process."],
  ["04", "Summer", "How High Should Grass Be Cut in Central Virginia?", "Use a careful answer that reflects actual grass types and site conditions; do not turn one general height into a universal prescription."],
  ["05", "HOA", "How to Plan HOA-Ready Landscape Maintenance", "Give associations a concise explanation of recurring scope, documentation, service-day coordination, and change-approval boundaries."],
  ["06", "Cleanup", "How a Fall Lawn-Cleanup Plan Comes Together", "Connect cleanup decisions to the property’s needs and services that Beyond Cutz actually offers, with original seasonal photos from the route."],
] as const;

export function ResourcesPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="journal-hero">
          <div><div className="eyebrow"><span>FIELD</span> Central Virginia lawn notes</div><h1>Useful answers from the edge of the lawn.</h1></div>
          <p>Seasonal lawn questions are rarely one-size-fits-all. These field notes organize the practical decisions homeowners and property teams face around mowing, seasonal priorities, and a property’s everyday presentation.</p>
        </section>
        <section className="featured-note">
          <img src={seasonalImage} alt="Well-kept Central Virginia lawn transitioning into autumn" />
          <div><span className="tag">FEATURED SEASONAL NOTE</span><h2>Fall is the time to give a Central Virginia lawn its next strong start.</h2><p>Use the fall season to take stock of the lawn’s condition, recurring maintenance plan, and the work that will make spring feel less reactive. A property-specific service plan starts with what is visible on the ground now.</p><Link href="/contact/">Ask about fall service <ArrowRight size={17} /></Link></div>
        </section>
        <section className="journal-index">
          <div className="journal-index__intro"><span>LOCAL FIELD NOTES</span><h2>Content that earns attention by being genuinely specific.</h2><p>These are the questions Central Virginia property owners ask when they want to understand the work, plan ahead, and keep their exterior looking intentional between bigger projects.</p></div>
          <div className="journal-list">
            {topics.map(([num, category, title, note]) => <article key={num} className="journal-row"><span className="journal-row__number">{num}</span><span className="journal-row__category">{category}</span><div><h3>{title}</h3><p>{note}</p></div><Link href="/contact/" aria-label={`Plan content about ${title}`}><ArrowRight size={20} /></Link></article>)}
          </div>
        </section>
        <section className="resource-method">
          <div className="resource-method__icon"><Search size={28} /></div>
          <div><span className="tag">A CLEARER WAY TO ASK</span><h2>Lead with the answer. Support it with local proof.</h2><p>Start with the practical answer, then add the context that changes the decision: the property type, the time of year, the agreed service scope, and the next useful step. Good lawn-care guidance should leave a customer more certain, not more sold to.</p></div>
          <div className="resource-method__facts"><div><MapPin size={16} /><span>PLACE</span><p>Only claim service areas you can genuinely serve.</p></div><div><CalendarDays size={16} /><span>FRESHNESS</span><p>Review seasonal articles before each relevant season.</p></div></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
