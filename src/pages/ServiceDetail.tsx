import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import { services } from "@/data/content";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound />;

  return (
    <Layout>
      <Seo
        title={`${service.title} | Space Square`}
        description={service.short}
        path={`/services/${service.slug}`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.short,
            provider: { "@type": "Organization", name: "Space Square", url: "https://spacesquare.dev" },
            areaServed: "Worldwide",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://spacesquare.dev/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://spacesquare.dev/services" },
              { "@type": "ListItem", position: 3, name: service.title, item: `https://spacesquare.dev/services/${service.slug}` },
            ],
          },
        ]}
      />
      <article className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" /> All services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">{service.short}</p>
          <p className="text-foreground/85 leading-relaxed mb-10">{service.body}</p>

          <h2 className="text-xl font-bold mb-4">What you get</h2>
          <ul className="space-y-3 mb-12">
            {service.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/85">{o}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold mb-3">Think this fits?</h2>
            <p className="text-muted-foreground mb-6">Send us a short description of the problem. We'll tell you honestly whether it's worth doing.</p>
            <Button asChild className="glow">
              <Link to="/contact">Get in touch <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ServiceDetail;
