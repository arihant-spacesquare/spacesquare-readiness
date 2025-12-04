import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import blazLogo from "@/assets/blaz-logo.png";
import transphereLogo from "@/assets/transphere-logo.png";
import hvacLogo from "@/assets/hvac-logo.png";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@spacesquare.dev?subject=Inquiry from ${formData.name} at ${formData.company}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    toast({
      title: "Opening email client",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={scrollToTop} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <div className="w-9 h-9 bg-foreground rounded-md flex items-center justify-center">
              <span className="text-background font-semibold text-sm">S²</span>
            </div>
            <span className="font-medium text-lg tracking-tight">Space Square</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">Services</button>
            <button onClick={() => scrollToSection("process")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">Process</button>
            <button onClick={() => scrollToSection("cases")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">Work</button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</button>
          </div>
          <Button onClick={() => scrollToSection("contact")} size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5">
            Get in touch
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">AI Consulting & Custom Software</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 max-w-4xl">
            AI that actually moves <em className="italic">the numbers.</em>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            We build AI solutions focused on real outcomes and ROI. No hype, no fluff—just tools that work and results you can measure.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base">
              Work with us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={() => scrollToSection("cases")} variant="ghost" size="lg" className="text-foreground hover:bg-transparent hover:text-muted-foreground h-12 text-base px-4">
              See our work →
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-6 mb-16">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Services</p>
              <h2 className="text-4xl md:text-5xl">What we do</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Outcome-focused services built to drive revenue, cut costs, and save time.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "AI Strategy & Roadmapping", desc: "Identify high-impact AI opportunities and build a practical path to implementation." },
              { num: "02", title: "Process Automation & Agents", desc: "Automate repetitive workflows with intelligent agents that handle tasks 24/7." },
              { num: "03", title: "Custom AI Tools & Apps", desc: "Build internal tools and applications tailored to your specific business needs." },
            ].map((service, i) => (
              <div key={i} className="pt-6 border-t border-border">
                <span className="text-xs text-muted-foreground font-medium">{service.num}</span>
                <h3 className="text-xl font-medium mt-4 mb-3 font-sans">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="process" className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-6 mb-16">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Process</p>
              <h2 className="text-4xl md:text-5xl">How we work</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Fast, practical, no over-engineering. We move quickly and measure everything.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Listen & Diagnose", desc: "Understand your bottlenecks and identify ROI opportunities." },
              { step: "02", title: "Design & Validate", desc: "Prototype quickly with clear success metrics defined upfront." },
              { step: "03", title: "Build & Integrate", desc: "Deliver AI tools that actually fit your existing workflows." },
              { step: "04", title: "Measure & Improve", desc: "Track results continuously and scale what works." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="text-xs text-muted-foreground font-medium">{item.step}</span>
                <h3 className="text-lg font-medium mt-4 mb-2 font-sans">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="cases" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-6 mb-16">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Work</p>
              <h2 className="text-4xl md:text-5xl">Real projects</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Here's how we're helping businesses automate, grow, and operate smarter.
              </p>
            </div>
          </div>
          <div className="space-y-0">
            {[
              { 
                logo: blazLogo, 
                company: "Bläz Entertainment",
                link: "https://www.blaz.us/",
                tagline: "AI Tools + Mobile App (iOS & Android)",
                desc: "Built multiple AI-powered tools and a full-service mobile app to enhance event discovery, automate workflows, and boost attendee engagement for Detroit's premier nightlife brand.",
                highlights: [
                  "AI-powered content automation + real-time event insights",
                  "Intelligent reservation and guest-experience flows",
                  "Cross-platform mobile app (iOS & Android) driving engagement"
                ]
              },
              { 
                logo: transphereLogo, 
                company: "Transphere Inc.",
                link: "https://www.transphereinc.com/",
                tagline: "Freight Forwarding Operations Automation",
                desc: "Developed a custom AI-powered web app to manage shipment lifecycle updates, automate customer notifications, and streamline day-to-day freight operations.",
                highlights: ["Faster shipment tracking visibility", "Instant customer notifications", "Smoother back-office workflow with fewer manual tasks"]
              },
              { 
                logo: hvacLogo, 
                company: "Father & Son HVAC",
                link: "https://share.google/l7j74yKRN8frkQw5r",
                tagline: "AI Scheduling Assistant + Workflow Automation",
                desc: "Created an AI-powered assistant to simplify appointment scheduling, reminders, and technician operations for a local HVAC business.",
                highlights: ["Easy calendar + appointment management", "Real-time schedule updates & messaging", "Streamlined technician coordination"]
              },
            ].map((item, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-6 py-10 border-b border-border last:border-b-0">
                <div className="md:col-span-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                    <img src={item.logo} alt={`${item.company} logo`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-lg font-medium font-sans text-foreground hover:text-primary transition-colors group"
                    >
                      {item.company}
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.tagline}</p>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="md:col-span-4">
                  <div className="space-y-2">
                    {item.highlights.map((highlight, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Get started</p>
            <h2 className="text-4xl md:text-5xl mb-6">Let's create something <em className="italic">valuable.</em></h2>
            <p className="text-muted-foreground text-lg">
              Reach out at{" "}
              <a href="mailto:info@spacesquare.dev" className="text-foreground underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors">
                info@spacesquare.dev
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-xl bg-background border border-border">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-foreground h-11 rounded-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-background border-border focus:border-foreground h-11 rounded-lg"
                  placeholder="Your company"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">What do you want to improve?</label>
              <Textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border focus:border-foreground resize-none rounded-lg"
                placeholder="Tell us about your challenges or goals..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90 h-11 rounded-lg text-base font-medium">
              <Mail className="mr-2 w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-foreground rounded-md flex items-center justify-center">
              <span className="text-background font-semibold text-xs">S²</span>
            </div>
            <span className="text-sm text-muted-foreground">© 2025 Space Square</span>
          </div>
          <a href="mailto:info@spacesquare.dev" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            info@spacesquare.dev
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;