"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="site-header">
      <div className="header-topbar">
        <span className="header-topbar-item">
          <span className="dot" />
          <span>
            <strong>60-Minute Response</strong> — at your door within the hour,
            24/7
          </span>
        </span>
        <span className="sep">|</span>
        <span>
          Call or Text 24/7 <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
        </span>
      </div>
      <div className="header-main">
        <Link href="/" className="header-logo" prefetch={false}>
          <img src="/images/apex-logo.svg" alt="Apex Restoration" width={129} height={46} />
          <span className="header-logo-tag">Bay Area, CA</span>
        </Link>
        <nav className="header-nav">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className={pathname === item.href ? "active" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={PHONE_HREF} className="btn btn-primary">
            Call {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </div>
  );
}
