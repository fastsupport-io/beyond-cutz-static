# Beyond Cutz WordPress + HighLevel Handoff

## Recommended Build Boundary

WordPress should be the **public content and local-discovery layer**: editable service pages, service-area content, resource posts, technical SEO, analytics, and brand presentation. GoHighLevel should remain the **operational customer layer**: calls, forms, inbound messaging, appointment routing, contact records, estimates, payments, and post-service automation. This separation keeps SEO content crawlable and gives the team one source of truth for leads and customer communications.

| Customer action | WordPress role | HighLevel role | Setup needed before launch |
| --- | --- | --- | --- |
| Call now | Click-to-call button with the assigned service number | Call tracking, routing, and call outcomes | Final tracked number and business hours |
| Request a quote | Styled CTA opens embedded form or dedicated booking page | Form capture, pipeline stage, owner assignment, auto-text response | Form/calender embed snippet, field mapping, consent language |
| Schedule a site walk-through | Dedicated commercial CTA opens calendar | Calendar availability, appointment reminders, calendar owner | Commercial calendar embed snippet |
| Chat/text us | WordPress loads one sitewide chat script | Webchat/SMS/WhatsApp conversation and workflow | Chat widget script and approved welcome message |
| Pay an approved invoice | Secure CTA links to payment page | Invoice/payment process | Payment URL and terms/privacy links |

## WordPress Page Components

Build the live WordPress experience as reusable blocks or a light custom block theme:

| Component | Editable fields | Where used |
| --- | --- | --- |
| Service Hero | Eyebrow, H1, short answer, image, CTA label/URL | Home, service, location pages |
| Scope Standard | Included task list, cadence, caveats | Service pages |
| Property-Type Panel | Audience, pain point, service outcome, walk-through CTA | Commercial page |
| Local Proof Module | Actual area, project details, owner-approved image, date | Location and service pages |
| Question Block | User question, concise answer, supporting detail | Service pages and resource posts |
| Booking Panel | Heading, reassurance, HighLevel calendar/form embed location | Contact and conversion areas |
| Resource Teaser | Category, title, real author, summary, image | Home and service pages |

## HighLevel Integration Checklist

HighLevel supports calendar embedding by copying a calendar’s **Share → Embed Code** output into a custom-code element. [1] Its chat widget supports live chat, SMS, and WhatsApp where enabled; HighLevel notes that SMS replies require a purchased number and completed A2P registration in the sub-account. [2]

1. Finalize the public display phone number and ensure the HighLevel call routing is tested.
2. Create separate tags or pipeline sources for `website-organic`, `website-paid`, `website-chat`, `residential`, and `commercial`.
3. Use hidden fields to capture landing page URL, UTM source/medium/campaign, service interest, and requested city. Do not ask visitors to type tracking data.
4. Map quote requests to a qualification pipeline with an immediate, consent-aware acknowledgement and a human follow-up task.
5. Create separate residential-estimate and commercial-walk-through calendars if their appointment rules differ.
6. Add HighLevel’s chat script sitewide after consent/privacy language is approved; set the widget’s universal greeting carefully because the official documentation notes its messaging is not dynamic per page. [2]
7. Test one complete path on desktop and mobile: call, form, calendar confirmation, text acknowledgement, owner notification, and payment link.

## Required Business Data Before Publishing

The reference implementation intentionally avoids inventing customer-facing business facts. Supply and verify the following before a WordPress launch:

| Required item | Why it matters |
| --- | --- |
| Legal business name and DBA | Footer, site identity, LocalBusiness schema, citations |
| Physical address or legitimate service-area policy | Google Business Profile and local schema; do not use a fictitious address |
| Final phone number and monitored email | Conversion, citations, customer communication |
| Actual opening hours and seasonal availability | Customer expectation and structured data |
| Confirmed services and exclusions | Scope tables, service pages, lead qualification |
| Insurance/licensing/certification facts, if any | Trust content only where true and verifiable |
| Real photos and project details | Prominence, trust, content originality |
| HighLevel calendar, form, chat, and payment URLs/scripts | Functional customer handoff |
| Privacy policy, terms, and SMS consent language | Compliance and lead-capture transparency |

## References

[1] [HighLevel — Embedding HighLevel Calendars using HTML Code](https://help.gohighlevel.com/support/solutions/articles/48000982201-embedding-highlevel-calendars-using-html-code)  
[2] [HighLevel — How to Install HighLevel’s Chat Widget](https://help.gohighlevel.com/support/solutions/articles/48000984860-how-to-install-highlevel-s-chat-widget)

