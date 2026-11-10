import Image from "next/image";
import Link from "next/link";
import { CallButtons, Estimate } from "@/components/Estimate";
import { services } from "@/lib/site";

const steps = [
  {
    title: "Call or text a photo",
    text: "Tell Chase what you're trying to do and where. A couple of photos of the ground go a long way.",
  },
  {
    title: "Get a clear price",
    text: "Estimates are free. You get the scope and the price plainly, before any dirt moves.",
  },
  {
    title: "The work gets done",
    text: "If the ground changes, the conversation happens before the work does.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          className="hero-media"
          src="/hero-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <video
          className="hero-media hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="wrap hero-copy">
          <p className="eyebrow eyebrow-dark">Owner-operated · Benton, Arkansas</p>
          <h1>Excavation and dirt work in Benton, Arkansas</h1>
          <p className="lede">
            French drains, septic digging, land clearing, grading, trenching, and site prep across
            Saline County and the rest of Arkansas. Call Chase Malone for a free estimate.
          </p>
          <CallButtons />
        </div>
      </section>

      <section id="services" className="section" aria-labelledby="services-h">
        <div className="wrap">
          <p className="eyebrow">What we do</p>
          <h2 id="services-h">Moving dirt, solving drainage, opening sites</h2>
          <ul className="cards">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link className="card" href={`/services/${s.slug}`}>
                  <span className="card-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="card-body">
                    <span className="card-name">{s.name}</span>
                    <span className="card-short">{s.short}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="also">Also: general dirt work. If it involves moving dirt, call and ask.</p>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="why-h">
        <div className="wrap why">
          <div>
            <p className="eyebrow eyebrow-dark">Why Malone</p>
            <h2 id="why-h">Talk directly to the operator</h2>
            <p className="why-copy">
              You work directly with Chase Malone. Based in Benton
              and built for Arkansas soil, drainage, slopes, clay, timber, and rough access.
            </p>
          </div>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Estimate />
    </>
  );
}
