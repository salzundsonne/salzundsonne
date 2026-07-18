"use client";

import { useEffect, useRef } from "react";

export function ComingSoon() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const animations: Animation[] = [];
    const brand = page.querySelector<HTMLElement>("[data-intro-brand]");
    const copy = page.querySelector<HTMLElement>("[data-intro-copy]");
    const comingSoon = page.querySelector<HTMLElement>("[data-coming-soon]");
    const status = page.querySelector<HTMLElement>("[data-intro-status]");
    const kitchenMark = page.querySelector<HTMLElement>("[data-kitchen-mark]");
    const heat = page.querySelector<HTMLElement>("[data-heat]");
    const progress = page.querySelector<HTMLElement>("[data-intro-progress]");
    const clocheLines = Array.from(
      page.querySelectorAll<SVGPathElement>("[data-cloche-line]"),
    );
    const steamLines = Array.from(
      page.querySelectorAll<SVGPathElement>("[data-steam]"),
    );
    const saltGrains = Array.from(
      page.querySelectorAll<HTMLElement>("[data-salt]"),
    );

    if (brand) {
      animations.push(
        brand.animate(
          [
            { opacity: 0, transform: "translate3d(0, -10px, 0)" },
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration: 480,
            delay: 100,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "both",
          },
        ),
      );
    }

    clocheLines.forEach((line, index) => {
      animations.push(
        line.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], {
          duration: 620,
          delay: 260 + index * 105,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          fill: "both",
        }),
      );
    });

    steamLines.forEach((line, index) => {
      animations.push(
        line.animate(
          [
            {
              opacity: 0,
              transform: "translate3d(0, 10px, 0) scaleY(0.82)",
            },
            { opacity: 0.82, offset: 0.38 },
            {
              opacity: 0,
              transform: "translate3d(0, -18px, 0) scaleY(1.1)",
            },
          ],
          {
            duration: 2300,
            delay: 650 + index * 430,
            iterations: Infinity,
            easing: "ease-out",
            fill: "both",
          },
        ),
      );
    });

    saltGrains.forEach((grain, index) => {
      animations.push(
        grain.animate(
          [
            {
              opacity: 0,
              transform: "translate3d(0, -82px, 0) rotate(0deg)",
            },
            { opacity: 1, offset: 0.18 },
            { opacity: 0.92, offset: 0.58 },
            {
              opacity: 0,
              transform: "translate3d(0, 42px, 0) rotate(150deg)",
            },
          ],
          {
            duration: 2500,
            delay: 780 + index * 135,
            iterations: Infinity,
            easing: "cubic-bezier(0.32, 0, 0.67, 0)",
            fill: "both",
          },
        ),
      );
    });

    if (copy) {
      animations.push(
        copy.animate(
          [
            { opacity: 0, transform: "translate3d(0, 18px, 0)" },
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration: 520,
            delay: 500,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "both",
          },
        ),
      );
    }

    if (comingSoon) {
      animations.push(
        comingSoon.animate(
          [
            { opacity: 0, transform: "translate3d(0, 8px, 0)" },
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration: 420,
            delay: 1280,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "both",
          },
        ),
      );
    }

    if (status) {
      animations.push(
        status.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 420,
          delay: 1550,
          easing: "ease-out",
          fill: "both",
        }),
      );
    }

    if (heat) {
      animations.push(
        heat.animate(
          [
            {
              opacity: 0.28,
              transform: "translate(-50%, -50%) scale(0.92)",
            },
            {
              opacity: 0.68,
              transform: "translate(-50%, -50%) scale(1.14)",
            },
            {
              opacity: 0.28,
              transform: "translate(-50%, -50%) scale(0.92)",
            },
          ],
          {
            duration: 4600,
            delay: 420,
            iterations: Infinity,
            easing: "ease-in-out",
            fill: "both",
          },
        ),
      );
    }

    if (progress) {
      animations.push(
        progress.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
          duration: 1850,
          delay: 500,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          fill: "both",
        }),
      );
    }

    if (kitchenMark) {
      animations.push(
        kitchenMark.animate(
          [
            { transform: "translate3d(0, 0, 0)" },
            { transform: "translate3d(0, -4px, 0)" },
            { transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration: 5200,
            delay: 1200,
            iterations: Infinity,
            easing: "ease-in-out",
          },
        ),
      );
    }

    return () => animations.forEach((animation) => animation.cancel());
  }, []);

  return (
    <main ref={pageRef} className="cooking-page">
      <section className="cooking-hero" aria-labelledby="cooking-title">
        <div className="intro-stage">
          <p className="intro-brand" data-intro-brand>
            Salz <span>&amp;</span> Sonne
          </p>

          <div className="kitchen-mark" data-kitchen-mark aria-hidden="true">
            <span className="heat-glow" data-heat />

            <svg className="cloche" viewBox="0 0 320 220" role="presentation">
              <path
                className="steam steam--one"
                data-steam
                d="M112 76C96 60 120 47 108 29"
              />
              <path
                className="steam steam--two"
                data-steam
                d="M160 69C144 53 170 40 157 20"
              />
              <path
                className="steam steam--three"
                data-steam
                d="M208 76C192 60 216 47 204 29"
              />
              <path
                data-cloche-line
                pathLength="1"
                d="M70 159C78 103 115 74 160 74C205 74 242 103 250 159"
              />
              <path data-cloche-line pathLength="1" d="M147 74C147 59 173 59 173 74" />
              <path data-cloche-line pathLength="1" d="M49 164H271" />
              <path data-cloche-line pathLength="1" d="M83 178H237" />
            </svg>

            <div className="salt-grains">
              {Array.from({ length: 14 }, (_, index) => (
                <span key={index} data-salt />
              ))}
            </div>
          </div>

          <h1 id="cooking-title" className="intro-copy" data-intro-copy>
            <span>Wir kochen</span>
            {" "}
            <em>da was.</em>
          </h1>

          <div className="intro-progress" aria-hidden="true">
            <span data-intro-progress />
          </div>

          <p className="coming-soon-label" data-coming-soon>
            Coming soon
          </p>
        </div>

        <p className="intro-status" data-intro-status>
          Fast servierbereit
        </p>
      </section>
    </main>
  );
}
