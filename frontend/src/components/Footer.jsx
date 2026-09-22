import React, { useState } from "react";
import { Button } from "./ui/button";


const linkGroups = [
  {
    title: "For Candidates",
    links: [
      { label: "Browse Jobs", href: "#" },
      { label: "Browse Categories", href: "#" },
      { label: "Saved Jobs", href: "#" },
      { label: "Job Alerts", href: "#" },
      { label: "Resume Builder", href: "#" },
      { label: "Career Advice", href: "#" },
    ],
  },
  {
    title: "For Employers",
    links: [
      { label: "Post a Job", href: "#" },
      { label: "Browse Candidates", href: "#" },
      { label: "Pricing Plans", href: "#" },
      { label: "Employer Dashboard", href: "#" },
      { label: "Recruitment Tips", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
];

const socials = [
  {
    name: "Facebook",
    href: "#",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z",
  },
  {
    name: "X",
    href: "#",
    path: "M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.62-6.04L5.9 21H2.88l7.06-8.07L2.25 3h6.05l4.18 5.52L17.53 3Zm-1.06 16.2h1.67L7.6 4.72H5.8l10.67 14.48Z",
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M6.94 5A1.94 1.94 0 1 1 3.06 5a1.94 1.94 0 0 1 3.88 0ZM3.3 8.48h3.3V21H3.3V8.48Zm5.4 0h3.16v1.71h.05c.44-.83 1.52-1.71 3.13-1.71 3.35 0 3.96 2.2 3.96 5.06V21h-3.3v-6.1c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.59-2.34 3.23V21H8.7V8.48Z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32Zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm5.3-7.02a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0Z",
  },
];



export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: hook up to your API
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-2">
              {/* <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span> */}
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Job<span className="text-red-500">Portal</span>
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Connecting talented professionals with the companies that need
              them. Search thousands of curated job openings, build a standout
              resume, and take the next step in your career.
            </p>

            {/* Newsletter */}
            <div className="mt-8 max-w-md">
              <h3 className="text-sm font-semibold text-gray-900">
                Get new jobs in your inbox
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Weekly job alerts. No spam, unsubscribe anytime.
              </p>

              <form onSubmit={handleSubscribe} className="mt-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <label htmlFor="footer-email" className="sr-only">
                      Email address
                    </label>
                    <svg
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 6 10-6" />
                    </svg>
                    <input
                      id="footer-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  {/* <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-[#6a38c2] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5b30a6] focus:outline-none focus:ring-2 focus:ring-[#5b30a6] focus:ring-offset-2 cursor-pointer"
                  >
                    Subscribe
                  </button> */}
                  <Button type="submit" className={'bg-[#6a38c2] p-5 font-semibold hover:bg-[#5b30a6] cursor-pointer'}>
                    Subscribe
                  </Button>
                </div>

                {/* Feedback message */}
                <p
                  className={`mt-2 text-xs text-green-600 transition-opacity duration-300 ${
                    subscribed ? "opacity-100" : "opacity-0"
                  }`}
                  role="status"
                >
                  Thanks for subscribing! Check your inbox.
                </p>
              </form>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------- Bottom bar ------------------------------ */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>

          {/* Legal links */}
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}