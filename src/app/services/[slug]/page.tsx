import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallButtons, Estimate } from "@/components/Estimate";
import { SITE, byslug, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = byslug((await params).slug);
  if (!s) return {};
  const url = `${SITE}/services/${s.slug}`;
  const description = `${s.short} Owner-operated by Chase Malone, based in Benton, AR. Call (870) 883-0599 for a free estimate.`;
  return {
    title: `${s.title} | Malone Excavation`,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${s.title} | Malone Excavation`, description, url },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = byslug((await params).slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.name,
      url: `${SITE}/services/${s.slug}`,
      description: s.intro,
      provider: { "@id": `${SITE}/#business` },
      areaServed: { "@type": "State", name: "Arkansas" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: s.name, item: `${SITE}/services/${s.slug}` },
      ],
    },
  ];

  return (
    <>
      <section className="svc-hero">
        <div className="wrap svc-hero-grid">
          <div>
            <p className="crumbs">
              <Link href="/">Home</Link> / <Link href="/#services">Services</Link>
            </p>
            <h1>{s.title}</h1>
            <p className="lede">{s.intro}</p>
            <CallButtons />
          </div>
          <Image className="svc-photo" src={s.image} alt={s.alt} width={1280} height={720} sizes="(max-width: 820px) 100vw, 520px" priority />
        </div>
      </section>

      <section className="section">
        <div className="wrap svc-body">
          <div className="svc-signs">
            <h2>{s.signs.heading}</h2>
            <ul>
              {s.signs.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="svc-text">
            {s.body.map((b) => (
              <div key={b.heading}>
                <h2>{b.heading}</h2>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="faq-h">
        <div className="wrap">
          <h2 id="faq-h">Questions</h2>
          <div className="faqs">
            {s.faq.map((f) => (
              <div key={f.q} className="faq">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Estimate heading={`Free estimate for ${s.name.toLowerCase()}`} />

      <section className="section" aria-labelledby="more-h">
        <div className="wrap">
          <h2 id="more-h" className="small-h">Other work Chase does</h2>
          <ul className="more">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`}>{o.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
