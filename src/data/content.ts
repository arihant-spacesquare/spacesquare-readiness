import blazLogo from "@/assets/blaz-logo.png";
import transphereLogo from "@/assets/transphere-logo.png";
import hvacLogo from "@/assets/hvac-logo.png";

export interface CaseStudy {
  slug: string;
  logo: string;
  company: string;
  link: string;
  tagline: string;
  desc: string;
  highlights: string[];
  industry: string;
  services: string[];
  detail: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "blaz-entertainment",
    logo: blazLogo,
    company: "Bläz Entertainment",
    link: "https://www.blaz.us/",
    tagline: "AI Tools + Mobile App (iOS & Android)",
    industry: "Nightlife & Events",
    services: ["Custom AI Tools & Apps", "Intelligent Workflows & AI Agents"],
    desc: "Built multiple AI-powered tools and a full-service mobile app to enhance event discovery, automate workflows, and boost attendee engagement for Detroit's premier nightlife brand.",
    highlights: [
      "Automated content and event-insight tools",
      "AI-assisted reservation + guest experience flow",
      "Mobile app launched on iOS & Android to drive participation",
    ],
    detail: [
      "Bläz runs a high-volume events calendar where the bottleneck was manual promotion and guest coordination. Every event required copywriting, scheduling, and follow-up handled by hand.",
      "We built AI tooling that drafts event content from a short brief, surfaces insights on which events and channels actually convert, and handles the reservation and guest-experience flow end to end.",
      "Alongside the tooling, we shipped a native mobile app on iOS and Android so attendees discover events, reserve tables, and stay engaged between nights out.",
    ],
  },
  {
    slug: "transphere",
    logo: transphereLogo,
    company: "Transphere Inc.",
    link: "https://www.transphereinc.com/",
    tagline: "Freight Forwarding Operations Automation",
    industry: "Logistics & Freight",
    services: ["Custom AI Tools & Apps", "Intelligent Workflows & AI Agents"],
    desc: "Developed a custom AI-powered web app to manage shipment lifecycle updates, automate customer notifications, and streamline day-to-day freight operations.",
    highlights: [
      "Faster shipment tracking visibility",
      "Instant customer notifications",
      "Smoother back-office workflow with fewer manual tasks",
    ],
    detail: [
      "Freight forwarding lives and dies on status updates. Transphere's team was chasing shipment states across email threads, spreadsheets, and carrier portals, then re-typing the same updates to customers.",
      "We built a single operations app that tracks the full shipment lifecycle, and layered automation on top so status changes trigger customer notifications the moment they happen.",
      "The result is a back office that spends its time on exceptions instead of data entry, and customers who stop asking 'where is my freight?'.",
    ],
  },
  {
    slug: "father-and-son-hvac",
    logo: hvacLogo,
    company: "Father & Son HVAC",
    link: "https://share.google/l7j74yKRN8frkQw5r",
    tagline: "AI Scheduling Assistant + Workflow Automation",
    industry: "Home Services",
    services: ["Intelligent Workflows & AI Agents"],
    desc: "Created an AI-powered assistant to simplify appointment scheduling, reminders, and technician operations for a local HVAC business.",
    highlights: [
      "Easy calendar + appointment management",
      "Real-time schedule updates & messaging",
      "Streamlined technician coordination",
    ],
    detail: [
      "A local HVAC operation was running its schedule out of a phone and a paper calendar, which meant missed calls, double bookings, and technicians driving inefficient routes.",
      "We built an AI scheduling assistant that books and confirms appointments, sends reminders, and keeps the calendar accurate in real time.",
      "Technicians see their day at a glance and get schedule changes pushed to them instantly, so dispatch stops being a full-time job.",
    ],
  },
];

export const services = [
  {
    slug: "ai-strategy",
    title: "AI Strategy & Roadmapping",
    short: "Identify high-impact AI opportunities and build a practical path to implementation.",
    body: "We audit your operations, quantify where AI can move revenue, cost, or time, and hand you a sequenced roadmap with success metrics attached to each initiative. No 40-slide decks — a shortlist you can start on Monday.",
    outcomes: ["Opportunity map ranked by ROI", "Feasibility and data readiness review", "Sequenced 90-day implementation plan"],
  },
  {
    slug: "intelligent-workflows",
    title: "Intelligent Workflows & AI Agents",
    short: "Automate tasks, surface insights, and make smarter decisions in real time.",
    body: "We replace the manual glue work between your systems with AI agents that handle intake, routing, notifications, and follow-up. They run inside the tools your team already uses, so adoption is not a project of its own.",
    outcomes: ["Fewer manual handoffs per process", "Real-time notifications and status", "Agents integrated with existing systems"],
  },
  {
    slug: "custom-ai-apps",
    title: "Custom AI Tools & Apps",
    short: "Internal tools and applications tailored to your specific business needs.",
    body: "When off-the-shelf software does not fit, we build the tool. Web apps, mobile apps, and internal dashboards — designed around your actual workflow and shipped fast enough to still be relevant.",
    outcomes: ["Web and native mobile applications", "Internal dashboards and ops tools", "Built around your workflow, not a template"],
  },
];

export const processSteps = [
  { step: "01", title: "Listen & Diagnose", desc: "Understand your bottlenecks and identify ROI opportunities." },
  { step: "02", title: "Design & Validate", desc: "Prototype quickly with clear success metrics defined upfront." },
  { step: "03", title: "Build & Integrate", desc: "Deliver AI tools that actually fit your existing workflows." },
  { step: "04", title: "Measure & Improve", desc: "Track results continuously and scale what works." },
];
