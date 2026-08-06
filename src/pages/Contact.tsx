import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import ContactForm from "@/components/ContactForm";

const Contact = () => (
  <Layout>
    <Seo
      title="Contact Space Square — AI Consulting Enquiries"
      description="Tell us what's slow, manual, or expensive in your business. Space Square replies within 24 hours at info@spacesquare.dev."
      path="/contact"
      schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Space Square",
        url: "https://spacesquare.dev/contact",
      }}
    />
    <section className="px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden="true" />
      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">Get started</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's create something that delivers 10× value.</h1>
          <p className="text-muted-foreground text-lg">
            Drop us a line at{" "}
            <a href="mailto:info@spacesquare.dev" className="text-primary hover:underline font-medium">info@spacesquare.dev</a>
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  </Layout>
);

export default Contact;
