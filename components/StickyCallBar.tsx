import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export default function StickyCallBar() {
  return (
    <a href={PHONE_HREF} className="sticky-call-bar">
      <span className="sticky-call-dot" aria-hidden="true" />
      <span>
        24/7 Emergency — Call <strong>{PHONE_DISPLAY}</strong>
      </span>
    </a>
  );
}
