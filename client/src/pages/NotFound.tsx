/** Precision Landscape Studio: The not-found state retains the field-plan language and gives visitors a decisive path back into the local service experience. */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function NotFound() {
  return <div className="page-shell"><SiteHeader /><main className="not-found"><span>404 / OFF THE ROUTE</span><h1>That patch of ground isn’t mapped yet.</h1><p>Head back to the Beyond Cutz field plan and find the service or service area you need.</p><Link href="/" className="btn btn--green">Return home <ArrowUpRight size={17} /></Link></main><SiteFooter /></div>;
}
