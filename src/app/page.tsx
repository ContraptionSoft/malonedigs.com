import Image from "next/image";

const services = [
  "French drains and drainage correction",
  "Septic tank digging and site prep",
  "Land clearing and cleanup",
  "Pool excavation",
  "Grading, trenching, and dirt work",
  "Pads, driveways, and general land development",
];

const strengths = [
  {
    title: "Experienced operator",
    description:
      "Chase Malone brings the kind of seat time and machine control that keeps a job moving without tearing up more ground than necessary.",
  },
  {
    title: "Straight answers",
    description:
      "No fancy sales routine. Just clear communication about the work, the site conditions, and what it will take to get it done right.",
  },
  {
    title: "Arkansas jobsite ready",
    description:
      "Based in Benton and available across Arkansas for residential, rural, and light commercial excavation work.",
  },
];

const areas = ["Benton", "Little Rock metro", "Central Arkansas", "Statewide Arkansas projects"];

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(44,170,182,0.24),_transparent_26%),linear-gradient(180deg,#081521_0%,#0d2230_58%,#122c3a_100%)] text-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 lg:px-12">
          <header className="flex flex-col gap-5 rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between md:px-7">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Malone Excavation logo"
                width={54}
                height={54}
                className="h-12 w-auto"
                priority
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  Malone Excavation
                </p>
                <p className="text-sm text-slate-300">Benton, Arkansas · Work available statewide</p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#service-area" className="transition hover:text-white">
                Service Area
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[var(--accent)] px-4 py-2 font-medium text-white transition hover:bg-[var(--accent)] hover:text-slate-950"
              >
                Get an estimate
              </a>
            </nav>
          </header>

          <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                Heavy equipment work done the right way
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Excavation, drainage, and land work for Arkansas property owners who need dependable results.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Malone Excavation helps homeowners, landowners, and builders get dirt work handled professionally —
                from French drains and septic digging to site prep, grading, pool excavation, and clearing land.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:501-555-0147"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]"
                >
                  Call / text for an estimate
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/8"
                >
                  See services
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-300">
                Placeholder contact info shown for now. Swap with Chase’s real phone and email before launch.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="rounded-[1.5rem] bg-white px-6 py-8 text-slate-900">
                <div className="flex justify-center">
                  <Image
                    src="/logo.png"
                    alt="Malone Excavation shield logo"
                    width={220}
                    height={480}
                    className="h-auto w-[150px] sm:w-[180px]"
                  />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Based in</p>
                    <p className="mt-2 text-lg font-bold">Benton, Arkansas</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Coverage</p>
                    <p className="mt-2 text-lg font-bold">Anywhere in Arkansas</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Known for</p>
                    <p className="mt-2 text-lg font-bold">Drainage, septic, grading, excavation, and land clearing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">Services</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Dirt work and excavation services built around real property needs.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you are fixing drainage problems, prepping a homesite, or clearing land for the next phase of a project,
            Malone Excavation brings the equipment skill and straightforward jobsite mindset to get it handled.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(8,21,33,0.06)]"
            >
              <div className="mb-4 h-1.5 w-16 rounded-full bg-[var(--accent)]" />
              <h3 className="text-xl font-bold text-slate-950">{service}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Clean work, practical site judgment, and the kind of operator care that keeps the project moving.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">Why choose Malone Excavation</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                The kind of operator you call when the work needs to be done carefully and correctly.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Good excavation work is not just about having equipment. It is about reading the site, respecting the property,
                and doing solid work without wasting time or leaving a mess behind.
              </p>
            </div>

            <div className="grid gap-5">
              {strengths.map((strength) => (
                <div key={strength.title} className="rounded-[1.75rem] bg-white p-6 shadow-[0_20px_50px_rgba(8,21,33,0.08)]">
                  <h3 className="text-xl font-bold text-slate-950">{strength.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">About Chase Malone</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight">A strong operator with a practical feel for the work.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Chase Malone is based in Benton and takes a straightforward approach to excavation work: show up, communicate clearly,
              run equipment well, and leave the customer with a job that was done right. Malone Excavation is built for property owners
              who want capable dirt work without the runaround.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Projects</p>
              <p className="mt-3 text-2xl font-black text-slate-950">Residential, rural, and light development work</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Approach</p>
              <p className="mt-3 text-2xl font-black text-slate-950">Professional, direct, and easy to work with</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 p-6 sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Typical work</p>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                Drainage fixes, septic tank excavation, lot prep, trenching, grading, clearing, and heavy equipment work where precision matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="service-area" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Service area</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Based in Benton. Available across Arkansas.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Malone Excavation serves Benton and the surrounding Central Arkansas area, while also taking on work anywhere in the state when the project is a fit.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {areas.map((area) => (
                <div key={area} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 text-lg font-semibold text-white">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#153849_0%,#235164_55%,#2c7f8d_100%)] px-8 py-10 text-white shadow-[0_30px_80px_rgba(8,21,33,0.18)] md:px-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Get in touch</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Need excavation or site work in Arkansas?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100/90">
                Reach out for a quote, talk through the job, and see if Malone Excavation is the right fit for the work.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 text-slate-950">
              <div className="space-y-4 text-base leading-7">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Phone / text</p>
                  <a href="tel:501-555-0147" className="mt-1 block text-2xl font-black text-slate-950">
                    (501) 555-0147
                  </a>
                  <p className="text-sm text-slate-500">Placeholder — replace with Chase’s real number</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
                  <a href="mailto:info@malonedigs.com" className="mt-1 block text-lg font-bold text-slate-950">
                    info@malonedigs.com
                  </a>
                  <p className="text-sm text-slate-500">Placeholder — replace with live contact email if different</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Location</p>
                  <p className="mt-1 text-lg font-bold">Benton, Arkansas</p>
                  <p className="text-sm text-slate-500">Serving clients across Arkansas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <p>© {new Date().getFullYear()} Malone Excavation. All rights reserved.</p>
          <p>Professional excavation and heavy equipment work out of Benton, Arkansas.</p>
        </div>
      </footer>
    </main>
  );
}
