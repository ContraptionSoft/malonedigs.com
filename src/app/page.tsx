import Image from "next/image";
import { Job, ContactPlanes, type JobSpec } from "@/components/Job";

const services = [
  "French drains",
  "Septic digging",
  "Land clearing",
  "Grading",
  "Trenching",
  "Site prep",
  "General dirt work",
  "Land development",
];

const marks = ["Owner-operated", "Free estimates"];

const jobs: JobSpec[] = [
  {
    image: "/grading.jpg",
    alt: "A dozer shaping a graded pad",
    crop: "50% 52%",
    ground: "84% 24%",
    caption: "Grading & pad work",
  },
  {
    image: "/land_clearing.jpg",
    alt: "Timber and brush cleared off raw acreage",
    crop: "50% 48%",
    ground: "92% 80%",
    caption: "Land clearing",
  },
  {
    image: "/septic_digging.jpg",
    alt: "An excavator cutting a septic trench",
    crop: "50% 55%",
    ground: "70% 8%",
    caption: "Septic, trenching & drainage",
  },
];

const PHONE = "(870) 883-0599";
const TEL = "tel:+18708830599";

export default function Home() {
  return (
    <>
      <header className="bar">
        <div className="wrap">
          <a className="brand" href="#top" aria-label="Malone Excavation home">
            <Image src="/logo-light.png" alt="Malone Excavation" width={1581} height={626} priority />
          </a>
          <nav aria-label="Primary navigation">
            <a className="nav-call" href={TEL}>
              {PHONE}
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.jpg"
            aria-hidden="true"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="wrap hero-copy">
            <h1>
              <Image
                className="hero-logo"
                src="/logo-light.png"
                alt="Malone Excavation - dirt work with a clean finish"
                width={1581}
                height={626}
                priority
              />
            </h1>
            <p className="tag">Benton, Arkansas</p>
            <p className="lede">
              Excavation, drainage, clearing, grading, and site prep across Arkansas
            </p>
            <div className="actions">
              <a className="plate" href={TEL}>
                {PHONE}
              </a>
            </div>
            <p className="trust" aria-label="Company details">
              {marks.map((mark, i) => (
                <span key={mark} className="trust-item">
                  {i > 0 && <span className="diamond" aria-hidden="true" />}
                  {mark}
                </span>
              ))}
            </p>
          </div>
        </section>

        <Job index={0} job={jobs[0]} />

        <section id="services" className="paper">
          <div className="wrap">
            <p className="eyebrow">What we do</p>
            <h2>Moving dirt, solving drainage, opening sites</h2>
            <div className="service-list">
              {services.map((service) => (
                <p key={service}>{service}</p>
              ))}
            </div>
          </div>
        </section>

        <Job index={1} job={jobs[1]} />

        <section className="paper proof">
          <div className="wrap proof-grid">
            <div>
              <p className="eyebrow">Why Malone</p>
              <h2>Talk directly to the operator</h2>
            </div>
            <div className="proof-copy">
              <p>
                You work directly with Chase Malone. The scope is clear, the price is clear,
                and if the ground changes the conversation happens before the work does.
              </p>
              <p>
                Based in Benton and built for Arkansas soil, drainage, slopes, clay,
                timber, and rough access.
              </p>
            </div>
          </div>
        </section>

        <Job index={2} job={jobs[2]} />

        <section id="contact" className="contact">
          <ContactPlanes />
          <div className="wrap">
            <p className="tag">Free estimates</p>
            <h2>Tell us what needs dug</h2>
            <a className="phone" href={TEL}>
              {PHONE}
            </a>
            <p className="meta">Serving Benton, Saline County, and job sites across Arkansas</p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <Image
            src="/logo-light.png"
            alt="Malone Excavation"
            width={1581}
            height={626}
          />
          <p>Malone Excavation - Benton, Arkansas</p>
        </div>
      </footer>
    </>
  );
}
