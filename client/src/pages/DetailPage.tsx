/**
 * Precision Landscape Studio: Detail pages are editorial field plans, pairing direct answers
 * with local proof prompts and tightly scoped conversion paths rather than generic service grids.
 */
import { ArrowDownRight, ArrowUpRight, Check, MapPin, MoveRight, Sprout } from "lucide-react";
import { Link, useLocation } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const commercialImage = "/manus-storage/beyond-cutz-commercial_44a5a731.jpg";
const residentialImage = "/manus-storage/beyond-cutz-residential_3ec6b3ab.jpg";
const seasonalImage = "/manus-storage/beyond-cutz-seasonal_9034faa2.jpg";

type DetailData = {
  kind: "service" | "area";
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  shortAnswer: string;
  audience: string;
  standards: string[];
  questions: { question: string; answer: string }[];
  related: { title: string; href: string; note: string }[];
};

const details: Record<string, DetailData> = {
  "/residential-lawn-care/": {
    kind: "service", index: "01", eyebrow: "Residential care", title: "Your lawn’s weekly reset—without another thing on your list.",
    lead: "Beyond Cutz designs recurring lawn-care scopes around the way your property is used, the season in Central Virginia, and the standard you want to see each time you pull in.",
    image: residentialImage, imageAlt: "Freshly edged residential lawn and garden bed in Central Virginia",
    shortAnswer: "Residential lawn care is a recurring service plan that brings mowing, clean edges, a tidy finish, and seasonal priorities into one clear routine. Your exact scope should be confirmed before service begins.",
    audience: "For homeowners who want a dependable property standard and a simpler weekly routine.",
    standards: ["A scope written around your property—not a vague task list.", "A recurring visit rhythm that accounts for the season and growth conditions.", "A clean handoff after each service, with clear communication when weather changes the plan."],
    questions: [
      { question: "What can a recurring lawn-care plan include?", answer: "A plan can combine routine mowing, trimming, edging, cleanup, and seasonal work depending on the property and the services you select. The published scope should always match the work actually being performed." },
      { question: "How do weather delays work?", answer: "Virginia weather makes a clear rescheduling standard essential. Your customer workflow should confirm the updated service window by text and keep the property’s recurring schedule visible to the team." },
      { question: "Can you plan for HOA expectations?", answer: "Yes—document visible expectations, service days, access notes, and the desired finish during the initial walk-through so the routine is easy to manage." },
    ],
    related: [
      { title: "Lawn mowing", href: "/lawn-mowing/", note: "Visit standards + seasonal cadence" },
      { title: "Midlothian coverage", href: "/service-areas/midlothian-va/", note: "Local service-area plan" },
      { title: "Fall lawn prep", href: "/resources/", note: "A field-note topic to publish" },
    ],
  },
  "/commercial-lawn-care/": {
    kind: "service", index: "02", eyebrow: "Commercial grounds", title: "Grounds care that makes the property team look prepared.",
    lead: "Beyond Cutz gives commercial properties a more deliberate maintenance path: a clear walk-through, a defined scope, and communication built around the people accountable for the grounds.",
    image: commercialImage, imageAlt: "Professionally maintained Central Virginia commercial office landscape",
    shortAnswer: "Commercial lawn care is a coordinated grounds-maintenance plan for properties such as offices, retail centers, multifamily communities, and HOAs. A useful proposal explains service scope, cadence, access, and communication—not just a list of tasks.",
    audience: "For property managers, associations, and business owners who need a dependable exterior standard and an accountable service relationship.",
    standards: ["A site walk-through before a recurring proposal is finalized.", "Property-specific scope, access notes, and seasonal priorities documented for the team.", "A service communication path that separates urgent exterior issues from routine maintenance."],
    questions: [
      { question: "What should a commercial lawn-care proposal cover?", answer: "It should identify the property, the work areas, visit cadence, included tasks, seasonal services, weather handling, communications, and any approved exclusions. That clarity limits surprises later." },
      { question: "Which properties can use a grounds-maintenance plan?", answer: "Plans can be adapted for offices, retail, multifamily, HOA common areas, and other commercial grounds when the scope and access conditions are confirmed during a walk-through." },
      { question: "How should property managers request service?", answer: "A dedicated booking route lets the manager choose a site walk-through and send the property details to the right operational pipeline for follow-up." },
    ],
    related: [
      { title: "Landscape maintenance", href: "/landscape-maintenance/", note: "Ongoing site presentation" },
      { title: "Chesterfield coverage", href: "/service-areas/chesterfield-va/", note: "Service-area approach" },
      { title: "Commercial checklist", href: "/resources/", note: "A field-note topic to publish" },
    ],
  },
  "/lawn-mowing/": {
    kind: "service", index: "03", eyebrow: "Recurring mowing", title: "The cut is only the beginning of the standard.",
    lead: "A well-run mowing route is predictable, clean at the edges, and honest about weather. Beyond Cutz is designed to make the recurring service feel simple for the customer and structured for the crew.",
    image: residentialImage, imageAlt: "Crisp lawn edge beside a Central Virginia garden bed",
    shortAnswer: "Recurring lawn mowing is the scheduled cutting and finishing work that keeps a property consistently presentable during the growing season. The right cadence depends on grass growth, the weather, the property, and the agreed scope.",
    audience: "For customers who want a reliable mowing plan with no uncertainty about what happens after the crew leaves.",
    standards: ["A documented property profile before the first recurring visit.", "A published definition of the work included at each visit.", "A weather communication process that avoids silence when conditions shift."],
    questions: [
      { question: "How often should a lawn be mowed in Central Virginia?", answer: "There is no universal schedule. Growth rate, grass type, weather, and the finish standard matter. The best answer is a locally informed plan that can adapt during fast spring growth and slower summer periods." },
      { question: "What should customers expect after a mowing visit?", answer: "The answer should be stated in the service scope. Typical tasks may include the agreed mowing areas, trimming, defined edges, and a clean finish; your plan should name what is included and what is not." },
      { question: "Can I book online?", answer: "Yes—once the HighLevel calendar is connected, the site’s booking CTA can direct visitors to availability and place the request in the right customer workflow." },
    ],
    related: [
      { title: "Residential care", href: "/residential-lawn-care/", note: "A complete home routine" },
      { title: "Chesterfield coverage", href: "/service-areas/chesterfield-va/", note: "Local request path" },
      { title: "Summer cut height", href: "/resources/", note: "A field-note topic to publish" },
    ],
  },
  "/landscape-maintenance/": {
    kind: "service", index: "04", eyebrow: "Landscape maintenance", title: "A landscape plan should look considered between the big projects.",
    lead: "Beyond Cutz brings recurring attention to the parts of the property that shape first impressions: beds, edges, cleanup, seasonal presentation, and the small details that quickly turn into larger work when ignored.",
    image: seasonalImage, imageAlt: "Well-kept Central Virginia lawn with early autumn leaves",
    shortAnswer: "Landscape maintenance is the recurring care that keeps lawn edges, beds, plants, and seasonal cleanup from becoming a list of separate problems. A strong plan states exactly what is maintained, when, and to what standard.",
    audience: "For property owners and managers who need the whole exterior to feel coordinated—not just the lawn.",
    standards: ["A visual priority list informed by a walk-through.", "Seasonal service layers that are separate from the routine visit when appropriate.", "Scope boundaries documented before the work becomes a surprise."],
    questions: [
      { question: "What is the difference between lawn mowing and landscape maintenance?", answer: "Mowing centers on the turf routine. Landscape maintenance can extend to beds, pruning, cleanup, mulch coordination, and seasonal presentation. The work should be separated clearly in the proposal." },
      { question: "Can maintenance be tailored to a property?", answer: "Yes. Different homes, HOAs, and commercial sites need different attention. A property-specific scope prevents an overgeneralized package from setting the wrong expectations." },
      { question: "When should seasonal work be planned?", answer: "Plan around the property’s goals and the Central Virginia growing calendar early enough to keep options open. Publish a clear seasonal guide only when it reflects the services you actually provide." },
    ],
    related: [
      { title: "Commercial grounds", href: "/commercial-lawn-care/", note: "Property-manager service path" },
      { title: "Midlothian coverage", href: "/service-areas/midlothian-va/", note: "Local request path" },
      { title: "Fall prep", href: "/resources/", note: "A field-note topic to publish" },
    ],
  },
  "/service-areas/midlothian-va/": {
    kind: "area", index: "M", eyebrow: "Midlothian, Virginia", title: "A more intentional lawn-care route for Midlothian properties.",
    lead: "Beyond Cutz is built to serve Midlothian homeowners and property managers who want a polished exterior, direct communication, and a recurring plan that is easy to understand.",
    image: residentialImage, imageAlt: "Freshly edged residential landscape in Central Virginia",
    shortAnswer: "Beyond Cutz serves Midlothian, Virginia with residential and commercial lawn-care planning, recurring mowing, and landscape-maintenance pathways. Your exact address and scope should be confirmed before a service plan is scheduled.",
    audience: "For Midlothian properties looking for lawn-care communication that feels as orderly as the finished grounds.",
    standards: ["Address and access details captured before scheduling.", "A clear definition of the service route and recurring visit expectations.", "A local content plan that adds helpful answers—not empty neighborhood pages."],
    questions: [
      { question: "Do you serve neighborhoods across Midlothian?", answer: "Service availability should be confirmed by address during quote planning. The website should name only communities Beyond Cutz can genuinely serve and support with real project evidence." },
      { question: "Can I request a recurring plan in Midlothian?", answer: "Yes. A booking or quote form can collect the address, property type, service interest, and preferred follow-up before the team confirms an appropriate scope." },
      { question: "What local lawn-care topics should this page answer?", answer: "Keep answers useful and specific: mowing frequency, fall prep, weather handling, HOA considerations, what a visit includes, and how to request an estimate." },
    ],
    related: [
      { title: "Residential care", href: "/residential-lawn-care/", note: "Recurring homeowner plans" },
      { title: "Landscape maintenance", href: "/landscape-maintenance/", note: "Exterior presentation" },
      { title: "Field notes", href: "/resources/", note: "Local lawn questions" },
    ],
  },
  "/service-areas/chesterfield-va/": {
    kind: "area", index: "C", eyebrow: "Chesterfield, Virginia", title: "Chesterfield grounds care, planned with the property in mind.",
    lead: "Beyond Cutz provides a clear starting point for Chesterfield homes, HOA common areas, and commercial grounds: understand the property first, then build the recurring care path around it.",
    image: commercialImage, imageAlt: "Well-maintained commercial landscape in Chesterfield County",
    shortAnswer: "Beyond Cutz offers a Chesterfield service route for residential and commercial lawn-care planning. The business should confirm actual service eligibility, timing, and scope through a quote or walk-through—not a generic web form promise.",
    audience: "For Chesterfield property owners and managers who want a clear operational handoff from first request to recurring service.",
    standards: ["A walk-through or property review for scope-sensitive requests.", "A HighLevel-driven customer journey from quote request through communication.", "Original local proof added as projects are completed and approved for publication."],
    questions: [
      { question: "Can commercial properties in Chesterfield request a walk-through?", answer: "Yes. The commercial booking CTA should direct property managers into a dedicated site-walk-through calendar so the right details are captured at the start." },
      { question: "What should a Chesterfield lawn-care page include?", answer: "It should explain actual service availability, local decision questions, the booking path, and real property evidence. It should not rely on reused location copy." },
      { question: "How do I know whether Beyond Cutz serves my address?", answer: "Use the quote or booking route to submit the property address and service need. The operations team can then confirm availability and the right next step." },
    ],
    related: [
      { title: "Commercial grounds", href: "/commercial-lawn-care/", note: "Walk-through-first proposals" },
      { title: "Lawn mowing", href: "/lawn-mowing/", note: "Recurring cut standard" },
      { title: "Field notes", href: "/resources/", note: "Local lawn questions" },
    ],
  },
};

function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="eyebrow"><span>{index}</span>{children}</div>;
}

export function DetailPage() {
  const [location] = useLocation();
  const data = details[location] ?? details["/residential-lawn-care/"];
  const isResidential = data.index === "01";
  const isCommercial = data.index === "02";
  const contactLabel = data.kind === "service" && data.index === "02" ? "Request a site walk-through" : "Plan your service";

  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="detail-hero">
          <div className="detail-hero__copy">
            <Eyebrow index={data.index}>{data.eyebrow}</Eyebrow>
            <h1>{data.title}</h1>
            <p>{data.lead}</p>
            <Link href="/contact/" className="btn btn--green">{contactLabel}<ArrowUpRight size={17} /></Link>
          </div>
          <div className="detail-hero__image"><img src={data.image} alt={data.imageAlt} /></div>
        </section>

        <section className="answer-band">
          <div className="answer-band__label"><Sprout size={18} /> Direct answer</div>
          <p>{data.shortAnswer}</p>
        </section>

        {isResidential && <section className="residential-moment"><div className="residential-moment__photo"><img src={residentialImage} alt="Fresh lawn edge outside a Central Virginia home" /></div><div className="residential-moment__copy"><Eyebrow index="HOME">The return-home standard</Eyebrow><h2>Come home to a lawn that already feels handled.</h2><p>A homeowner does not need more service jargon. They need a clear routine, thoughtful edges, a tidy finish, and a straightforward message when the weather asks the schedule to move.</p><div className="residential-moment__notes"><span>Driveway + entry focus</span><span>Clear recurring rhythm</span><span>Calm weather updates</span></div></div></section>}

        {isCommercial && <section className="commercial-proof"><div className="commercial-proof__copy"><Eyebrow index="SITE">The property-manager view</Eyebrow><h2>Presentation, communication, and a grounds plan people can follow.</h2><p>Commercial grounds work should make the exterior feel looked after while making the management process feel easier: clear standards, useful notes, and a predictable next contact.</p><div className="commercial-proof__signals"><div><span>01</span><strong>Presentation</strong><small>Street-facing detail and property arrival experience.</small></div><div><span>02</span><strong>Communication</strong><small>A clear route for requests, updates, and approvals.</small></div><div><span>03</span><strong>Accountability</strong><small>A defined scope that keeps expectations visible.</small></div></div></div><div className="commercial-proof__photo"><img src={commercialImage} alt="Maintained lawn at a Central Virginia commercial property" /><span>PROPERTY STANDARD / ON DISPLAY</span></div></section>}

        <section className="detail-section layout-rail">
          <aside className="rail-label"><span>01</span><p>THE STANDARD</p></aside>
          <div className="detail-section__body">
            <p className="section-kicker">A better recurring routine</p>
            <h2>Clear enough to quote. Deliberate enough to keep.</h2>
            <p className="body-large">{data.audience}</p>
            <div className="standard-list">
              {data.standards.map((standard, index) => <div key={standard}><span>0{index + 1}</span><p>{standard}</p><Check size={18} /></div>)}
            </div>
          </div>
        </section>

        <section className="detail-section detail-section--paper layout-rail">
          <aside className="rail-label"><span>02</span><p>FIELD QUESTIONS</p></aside>
          <div className="detail-section__body">
            <p className="section-kicker">Useful before you book</p>
            <h2>Answers that help someone make the next decision.</h2>
            <div className="question-list">
              {data.questions.map((item, index) => (
                <article key={item.question} className="question-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{item.question}</h3><p>{item.answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="related-section">
          <div className="related-section__head"><Eyebrow index="03">Keep the plan moving</Eyebrow><h2>Map the next pass.</h2></div>
          <div className="related-grid">
            {data.related.map((item, index) => (
              <Link href={item.href} key={item.href} className="related-link">
                <span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.note}</p></div><MoveRight size={20} />
              </Link>
            ))}
          </div>
        </section>

        <section className="detail-cta">
          <div><Eyebrow index="04">Start with the property</Eyebrow><h2>Tell us what the grounds need. We’ll make the next step clear.</h2></div>
          <Link href="/contact/" className="circle-link" aria-label={contactLabel}><ArrowDownRight size={35} /></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
