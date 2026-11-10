import { AREA, PHONE, SMS, TEL } from "@/lib/site";

export function CallButtons() {
  return (
    <div className="actions">
      <a className="btn btn-call" href={TEL}>
        Call {PHONE}
      </a>
      <a className="btn btn-text" href={SMS}>
        Text Chase a photo
      </a>
    </div>
  );
}

export function Estimate({ heading = "Get a free estimate" }: { heading?: string }) {
  return (
    <section className="estimate" aria-labelledby="estimate-h">
      <div className="wrap">
        <p className="eyebrow eyebrow-dark">Call or text</p>
        <h2 id="estimate-h">{heading}</h2>
        <p className="estimate-copy">
          Call, or text Chase a few photos of the ground and tell him what you want done. You&rsquo;ll
          talk to the person who runs the machine.
        </p>
        <a className="estimate-phone" href={TEL}>
          {PHONE}
        </a>
        <div className="actions">
          <a className="btn btn-text" href={SMS}>
            Text Chase a photo
          </a>
        </div>
        <p className="estimate-area">Serving {AREA}</p>
      </div>
    </section>
  );
}
