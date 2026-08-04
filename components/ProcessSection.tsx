interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    smallWidth: number;
  };
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Inspect & assess",
    desc: "Thermal imaging and moisture readings map every wet material — crawl space to attic.",
    image: {
      src: "/images/work/crawlspace-inspection.jpg",
      alt: "Crawl space framing inspected for moisture damage",
      width: 1200,
      height: 1600,
      smallWidth: 600,
    },
  },
  {
    num: "02",
    title: "Contain",
    desc: "Sealed plastic containment and negative air pressure protect the rest of your home.",
    image: {
      src: "/images/work/containment-taping.jpg",
      alt: "Technician taping sealed ceiling containment",
      width: 1200,
      height: 1600,
      smallWidth: 600,
    },
  },
  {
    num: "03",
    title: "Extract & dry",
    desc: "Commercial extractors, air movers, and dehumidifiers — monitored daily until verifiably dry.",
    image: {
      src: "/images/water-damage.jpg",
      alt: "Drying equipment placed in a water-damaged kitchen",
      width: 1200,
      height: 900,
      smallWidth: 800,
    },
  },
  {
    num: "04",
    title: "Sanitize",
    desc: "Antimicrobial treatment and HEPA air scrubbing leave the structure genuinely clean.",
    image: {
      src: "/images/work/antimicrobial-treatment.jpg",
      alt: "Technician applying antimicrobial treatment in a crawl space",
      width: 1200,
      height: 1600,
      smallWidth: 600,
    },
  },
  {
    num: "05",
    title: "Restore",
    desc: "Repairs and rebuild managed by one project manager through the final walkthrough.",
    image: {
      src: "/images/about-finished.jpg",
      alt: "Fully restored kitchen and living area",
      width: 1200,
      height: 900,
      smallWidth: 800,
    },
  },
];

export default function ProcessSection() {
  return (
    <div className="process">
      <div className="container section">
        <div className="section-head">
          <span className="eyebrow eyebrow-light">How We Work</span>
          <h2>Our proven restoration process</h2>
          <p>
            Real photos from real Apex jobs — this is what your restoration
            actually looks like.
          </p>
        </div>
        <div className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <div className="process-card" key={step.num}>
              <div className="process-img-wrap">
                <img
                  src={step.image.src}
                  srcSet={`${step.image.src.replace(/\.jpg$/, "-800.jpg")} ${
                    step.image.smallWidth
                  }w, ${step.image.src} ${step.image.width}w`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 220px"
                  alt={step.image.alt}
                  width={step.image.width}
                  height={step.image.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="process-num">{step.num}</span>
              </div>
              <span className="process-title">{step.title}</span>
              <span className="process-desc">{step.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
