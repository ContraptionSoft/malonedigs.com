"use client";

import { useEffect, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

/**
 * A full-bleed band split on a hard seam: the job photograph on the outer side,
 * a graded-ground plane on the copy side. Both run edge to edge and drift at
 * different speeds, so the seam holds while the two planes slide past it.
 *
 * speed is react-scroll-parallax's shorthand for a scroll-linked translateY of
 * +/-(speed x 10)px. The split has to be an inline style: the library writes
 * left:0;right:0 on every layer, so the stylesheet only reaches it with
 * !important (which is what the narrow-screen rule does).
 *
 * The banner only ever holds the moving planes. Its children mount after an
 * effect, so the caption stays a sibling of it and ships in the server HTML.
 */

export type JobSpec = {
  image: string;
  alt: string;
  crop: string;
  ground: string;
  caption: string;
};

const SPLIT = "44%";
const MOBILE = "(max-width: 820px)";
const PLANES = { position: "absolute", inset: 0, height: "100%" } as const;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(MOBILE);
    const update = () => setIsMobile(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function Job({ index, job }: { index: number; job: JobSpec }) {
  const flip = index % 2 === 1;
  const isMobile = useIsMobile();

  const layers = [
    {
      image: job.image,
      speed: isMobile ? -9 : -14,
      className: "job-photo",
      style: {
        backgroundPosition: job.crop,
        ...(isMobile ? {} : { [flip ? "right" : "left"]: SPLIT }),
      },
      role: "img",
      "aria-label": job.alt,
    },
    // ponytail: one aerial of graded ground, read at a different crop per band --
    // three bands instead of three copies of the same picture
    ...(isMobile
      ? []
      : [
          {
            image: "/site_prep.jpg",
            speed: -38,
            className: "job-ground",
            style: {
              backgroundPosition: job.ground,
              backgroundSize: "170% auto",
              [flip ? "left" : "right"]: `${100 - parseFloat(SPLIT)}%`,
            },
          },
        ]),
    { className: "job-veil", expanded: false },
  ];

  return (
    <figure className={flip ? "job flip" : "job"}>
      <ParallaxBanner style={PLANES} layers={layers} />
      <figcaption>{job.caption}</figcaption>
    </figure>
  );
}

/** The closing call sits on the same slow drift as the ground plane behind the bands. */
export function ContactPlanes() {
  return (
    <ParallaxBanner
      style={PLANES}
      layers={[
        { image: "/land_development.jpg", speed: -22, className: "contact-bg" },
        { className: "contact-veil", expanded: false },
      ]}
    />
  );
}
