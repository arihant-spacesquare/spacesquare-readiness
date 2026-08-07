import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/content";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const item = caseStudies.find((c) => c.slug === slug);
  if (!item) return <NotFound />;

  return (
    <Layout>
      <Seo
        title={`${item.company} — ${item.tagline} | Space Square`}
        description={item.desc}
        path={`/work/${item.slug}`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${item.company} — ${item.tagline}`,
            description: item.desc,
            about: item.industry,
            author: { "@type": "Organization", name: "Space Square" },
            publisher: { "@type": "Organization", name: "Space Square", url: "https://spacesquare.dev" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://spacesquare.dev/" },
              { "@type": "ListItem", position: 2, name: "Work", item: "https://spacesquare.dev/work" },
              { "@type": "ListItem", position: 3, name: item.company, item: `https://spacesquare.dev/work/${item.slug}` },
            ],
          },
        ]}
      />
      <article className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <Link to="/work" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" /> All case studies
          </Link>
          <img src={item.logo} alt={`${item.company} logo`} className="w-16 h-16 rounded-2xl object-cover mb-6" />
          <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-3">{item.industry}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{item.company}</h1>
          <p className="text-primary font-medium mb-8">{item.tagline}</p>

          <div className="space-y-5 mb-12">
            {item.detail.map((p) => (
              <p key={p} className="text-foreground/85 leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <div className="rounded-3xl surface border border-border p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/70 mb-4">Outcomes</h2>
              <ul className="space-y-3">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl surface border border-border p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/70 mb-4">Services used</h2>
              <ul className="space-y-2 text-sm text-foreground/85">
                {item.services.map((s) => <li key={s}>{s}</li>)}
              </ul>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-5 text-sm text-primary hover:underline">
                Visit {item.company} <ArrowRight className="w-4 h-4 -rotate-45" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold mb-3">Got a similar problem?</h2>
            <p className="text-muted-foreground mb-6">We scope fast and tell you upfront whether it's worth building.</p>
            <Button asChild className="glow">
              <Link to="/contact">Work with us <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseStudyPage;
