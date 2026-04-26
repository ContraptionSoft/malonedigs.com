import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32"
      style={{ background: "#0F2032" }}
    >
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #3BAEAE, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Logo / visual */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Offset frame */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full"
                style={{
                  border: "2px solid rgba(59,174,174,0.2)",
                  borderRadius: "2px",
                }}
              />
              <div
                className="relative flex items-center justify-center p-12"
                style={{
                  background: "rgba(22,37,57,0.8)",
                  border: "1px solid rgba(59,174,174,0.15)",
                  borderRadius: "2px",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Malone Excavation"
                  width={240}
                  height={240}
                  style={{ width: "clamp(160px, 20vw, 240px)", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span
              className="inline-block mb-4 text-xs tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-oswald)",
                color: "#3BAEAE",
                letterSpacing: "0.3em",
              }}
            >
              About
            </span>
            <h2
              className="mb-4 leading-none"
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                color: "#FFFFFF",
                letterSpacing: "0.03em",
              }}
            >
              MEET
              <br />
              <span style={{ color: "#3BAEAE" }}>CHASE MALONE</span>
            </h2>
            <div
              className="mb-8"
              style={{ width: 48, height: 2, background: "#3BAEAE" }}
            />

            <div
              className="space-y-5"
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "1rem",
                color: "#8FA0AD",
                lineHeight: 1.8,
              }}
            >
              <p>
                Chase Malone grew up in Arkansas, and he&apos;s spent his career
                learning the ground — how it behaves, how it drains, how it holds
                after you move it around. That knowledge doesn&apos;t come from a classroom.
                It comes from years of seat time in the cab and jobs that demanded
                precision.
              </p>
              <p>
                Malone Excavation was built on a straightforward idea: be the contractor
                you wish you could always hire. Show up when you say you will, do the
                work right the first time, and give your customers a straight answer
                when they have a question.
              </p>
              <p>
                Whether you&apos;re a homeowner dealing with a drainage problem, a builder
                starting a subdivision, or a developer turning raw land into something
                useful — Chase brings the same approach to every job.
              </p>
            </div>

            {/* Quick facts */}
            <div
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {[
                { label: "Based In", value: "Benton, AR" },
                { label: "Established", value: "2026" },
                { label: "Coverage", value: "Statewide" },
                { label: "Estimates", value: "Free & Fast" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="p-4"
                  style={{
                    border: "1px solid rgba(59,174,174,0.15)",
                    borderRadius: "2px",
                    background: "rgba(13,27,42,0.4)",
                  }}
                >
                  <div
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      color: "rgba(59,174,174,0.7)",
                      letterSpacing: "0.2em",
                      fontSize: "0.65rem",
                    }}
                  >
                    {fact.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#FFFFFF",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
